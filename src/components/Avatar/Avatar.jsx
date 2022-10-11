import React from 'react'

const Avatar = ({avatar, name, shout}) => {
  return (
    <div>
        <h3>{name}</h3>
        <img src={avatar} alt={name} />
        <button onClick={shout}>Shout</button>
    </div>
  )
}

export default Avatar