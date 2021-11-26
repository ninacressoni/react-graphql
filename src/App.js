import React from 'react';
import './App.css';
import * as Constants from './Constants';
import axios from 'axios';

  // const [data, setData] >>> (currentState, changethecurrentState)
  // useState hook is going to return the current state of the 
  //component and the function that will let us update that value

  // useEffect hook will allow us to code the graql api once the dom of
  // the component is completely rendered

function App() {
  const [data, setData] = useState( { videos: [] } );

  useEffect( () => {
    const fetchData = async () => {
      // call graphql API
      const queryResult = await axios.post (
        Constants.GRAPHQL_API, {
          query: Constants.GET_VIDEOS_QUERY
        }
      )

      // update the component state
      const result = queryResult.data.data;
      setData({ videos: result.videos })
    };

    fetchData();

  })
  return (
    <div className="App">
      <h1>List of Videos<h1/>
      <ul>
        {data.videos.map(item => (
          <li key={item.id}>
            <Video item={item}/>
          </li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
