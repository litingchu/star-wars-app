import * as React from 'react';
import Plot from 'react-plotly.js';
import Select from 'antd/lib/select';
import Typography from 'antd/lib/typography';
import { array } from 'prop-types';

const { Text } = Typography;

const PlanetChart = ({ sortedPlanets }) => {
  const [selectedAttribute, setSelectedAttribute] = React.useState({
    label: 'Population',
    value: 'population'
  });

  const plotOptions = [
    { label: 'Population', value: 'population' },
    { label: 'Rotation Period', value: 'rotation_period' },
    { label: 'Orbital Period', value: 'orbital_period' },
    { label: 'Diameter', value: 'diameter' },
    { label: 'Surface Water', value: 'surface_water' }
  ];

  const handleChange = (attribute) => {
    setSelectedAttribute(attribute);
  };
  const planetNames = sortedPlanets.map((planet) => planet.name);
  const isPopulation = selectedAttribute.value === 'population';
  return (
    <div>
      <Text>Select attribute to plot against planets: </Text>
      <Select
        value={selectedAttribute}
        options={plotOptions}
        style={{ width: '30%' }}
        labelInValue
        onChange={handleChange}
      />
      <Plot
        data={[
          {
            type: 'bar',
            x: planetNames,
            y: sortedPlanets.map((planet) => planet[selectedAttribute.value])
          }
        ]}
        layout={{
          width: 2000,
          height: 1000,
          title: `<b>Star Wars Planet ${selectedAttribute.label}s</b>`,
          xaxis: { title: 'Planet Name', automargin: true },
          yaxis: {
            title: `Planet ${selectedAttribute.label}s`,
            automargin: true,
            type: isPopulation ? 'log' : 'linear',
            dtick: isPopulation ? 1 : null
          }
        }}
      />
    </div>
  );
};

PlanetChart.defaultProps = {
  sortedPlanets: []
};
PlanetChart.propTypes = {
  sortedPlanets: array
};
export default PlanetChart;
