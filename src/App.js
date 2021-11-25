import React from 'react';
import './App.css';

  // const [data, setData] >>> (currentState, changethecurrentState)
  // useState hook is going to return the current state of the 
  //component and the function that will let us update that value

  // useEffect hook will allow us to code the graql api once the dom or object model of
  // the component is completely rendered

function App() {
  const [data, setData] = useState( { videos: [] } );

  return (
    <div className="App">
      <h1>List of Videos<h1/>
      <ul>
        <li></li>
      </ul>

    </div>
  );
}

export default App;
