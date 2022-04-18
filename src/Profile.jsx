import React, { Component } from "react";
import "./styles/style.css";
import "./styles/media.css";
import "./styles/profile.css";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            requestActive: true,
        };
    }

    showRequests() {
        return (
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
                    <a href="#">View applicants</a>
                    <a href="#">Edit request</a>
                </div>
            </section>
        );
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
                        <a href="#">View request</a>
                    </div>
                </section>
            </div>
        );
    }

    render() {
        const showRequests = this.showRequests();
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

                        <a href="#" className="edit-profile">
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
                                Open requests
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

                        <div id="profile-result">{this.state.requestActive ? showRequests : showHistory}</div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Profile;
