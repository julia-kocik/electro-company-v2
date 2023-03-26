import { useCookies } from 'react-cookie'
import './CookiesAcceptor.scss'

const CookiesAcceptor = (): JSX.Element | null => {
  const [cookies, setCookie] = useCookies(['cookieAccepted'])

  if (cookies.cookieAccepted) {
    return null
  }

  const acceptCookies = (): void => {
    setCookie('cookieAccepted', true)
  }

  const redirectToPrivavy = (): void => {
    window.open('https://www.termsfeed.com/live/e4f58c69-7cd3-48cc-ae3b-3d7a55449d37')
  }
  return (
      <div className='cookies_container'>
        <span>Używamy plików cookie w celu zapewnienia najlepszych doświadczeń na naszej stronie internetowej. Jeśli będziesz nadal korzystać z tej strony, zakładamy, że to akceptujesz.</span>
          <div className="btn_container">
            <button onClick={acceptCookies}>Akceptuj</button>
            <button onClick={redirectToPrivavy }>Dowiedz się więcej</button>
        </div>
      </div>
  )
}

export default CookiesAcceptor
