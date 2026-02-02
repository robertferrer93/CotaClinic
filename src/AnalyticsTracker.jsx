// src/AnalyticsTracker.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // pathname + querystring por si tenéis filtros o parámetros
    const path = location.pathname + location.search;
    trackPageView(path);
  }, [location.pathname, location.search]);

  return null;
}
