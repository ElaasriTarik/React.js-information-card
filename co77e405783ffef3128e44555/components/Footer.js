import React from "react"

export default function Footer() {
    return (
        <footer className="footer">
          <div className="twitterIcon icons">
            <img src="../icons/twitter.png" className="icon" />
          </div>
          <div className="facebookIcon icons" href="https://web.facebook.com/tarek.elaasri.52/" target="_blank">
            <img src="../icons/facebook.png" className="icon" />
          </div>
          <div className="githubIcon icons" href="https://github.com/ElaasriTarik" target="_blank" >
            <img src="../icons/github.png" className="icon"/>
          </div>
          <div className="instagramIcon icons" href="https://www.instagram.com/tarikelaasri/" target="-blank">
            <img src="../icons/instagram.png" className="icon" />
          </div>
        </footer>
    )
}