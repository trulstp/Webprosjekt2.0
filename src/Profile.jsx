import React, { Component } from "react";
import axios from "axios";

import "./styles/style.css";
import "./styles/media.css";
import "./styles/profile.css";

const ShowRequests = ({ requestList }) => {
    if (requestList.length > 0) {
        return (
            <div>
                {requestList.map((currentRequest) => (
                    <section className="profile-request" key={currentRequest._id}>
                        <div className="profile-request-details">
                            <h2>{currentRequest.title}</h2>
                            <p>Posted: {currentRequest.deadline}</p>
                            <p>
                                Exam period: {currentRequest.examStart} - {currentRequest.examEnd}
                            </p>
                            <p>
                                <span className="bold">Level of examination:</span> {currentRequest.examLvl}
                            </p>
                            <ul>
                                <li>{currentRequest.tags}</li>
                            </ul>
                        </div>
                        <div className="profile-request-controls">
                            <a href={getLink(currentRequest._id)}>View request</a>
                        </div>
                    </section>
                ))}
            </div>
        );
    } else {
        return (
            <div>
                <section className="profile-request">
                    <p>The user has not posted any requests.</p>
                </section>
            </div>
        );
    }
};

const ShowHistory = ({ historyList, name }) => {
    if (historyList.length > 0) {
        return (
            <div>
                <h2 className="examiner-header">{name} has been an examiner on:</h2>
                {historyList.map((currentEntry) => (
                    <div key={currentEntry._id}>
                        <section className="profile-request">
                            <div className="profile-request-details">
                                <h2>{currentEntry.title}</h2>
                                <p>Posted: {currentEntry.date}</p>
                                <p>
                                    Exam period: {currentEntry.examStart} - {currentEntry.examEnd}
                                </p>
                                <ul>
                                    <li>{currentEntry.tags}</li>
                                </ul>
                            </div>
                            <div className="profile-request-controls">
                                <a href={getLink(currentEntry._id)}>View request</a>
                            </div>
                        </section>
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <div>
                <section className="profile-request">
                    <p>{name} has never been accepted as an applicant.</p>
                </section>
            </div>
        );
    }
};

const getLink = (id) => {
    return `view-request?id=${id}`;
};

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            requestList: [],
            historyList: [],
            requestActive: true,

            name: "Name",
            description: "",
            university: "",
            degree: "",
        };
    }

    async componentDidMount() {
        const id = this.fetchId();
        const requestResponse = await this.fetchRequests(id);
        this.setState({ requestList: requestResponse.data.req });

        const profileResponse = await this.fetchProfile(id);
        this.setState({
            name: profileResponse.data.user[0].name,
            description: profileResponse.data.user[0].description,
            university: profileResponse.data.user[0].university,
            degree: profileResponse.data.user[0].degree,
        });

        const history = await this.fetchHistory(id);
        this.setState({ historyList: history.data.req });
    }

    fetchRequests(id) {
        return axios.get(`https://webbackend6.herokuapp.com/exam/author/${id}`);
    }

    fetchProfile(id) {
        return axios.get(`https://webbackend6.herokuapp.com/app/${id}`);
    }

    fetchHistory(id) {
        return axios.get(`https://webbackend6.herokuapp.com/exam/history/${id}`);
    }

    fetchId() {
        const query = document.location.search;
        const parameter = new URLSearchParams(query);
        const id = parameter.get("id");
        return id;
    }

    render() {
        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">Top of page</a>
                </div>
                <main className="data">
                    <h1>{this.state.name}</h1>
                    <section>
                        <p>Univeristy: {this.state.university}</p>
                        <p>Degree: {this.state.degree}</p>
                        <h2>Description</h2>
                        <p>{this.state.description}</p>
                        <br />
                    </section>

                    <div>
                        <div className="profile-controls">
                            <button
                                onClick={() =>
                                    this.setState({
                                        requestActive: true,
                                    })
                                }
                                className={this.state.requestActive ? "active" : ""}
                            >
                                Job ads
                            </button>
                            <button
                                onClick={() =>
                                    this.setState({
                                        requestActive: false,
                                    })
                                }
                                className={this.state.requestActive ? "" : "active"}
                            >
                                History
                            </button>
                        </div>

                        <div id="profile-result">
                            {this.state.requestActive ? <ShowRequests requestList={this.state.requestList} /> : <ShowHistory historyList={this.state.historyList} name={this.state.name} />}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Profile;
