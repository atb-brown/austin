import React, { useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import "../../../common.css";

const clickMeToRemember = "Click me if you want me to remember you!";
const clickMeToForget = "Welcome back! Click me if you want me to forget.";
const clickOk = "; if you're okay with that, click OK.";
const confirmRememberTxt =
  "This will require me to save a cookie on your computer" + clickOk;
const confirmForgetTxt =
  "This will remove the cookie from your computer" + clickOk;

const cookieName = "remembered";
const title =
  "This component allows the site to remember a user. It's an exercise" +
  " in handling cookies and component state!";

/**
 * This button allows the user to be remembered.
 *
 * @return {JSX.Element}
 */
export default function RememberMe(): JSX.Element {
  const [cookies, setCookie, removeCookie] = useCookies([cookieName]);
  const [remember, setRemember] = React.useState(
    Object.hasOwn(cookies, cookieName),
  );
  const [buttonTxt, setButtonTxt] = React.useState(
    remember ? clickMeToRemember : clickMeToForget,
  );
  const [confirmTxt, setConfirmTxt] = React.useState(
    remember ? confirmForgetTxt : confirmRememberTxt,
  );

  const onClick: () => void = useCallback(() => {
    if (confirm(confirmTxt)) {
      if (!remember) {
        setCookie(cookieName, "true");
      } else {
        removeCookie(cookieName);
      }
    }
  }, [confirmTxt, removeCookie, remember, setCookie]);

  useEffect(() => {
    if (Object.hasOwn(cookies, cookieName)) {
      setRemember(true);
      setButtonTxt(clickMeToForget);
      setConfirmTxt(confirmForgetTxt);
    } else {
      setRemember(false);
      setButtonTxt(clickMeToRemember);
      setConfirmTxt(confirmRememberTxt);
    }
  }, [cookies]);
  return (
    <div
      className="clickable"
      data-testid="remember-me"
      onClick={onClick}
      style={{
        alignItems: "center",
        borderRadius: 10,
        display: "flex",
        fontSize: "50%",
        height: 60,
        justifyContent: "center",
        width: "25%",
      }}
      title={title}
    >
      {buttonTxt}
    </div>
  );
}
