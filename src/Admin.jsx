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
                        <button className="btn-admin" onClick={() => acceptUser(user._id)}>
                            Accept
                        </button>
                        <button className="btn-admin delete-user" onClick={() => rejectUser(user._id)}>
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
                        <button className="btn-admin delete-user" onClick={() => deleteUser(user._id)}>
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

const acceptUser = (id) => {
    axios
        .get(`http://localhost:5000/admin/${id}`)
        .then((response) => {
            const user = {
                name: response.data.user[0].name,
                email: response.data.user[0].email,
                phonenr: response.data.user[0].phonenr,
                university: response.data.user[0].university,
                degree: response.data.user[0].degree,
                password: response.data.user[0].password,
            };
            console.log(user);
            return user;
        })
        .then((response) => {
            console.log(response);
            axios.post("http://localhost:5000/app/", response);
        });
};

const rejectUser = (id) => {
    axios.delete(`http://localhost:5000/admin/${id}`).then((response) => console.log(response.data));
};

const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/app/${id}`).then((response) => console.log(response.data));
};

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            addUsersActive: true,
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
        return axios.get("http://localhost:5000/admin/");
    }

    fetchUsers() {
        return axios.get("http://localhost:5000/app/");
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
