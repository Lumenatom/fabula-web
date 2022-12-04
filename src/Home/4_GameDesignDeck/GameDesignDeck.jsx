import React from 'react';
import './GameDesignDeck.css';
import Screen_2 from '../../img/screen_2.png';
import Screen_1 from '../../img/screen_1.png';

const GameDesignDeck = () => {
  return (
    <div className="gameDesignDeck">
      <div className="gameDesignDeck_wrapper">
        <div className="container">
          <div className="gameDesignDeck_content">
            <div className="left_block">
              <button>Mobile to grow</button>
              <div className="left_block_content">
                <h2>Grow your own world by playing a DnD like game</h2>
                <ul>
                  <li>mobile game in pati</li>
                  <li>companies as in DnD</li>
                  <li>endless space for fantasy</li>
                </ul>
                <img src={Screen_2} alt="" />
                <a
                  target="_blank"
                  href="https://www.figma.com/file/JYRzp2DdRlHfG2ro388eJQ/Fabula-Game-Design-Document?node-id=0%3A1&t=XANG15L3mvcVsrzQ-0"
                >
                  Game Design Deck
                </a>
              </div>
            </div>
            <div className="right_block">
              <button>MMO RPG to live</button>
              <div className="right_block_content">
                <h2>Imagine what we will build together</h2>
                <ul>
                  <li>story generator</li>
                  <li>live NPCs</li>
                  <li>dynamic living world</li>
                </ul>
                <img src={Screen_1} alt="" />
                <a
                  target="_blank"
                  href="https://www.figma.com/file/JYRzp2DdRlHfG2ro388eJQ/Fabula-Game-Design-Document?node-id=0%3A1&t=XANG15L3mvcVsrzQ-0"
                >
                  Game Design Deck
                </a>
              </div>
            </div>
            <a className="linkGameDeck">Join Discord</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDesignDeck;
