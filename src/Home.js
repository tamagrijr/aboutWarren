import React, { useState, useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect';

export default function Home() {

  return (
    <div class='homePage'>

      <div class='line comment'>
        <span class='lineNumbers'>1</span>
      &nbsp;
      {`//Warren Tamagri - Web Developer`}
      </div>

      <span class='lineNumbers'>2</span>

      <div class='line'>
        <span class='lineNumbers'>3</span>
      &nbsp;
      <span class='purp'>{`export default `} </span>
        <span class='blue'>{`function `} </span>
        <span class='lightYellow'>{'Hello'}</span>
        <span class='yellow'>{`() {`}</span>
      </div>

      <div class='line purp'>
        <span class='lineNumbers'>4</span>
      &nbsp;&nbsp;&nbsp;
      {`return (`}
      </div>

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
