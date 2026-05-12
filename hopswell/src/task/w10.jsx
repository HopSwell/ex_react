import { useState } from 'react'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const fruit = [
    {id:1, kind:'apple',   cnt:4}, 
    {id:2, kind:'banana', cnt:6},
    {id:3, kind:'mango', cnt:2}
  ];
 
  const fruitElements = [];

  for (const item of fruit) {
    fruitElements.push(
      <div key={item.id}>
        과일: {item.kind}, 수량: {item.cnt}
      </div>
    );
  }

  return (
    <>
      {fruitElements}
    </>
  )
}

export default App;