import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


export const Votes = ({value}) => {
  return (
    <span>
      {`Has ${value} votes!.`}
    </span>
  )
}

export const Btn = ({text,handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}


export const App = (props) => {
  const cant = props.anecdotes.length;

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(cant))

  const win = Math.max(...votes)
  const posWin = votes.indexOf(win)

  const handleNext = () => {
    const min = 0;
    const rand = Math.floor(Math.random() * (cant - min)) + min;
    setSelected(rand)
  }
  const handleVotes = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy)
  }

  return (
    <div>
       <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br/>

      <Votes value={votes[selected]}/>
      <br/>

      <Btn handleClick={handleVotes} text = {"Vote"} />
      <Btn handleClick={handleNext} text = {"Next anecdote"} />

      <hr />

      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[posWin]}</p>
      <br/>
      <Votes value={votes[posWin]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);
