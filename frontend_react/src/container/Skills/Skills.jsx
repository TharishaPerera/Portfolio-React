import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactToolTip from 'react-tooltip';

import { AppWrap } from '../../wrapper';
import { MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    const educationQuery = '*[_type == "education"]';

    client.fetch(query)
      .then((data) => {
        setExperience(data);
      })

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })

    client.fetch(educationQuery)
      .then((data) => {
        setEducation(data);
      })
  }, [])

  return (
    <>
      <h2 className="head-text"><span>Education</span> & <span>Experience</span></h2>

      <div className="app__skills-container">
        <div className="cards-container">
          <div className='skill__card'>
            <motion.div className="app__skills-exp">
            <h3 className="">Education</h3><hr />
              {education?.map((education) => (
                <motion.div
                  className='app__skills-exp-item'
                  key={education.duration}
                >
                  <div className='app__skills-exp-year'>
                    <p className='bold-text'>{education.duration}</p>
                  </div>

                  <motion.div
                    className='app__skills-exp-works'
                  >
                    <div className='app__skills-exp-work'>
                      <h4 className="bold-text">{education.title}</h4>
                      <p className="p-text">{education.institute}</p>
                    </div>
                  </motion.div>

                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className='skill__card card__exp'>
            <motion.div className="app__skills-exp">
            <h3 className="">Experience</h3><hr />
              {experience?.map((experience) => (
                <motion.div
                  className='app__skills-exp-item'
                  key={experience.year}
                >
                  <div className='app__skills-exp-year'>
                    <p className='bold-text'>{experience.year}</p>
                  </div>

                  <motion.div
                    className='app__skills-exp-works'
                  >
                    {experience.works.map((work) => (
                      <>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                          data-tip
                          data-for={work.name}
                          key={work.name}
                        >
                          <h4 className="bold-text">{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                        </motion.div>

                        {/* <ReactToolTip
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </ReactToolTip> */}
                      </>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className='app__skills-below'>
          <motion.div className="app__skills-list">
            {skills?.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>

                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__primarybg"
);