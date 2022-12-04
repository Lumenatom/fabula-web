import React, { useState } from 'react';
import './History.css';
import Timeline from '../../img/Line.png';
import HistoryImg1 from '../../img/history_1.png';
import HistoryImg2 from '../../img/history_2.png';
import HistoryImg3 from '../../img/history_3.png';
import HistoryImg4 from '../../img/history_4.png';
import HistoryImg5 from '../../img/history_5.png';
import HistoryImg6 from '../../img/history_6.png';

function History({ setActivePage }) {
  const [activeImage, setActiveImage] = useState(HistoryImg1);
  const [activeTitle, setActiveTitle] = useState('Nihility');
  const [activeText, setActiveText] = useState(
    'There was nothing but the God of Life (Zhyta) and Death (Smerta). They were fully opposite and argued all the time.'
  );

  const handleActiveImage = (elem) => {
    setActiveImage(elem.image);
    setActiveTitle(elem.title);
    setActiveText(elem.text);
  };

  return (
    <div className="history">
      <div className="history_wrapper">
        <div className="history_timeline">
          <img src={Timeline} />
          <div
            className="history_timeline_point1"
            onClick={() =>
              handleActiveImage({
                image: HistoryImg1,
                title: 'Nihility',
                text: 'There was nothing but the God of Life (Zhyta) and Death (Smerta). They were fully opposite and argued all the time.',
              })
            }
          >
            <span
              className={activeImage === HistoryImg1 ? 'active_span' : ''}
            ></span>
            <h4 className={activeImage === HistoryImg1 ? 'active_text' : ''}>
              Nihility
            </h4>
          </div>
          <div
            className="history_timeline_point2"
            onClick={() =>
              handleActiveImage({
                image: HistoryImg2,
                title: 'Elementary Era',
                text: 'It isn`t known how much time has passed because there was no specific point to start the countdown nor even the concept of time itself. However, it is known that during the disputes of the Gods, a colossal amount of energy was created. It formed two groups of primary elements, which were opposite to the Gods themselves. Wind (Vitra) and Water (Voda) on one side, Fire (Vogna) and Earth (Zemla) on the other.',
              })
            }
          >
            <span
              className={activeImage === HistoryImg2 ? 'active_span' : ''}
            ></span>
            <h4 className={activeImage === HistoryImg2 ? 'active_text' : ''}>
              Elementary Era (~500B years Before Our Era)
            </h4>
          </div>
          <div
            className="history_timeline_point3"
            onClick={() =>
              handleActiveImage({
                image: HistoryImg3,
                title: 'The Great Armistice',
                text: 'This course of events interested the Gods, so they made a temporary truce. By joining forces on a new element, they created all known Magic. From which, Smerta created a Form, and Zhyta — Life. Thus, by giving the elements Form and Life, Elementals were formed. From that day, they could also control their elements. Together with the Gods, they created the fantastic world of Fabula with rivers, sands, volcanoes and caves.',
              })
            }
          >
            <span
              className={activeImage === HistoryImg3 ? 'active_span' : ''}
            ></span>
            <h4 className={activeImage === HistoryImg3 ? 'active_text' : ''}>
              The Great Armistice (~120B years BOE)
            </h4>
          </div>
          <div
            className="history_timeline_point4"
            onClick={() =>
              handleActiveImage({
                image: HistoryImg4,
                title: 'Prehistoric Era',
                text: 'The Fabula itself was not enough for the Gods. They took Form and Life and formed the first living beings. So, with the help of the Air Elemental, flying creatures were made, Water — floating ones, Fire — fiery ones, and Earth — terrestrial ones. And by the power of the Elemental of Providence, magical creatures and the first Humans were formed, some of which mutated into Xeni.',
              })
            }
          >
            <span
              className={activeImage === HistoryImg4 ? 'active_span' : ''}
            ></span>
            <h4 className={activeImage === HistoryImg4 ? 'active_text' : ''}>
              Prehistoric Era (122M years BOE)
            </h4>
          </div>
          <div
            className="history_timeline_point5"
            onClick={() =>
              handleActiveImage({
                image: HistoryImg5,
                title: 'Resettlement',
                text: 'For years, Humans and Ksenais stuck together in large groups. Together they hid from the rain, collected edible plants, hunted animals, gave birth to children, and protected the den from predators. After that, Humans and Xeni learned how to process materials and resources. Over time, they learned to make tools and weapons. ',
              })
            }
          >
            <span
              className={activeImage === HistoryImg5 ? 'active_span' : ''}
            ></span>
            <h4 className={activeImage === HistoryImg5 ? 'active_text' : ''}>
              Resettlement (238K years BOE)
            </h4>
          </div>
          <div
            className="history_timeline_point6"
            onClick={() =>
              handleActiveImage({
                image: HistoryImg6,
                title: 'Our Era',
                text: 'THumans and Xeni settled throughout the Fabula and formed their villages and even kingdoms. Those who travelled through the caves found iron and gold. These ores were used as currency but later were used to make better tools and weapons. Other travellers found Еlementals and learned Еlemental Мagic from them.',
              })
            }
          >
            <span
              className={activeImage === HistoryImg6 ? 'active_span' : ''}
            ></span>
            <h4 className={activeImage === HistoryImg6 ? 'active_text' : ''}>
              Our Era
            </h4>
          </div>
        </div>
        <div className="history_timeline_content">
          <div className="history_text">
            <h5>{activeTitle}</h5>
            <p>{activeText}</p>
            <button className="history_btn">
              <span onClick={() => setActivePage('contact')}>Make History</span>
            </button>
          </div>
          <img src={activeImage}></img>
        </div>
      </div>
    </div>
  );
}

export default History;
