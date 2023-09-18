import React from 'react'

const games: number[] = [1,2,3,4,5,6,7,9,10,11,12,14,14,15,1,3,34,3]

const PublicGames: React.FC = () => {
  return (
    <div className='public'>
      <div className="public__body">
          <p>My Games</p>
          <div className="public__mygames">
            {
              games.map((item: number, val: number) => {
                return(
                  <div className='public__mygames--item' key={val}>
                   {item}
                  </div>
                )
              })
            }
          </div>

            <p>Public Games</p>
          <div className="public__listedgames">
            {
              games.map((item: number, val: number) => {
                return(
                  <div className="public__listedgames--item">
                    {item}
                  </div>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default PublicGames