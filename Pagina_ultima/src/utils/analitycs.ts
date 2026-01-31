declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string, 
  properties?: Record<string, any>
) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
  
  // Facebook Pixel (opcional)
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, properties);
  }

  // Console log en desarrollo
  if (import.meta.env.DEV) {
    console.log('📊 Analytics Event:', eventName, properties);
  }
};

// Eventos predefinidos
export const analyticsEvents = {
  ctaClick: (location: string, ctaType: 'primary' | 'secondary') => 
    trackEvent('cta_click', { location, cta_type: ctaType }),
  
  formSubmit: (formType: string) => 
    trackEvent('form_submit', { form_type: formType }),
  
  serviceView: (serviceName: string) => 
    trackEvent('service_view', { service: serviceName }),
  
  scrollDepth: (depth: string) => 
    trackEvent('scroll_depth', { depth }),
  
  contactMethodClick: (method: 'whatsapp' | 'phone' | 'email') =>
    trackEvent('contact_method_click', { method }),
};

// Hook de scroll depth
export const initScrollDepthTracking = () => {
  if (typeof window === 'undefined') return;

  const depths = [25, 50, 75, 100];
  const tracked = new Set<number>();

  const checkScrollDepth = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    depths.forEach(depth => {
      if (scrolled >= depth && !tracked.has(depth)) {
        tracked.add(depth);
        trackEvent('scroll_depth', { depth: `${depth}%` });
      }
    });
  };

  window.addEventListener('scroll', checkScrollDepth, { passive: true });
  
  return () => window.removeEventListener('scroll', checkScrollDepth);
};
