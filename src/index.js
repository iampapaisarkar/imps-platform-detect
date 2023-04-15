
// MIT License

// Copyright (c) 2023 Papai Sarkar

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
  