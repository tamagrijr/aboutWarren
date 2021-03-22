import React, { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';
import { SplitPane } from "react-collapse-pane";

import ProjectsPane from './ProjectsPane';
import IntroAnimation from './IntroAnimation';
import Function from './Function';

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(true);

  function handleOpening() {
    setShowTerminal(false)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpening();
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="animate__animated animate__fadeOut animate__delay-5s" >
        <IntroAnimation showTerminal={showTerminal} />
      </div>
      {!showTerminal ?
        <div className="animate__animated animate__fadeIn" >
          <Function />
        </div> :
        null
      }
    </>
  )
}
