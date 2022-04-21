import React, { Component } from "react";
import "./styles/style.css";
import "./styles/media.css";
import "./styles/edit-profile.css";

class EditProfile extends Component {
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
                        <input type="text" id="edit-name" className="updateProfile" required />

                        <label htmlFor="edit-email">Email</label>
                        <input type="text" id="edit-email" className="updateProfile" required />

                        <label htmlFor="edit-phone">Phone number</label>
                        <input type="tel" id="edit-phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="updateProfile" />

                        <label htmlFor="edit-university">University</label>
                        <input type="text" id="edit-university" className="updateProfile" required />

                        <label htmlFor="edit-password">Change password</label>
                        <input type="password" id="edit-password" minLength="6" maxLength="20" className="updateProfile" required />

                        <label htmlFor="edit-description">Description</label>
                        <textarea id="edit-description" placeholder="Your description here..." className="updateProfile" required />

                        <input type="submit" className="btn-edit" value="Save" />
                    </form>
                </main>
            </div>
        );
    }
}

export default EditProfile;
