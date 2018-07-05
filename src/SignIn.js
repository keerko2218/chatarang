import React from 'react'
import Sidebar from './Sidebar';

class SignIn extends Component {
    render() {
      return (
        <div className="SignIn" style={styles}>
          <form
        className="Username"
        onSubmit={this.handleSubmit }style = {styles.form} 
      >
        <input
          autoFocus
          required
          type="text"
          name="body"
          placeholder="Type username"
          value={this.state.body}
          onChange={this.handleChange}
          style = {styles.input}
        />
        <button type="submit" style = {styles.button}>
          Send
        </button>
      </form>
      <form
        className="Password"
        onSubmit={this.handleSubmit }style = {styles.form} 
      >
        <input
          autoFocus
          required
          type="text"
          name="body"
          placeholder="Enter Password"
          value={this.state.body}
          onChange={this.handleChange}
          style = {styles.input}
        />
        <button type="submit" style = {styles.button}>
          Send
        </button>
      </form>

        </div>
      )
    }
  }
  
export default SignIn