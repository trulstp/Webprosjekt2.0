import React, { Component } from "react";
import axios from "axios";

import "./styles/style.css";
import "./styles/media.css";
import "./styles/admin.css";

const AddUsers = ({ newUsers }) => {
    return (
        <div className="new-user-wrapper">
            {newUsers.map((user) => (
                <section className="new-user" key={user._id}>
                    <div className="new-user-details">
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>University: {user.university}</p>
                        <p>Title: {user.degree}</p>
                    </div>
                    <div className="btn-admin-wrapper">
                        <button className="btn-admin" onClick={(event) => acceptUser(user._id, event.target)}>
                            Accept
                        </button>
                        <button className="btn-admin delete-user" onClick={(event) => deleteUser(user._id, event.target)}>
                            Reject
                        </button>
                    </div>
                </section>
            ))}
        </div>
    );
};

const ManageUsers = ({ addedUsers }) => {
    return (
        <div className="new-user-wrapper">
            {addedUsers.map((user) => (
                <section className="new-user" key={user._id}>
                    <div className="new-user-details">
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>University: {user.university}</p>
                        <p>Title: {user.degree}</p>
                    </div>
                    <div className="btn-admin-wrapper">
                        <a href={getLink(user._id)} className="btn-admin">
                            Edit
                        </a>
                        <button className="btn-admin delete-user" onClick={(event) => deleteUser(user._id, event.target)}>
                            Delete
                        </button>
                    </div>
                </section>
            ))}
        </div>
    );
};

const getLink = (id) => {
    return `edit-profile?id=${id}`;
};

const acceptUser = (id, btn) => {
    const accept = {
        verified: true,
    };
    axios.patch(`https://webbackend6.herokuapp.com/app/${id}`, accept);

    btn.disabled = true;
    btn.innerHTML = "Accepted";
    btn.setAttribute("class", "btn-admin-accepted");
};

const deleteUser = (id, btn) => {
    axios.delete(`https://webbackend6.herokuapp.com/app/${id}`).then((response) => console.log(response.data));

    btn.disabled = true;
    btn.innerHTML = "Deleted";
    btn.setAttribute("class", "btn-admin-deleted");
};

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            addUsersActive: true,
            userAccepted: false,
            newUsers: [],
            addedUsers: [],
        };
    }

    async componentDidMount() {
        const newUser = await this.fetchNewUsers();
        const manageUser = await this.fetchUsers();

        this.setState({ newUsers: newUser.data });
        this.setState({ addedUsers: manageUser.data });
    }

    fetchNewUsers() {
        return axios.get("https://webbackend6.herokuapp.com/app/unverified");
    }

    fetchUsers() {
        return axios.get("https://webbackend6.herokuapp.com/app/verified");
    }

    render() {
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

                        <div id="admin-result">{this.state.addUsersActive ? <AddUsers newUsers={this.state.newUsers} /> : <ManageUsers addedUsers={this.state.addedUsers} />}</div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Admin;
