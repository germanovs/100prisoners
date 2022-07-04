import { useState, useEffect } from 'react'

import './App.css'

const App = () => {

  const [ prisoner, setPrisoner ] = useState(0);
  const [ amount, setAmount ] = useState(10);
  const [ boxes, setBoxes ] = useState([]);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  useEffect(() => {
    let boxes = [ ...Array(amount).keys() ];
    setBoxes(shuffleArray(boxes));
  }, []);

  return <>
    <h3>100 prisoners</h3>

    <div className="boxes">

      {
        boxes.map((value, index) => (
          <div className="box" key={index}>
            <div className="box-number"><b>{ index + 1 }</b></div>
            <div className="box-inside-number">{ value }</div>
          </div>
        ))
      }

    </div>

    <div className="stats">
      Current prisoner number: <b>{ prisoner + 1 } of { amount }</b>
    </div>
  </>;

}

export default App
