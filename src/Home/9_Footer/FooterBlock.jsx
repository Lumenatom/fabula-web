import React from "react";
import "./Footer.css";
import Twitter from "../../img/twitter.svg"
import  Patreon from "../../img/patreon.svg"
import Linkedin from "../../img/linkedin_logo.svg"
import Discord from "../../img/discord.svg"


const FooterBlock = () => {
return (
    <div className='footer'>
            <div className='footer_wrapper'>
                <div className='container'>
                    <div className='footer_content'>
                        <div className="icons_footer">
                            <a href='https://twitter.com/playgamefabula'>
                                <img src={Twitter} alt="" />
                            </a>
                            <a href='https://medium.com/@playgamefabula'>
                                <img src={Patreon} alt="" />   
                            </a>
                            <a href='https://www.linkedin.com/company/playfabula/'>
                              <img src={Linkedin} alt="" />  
                            </a>
                            <a href='https://discord.gg/eqxMAGpT'>
                                <img src={Discord} alt="" />
                            </a>
                            
                            
                            
                            
                        </div>
                        <div className="links_footer">
                            <a href="#">COMMUNITY</a>
                            <a href="#">DOCS</a>
                            <a href="#">CONTACT</a>
                            <a href="#">COOKIE DECLARATION</a>
                            <a href="#">PRIVACY POLICY</a>
                        </div>
                        <div className="back_footer">
                            <h6>Design by Freepic</h6>
                        </div>
                    </div>
                </div>
            </div>
</div>
)
}

export default FooterBlock;