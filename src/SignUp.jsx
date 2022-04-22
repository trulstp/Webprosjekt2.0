import React, { Component } from "react";
import "./styles/signup.css";
import "./styles/signup-media.css";
import axios from 'axios'

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            phonenr: "",
            university: "",
            password: ""
        };
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeUniversity = this.changeUniversity.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changeName(event) {
        this.setState({
            name: event.target.value,
        });
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value,
        });
    }

    changePhone(event) {
        this.setState({
            phonenr: event.target.value,
        });
    }

    changeUniversity(event) {
        this.setState({
            university: event.target.value,
        });
    }

    changePassword(event) {
        this.setState({
            password: event.target.value,
        });
    }

    onSubmit(event) {
        event.preventDefault()
        try {
        const registered = {
            name: this.state.name,
            email: this.state.email,
            phonenr: this.state.phonenr,
            university: this.state.university,
            password: this.state.password
        }

        axios.post('localhost:5000/app/register', registered)
        .then(response => console.log(response.data))

        this.setState({
            name: "",
            email: "",
            phonenr: "",
            university: "",
            password: ""
        })
    } catch(err){
        console.log(err)
    }

    }

    render() {
        return (
            <div className="signup-wrapper">
                <h1>Sign up</h1>

                <form onSubmit={this.onSubmit}>
                    <label htmlFor="input-name">Full name</label>
                    <input type="text" id="input-name" onChange={this.changeName} value={this.state.name} required />

                    <label htmlFor="input-email">Email</label>
                    <input type="text" id="input-email" onChange={this.changeEmail} value={this.state.email} required />

                    <label htmlFor="input-phone">Phone number</label>
                    <input type="tel" id="input-phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={this.changePhone} value={this.state.phonenr} />

                    <label htmlFor="input-university">University</label>
                    <input type="text" id="input-university" onChange={this.changeUniversity} value={this.state.university} required />

                    <label htmlFor="input-password">Create password</label>
                    <input type="password" id="input-password" onChange={this.changePassword} value={this.state.password} minLength="6" maxLength="20" required />

                    <div className="signup-buttons">
                        <a href="#">I already have an account...</a>
                        <input type="submit" className="btn-signup" value="Sign up" />
                    </div>
                </form>
            </div>
        );
    }
}



export default SignUp;
