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
          {!isDead && <div className='controls' onClick={killHero}>☠ Kill</div>}
          {isDead && <div className='controls' onClick={resurrectHero}>☠ Resurrect Hero</div>}
          
          {!heroUsingRing && !isDead && <div className='controls' onClick={putRing}>💍 Use Ring</div>}     
        </div>
      </td>
    </tr>
  )
}

export default HeroRow
