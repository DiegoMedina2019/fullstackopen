import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


export const BtnFeed = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
export const Statistics = ({all,av ,percent,good,bad,neutral}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>description</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
      <Statistic text={"Good"} value={good} />
      <Statistic text={"Neutral"} value={neutral} />
      <Statistic text={"Bad"} value={bad} />
      <Statistic text={"All"} value={all} />
      <Statistic text={"Average"} value={av} />
      <Statistic text={"Positives"} value={`${percent} %`} />
      </tbody>
    </table>

  )
}
export const Statistic = ({text, value}) => {

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Part1 = () => {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const all = good + neutral + bad;
  const av = all/3;
  const val = (good * 100)/all;
  const percent = isNaN( val )? 0:val ;

  const handleGood = () => {
    setGood(good +1)
  }
  
  const handleBad = () => {
    setBad(bad +1)
  }

  const handleNeutral= () => {
    setNeutral(neutral +1)
  }


  return (
    <>
    <BtnFeed handleClick={ handleGood } text = "Good" />
    <BtnFeed handleClick={ handleNeutral } text = "Nutral" />
    <BtnFeed handleClick={ handleBad } text = "Bad" />
    <hr />
    
    <h1>¡Statistics!</h1>
    {
      all > 0 ? 
      <Statistics 
        all={all} 
        av={av} 
        percent={percent}
        good = {good}
        neutral={neutral}
        bad={bad}
      />
      : <p>No feedback given</p>
    }
    
    </>
  )
}







const App = () => {
  return (
    <div>
      <h1>Give feedback</h1>
      <Part1 />
    </div>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);
