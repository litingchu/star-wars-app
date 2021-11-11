import * as React from 'react';
import axios from 'axios';
import './App.css';
import { sortedByName } from './utils';

import PlanetChart from './components/PlanetChart';
import PlanetTable from './components/PlanetTable';

const App = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(async () => {
    const planets = await getData();
    const sortedPlanets = sortedByName(planets);
    setData(sortedPlanets);
  }, []);

  const getData = async () => {
    let url = 'https://swapi.dev/api/planets/';
    let count = 0;
    let totalCount = 0;
    let planetData = [];
    do {
      await axios(url)
        .then((response) => {
          totalCount = response.data.count;
          count = count + response.data.results.length;
          url = response.data.next;
          const newPlanets = response.data.results;
          planetData = [...planetData, ...newPlanets];
        })
        .catch((error) => {
          console.error('Error fetching data: ', error);
        });
    } while (count < totalCount);
    return planetData;
  };

  return (
    <div>
      <PlanetChart sortedPlanets={data} />
      <PlanetTable sortedPlanets={data} />
    </div>
  );
};

export default App;
