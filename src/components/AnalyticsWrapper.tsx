import React from 'react';
import { Outlet } from 'react-router-dom';
import useAnalytics from '../hooks/useAnalytics';

interface AnalyticsWrapperProps {
  children?: React.ReactNode;
}

export const AnalyticsWrapper: React.FC<AnalyticsWrapperProps> = ({ children }) => {
  useAnalytics();
  return <>{children || <Outlet />}</>;
};

export default AnalyticsWrapper;