import React from 'react'

const CreateGame: React.FC = () => {

  const games: number[] = [1,2,3,4,5,6,7,9,10,11,12,14,14,15,1,3,34,3]

  return (
    <div className='creategame'>
        <div className="creategame__body">
            <div className="creategame__body--head">
              <p>My Games</p>
              <button>Create Game</button>
            </div>
        </div>
    </div>
  )
}

export default CreateGame