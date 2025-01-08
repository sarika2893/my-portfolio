import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'; // Icons for skills

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, level: 'Advanced', color: '#61dafb' },
    { name: 'JavaScript', icon: <FaJs />, level: 'Advanced', color: '#f7df1e' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate', color: '#68a063' },
    { name: 'HTML5', icon: <FaHtml5 />, level: 'Advanced', color: '#e34c26' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 'Advanced', color: '#264de4' },
  ];

  const tileVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <SkillsContainer
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <Heading>My Skills</Heading>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillTile key={index} as={motion.div} variants={tileVariants} bgColor={skill.color}>
            <IconContainer>{skill.icon}</IconContainer>
            <SkillName>{skill.name}</SkillName>
            <SkillLevel>{skill.level}</SkillLevel>
          </SkillTile>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  padding: 2rem;
  background: #f9f9f9;
  max-width: 800px;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
`;

const SkillTile = styled(motion.div)`
  background: ${(props) => props.bgColor || '#fff'}; /* Skill specific background color */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
    background-color: ${(props) => lightenColor(props.bgColor, 0.2)}; /* Lighter color on hover */
  }
`;

const IconContainer = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fff; /* White icons on colored background */
`;

const SkillName = styled.div`
  font-size: 1.2rem;
  color: #fff; /* White text on colored background */
`;

const SkillLevel = styled.div`
  font-size: 1rem;
  color: #fff; /* White text on colored background */
`;

// Function to lighten the color on hover (making it a bit lighter for hover effect)
const lightenColor = (color, percent) => {
  const num = parseInt(color.slice(1), 16); // Convert hex to RGB
  const r = (num >> 16) + percent * 255;
  const g = ((num >> 8) & 0x00ff) + percent * 255;
  const b = (num & 0x0000ff) + percent * 255;
  return `#${(1 << 24) + (Math.min(255, r) << 16) + (Math.min(255, g) << 8) + Math.min(255, b)
    .toString(16)
    .slice(1)}`;
};

export default Skills;
