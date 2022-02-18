import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="planetsList">
          {planets.map((list, index) => (
            <PlanetCard
              key={ index }
              planetName={ list.name }
              planetImage={ list.image }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
