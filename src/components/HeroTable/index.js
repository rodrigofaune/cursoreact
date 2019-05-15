import React from 'react'
import HeroRow from '../HeroRow'

const HeroTable = ({ heroes, killHero, putRing, resurrectHero, heroUsingRing }) => (
  <table className="characters-table">
    <tbody>
      <tr className="character-row">
        <th>Name</th>
        <th>Race</th>
        <th>Age</th>
        <th>Weapon</th>
        <th></th>
      </tr>
      {heroes.map((hero, index) => (
        <HeroRow
          key={index} 
          hero={hero}
          heroUsingRing={heroUsingRing}
          killHero={() => killHero(hero.id)}
          putRing={() => putRing(hero.id)}
          resurrectHero={() => resurrectHero(hero.id)}
        />
      ))}
    </tbody>
  </table>
)

export default HeroTable
