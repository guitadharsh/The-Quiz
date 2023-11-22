import React from 'react'
import moment from 'moment';
import DefaultProfileImg from '../assets/profile_default.svg'
import PofileImage from '../assets/profile__image.svg'

const JoinGame = () => {
    const calculateTargetDate = () => {
        return moment().add(40, 'minutes');
    }

    const calculateTimeRemaining = () => {
        const now = moment();
        const duration = moment.duration(targetDate.diff(now));
      
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();
      
        const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      
        return {
          hours: formattedHours,
          minutes: formattedMinutes,
          seconds: formattedSeconds,
        };
      };
      

    const [isJoined, setIsJoined] = React.useState(false)
    const [targetDate, setTargetDate] = React.useState(calculateTargetDate());
    const [timeRemaining, setTimeRemaining] = React.useState(calculateTimeRemaining());
    const names: string[] = ['Vaishak', 'Nazim', 'Jishnu', 'Amal Viswam']


    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);
    return (
        <div className='joingame'>
            <div className="joingame__header">
                <p>Game Title</p>

                <div className="joingame__header__gamecreator">
                    <div className="joingame__header__gamecreator--image">
                        <img src={DefaultProfileImg} alt="default-profile" />
                    </div>
                    <p>Jane</p>
                </div>
            </div>

            <div className="joingame__body">
                <div className="joingame__body__about">
                    <p>About Game</p>
                    <p>Game Category</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ullam rerum consequuntur, provident ducimus porro sit sint, nihil temporibus perspiciatis quis placeat neque. Ea pariatur molestias atque voluptates quas adipisci!</p>
                    <button onClick={() => setIsJoined((prevState: boolean) => !prevState)}>{isJoined ? 'LEAVE GAME' : 'JOIN GAME'}</button>
                </div>

                <div className="joingame__body__players">
                    <div className="joingame__body__players--title">
                        <p>Players</p>
                        <p>{isJoined ? 5 : 4}/5</p>
                    </div>
                    <div className="joingame__body__players__list">
                        {
                            isJoined &&
                            <>
                                <div className="joingame__body__players__list__player active">
                                    <div className="joingame__body__players__list__player--image">
                                        <img src={PofileImage} alt="default profile" />
                                    </div>
                                    <p>Robin</p>
                                </div>
                            </>
                        }
                        {
                            names.map((item: string, index: number) => {
                                return (
                                    <div className="joingame__body__players__list__player">
                                        <div className="joingame__body__players__list__player--image">
                                            <img src={DefaultProfileImg} alt="default profile" />
                                        </div>
                                        <p key={index}>{item}</p>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="joingame__timmer">
                <div className="joingame__timmer--tittle">
                    Game {isJoined ? 'starts' : 'conduct'} in
                </div>
                <div className="joingame__timmer--times">
                    <p>{timeRemaining.hours}</p>
                    <p>{timeRemaining.minutes}</p>
                    <p>{timeRemaining.seconds}</p>
                </div>
            </div>
        </div>
    )
}

export default JoinGame