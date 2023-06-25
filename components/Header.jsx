import React from "react"

function Header() {
    return (
        <header className="header-content">
            <img className="header-img" src="./images/myimg.jpg" />
            <div className="header-about">
                <h2 className="header-name">Idi Wakasso</h2>
                <p className="header-position">Frontend Developer</p>
                <a href="https://wakasso.com" target="_blank" className="header-site">wakasso.com</a>
            </div>
            <div className="header-btn">
                <a href="mailto:wakassodesign@gmail.com" target="_blank" className="header--btn_email"><img src="./images/Mail.svg"/>Email</a>
                <a href="https://www.linkedin.com/in/idiwakasso/" target="_blank"  className="header--btn_linkedin"><img src="./images/linkedin.svg"/>LinkedIn</a>
            </div>
        </header>
    )
}

export default Header