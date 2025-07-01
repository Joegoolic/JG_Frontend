import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import analytics from '../services/analytics';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view whenever location changes
    analytics.trackPageView({
      path: location.pathname,
      title: document.title,
      section: analytics.getSectionFromPath(location.pathname),
      referrer: document.referrer,
    });
  }, [location]);
};

export default useAnalytics;