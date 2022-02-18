import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section>
          {missions.map((list, index) => (
            <MissionCard
              key={ index }
              name={ list.name }
              year={ list.year }
              country={ list.country }
              destination={ list.destination }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
