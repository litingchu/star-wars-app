import * as React from 'react';
import Table from 'antd/lib/table';
import { array } from 'prop-types';

const PlanetTable = ({ sortedPlanets }) => {
  sortedPlanets = sortedPlanets.map((planet, index) => ({
    ...planet,
    key: `(${index})${planet.name}`
  }));

  const planetColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Population', dataIndex: 'population', key: 'population' },
    {
      title: 'Rotation Period',
      dataIndex: 'rotation_period',
      key: 'rotation_period'
    },
    {
      title: 'Orbital Period',
      dataIndex: 'orbital_period',
      key: 'orbital_period'
    },
    { title: 'Diameter', dataIndex: 'diameter', key: 'diameter' },
    { title: 'Climate', dataIndex: 'climate', key: 'climate' },
    { title: 'Surface Water', dataIndex: 'surface_water', key: 'surface_water' }
  ];
  return (
    <Table
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      dataSource={sortedPlanets}
      columns={planetColumns}
      bordered
      title={() => <h1 align="center">Star Wars Planets</h1>}
    />
  );
};

PlanetTable.defaultProps = {
  sortedPlanets: []
};
PlanetTable.propTypes = {
  sortedPlanets: array
};
export default PlanetTable;
