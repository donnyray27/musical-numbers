import React from 'react'

const DisplayTile = props => {
  return(
    <div>

      <h3 className="display-tile">{props.number + 1}</h3>) <h3 className="display-tile">{props.value}</h3>

    </div>
  )
}

export default DisplayTile
