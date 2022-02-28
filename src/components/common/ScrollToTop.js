import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ScrollToTop(params) {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    console.log("useEffect", pathname);

    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export default ScrollToTop;
