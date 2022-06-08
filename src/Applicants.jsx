import React, { Component } from "react";
import axios from "axios";
import "./styles/style.css";
import "./styles/media.css";
import "./styles/applicants.css";

const ShowApplicants = ({ profileList }) => {
    if (profileList.length > 0) {
        return (
            <div>
                {profileList.map((applicant) => (
                    <section key={applicant.id}>
                        <div className="applicant-details">
                            <h2>
                                <a href={getLink(applicant.id)}>{applicant.name}</a>
                            </h2>
                            <p>University: {applicant.university}</p>
                            <p>Degree: {applicant.degree}</p>
                        </div>
                        <div className="accept-applicant">
                            <a href={getLink(applicant.id)} className="btn-applicant">
                                View profile
                            </a>
                            <button onClick={(event) => acceptUser(applicant.id, event.target)} className="btn-applicant">
                                Accept applicant
                            </button>
                        </div>
                    </section>
                ))}
            </div>
        );
    } else {
        return (
            <div>
                <section className="profile-request">
                    <p>No applications.</p>
                </section>
            </div>
        );
    }
};

const ShowAcceptedApplicant = ({ profile }) => {
    return (
        <div>
            <section>
                <div className="applicant-details">
                    <h2>
                        <a href={getLink(profile._id)}>{profile.name}</a>
                    </h2>
                    <p>University: {profile.university}</p>
                    <p>Degree: {profile.degree}</p>
                </div>
                <div className="accept-applicant">
                    <a href={getLink(profile._id)} className="btn-applicant">
                        View profile
                    </a>
                </div>
            </section>
        </div>
    );
};

const getLink = (id) => {
    return `profile?id=${id}`;
};

const fetchRequestId = () => {
    const query = document.location.search;
    const parameter = new URLSearchParams(query);
    const id = parameter.get("id");
    return id;
};

const acceptUser = async (id, btn) => {
    const request = await axios.get(`https://webbackend6.herokuapp.com/exam/${fetchRequestId()}`);
    const matched = request.data.req[0].matched;
    if (!matched) {
        const accept = {
            acceptedApplicant: id,
            matched: true,
            open: false,
        };
        axios.patch(`https://webbackend6.herokuapp.com/exam/${fetchRequestId()}`, accept);

        btn.disabled = true;
        btn.innerHTML = "Accepted applicant";
        btn.setAttribute("class", "btn-applicant-accepted");
    }
};

class ViewApplicants extends Component {
    constructor() {
        super();
        this.state = {
            profileList: [],
            matched: false,

            acceptedApplicant: {},
        };
    }

    async componentDidMount() {
        const id = this.fetchId();

        const matched = await this.requestMatched(id);
        this.setState({ matched: matched });

        if (matched) {
            const profile = await this.fetchAccepted(id);
            this.setState({ acceptedApplicant: profile });
        } else {
            const requestResponse = await this.fetchRequest(id);
            this.setState({ profileList: requestResponse });
        }
    }

    fetchId() {
        const query = document.location.search;
        const parameter = new URLSearchParams(query);
        const id = parameter.get("id");
        return id;
    }

    async requestMatched(id) {
        const request = await axios.get(`https://webbackend6.herokuapp.com/exam/${id}`);
        return request.data.req[0].matched;
    }

    async fetchRequest(id) {
        const applicants = await axios.get(`https://webbackend6.herokuapp.com/exam/${id}`);
        const applicantsId = applicants.data.req[0].applicants;
        const profiles = await axios.get(`https://webbackend6.herokuapp.com/app/`);

        let profileList = [];

        applicantsId.forEach((applicantId) => {
            const profile = profiles.data.find((profile) => profile._id === applicantId);
            if (profile) {
                const details = {
                    id: profile._id,
                    name: profile.name,
                    university: profile.university,
                    degree: profile.degree,
                };

                profileList.push(details);
            }
        });
        return profileList;
    }

    async fetchAccepted(id) {
        const request = await axios.get(`https://webbackend6.herokuapp.com/exam/${id}`);
        const acceptedApplicantId = request.data.req[0].acceptedApplicant;
        const profiles = await axios.get(`https://webbackend6.herokuapp.com/app/`);
        const profile = profiles.data.find((profile) => profile._id === acceptedApplicantId);
        return profile;
    }

    render() {
        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">Top of page</a>
                </div>
                <main className="data">
                    <h1 className="applicant-header">{this.state.matched ? "Accepted applicant" : "Applicants"}</h1>

                    <div className="applicant-list">
                        {this.state.matched ? <ShowAcceptedApplicant profile={this.state.acceptedApplicant} /> : <ShowApplicants profileList={this.state.profileList} />}
                    </div>
                </main>
            </div>
        );
    }
}

export default ViewApplicants;

//
