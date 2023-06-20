import { useState } from 'react'
const StatisitcsLine = ({ value, text }) => {
  return(
    <p>{text} {value}</p>
  )
}
const Statisitcs = ({ good, neutral, bad, total, average, positive }) => {

    return (<div>

      <StatisitcsLine value={good} text={"good"}/>
      <StatisitcsLine value={neutral} text={"neutral"}/>
      <StatisitcsLine value={bad} text={"bad"}/>
      <StatisitcsLine value={total} text={"total"}/>
      <StatisitcsLine value={average} text={"average"}/>
      <StatisitcsLine value={positive} text={"positive"}/>
    </div>
    )

  
}
const Button = ({ text, value, setValue, totalAmt, setTotalAmt, average, setAverage, positive, setPositive, positiveOne, negativeOne, zero, averageSum, setAverageSum }) => {
  const AddFeedBack = () =>{
    let newFeedBack = value += 1;
    let newTotal = totalAmt += 1;
    let newAverageSum = averageSum
    
    
    if (positiveOne){
     newAverageSum.push(1)

    }
    if (negativeOne){
      newAverageSum.push(-1)
    }
    if (zero){
      newAverageSum.push(0)
    }

    console.log(newAverageSum)
    if (newAverageSum.length == 0){
      setAverage(0)
    }
    else {
      let positiveSum = 0
      for (let i=0;i < newAverageSum.length; i++){
        if(newAverageSum[i] == 1){
          positiveSum += 1
        }

      }
      let positiveFeedBack = positiveSum/newTotal
      setPositive(positiveFeedBack)

      let sum = newAverageSum.reduce(function(a, b){
        return a + b;
      })
      let newSetAverage = sum/newTotal
      setAverage(newSetAverage) 
    }

     setValue(newFeedBack)
     setTotalAmt(newTotal)
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
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [averageSum, setAverageSum] = useState([])
  const [positive, setPositive] = useState(0)
  const positiveOne = 1
  const negativeOne = -1
  const zero = 0


if (good == 0 && neutral == 0 && bad == 0 && total == 0 && average == 0 && positive == 0){
  return (
    <div>
    <h1>give feedback</h1>
    <Button text={"good"} value={good} setValue={setGood} setTotalAmt={setTotal} totalAmt={total} average={average} setAverage={setAverage} positive={positive} setPositive={setPositive} positiveOne={positiveOne} averageSum={averageSum} setAverageSum={setAverageSum}/>
    <Button text={"neutral"} value={neutral} setValue={setNeutral}setTotalAmt={setTotal} totalAmt={total} average={average} setAverage={setAverage} zero={zero} averageSum={averageSum} setAverageSum={setAverageSum} setPositive={setPositive}/>
    <Button text={"bad"} value={bad} setValue={setBad}setTotalAmt={setTotal} totalAmt={total} average={average} setAverage={setAverage} negativeOne={negativeOne} averageSum={averageSum} setAverageSum={setAverageSum}setPositive={setPositive}/>
    <h1>statistics</h1>
    <p>No feedback given</p>
    </div>
  )
}
  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} value={good} setValue={setGood} setTotalAmt={setTotal} totalAmt={total} average={average} setAverage={setAverage} positive={positive} setPositive={setPositive} positiveOne={positiveOne} averageSum={averageSum} setAverageSum={setAverageSum}/>
      <Button text={"neutral"} value={neutral} setValue={setNeutral}setTotalAmt={setTotal} totalAmt={total} average={average} setAverage={setAverage} zero={zero} averageSum={averageSum} setAverageSum={setAverageSum} setPositive={setPositive}/>
      <Button text={"bad"} value={bad} setValue={setBad}setTotalAmt={setTotal} totalAmt={total} average={average} setAverage={setAverage} negativeOne={negativeOne} averageSum={averageSum} setAverageSum={setAverageSum}setPositive={setPositive}/>
      <h1>statistics</h1>
     <Statisitcs 
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      average={average}
      positive={positive}
     />
    </div>
  )
}

export default App