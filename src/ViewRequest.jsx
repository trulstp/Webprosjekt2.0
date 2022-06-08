import React, { Component } from "react";
import axios from "axios";

import "./styles/style.css";
import "./styles/media.css";
import "./styles/view-request.css";

class ViewRequest extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            deadline: "",
            examStart: "",
            examEnd: "",
            tags: "",
            minEdu: "",
            examLvl: "",
            description: "",
            date: "",

            appFeedback: "",
        };

        this.applyUser = this.applyUser.bind(this);
    }

    async componentDidMount() {
        const id = this.fetchId();
        const response = await this.fetchRequest(id);
        this.setState({
            title: response.data.req[0].title,
            deadline: response.data.req[0].deadline,
            examStart: response.data.req[0].examStart,
            examEnd: response.data.req[0].examEnd,
            tags: response.data.req[0].tags,
            minEdu: response.data.req[0].minEdu,
            examLvl: response.data.req[0].examLvl,
            description: response.data.req[0].description,
            date: response.data.req[0].date,
        });
    }

    fetchRequest(id) {
        return axios.get(`https://webbackend6.herokuapp.com/exam/${id}`);
    }

    fetchId() {
        const query = document.location.search;
        const parameter = new URLSearchParams(query);
        const id = parameter.get("id");
        return id;
    }

    postedDate() {
        let posted = "";
        for (let i = 0; i < 10; i++) {
            posted += this.state.date[i];
        }
        return posted;
    }

    async applyUser() {
        const requestId = this.fetchId();
        const request = await this.fetchRequest(requestId);
        const applicants = request.data.req[0].applicants;
        const author = request.data.req[0].author;
        const matched = request.data.req[0].matched;
        const id = sessionStorage.getItem("id");

        //Checks if user has already applied
        const alreadyApplied = applicants.find((applicant) => applicant === id);
        let checkIfAuthor = false;

        if (author === id) {
            checkIfAuthor = true;
        }

        document.querySelector(".request-feedback").style.display = "block";

        if (!alreadyApplied && !checkIfAuthor && !matched) {
            applicants.push(id);

            const updatedApplicantList = {
                applicants: applicants,
            };

            axios.patch(`https://webbackend6.herokuapp.com/exam/${requestId}`, updatedApplicantList);

            this.setState({
                appFeedback: "You have applied.",
            });
        } else if (checkIfAuthor) {
            this.setState({
                appFeedback: "You can't apply to your own request.",
            });
        } else {
            this.setState({
                appFeedback: "You have already applied.",
            });
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">Top of page</a>
                </div>
                <main className="data">
                    <h1>{this.state.title}</h1>
                    <div className="details">
                        <p>
                            <span className="bold">Author:</span> Name Lastname
                        </p>
                        <p>Posted: {this.postedDate()}</p>
                        <p>Application deadline: {this.state.deadline}</p>
                        <p>
                            Exam period: {this.state.examStart} - {this.state.examEnd}
                        </p>
                        <ul>
                            <li>{this.state.tags}</li>
                        </ul>
                    </div>

                    <h2>Details</h2>
                    <p>
                        <span className="bold">Minimum education for examiner:</span> {this.state.minEdu}
                    </p>
                    <p>
                        <span className="bold">Level of examination:</span> {this.state.examLvl}
                    </p>

                    <h2>Description</h2>
                    <p>{this.state.description}</p>

                    <div className="btn-wrapper">
                        <button
                            className="apply"
                            onClick={() => {
                                this.applyUser();
                            }}
                        >
                            Apply as second examiner
                        </button>
                    </div>
                    <div className="request-feedback-wrapper">
                        <p className="request-feedback">{this.state.appFeedback}</p>
                    </div>
                </main>
            </div>
        );
    }
}

export default ViewRequest;
