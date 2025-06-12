'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    chatbase: any;
  }
}

export function ChatWidget() {
  useEffect(() => {
    // Initialize chatbase
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args: any[]) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };

      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args: any[]) => target(prop, ...args);
        },
      });
    }

    // Load the script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "9ovQ9d9deUGnu4lSIVqkw";
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.getElementById("9ovQ9d9deUGnu4lSIVqkw");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
} 