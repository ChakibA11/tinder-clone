import Nav from '../components/Nav'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import { animated } from 'react-spring';


import { useNavigate } from 'react-router-dom'


const db = [
    {
      name: 'Richard Hendricks',
      url: './img/richard.jpg'
    },
    {
      name: 'Erlich Bachman',
      url: './img/erlich.jpg'
    },
    {
      name: 'Monica Hall',
      url: './img/monica.jpg'
    },
    {
      name: 'Jared Dunn',
      url: './img/jared.jpg'
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://i.imgur.com/C8BaltC.jpeg'
    }
  ]

const Dashboard = () => {


    const characters = db
    const [user, setUser] = useState(null)
    //const [characters, setcharacters] = useState(null)
    const [lastDirection, setLastDirection] = useState()


    const swiped = (direction, swipedUserId) => {
        if (direction === 'right') {

        }
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (

        <div className="dashboard">
            
            <div className="swipe-container">
                <div className="card-container">

                    {characters?.map((character) =>
                        <TinderCard className='swipe' 
                        key={character.name} 
                        onSwipe={(dir) => swiped(dir, character.name)} 
                        onCardLeftScreen={() => outOfFrame(character.name)}>
                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                          <h3>{character.name}</h3>
                        </div>
                      </TinderCard>
                    )}
                    <div className="swipe-info">
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;