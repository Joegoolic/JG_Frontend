import React from 'react';
import useAnalytics from '../hooks/useAnalytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useAnalytics();
  return <>{children}</>;
};

export default AnalyticsProvider;