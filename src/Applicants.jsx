import React, { Component } from "react";
import "./styles/style.css";
import "./styles/media.css";
import "./styles/applicants.css";

class ViewApplicants extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">Top of page</a>
                </div>
                <main className="data">
                    <h1 className="applicant-header">Applicants</h1>

                    <div className="applicant-list">
                        <section>
                            <div className="applicant-details">
                                <h2>
                                    <a href="profile?id=6294fa3ecd5bd256d96352a8">Testing test</a>
                                </h2>
                                <p>University: NTNU</p>
                                <p>Education level: prof</p>
                            </div>
                            <div className="accept-applicant">
                                <button className="btn-applicant">Accept applicant</button>
                            </div>
                        </section>
                        <section>
                            <div className="applicant-details">
                                <h2>Full name</h2>
                                <p>University</p>
                                <p>Education level</p>
                            </div>
                            <div className="accept-applicant">
                                <button className="btn-applicant">Accept applicant</button>
                            </div>
                        </section>
                        <section>
                            <div className="applicant-details">
                                <h2>Full name</h2>
                                <p>University</p>
                                <p>Education level</p>
                            </div>
                            <div className="accept-applicant">
                                <button className="btn-applicant">Accept applicant</button>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}

export default ViewApplicants;
