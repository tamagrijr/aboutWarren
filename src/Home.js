import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';

export default function Home() {
  
  return (
    <IntroFunction>

      <Line>
        <Num>1</Num>
        &nbsp;
        <Comment>{`//Warren Tamagri - Web Developer`}</Comment>
      </Line>

      <Num>2</Num>

      <Line>
        <Num>3</Num>
        &nbsp;
        <Purp>{`export default `}</Purp>
        <Blue>{`function `}</Blue>
        <PaleYellow>{'Hello'}</PaleYellow>
        <Yellow>{`() {`}</Yellow>
      </Line>

      <Line>
        <Num>4</Num>
        &nbsp;&nbsp;&nbsp;
        <Purp>{`return (`}</Purp>
      </Line>


      <Line>
        <Num>5</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Gray>{`<>`}</Gray>
      </Line>

      <Line>
        <Num>6</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Gray>{`<`}</Gray>
        <Green>{`Greeting`}</Green>
        <Gray>{`>`}</Gray>
      </Line>

      <Line>
        <Num>7</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <White>
          <ReactTypingEffect
            text={['Howdy!']}
            speed={[160]}
            typingDelay={[1500]}
            eraseDelay={[1500]}
          />
        </White>
      </Line>

      <Line>
        <Num>8</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Gray>{`<`}</Gray>
        <Green>{`Introduction`}</Green>
        <Gray>{`>`}</Gray>
      </Line>

      <Line>
        <Num>9</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <White>{`My name is Warren Tamagri`}</White>
      </Line>

      <Line>
        <Num>10</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Gray>{`</`}</Gray>
        <Green>{`Introduction`}</Green>
        <Gray>{`>`}</Gray>
      </Line>

      <Line>
        <Num>11</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Gray>{`<`}</Gray>
        <Green>{`Bio`}</Green>
        <Gray>{`>`}</Gray>
      </Line>

      <Line>
        <Num>12</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <White>{`I am a software engineer`}</White>
      </Line>

      <Line>
        <Num>13</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Gray>{`</`}</Gray>
        <Green>{`Bio`}</Green>
        <Gray>{`>`}</Gray>
      </Line>

      <Line>
        <Num>14</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Gray>{`</`}</Gray>
        <Green>{`Greeting`}</Green>
        <Gray>{`>`}</Gray>
      </Line>

      <Line>
        <Num>15</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Gray>{`<`}</Gray>
        <Green>{`Contact`}</Green>
        <Gray>{`>`}</Gray>
      </Line>

      <Line>
        <Num>16</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <White>
          {`email: `}
          <Email onClick={handleEmail}>
            {`tamagrijr@gmail.com`}
          </Email>
        </White>
      </Line>

      <Line>
        <Num>17</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <White>
          {`github: `}
          <Link href="https://github.com/tamagrijr" target="_blank">
            {`https://github.com/tamagrijr`}
          </Link>
        </White>
      </Line>

      <Line>
        <Num>18</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <White>
          {`linkedin: `}
          <Link href="https://www.linkedin.com/in/wLinkrren-tamagri-5648a71ba/" target="_blank">
            {`https://www.linkedin.com/in/warren-tamagri`}
          </Link>
        </White>
      </Line>

      <Line>
        <Num>19</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Gray>{`</`}</Gray>
        <Green>{`Contact`}</Green>
        <Gray>{`>`}</Gray>
      </Line>

      <Line>
        <Num>20</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Gray>{`<`}</Gray>
        <Green>{`Appreciation`}</Green>
        <Gray>{`>`}</Gray>
      </Line>

      <Line>
        <Num>21</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <White>Thanks for checking me out!</White>
      </Line>

      <Line>
        <Num>22</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Gray>{`</`}</Gray>
        <Green>{`Appreciation`}</Green>
        <Gray>{`>`}</Gray>
      </Line>

      <Line>
        <Num>23</Num>
      </Line>

      <Line>
        <Num>24</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <DarkGreen>{`{/* Click below to see my projects! */}`}</DarkGreen>
      </Line>

      <Line>
        <Num>25</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Gray>{`<`}</Gray>
        <Green>{`Projects `}</Green>
        <BlueHover>
          {`onClick={`}
          <PaleYellow>{`openProjects`}</PaleYellow>
          {`}`}
        </BlueHover>
        <Gray>{` />`}</Gray>
      </Line>

      <Line>
        <Num>26</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Gray>{`</>`}</Gray>
      </Line>

      <Line>
        <Num>27</Num>
        &nbsp;&nbsp;
        <Purp>{`)`}</Purp>
      </Line>

      <Line>
        <Num>28</Num>
        <Yellow>{`}`}</Yellow>
      </Line>

      <Line>
        <Num>29</Num>
      </Line>

    </IntroFunction>
  )
}

function handleEmail(){
  navigator.clipboard.writeText('tamagrijr@gmail.com');
};

const IntroFunction = styled.div`
position: relative;
`;
const Line = styled.div`
position: relative;
`;
const Num = styled.span`
  color: rgb(144, 144, 144);
  position: relative;
  padding-right: .5em;
`;
const Comment = styled.span`
color: white;
font-size: 2.1vh;
`;
const Purp = styled.span`
  color: rgb(220, 123, 223);
`;
const Blue = styled.span`
  color: rgb(173, 224, 255);
`;
const PaleYellow = styled.span`
  color: rgb(222, 225, 175);
`;
const Yellow = styled.span`
  color: rgb(211, 189, 0);
`;
const Gray = styled.span`
  color: rgb(138, 138, 138);
`;
const White = styled.span`
  color: white;
`;
const Green = styled.span`
  color: rgb(101, 207, 184);
`;
const DarkGreen = styled.span`
  color: rgb(111, 155, 86);
`;
const BlueHover = styled.span`
  color: rgb(173, 224, 255);
  cursor: pointer;

  :hover {
    color: rgb(220, 123, 223);
  }
`;
const Link = styled.a`
  color: white;
  cursor: pointer;

  :hover{
    color: rgb(173, 224, 255);
  }
`;
const Email = styled.span`
  color: white;
  cursor: pointer;

  :hover{
    color: rgb(211, 189, 0);
  }
`;
