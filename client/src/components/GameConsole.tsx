import { useState, useEffect } from 'react';

const GameConsole: React.FC = () => {
  // mock timer
  const [seconds, setSeconds] = useState<number>(30);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

let arr: number[] = [1,2,3,4]
  
  return (
    <div className='gameconsole'>
      <div className="gameconsole__timmer">
        <p>{seconds}</p>
      </div>

      <div className="gameconsole__questionpad">
        <div className="gameconsole__questionpad__header">
         <p>Question 1</p>
        </div>
        <div className="gameconsole__questionpad__question">
          {/* dynamic question list here... */}
        </div>
      </div>

      <div className="gameconsole__answersgrid">
        {
          arr.map((item) => {
            return(
              <>
              <div className="gameconsole__answersgrid__answer">
                <div className="gameconsole__answersgrid__answer--number">
                  <p>{item}</p>
                </div>
                <div className="gameconsole__answersgrid__answer--text">
                  <p>answer</p>
                </div>
              </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default GameConsole