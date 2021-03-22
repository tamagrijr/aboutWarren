import React from 'react';
import styled, { css } from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';

export default function IntroAnimation({ showTerminal }) {
  return (
    <OpeningTerminal showTerminal={showTerminal}>
      <Terminal>
        Welcome to: Warren_Tamagri_Site $
        {' '}
        {' '}
        <ReactTypingEffect
          text={['code .']}
          speed={[150]}
        />
      </Terminal>
    </OpeningTerminal>
  );
}

const OpeningTerminal = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position:  'absolute';
  visibility: visible;
  opacity: 1;
  -webkit-transition: opacity 600ms, visibility 600ms;
  transition: opacity 600ms, visibility 600ms;
  ${({showTerminal}) => !showTerminal && css `
  display: none;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 600ms, visibility 600ms;
  transition: opacity 600ms, visibility 600ms;
  `}
`;

const Terminal = styled.div`
  position: absolute;
  height: 30vh;
  width: 30vw;
  border: 1px solid white;
  color: white;
  padding: 10px;
  @media (max-width: 768px) {
    width: 70vw;
  }
`;
