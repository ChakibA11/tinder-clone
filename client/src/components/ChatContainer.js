import ChatHeader from './ChatHeader'
import MatchesDisplay from './MatchesDisplay'
import ChatDisplay from './ChatDisplay'
import { useState } from 'react'

const ChatContainer = () => {
    const [ clickedUser, setClickedUser ] = useState(null)

    return (
        <div className="chat-container">
            <ChatHeader/>

            <div>
                <button className="option" onClick={() => {} }>Matches</button>
                <button className="option" >Chat</button>
            </div>

            <MatchesDisplay />

            <ChatDisplay />
        </div>
    )
}

export default ChatContainer;