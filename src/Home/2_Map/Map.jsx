import React, { useState } from 'react';
import '../2_Map/Map.css';
import ImageMap from '../../img/map.png';
import Xsen from '../../img/character_rigth_xnen.png';
import People from '../../img/character_left_people.png';
import { ReactComponent as PointMap } from '../../img/point_map_icon.svg';
import MapPointImage1 from '../../img/hover_point_map_4.png';
import MapPointImage2 from '../../img/hover_point_map.png';
import MapPointImage3 from '../../img/hover_point_map_3.png';
import MapPointImage4 from '../../img/hover_point_map_2.png';
import MapPointImage5 from '../../img/hover_point_map_1.png';
import ModalMap from './ModalMap/ModalMap';
import Landscape1 from '../../img/5_landskape_map.png';
import Landscape2 from '../../img/1_landskape_map.png';
import Landscape3 from '../../img/4_landskape_map.png';
import Landscape4 from '../../img/3_landskape_map.png';
import Landscape5 from '../../img/2_landskape_map.png';

function Map() {
  const [modalWindow, setModalWindow] = useState({
    title: '',
    text: '',
    image: '',
    isVisible: false,
  });

  return (
    <div className="map">
      <ModalMap modalWindow={modalWindow} setModalWindow={setModalWindow} />
      <div className="map_wrapper">
        <div className="map_content">
          <div>
            <img className="map_character_xsen" src={Xsen} />
          </div>
          <div className="map_block">
            <h1>Medieval sword and sorcery fantasy</h1>
            <div className="image_map">
              <img src={ImageMap} />
            </div>
            <div className="point_1">
              <PointMap
                onClick={() =>
                  setModalWindow({
                    title: 'Lour',
                    text: 'Once upon a time, this lake was full of life for the plants and animals that lived near it, but one day disaster struck. The awakening of an ancient ice demon that was locked in the depths of the dungeon. When released, he froze forests, lakes and covered the surrounding mountains with ice.',
                    image: Landscape1,
                    isVisible: true,
                  })
                }
              />
              <img src={MapPointImage1}></img>
            </div>
            <div className="point_2">
              <PointMap
                onClick={() =>
                  setModalWindow({
                    title: 'Red Canyon',
                    text: 'Rocky terrain that has a rusty tint in the sun. That`s why it is called the Red Canyon. It is said that in these places you can meet one of the Ancient Elementals.',
                    image: Landscape2,
                    isVisible: true,
                  })
                }
              />
              <img src={MapPointImage2}></img>
            </div>
            <div className="point_3">
              <PointMap
                onClick={() =>
                  setModalWindow({
                    title: 'Cordia',
                    text: 'Blooming gardens, beautiful ladies, holidays, competitions, fairs - all this is in the past. The prosperous nation of Cordia was destroyed! The neighboring state invented a way to control the most terrible animals, fire wolves, dragons and other monsters - mercilessly destroyed the kingdom.',
                    image: Landscape3,
                    isVisible: true,
                  })
                }
              />
              <img src={MapPointImage3}></img>
            </div>
            <div className="point_4">
              <PointMap
                onClick={() =>
                  setModalWindow({
                    title: 'Ain',
                    text: 'There are legends that life and death intersect in this canyon. These incredible views of the purple sky, so beautifully reflected in the crystals, are simply mesmerizing.',
                    image: Landscape4,
                    isVisible: true,
                  })
                }
              />
              <img src={MapPointImage4}></img>
            </div>
            <div className="point_5">
              <PointMap
                onClick={() =>
                  setModalWindow({
                    title: 'Orin',
                    text: 'Just an incredible forest full of life. Everything is beautiful in this forest: trees, bushes, flowers, and animals. Once this forest was rotten and on the verge of death, but the love of two teenagers who could not be together and hid in it and lived - filled it with life',
                    image: Landscape5,
                    isVisible: true,
                  })
                }
              />
              <img src={MapPointImage5}></img>
            </div>
          </div>
          <div>
            <img className="map_character_people" src={People} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
