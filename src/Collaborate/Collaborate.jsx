import React from 'react'
import PatreonImg from '../img/patreon.png'
import './Collaborate.css'

function Collaborate() {
  
    return(
        <div className='collaborate'>
            <div className='collaborate_wrapper'>
                <div className='container'>
                    <div className='collaborate_content'>
                        <div className="collaborate_left_block">
                            <button>Stage 1</button>
                            <div className="collaborate_left_block_content">
                                <ul>
                                    <li>
                                    decide the fate of the world by voting
                                    </li>
                                    <li>
                                    co-own the world
                                    </li>
                                    <li>
                                    make a decision according to lore
                                    </li>
                                    <li>
                                    play a board game in the world of the story
                                    </li>
                                    <li>
                                    be a member of a unique club
                                    </li>
                                    <li>
                                    grab the opportunity to get the first NFTs and tokens of the project
                                    </li>
                                </ul>
                                <a href="#">
                                <img src={PatreonImg}></img> 
                                </a>                           
                             </div>
                        </div>
                        <div className="collaborate_right_block">
                            <button>Stage 2</button>
                            <div className="collaborate_right_block_content">
                                <ul>
                                    <li>
                                    rule the world with tokens
                                    </li>
                                    <li>
                                    find true friends
                                    </li>
                                    <li>
                                    offer your ideas
                                    </li>
                                    <li>
                                    explore and enjoy the scenery
                                    </li>
                                    <li>
                                    gain fame and respect
                                    </li>
                                </ul>
                                <a href="#">
                                <img src={PatreonImg}></img>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collaborate