import React from "react";
import './Community.css'
import discord from '../../img/Discord.png'
import dcp from '../../img/Molot.png'

const Community = () => {

    return(
        <div className='community'>
            <div className='community_wrapper'>
                <div className='container'>
                    <div className='community_content'>
                    <h2 className="title_comunity">Join Community run the world</h2>

                    <div className="wraper_blocks_community">
                        <div className="left_block_community">
                            <button>Discord Community</button>
                            <div className="left_block_content_community">
                                <ul>
                                    <li>
                                    discuss the creation of the world
                                    </li>
                                    <li>
                                    edit lor
                                    </li>
                                    <li>
                                    follow the news
                                    </li>
                                    <li>
                                    participate in community events
                                    </li>
                                    <li>
                                    development monitor
                                    </li>
                                </ul>
                                <a href="#">
                                Join Discord
                                </a>                           
                                <a href="#" className="discord_icon">
                                <img src={discord} alt="discord" />
                                </a>                           
                             </div>
                        </div>
                        <div className="right_block_community">
                            <button>Decentralized player council</button>
                            <div className="right_block_content_community">
                                <ul>
                                    <li>
                                    decide the fate of the world by voting
                                    </li>
                                    <li>
                                    co-own the world
                                    </li>
                                    <li>
                                    monetize your own lor creative
                                    </li>
                                    <li>
                                    make a decision according to lore
                                    </li>
                                    <li>
                                    play a board game in the world of the story
                                    </li>
                                </ul>
                                <a href="#">
                                Join DPC
                                </a>
                                <a href="#" className="dcp_icon">
                                <img src={dcp} alt="dcp" />
                                </a> 
                            </div>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community;