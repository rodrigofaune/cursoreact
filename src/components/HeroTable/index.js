import React from 'react'
import HeroRow from '../HeroRow'
import '../../bootstrap.css'

const HeroTable = ({ heroes, killHero, putRing, resurrectHero, heroUsingRing }) => (
  <table className='table table-dark table-striped text-center'>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Race</th>
        <th>Age</th>
        <th>Weapon</th>
        <th>Action</th>
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
