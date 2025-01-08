import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Social Media Icons

const Home = () => {
    return (
        <HomeSection
            as={motion.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <Intro>
                <WelcomeMessage>Hi, I'm</WelcomeMessage>
                <Name>Sarika Apraj Chavan</Name>
                <Title>React.js Developer</Title>
                <Description>
                    I am a passionate Front-End Developer with over 5 years of experience building dynamic and responsive web applications using React.js. I thrive on creating beautiful, intuitive, and performant user experiences.
                </Description>
                <ButtonContainer>
                    <ActionButton href='/projects'>View My Work</ActionButton>
                </ButtonContainer>
            </Intro>
            <SocialLinks>
                <SocialIcon href="https://www.linkedin.com/in/sarika-chavan-26a136141/" target="_blank">
                    <FaLinkedin />
                </SocialIcon>
                <SocialIcon href="https://github.com/sarika2893" target="_blank">
                    <FaGithub />
                </SocialIcon>
            </SocialLinks>
            <BackgroundEffect />
        </HomeSection>
    );
};

const HomeSection = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f0f0f0;
`;

const Intro = styled.div`
  z-index: 2;
  color: #333;
  max-width: 600px;
  margin: 0 2rem;
  padding: 1rem;
`;

const WelcomeMessage = styled.h3`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #61dafb;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

const ActionButton = styled.a`
  padding: 10px 30px;
  background-color: #61dafb;
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4fa3d1;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  color: #333;
  font-size: 2rem;
  margin: 0 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb;
  }
`;

const BackgroundEffect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://www.example.com/background-image.jpg') center/cover no-repeat;
  opacity: 0.3;
  z-index: 1;
`;

export default Home;
