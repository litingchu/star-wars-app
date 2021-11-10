import * as React from 'react';
import Plot from 'react-plotly.js';
import { array } from 'prop-types';

const PlanetChart = ({ sortedPlanets }) => {
  console.log({ sortedPlanets });
  const planetNames = sortedPlanets.map((planet) => planet.name);
  const planetPopulations = sortedPlanets.map((planet) => planet.population);
  console.log({ planetPopulations });
  return (
    <Plot
      data={[{ type: 'bar', x: planetNames, y: planetPopulations }]}
      layout={{
        width: 2000,
        height: 1000,
        title: '<b>Star Wars Planet Populations</b>',
        xaxis: { title: 'Planet Name', automargin: true },
        yaxis: { title: 'Planet Population', automargin: true }
      }}
    />
  );
};

// PlanetChart.propTypes = {
//   children: PropTypes.node.isRequired
// };

PlanetChart.defaultProps = {
  sortedPlanets: []
};
PlanetChart.propTypes = {
  sortedPlanets: array
};
export default PlanetChart;
