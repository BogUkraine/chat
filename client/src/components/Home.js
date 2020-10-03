import React, { useRef } from 'react';

const Home = () => {
    const inputRef = useRef();

    const sendMessage = (event) => {
        event.preventDefault();
        console.log(inputRef.current.value);
    }

    return (
        <div className="home">
            <div className="home__messages">
                <div>Message</div>
            </div>
            <div className="home__form">
                <input type="text" ref={inputRef}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Home;
