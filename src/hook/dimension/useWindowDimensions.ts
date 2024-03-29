// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
// https://pastebin.com/cCycfwaL
import { useState, useEffect } from "react";

type WindowDimensions = {
  width: number;
  height: number;
};

const getWindowDimensions = (): WindowDimensions => {
  const { innerWidth, innerHeight } = window;

  return {
    height: innerHeight,
    width: innerWidth,
  };
};

const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    height: 0,
    width: 0,
  });

  const handleResize: () => void = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
