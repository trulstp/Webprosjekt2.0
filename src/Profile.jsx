import React, { Component } from "react";
import axios from "axios";

import "./styles/style.css";
import "./styles/media.css";
import "./styles/profile.css";

const ShowRequests = ({ requestList }) => {
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
                            <span className="bold">Minimum education for examiner:</span> {currentRequest.minEdu}
                        </p>
                        <ul>
                            <li>{currentRequest.tags}</li>
                        </ul>
                    </div>
                    <div className="profile-request-controls">
                        <a href="/view-applicants">View applicants</a>
                        <a href={getLink(currentRequest._id)}>Edit request</a>
                    </div>
                </section>
            ))}
        </div>
    );
};

const getLink = (id) => {
    return `edit-request?id=${id}`;
};

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            requestList: [],
            requestActive: true,
        };
    }

    async componentDidMount() {
        const response = await this.fetchRequests();
        this.setState({ requestList: response.data });
    }

    fetchRequests() {
        return axios.get("http://localhost:5000/exam/");
    }

    showHistory() {
        return (
            <div>
                <h2 className="examiner-header">Name Lastname has been an examiner on:</h2>
                <section className="profile-request">
                    <div className="profile-request-details">
                        <h2>Request name</h2>
                        <p>Posted: 18.04.2022</p>
                        <p>Exam period: 21.05.2022 - 22.05.2022</p>
                        <ul>
                            <li>Tag 1</li>
                            <li>Tag 2</li>
                        </ul>
                    </div>
                    <div className="profile-request-controls">
                        <a href="/view-request">View request</a>
                    </div>
                </section>
            </div>
        );
    }

    render() {
        const showHistory = this.showHistory();

        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">Top of page</a>
                </div>
                <main className="data">
                    <h1>Name Lastname</h1>
                    <section>
                        <h2>Description</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est massa sit imperdiet pharetra viverra. Augue porta enim sit vulputate adipiscing vel, non commodo.
                            Sollicitudin morbi sed quis accumsan et cursus purus. Quam sollicitudin arcu feugiat urna dictum faucibus tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc est massa sit imperdiet pharetra viverra. Augue porta enim sit vulputate adipiscing vel, non commodo. Sollicitudin morbi sed quis accumsan et cursus purus. Quam
                            sollicitudin arcu feugiat urna dictum faucibus tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est massa sit imperdiet pharetra viverra. Augue
                            porta enim sit vulputate adipiscing vel, non commodo. Sollicitudin morbi sed quis accumsan et cursus purus. Quam sollicitudin arcu feugiat urna dictum faucibus tincidunt.
                        </p>

                        <a href="/edit-profile" className="edit-profile">
                            Edit profile
                        </a>
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

                        <div id="profile-result">{this.state.requestActive ? <ShowRequests requestList={this.state.requestList} /> : showHistory}</div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Profile;
