import React, { Component } from "react";
import "./styles/login.css";
import "./styles/login-media.css";

class LogIn extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        };
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changeEmail(event) {
        this.setState({
            username: event.target.value,
        });
    }

    changePassword(event) {
        this.setState({
            password: event.target.value,
        });
    }

    render() {
        return (
            <div className="login-wrapper">
                <h1>Examiner-finder</h1>

                <section className="login">
                    <h2>Log in</h2>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="input-email">Email</label>
                        <input type="text" id="input-email" onChange={this.changeEmail} value={this.state.username} className="input-field" />

                        <label htmlFor="input-password">Password</label>
                        <input type="password" id="input-password" onChange={this.changePassword} value={this.state.password} className="input-field" />

                        <div>
                            <a href="/signup">Sign up...</a>
                            <input type="submit" className="btn-login" value="Log in" />
                        </div>
                    </form>
                </section>

                <section className="information">
                    <h2>Information about the project</h2>
                    <p>This project is for IDG2671. The purpose of this site is to make it easy for teachers to find extra examiners.</p>
                </section>

                <section className="statistics">
                    <h2>Statistics</h2>
                    <p>
                        <span>Current open requests:</span>
                        <br />0
                    </p>
                    <p>
                        <span>Matched requests:</span>
                        <br />0
                    </p>
                    <p>
                        <span>Total number of requests:</span>
                        <br />0
                    </p>
                </section>
            </div>
        );
    }
}

export default LogIn;
