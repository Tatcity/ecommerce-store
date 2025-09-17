// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // ✅ Instant snap scroll reset
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
}
