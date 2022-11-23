import React from 'react'
import './Welcome.css'
import Bird from '../../img/bird.png'
import Fabula from '../../img/Fabula_main.png'
import { ReactComponent as Twitter} from '../../img/twitter_icon.svg'
import { ReactComponent as Medium }from '../../img/medium_icon.svg'
import { ReactComponent as Linkedin } from '../../img/linkedin_icon.svg'
import { ReactComponent as Discord } from '../../img/discord_icon.svg'

function Welcome({setActivePage}) {
  return (
    <div className='welcome'>
        <div className='welcome_wrapper'>
            <div className='container'>
                <div className='welcome_content'>
                    <img className='welcome_bird' src={Bird}/>
                    <div className='welcome_subtitle'>welcome to</div>
                    <img className='welcome_fabula' src={Fabula}/>
                    <p className='welcome_title'>a living fantasy world created by players - a world that will go from a mobile game to the most free-to-play PC MMO RPG in history.</p>
                    <div className='btn'>
                        <a className='btn_join_discord'>Join Discord</a>
                        <a onClick={()=>setActivePage('collaborate')} className='btn_collaborate'>Collaborate</a>
                    </div>
                    <div className='socials'>
                        <a href='https://twitter.com/playgamefabula'>
                            <Twitter/>
                        </a>
                        <a href='https://medium.com/@playgamefabula'>
                            <Medium/>
                        </a>
                        <a href='https://www.linkedin.com/company/playfabula/'>
                            <Linkedin />
                        </a>
                        <a href='https://discord.gg/eqxMAGpT'>
                            <Discord/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome