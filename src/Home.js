import React, { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';

export default function Home() {

  return (
    <div class='homePage'>

      <Line class='comment'>
        <LineNumber>1</LineNumber>
        &nbsp;
        {`//Warren Tamagri - Web Developer`}
      </Line>
      <Line>
        <LineNumber>2</LineNumber>
      </Line>

      <Line>
        <LineNumber>3</LineNumber>
        &nbsp;
        <span class='purp'>{`export default `} </span>
        <span class='blue'>{`function `} </span>
        <span class='lightYellow'>{'Hello'}</span>
        <span class='yellow'>{`() {`}</span>
      </Line>

      <Line class='purp'>
        <span class='lineNumbers'>4</span>
      &nbsp;&nbsp;&nbsp;
      {`return (`}
      </Line>

      <div class='line gray'>
        <span class='lineNumbers'>5</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<>`}
      </div>

      <div class='line green'>
        <span class='lineNumbers'>6</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class='gray'>{`<`}</span>
        {`Greeting`}
        <span class='gray'>{`>`}</span>
      </div>

      <div class='line'>
        <span class='lineNumbers'>7</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class='white'>
          <ReactTypingEffect
            text={['Hello!']}
            speed={[160]}
            typingDelay={[1500]}
            eraseDelay={[1500]}
          />
        </span>
      </div>

    </div>
  )
}

const LineNumber = styled.span`
  color: rgb(144, 144, 144);
  position: relative;
`;
const Line = styled.div`
  position: relative;
`;
