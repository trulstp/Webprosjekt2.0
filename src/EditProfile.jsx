import React, { Component } from "react";
import axios from "axios";
import "./styles/style.css";
import "./styles/media.css";
import "./styles/edit-profile.css";

class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            phonenr: "",
            university: "",
            degree: "",
            password: "",
            description: "",

            feedback: "",
        };

        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeUniversity = this.changeUniversity.bind(this);
        this.changeDegree = this.changeDegree.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
    changeDegree(event) {
        this.setState({
            degree: event.target.value,
        });
    }
    changePassword(event) {
        this.setState({
            password: event.target.value,
        });
    }
    changeDescription(event) {
        this.setState({
            description: event.target.value,
        });
    }

    async componentDidMount() {
        const id = this.fetchId();
        const response = await this.fetchRequest(id);
        this.setState({
            name: response.data.user[0].name,
            email: response.data.user[0].email,
            phonenr: response.data.user[0].phonenr,
            university: response.data.user[0].university,
            degree: response.data.user[0].degree,
            description: response.data.user[0].description,
        });
    }

    fetchRequest(id) {
        return axios.get(`http://localhost:5000/app/${id}`);
    }

    fetchId() {
        const query = document.location.search;
        const parameter = new URLSearchParams(query);
        const id = parameter.get("id");
        return id;
    }

    onSubmit(event) {
        event.preventDefault();

        //Checks if password has been changed
        if (this.state.password.length > 6) {
            const request = {
                name: this.state.name,
                email: this.state.email,
                phonenr: this.state.phonenr,
                university: this.state.university,
                degree: this.state.degree,
                password: this.state.password,
                description: this.state.description,
            };

            axios.patch(`http://localhost:5000/app/${this.fetchId()}`, request).then((response) => console.log(response.data));
        } else {
            const requestWithoutPassword = {
                name: this.state.name,
                email: this.state.email,
                phonenr: this.state.phonenr,
                university: this.state.university,
                degree: this.state.degree,
                description: this.state.description,
            };

            axios.patch(`http://localhost:5000/app/${this.fetchId()}`, requestWithoutPassword).then((response) => console.log(response.data));
        }

        this.setState({
            feedback: "Profile has been updated",
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">Top of page</a>
                </div>
                <main className="data">
                    <h1>Edit profile</h1>

                    <form onSubmit={this.onSubmit} className="update-wrapper">
                        <label htmlFor="edit-name">Full name</label>
                        <input type="text" id="edit-name" className="updateProfile" onChange={this.changeName} value={this.state.name} required />

                        <label htmlFor="edit-email">Email</label>
                        <input type="text" id="edit-email" className="updateProfile" onChange={this.changeEmail} value={this.state.email} required />

                        <label htmlFor="edit-phone">Phone number</label>
                        <input type="tel" id="edit-phone" className="updateProfile" onChange={this.changePhone} value={this.state.phonenr} />

                        <label htmlFor="edit-university">University</label>
                        <input type="text" id="edit-university" className="updateProfile" onChange={this.changeUniversity} value={this.state.university} required />

                        <label htmlFor="edit-education">Education</label>
                        <input type="text" id="edit-education" className="updateProfile" onChange={this.changeDegree} value={this.state.degree} required />

                        <label htmlFor="edit-password">Change password</label>
                        <input type="password" id="edit-password" minLength="6" maxLength="20" className="updateProfile" onChange={this.changePassword} value={this.state.password} />

                        <label htmlFor="edit-description">Description</label>
                        <textarea id="edit-description" placeholder="Your description here..." className="updateProfile" onChange={this.changeDescription} value={this.state.description} />

                        <p className="submit-feedback">{this.state.feedback}</p>
                        <input type="submit" className="btn-edit" value="Save" />
                    </form>
                </main>
            </div>
        );
    }
}

export default EditProfile;
