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
    install(Vue) {
      let currentPlatform = detectPlatform();
      Vue.prototype.$platform = currentPlatform;
  
      window.addEventListener("resize", () => {
        const newPlatform = detectPlatform();
  
        if (newPlatform !== currentPlatform) {
          currentPlatform = newPlatform;
          Vue.prototype.$platform = currentPlatform;
        }
      });
  
      window.addEventListener("orientationchange", () => {
        const newPlatform = detectPlatform();
  
        if (newPlatform !== currentPlatform) {
          currentPlatform = newPlatform;
          Vue.prototype.$platform = currentPlatform;
        }
      });
    }
  };
  