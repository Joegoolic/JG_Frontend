interface PageViewData {
  path: string;
  title?: string;
  section?: string;
  referrer?: string;
  viewport?: {
    width: number;
    height: number;
  };
}

interface AnalyticsResponse {
  pageViewId: string;
  sessionId: string;
}

class AnalyticsService {
  private baseUrl: string;
  private currentPageViewId: string | null = null;
  private pageStartTime: number = Date.now();

  constructor() {
    this.baseUrl = import.meta.env.VITE_ANALYTICS_URL || 'https://api.josephgoolic.com';
  }

  async trackPageView(data: PageViewData): Promise<void> {
    try {
      // Send duration for previous page if exists
      if (this.currentPageViewId) {
        await this.updatePageDuration(this.currentPageViewId, data.path);
      }

      // Track new page view
      const response = await fetch(`${this.baseUrl}/analytics/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for cookies
        body: JSON.stringify({
          ...data,
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
          },
        }),
      });

      if (response.ok) {
        const result: AnalyticsResponse = await response.json();
        this.currentPageViewId = result.pageViewId;
        this.pageStartTime = Date.now();
      }
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  }

  async updatePageDuration(pageViewId: string, exitPath?: string): Promise<void> {
    try {
      const duration = Math.floor((Date.now() - this.pageStartTime) / 1000); // Convert to seconds
      
      await fetch(`${this.baseUrl}/analytics/duration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          pageViewId,
          duration,
          exitPath,
        }),
      });
    } catch (error) {
      console.error('Failed to update page duration:', error);
    }
  }

  async sendFinalDuration(): Promise<void> {
    if (this.currentPageViewId) {
      await this.updatePageDuration(this.currentPageViewId);
    }
  }

  getSectionFromPath(path: string): string {
    const segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return 'home';
    return segments[0];
  }
}

// Create singleton instance
const analytics = new AnalyticsService();

// Track page duration when user leaves
window.addEventListener('beforeunload', () => {
  analytics.sendFinalDuration();
});

// Track visibility changes (tab switching)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    analytics.sendFinalDuration();
  } else {
    analytics.pageStartTime = Date.now();
  }
});

export default analytics;