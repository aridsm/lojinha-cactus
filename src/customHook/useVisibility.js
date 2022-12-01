import { useEffect, useState } from "react";

const useVisibility = (ref) => {
  const [elementVisible, setElementVisible] = useState(true);

  useEffect(() => {
    const hideMenu = (e) => {
      if (ref && e.target !== ref.current && !ref.current.contains(e.target)) {
        setElementVisible(false);
      }
    };

    const resizeWindow = () => {
      if (window.innerWidth < 925) {
        setElementVisible(false);

        document.addEventListener("click", hideMenu);
      } else {
        setElementVisible(true);
        document.removeEventListener("click", hideMenu);
      }
    };
    resizeWindow();

    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, [ref]);

  return { elementVisible, setElementVisible };
};

export default useVisibility;
