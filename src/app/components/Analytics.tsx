import Script from 'next/script'
 
export default function GoogleAnalytics() {
  return (
    <>
      <Script id="google-tagmanager" src="https://www.googletagmanager.com/gtag/js?id=G-CZR4J86T32" />
      <Script id="google-analytics">
        {`
            if(window?.location?.hostname !== "localhost" || !localStorage?.dev){
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CZR4J86T32');
            } else {
              console.log("Development: Google Analytics not loaded!");
            }

        `}
      </Script>
    </>
  )
}