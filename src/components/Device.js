import { useState, useEffect } from "react";

function useDeviceDetection() {
  const [device, setDevice] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (/Windows NT/i.test(userAgent)) {
      setDevice("Windows");
    }
    else if (/Mobi/i.test(userAgent)) {
      setDevice("Phone");
    } else {
      setDevice("Other");
    }
  }, []);

  return device;
}

export default useDeviceDetection;