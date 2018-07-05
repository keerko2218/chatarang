import React from 'react'

const Message = (props) => {
  return (
    <div className="Message"style = {styles.message}>
      {props.message.user.displayName}: {props.message.body}
    </div>
  )
}
const styles = {
  message: {
    display: 'flex',
    marginTop: '1rem',
    padding: '1rem 1rem',
  }

}
export default Message