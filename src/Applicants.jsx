import React, { Component } from "react";
import axios from "axios";
import "./styles/style.css";
import "./styles/media.css";
import "./styles/applicants.css";

const ShowApplicants = ({ profileList }) => {
    console.log(profileList, profileList[0], profileList.length);
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
                            <p>Education level: {applicant.degree}</p>
                        </div>
                        <div className="accept-applicant">
                            <button className="btn-applicant">Accept applicant</button>
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

const getLink = (id) => {
    return `profile?id=${id}`;
};

class ViewApplicants extends Component {
    constructor() {
        super();
        this.state = {
            applicantList: [],
            profileList: [],
        };
    }

    async componentDidMount() {
        const id = await this.fetchId();

        const requestResponse = await this.fetchRequest(id);
        this.setState({ applicantList: requestResponse.data.req[0].applicants });

        const profileList = this.generateProfileList();
        this.setState({ profileList: profileList });
    }

    fetchId() {
        const query = document.location.search;
        const parameter = new URLSearchParams(query);
        const id = parameter.get("id");
        return id;
    }

    fetchRequest(id) {
        return axios.get(`http://localhost:5000/exam/${id}`);
    }

    async fetchProfile(id) {
        return axios.get(`http://localhost:5000/admin/${id}`);
    }

    generateProfileList() {
        let profileList = [];
        const applicantList = this.state.applicantList;

        applicantList.forEach(async (id) => {
            const fetchProfile = await this.fetchProfile(id);
            const profile = fetchProfile.data.user[0];
            const details = {
                id: profile._id,
                name: profile.name,
                university: profile.university,
                degree: profile.degree,
            };

            profileList.push(details);
        });

        return profileList;
    }

    render() {
        //console.log(this.state.profileList);
        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">Top of page</a>
                </div>
                <main className="data">
                    <h1 className="applicant-header">Applicants</h1>

                    <div className="applicant-list">
                        <ShowApplicants profileList={this.state.profileList} />
                    </div>
                </main>
            </div>
        );
    }
}

export default ViewApplicants;
