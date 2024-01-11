import { useCookies } from "react-cookie";
import "../../../common.css";
import React, { useCallback, useEffect } from "react";
import { Cookies } from "../../../hook/cookie/Cookies";

const title =
  "This component counts the number of times it has been clicked. It's an" +
  " exercise in handling clicks, component state, and cookie management!";

/**
 * This button is counts the number of times the user clicks it.
 *
 * @return {JSX.Element}
 */
export default function Counter(): JSX.Element {
  const [cookies, setCookie] = useCookies([Cookies.Remembered, Cookies.Count]);
  const [count, setCount] = React.useState(
    Object.hasOwn(cookies, Cookies.Count)
      ? (cookies[Cookies.Count] as number)
      : 0,
  );

  const onClick: () => void = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  useEffect(() => {
    if (Object.hasOwn(cookies, Cookies.Remembered)) {
      setCookie(Cookies.Count, count);
    }
  }, [count, cookies, setCookie]);

  return (
    <div
      className="disable-text-selection clickable"
      data-testid="counter"
      onClick={onClick}
      style={{
        alignItems: "center",
        borderRadius: 10,
        display: "flex",
        fontSize: 20,
        height: 60,
        justifyContent: "center",
        width: "25%",
      }}
      title={title}
    >
      {count}
    </div>
  );
}
