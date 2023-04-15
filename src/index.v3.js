function detectPlatform() {
    const userAgent = navigator.userAgent;
  
    if (/mobile/i.test(userAgent)) {
      return "mobile";
    } else if (/tablet/i.test(userAgent)) {
      return "tablet";
    } else {
      return "web";
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
  