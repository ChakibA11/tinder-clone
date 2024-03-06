import colorLogo from '../images/Mechanic finder-logos__transparent.png';
import AuthModel from '../components/AuthModel';
import { useState } from 'react'


const Nav = ({showModal, setShowModal ,setIsSignUp , isSignUp}) => {



    const handleClick = () => {
        console.log("log in clicked");
        setShowModal(true);
        setIsSignUp(false);
    };

    return (
        <>
            <nav>
                <div className="logo-container">
                    <img
                        className="logo"
                        src={colorLogo}
                        alt="logo" />
                </div>
                {< button className='nav-button '  
                    onClick={handleClick}
                    disabled={showModal}
                > Log In تسجيل</button>}

                {showModal && (
                    <>
                        <AuthModel setShowModal={setShowModal} isSignUp={isSignUp}/>
                    </>
                )}

            </nav></>
    );


}

export default Nav;