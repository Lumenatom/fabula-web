import React, { useEffect, useState } from 'react';
import './Heroes.css';
import { ReactComponent as LeftIcon } from '../../img/arrow_icon_left.svg';
import { ReactComponent as RightIcon } from '../../img/arrow_icon_right.svg';
import heroes_1 from '../../img/heroes_1.png';
import heroes_2 from '../../img/heroes_2.png';
import heroes_3 from '../../img/heroes_3.png';
import heroes_4 from '../../img/heroes_4.png';
import heroes_5 from '../../img/heroes_5.png';
import skills_heroes_1 from '../../img/skills_heroes_1.png';
import skills_heroes_2 from '../../img/skills_heroes_2.png';
import skills_heroes_3 from '../../img/skills_heroes_3.png';
import skills_heroes_4 from '../../img/skills_heroes_4.png';
import skills_heroes_5 from '../../img/skills_heroes_5.png';

const Heroes = () => {
  const [countHeroes, setCountHeroes] = useState(1);
  const [activeHeroes, setActiveHeroes] = useState(heroes_1);
  const [descriptionHeroes, setDescriptionHeroes] = useState({
    objective: 'Find friends to kill Cynocephaly.',
    allies: 'None.',
    enemies: 'Cynocephaly and his army.',
    equipment: 'bow, arrows, light armor, family jewellery.',
    name: 'Kelia',
    description:
      'Daughter of the leader of the destroyed Airi tribe. She became stronger and more experienced and now she will punish those who destroyed her tribe.',
  });
  const [heroesSkills, setHeroesSkills] = useState(skills_heroes_1);

  const slideRight = () => {
    if (countHeroes >= 5) {
      setCountHeroes(1);
    } else {
      setCountHeroes(countHeroes + 1);
    }
  };
  const slideLeft = () => {
    if (countHeroes <= 1) {
      setCountHeroes(5);
    } else {
      setCountHeroes(countHeroes - 1);
    }
  };

  useEffect(() => {
    if (countHeroes === 1) {
      setActiveHeroes(heroes_1);
      setHeroesSkills(skills_heroes_1);
      setDescriptionHeroes({
        name: 'Kelia',
        description:
          'Daughter of the leader of the destroyed Airi tribe. She became stronger and more experienced and now she will punish those who destroyed her tribe.',
        objective: ' Revive the tribey.',
        allies: 'None.',
        enemies: 'Western tribe Nioli',
        equipment: 'Two blades.',
      });
    }
    if (countHeroes === 2) {
      setActiveHeroes(heroes_2);
      setHeroesSkills(skills_heroes_2);
      setDescriptionHeroes({
        name: 'Grida',
        description:
          'She is a princess of west elf kingdom. Her sister was kidnapped of white demons. They are want to revive them of boss Lendoris. She want to save her sister and return to kingdom.',
        objective: 'Find her younger sister.',
        allies: 'Hero of kingdom.',
        enemies: 'White Demon Lendoris.',
        equipment: 'Magic staff.',
      });
    }
    if (countHeroes === 3) {
      setActiveHeroes(heroes_3);
      setHeroesSkills(skills_heroes_3);
      setDescriptionHeroes({
        name: 'Drina',
        description:
          'She is a queen from the black forest kingdom. She needs to stop her enemies from the human kingdom and save her forest.',
        objective: 'Save her dark forest kingdom .',
        allies: 'Forest ksene.',
        enemies: 'People.',
        equipment: 'Old wood magic staff.',
      });
    }
    if (countHeroes === 4) {
      setActiveHeroes(heroes_4);
      setHeroesSkills(skills_heroes_4);
      setDescriptionHeroes({
        name: 'Eagan',
        description:
          'Head of the Cult of the Seven Gods. He wants to become the Eternal God of War and be equal with Zhyta and Smerta.',
        objective: 'Become Ethernal God',
        allies: ' Cult of the Seven Gods',
        enemies: 'Heretics',
        equipment: 'Magic artifact, light armor, staff.',
      });
    }
    if (countHeroes === 5) {
      setActiveHeroes(heroes_5);
      setHeroesSkills(skills_heroes_5);
      setDescriptionHeroes({
        name: 'Nox',
        description:
          'The middle-aged scout that lost his best friend — dog Xadrian. He is a member of the Silent Brotherhood and together they are looking for the dog.',
        objective: 'Find his dog Xadrian.',
        allies: 'Members of the Silent Brotherhood.',
        enemies: 'None.',
        equipment: 'bow, arrows, single-handed sword light armor.',
      });
    }
  }, [countHeroes]);

  return (
    <div className="heroes">
      <div className="heroes_wrapper">
        <div className="container">
          <div className="heroes_content">
            <div className="heroes_left_block">
              <div className="button">
                <LeftIcon onClick={slideLeft} />
              </div>
              <div className="images">
                <img src={activeHeroes} alt="heroes" />
              </div>
            </div>
            <div className="heroes_right_block">
              <div className="heroes_content_title">
                <div className="heroes_title">
                  <h2>{descriptionHeroes.name}</h2>
                  <h5>{descriptionHeroes.description}</h5>
                </div>
                <div className="heroes_description">
                  <div>
                    <span>Objective:</span>
                    <h2>{descriptionHeroes.objective}</h2>
                  </div>
                  <div>
                    <span>Allies:</span>
                    <h2>{descriptionHeroes.allies}</h2>
                  </div>
                  <div>
                    <span>Enemies:</span>
                    <h2>{descriptionHeroes.enemies}</h2>
                  </div>
                  <div>
                    <span>Equipment:</span>
                    <h2>{descriptionHeroes.equipment}</h2>
                  </div>
                </div>
                <div className="heroes_skills">
                  <img src={heroesSkills} alt="skills" />
                </div>
              </div>
              <div className="button">
                <RightIcon onClick={slideRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
