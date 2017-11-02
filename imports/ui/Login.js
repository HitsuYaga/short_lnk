import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      console.log('Login Callback', err)
    })
  }

  render() {
    return (
      <div>
        <h1>Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input ref="email" type="email" name="email" placeholder="Email"/>
          <input ref="password" type="password" name="password" placeholder="Password"/>
          <button>Login</button>
        </form>
        <Link to="/signup">Have an account?</Link>
      </div>
    )
  }
}