import Nav from '../components/Nav'
import AuthModel from '../components/AuthModel';
import { useState } from 'react'


const Home = () => {

    const authToken = false;
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)


    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
        setIsSignUp(true)

    }

    return (
        <div className='overlay'>

            <Nav
                showModal={showModal} setShowModal={setShowModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp}
            />

            <div className="home">
                <h1>Find You A Mechanic</h1>
                <h1> ذي تجربة بالعربية</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>

                {showModal && (
                    <>
                       <AuthModel setShowModal={setShowModal} isSignUp={isSignUp}/>
                   </>
               )}
            </div>

        </div>
    )
}

export default Home;