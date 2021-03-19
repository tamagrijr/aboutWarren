import React from 'react';
import styled from 'styled-components';


export default function ProjectsPane() {
  return (
    <>
      <Container>
        <Scroll />

        <Line>
          <Num>1</Num>
          &nbsp;&nbsp;&nbsp;
          <Comment>{`// Projects`}</Comment>
        </Line>

        <Line>
          <Num>2</Num>
        </Line>

        <Line>
          <Num>3</Num>
          &nbsp;&nbsp;&nbsp;
          <Comment>{`// Pocket Trainer`}</Comment>
        </Line>

        <Line>
          <Num>4</Num>
          &nbsp;&nbsp;&nbsp;
          <Comment>{`// Responsive workout routine creation, tracking, and sharing`}</Comment>
        </Line>

        <Line>
          <Num>5</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="https://pockettrainer2.herokuapp.com/login">{`Check it out!`}</Link>
        </Line>

        <Line>
          <Num>6</Num>
        </Line>

        <Line>
          <Num>7</Num>
          &nbsp;&nbsp;&nbsp;
          <Comment>{`// Class Companion`}</Comment>
        </Line>

        <Line>
          <Num>8</Num>
          &nbsp;&nbsp;&nbsp;
          <Comment>{`// Classroom management for your COVID-19 needs`}</Comment>
        </Line>

        <Line>
          <Num>9</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="https://classcompanion.herokuapp.com/landing">{`Check it out!`}</Link>
        </Line>

        <Line>
          <Num>10</Num>
        </Line>

        <Line>
          <Num>11</Num>
          &nbsp;&nbsp;
          <Comment>{`// Dungeons and Slack`}</Comment>
        </Line>

        <Line>
          <Num>12</Num>
          &nbsp;&nbsp;
          <Comment>{`// Got the slack part down, still working on the dungeons`}</Comment>
        </Line>

        <Line>
          <Num>13</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="https://master.dbjcnb793ygs.amplifyapp.com/">{`Check it out!`}</Link>
        </Line>

      </Container>
    </>
  )
}

const Container = styled.div`
  padding: 5px;
  position: absolute;
  top: 0;
  overflow: hidden;
  /* left: 40%; */
  height: 100vh;
  width: 100vw;
  background-color: #1d1d1d;
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    left: 0;
    font-size: 1.5vh;
    /* top: 55vh; */
    border-top: 1px solid #909090;
  }
`;

const Scroll = styled.div`
  color: #909090;
  position: absolute;
  border-left: 1px solid #494949;
  height: 100vh;
  @media (max-width: 768px) {
    border: none;
  }
`;
const Line = styled.div`
position: relative;
`;
const Num = styled.span`
  color: rgb(144, 144, 144);
  position: relative;
  padding-right: .5em;
  padding-left: .5em;
`;
const Comment = styled.span`
color: white;
font-size: 2.1vh;
`;
const Link = styled.a`
  color: rgb(222, 225, 175);
  cursor: pointer;
  position: relative;
  display: inline-block;

  :hover{
    color: rgb(211, 189, 0);
  }
`;
