import React from 'react'
import './style.css'

const HeroRow = ({ hero, killHero, putRing, resurrectHero, heroUsingRing }) => {
  const {
    name,
    race,
    age,
    weapon,
    status,
    usingRing
  } = hero

  const isDead = status === 'dead' ? 'dead' : ''

  if (usingRing) {
    return null
  }

  return (
    <tr className={`character-row ${isDead}`}>
      <td>{name}</td>
      <td>{race}</td>
      <td>{age}</td>
      <td>{weapon}</td>
      <td>
        <div>
          {!isDead && <button type='button' onClick={killHero} class='btn btn-danger'>☠ Kill</button>}
          {isDead && <button type='button' onClick={resurrectHero} class='btn btn-primary'>☠ Resurrect Hero</button>}
          {!heroUsingRing && !isDead && <button type='button' onClick={putRing} class='btn btn-light'>0 Use Ring</button>}
        </div>
      </td>
    </tr>
  )
}

export default HeroRow
