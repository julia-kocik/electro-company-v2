import React, { useState } from "react";
import { useCookies } from "react-cookie";
import "./CookiesAcceptor.scss";

const CookiesAcceptor = (): JSX.Element | null => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookieAccepted"]);
  const [rejected, setRejected] = useState(false);

  if (cookies.cookieAccepted || rejected) {
    return null;
  }

  const acceptCookies = (): void => {
    setCookie("cookieAccepted", true);
  };

  const rejectCookies = (): void => {
    // Usunięcie wszystkich plików cookie
    removeCookie(cookies.cookieAccepted); // Poprawka tego miejsca
    setRejected(true);
  };

  const redirectToPrivacy = (): void => {
    window.open(
      "https://www.termsfeed.com/live/e4f58c69-7cd3-48cc-ae3b-3d7a55449d37"
    );
  };

  return (
    <div className="cookies_container">
      <span>
        Używamy plików cookie w celu zapewnienia najlepszych doświadczeń na
        naszej stronie internetowej.
      </span>
      <div className="btn_container">
        <button onClick={acceptCookies}>Akceptuj</button>
        <button onClick={rejectCookies}>Odrzuć</button>
        <button onClick={redirectToPrivacy}>Dowiedz się więcej</button>
      </div>
    </div>
  );
};

export default CookiesAcceptor;
