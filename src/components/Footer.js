import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "black" }}>
            <div className="container" id="footer">
                <div className="navigation">
                    <img src="./assets/shared/desktop/logo.svg" />
                    <div id="listOfLinks">
                        <Link to="/" className="navLinks">HOME</Link>
                        <Link to="/headphones" className="navLinks">HEADPHONES</Link>
                        <Link to="/speakers" className="navLinks">SPEAKERS</Link>
                        <Link to="/earphones" className="navLinks">EARPHONES</Link>
                    </div>
                </div>
                <div id="footerCont2">
                    <div id="footerCont2Text">
                        <i style={{ textAlign:"justify" }}>
                        Audiophile is a one-stop shop for your audio needs. We're a small team of developers and 
                        web specialists dedicated to helping you get the most out of your personal audio system. 
                        Come and visit our size demonstration center in Quartier Gatunguru-Bujumbura - we're open 5 days a week.
                        </i>
                    </div>
                    <div>
                        <img src="./assets/shared/desktop/icon-facebook.svg" />
                        <img src="./assets/shared/desktop/icon-twitter.svg" style={{ margin: "auto 10px" }} />
                        <img src="./assets/shared/desktop/icon-instagram.svg" />
                    </div>
                </div>
                <div id="footerCont3"> Copyright {new Date().getFullYear()}. All Rights Reserved </div>

            </div>

        </footer>
    )
}