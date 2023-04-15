function detectPlatform() {
    const userAgent = navigator.userAgent;
  
    if (/mobile/i.test(userAgent)) {
      return {
        isMobile: true,
        isWeb: false,
        isTablet: false
      };
    } else if (/tablet/i.test(userAgent)) {
        return {
            isMobile: false,
            isWeb: false,
            isTablet: true
          };
    } else {
        return {
            isMobile: false,
            isWeb: true,
            isTablet: false
          };
    }
  }
  
  export default {
    install: function(app) {
      let currentPlatform = detectPlatform();
      app.config.globalProperties.$platform = currentPlatform;
  
      window.addEventListener("resize", () => {
        const newPlatform = detectPlatform();
  
        if (newPlatform !== currentPlatform) {
          currentPlatform = newPlatform;
          app.config.globalProperties.$platform = currentPlatform;
        }
      });
  
      window.addEventListener("orientationchange", () => {
        const newPlatform = detectPlatform();
  
        if (newPlatform !== currentPlatform) {
          currentPlatform = newPlatform;
          app.config.globalProperties.$platform = currentPlatform;
        }
      });
    }
  };
  