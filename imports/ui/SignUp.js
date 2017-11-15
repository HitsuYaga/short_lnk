import React from "react";
import { Link } from "react-router";
import { Accounts } from "meteor/accounts-base";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length < 3) {
      return this.setState(() => ({
        error: "Password must more than 2 characters"
      }));
    }

    Accounts.createUser({ email, password }, err => {
      if (err) {
        this.setState(() => ({ error: err.reason }));
      } else {
        this.setState(() => ({ error: "" }));
      }
    });
  }

  render() {
    return (
      <div className="box-view">
        <div className="box-view__box">
          <h1>Join Short Lnk</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)} noValidate>
            <input ref="email" type="email" name="email" placeholder="Email" />
            <input
              ref="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button>Create Account</button>
          </form>
          <Link to="/">Already have an account?</Link>
        </div>
      </div>
    );
  }
}
