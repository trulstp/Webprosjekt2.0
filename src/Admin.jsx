import React, { Component } from "react";
import "./styles/style.css";
import "./styles/media.css";
import "./styles/admin.css";

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            addUsersActive: true,
        };
    }

    addUsers() {
        return (
            <div className="new-user-wrapper">
                <section className="new-user">
                    <div className="new-user-details">
                        <h2>Full name</h2>
                        <p>Email: </p>
                        <p>University: </p>
                        <p>Degree: </p>
                    </div>
                    <div className="btn-admin-wrapper">
                        <button className="btn-admin">Accept</button>
                        <button className="btn-admin delete-user">Reject</button>
                    </div>
                </section>

                <section className="new-user">
                    <div className="new-user-details">
                        <h2>Full name</h2>
                        <p>Email: </p>
                        <p>University: </p>
                        <p>Degree: </p>
                    </div>
                    <div className="btn-admin-wrapper">
                        <button className="btn-admin">Accept</button>
                        <button className="btn-admin delete-user">Reject</button>
                    </div>
                </section>
                <section className="new-user">
                    <div className="new-user-details">
                        <h2>Full name</h2>
                        <p>Email: </p>
                        <p>University: </p>
                        <p>Degree: </p>
                    </div>
                    <div className="btn-admin-wrapper">
                        <button className="btn-admin">Accept</button>
                        <button className="btn-admin delete-user">Reject</button>
                    </div>
                </section>
            </div>
        );
    }

    manageUsers() {
        return (
            <div className="new-user-wrapper">
                <section className="new-user">
                    <div className="new-user-details">
                        <h2>Full name</h2>
                        <p>Email: </p>
                        <p>University: </p>
                        <p>Degree: </p>
                    </div>
                    <div className="btn-admin-wrapper">
                        <button className="btn-admin delete-user">Delete</button>
                    </div>
                </section>

                <section className="new-user">
                    <div className="new-user-details">
                        <h2>Full name</h2>
                        <p>Email: </p>
                        <p>University: </p>
                        <p>Degree: </p>
                    </div>
                    <div className="btn-admin-wrapper">
                        <button className="btn-admin delete-user">Delete</button>
                    </div>
                </section>
                <section className="new-user">
                    <div className="new-user-details">
                        <h2>Full name</h2>
                        <p>Email: </p>
                        <p>University: </p>
                        <p>Degree: </p>
                    </div>
                    <div className="btn-admin-wrapper">
                        <button className="btn-admin delete-user">Delete</button>
                    </div>
                </section>
            </div>
        );
    }

    render() {
        const addUsers = this.addUsers();
        const manageUsers = this.manageUsers();

        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">Top of page</a>
                </div>
                <main className="data">
                    <h1>Manage users</h1>
                    <div>
                        <div className="admin-controls">
                            <button
                                onClick={() =>
                                    this.setState({
                                        addUsersActive: true,
                                    })
                                }
                                className={this.state.addUsersActive ? "active" : ""}
                            >
                                Add users
                            </button>

                            <button
                                onClick={() =>
                                    this.setState({
                                        addUsersActive: false,
                                    })
                                }
                                className={this.state.addUsersActive ? "" : "active"}
                            >
                                Manage users
                            </button>
                        </div>

                        <div id="admin-result">{this.state.addUsersActive ? addUsers : manageUsers}</div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Admin;
