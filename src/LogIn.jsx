import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./styles/login.css";
import "./styles/login-media.css";

class LogIn extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            requestList: [],
        };
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value,
        });
    }

    changePassword(event) {
        this.setState({
            password: event.target.value,
        });
    }

    async componentDidMount() {
        const response = await this.fetchRequests();
        this.setState({ requestList: response.data });
    }

    fetchRequests() {
        return axios.get("http://localhost:5000/exam/stat");
    }

    onSubmit(event) {
        event.preventDefault();

        const login = {
            email: this.state.email,
            password: this.state.password,
        };

        axios.post("http://localhost:5000/app/login", login).then((res) => {
            let token = res.data;
            let decodedToken = jwt_decode(token);
            console.log(decodedToken.role);
            sessionStorage.setItem("role", decodedToken.role);
            sessionStorage.setItem("id", decodedToken.id);
            sessionStorage.setItem("name", decodedToken.name);
        });

        this.setState({
            email: "",
            password: "",
        });
        let test = sessionStorage.getItem("token");
        console.log(test);
    }

    checkNumber(type) {
        const requestList = this.state.requestList;
        let numberOpen = 0;
        let numberMatched = 0;
        requestList.forEach((request) => {
            if (request.open) {
                numberOpen++;
            }
            if (request.matched) {
                numberMatched++;
            }
        });

        if (type === "open") {
            return numberOpen;
        } else if (type === "matched") {
            return numberMatched;
        }
    }

    render() {
        return (
            <div className="login-wrapper">
                <h1>Examiner-finder</h1>

                <section className="login">
                    <h2>Log in</h2>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="input-email">Email</label>
                        <input type="text" id="input-email" onChange={this.changeEmail} value={this.state.email} className="input-field" />

                        <label htmlFor="input-password">Password</label>
                        <input type="password" id="input-password" onChange={this.changePassword} value={this.state.password} className="input-field" />

                        <div>
                            <a href="/signup">Sign up...</a>
                            <input type="submit" className="btn-login" value="Log in" />
                        </div>
                    </form>
                </section>

                <section className="login-information">
                    <h2>Information about the project</h2>
                    <p>
                        The purpose of this site is to make it easy for teachers to find extra examiners for upcoming exams. Teachers can post requests for examiners and apply as a second examiner.
                        All users must be accepted by an admin, before being able to access the site. This site is only for teachers.
                    </p>
                    <p>
                        This project is a course project for IDG2671-Webprosjekt. The group working on this project consists of Marie Holme Kjær and Truls Teige Pettersen. Both are in their 2nd year
                        of the Webutvikling bachelor programme.
                    </p>
                    <p>The website was built using the MERN codestack and is a single page application. The site works on mobile, tablet and desktop.</p>
                </section>

                <section className="login-statistics">
                    <h2>Statistics</h2>
                    <p>
                        <span>Current open requests:</span>
                        <br />
                        {this.checkNumber("open")}
                    </p>
                    <p>
                        <span>Matched requests:</span>
                        <br />
                        {this.checkNumber("matched")}
                    </p>
                    <p>
                        <span>Total number of requests:</span>
                        <br />
                        {this.state.requestList.length}
                    </p>
                </section>
            </div>
        );
    }
}

export default LogIn;
