import React, { useRef, createContext, useReducer, useContext } from 'react';
import { gql, useMutation, useLazyQuery } from '@apollo/client';

const SEND_MESSAGE = gql`
  mutation sendMessage($value: String!, $created_by: ID!) {
    createMessage(messageCreateInput : {value: $value, created_by: $created_by}) {
      created_by
      value
    }
  }
`

const GET_MESSAGES = gql`
  query getMessages($from: String!) {
    getMessages(from: $from) {
        id
        created_by
        chat_id
        value
        created_at
    }
  }
`

const Home = () => {
    const inputRef = useRef();

    //const [ getMessages, { loading: messagesLoading, data: messagesData } ] = useLazyQuery(GET_MESSAGES)

    const [sendMessage] = useMutation(SEND_MESSAGE, {
        onError: (err) => console.log(err),
    })

    const submitMessage = (event) => {
        event.preventDefault();
        sendMessage({ variables: { value : inputRef.current.value, created_by : '24696d93-cab1-497c-9ba0-c55011bab0b5'}})
    }    

    return (
        <div className="home">
            <div className="home__messages">
                <div>Message</div>
            </div>
            <div className="home__form">
                <input type="text" ref={inputRef}/>
                <button onClick={submitMessage}>Send</button>
            </div>
        </div>
    );
}

export default Home;
