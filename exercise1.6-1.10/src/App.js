import { useState } from 'react'


const Button = ({ text, value, setValue }) => {
  const AddFeedBack = () =>{
    let newFeedBack = value += 1;
     setValue(newFeedBack)
  }
  return (
    <button onClick={AddFeedBack}>{text}</button>

  )
}







const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} value={good} setValue={setGood}/>
      <Button text={"neutral"} value={neutral} setValue={setNeutral}/>
      <Button text={"bad"} value={bad} setValue={setBad}/>
      <h1>statistics</h1>
     <p>
      good {good}
      </p> 
      <p>
       neutral {neutral}
        </p>
      <p>
       bad {bad}
        </p>
    </div>
  )
}

export default App