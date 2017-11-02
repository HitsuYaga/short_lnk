import React from 'react';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base'

export default class SignUp extends React.Component {
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

    Accounts.createUser({email, password}, (e) => {
      console.log('Signup callback', e)
    })

    this.setState(() => ({ error: 'Something went wrong' }))
  }

  render() {
    return (
      <div>
        <h1>Join Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input ref="email" type="email" name="email" placeholder="Email"/>
          <input ref="password" type="password" name="password" placeholder="Password"/>
          <button>Create Account</button>
        </form>
        <Link to="/">Already have an account?</Link>
      </div>
    )
  }
}