import React from 'react'

import Message from './Message'

const MessageList = (props) => {
  return (
    <div className="MessageList" style = {styles.list}>
      {
        props.messages.map(msg => (
          <Message message={msg} key={msg.id} />
        ))
      }
    </div>
  )
}
const styles = {
  list: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: '1rem',
    overflowY: 'scroll',
  },

  announcement: {
    padding: '2rem 1rem 10rem',
  },

  h3: {
    fontSize: '1.5rem',
  },
}

export default MessageList