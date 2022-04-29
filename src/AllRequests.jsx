import React, { Component } from "react";
import axios from "axios";

import "./styles/style.css";
import "./styles/media.css";
import "./styles/all-requests.css";

const Requests = ({ requests }) => {
    return (
        <div>
            {requests.map((request) => (
                <section className="request" key={request._id}>
                    <div className="request-details">
                        <h2>{request.title}</h2>
                        <p>Application deadline: {request.deadline}</p>
                        <p>
                            Exam period: {request.examStart} - {request.examEnd}
                        </p>
                        <p>
                            <span className="bold">Minimum education for examiner:</span> {request.minEdu}
                        </p>
                        <ul>
                            <li>{request.tags}</li>
                        </ul>
                    </div>
                    <div className="view-request-wrapper">
                        <a href={getLink(request._id)} className="view-request">
                            View request
                        </a>
                    </div>
                </section>
            ))}
        </div>
    );
};

const getLink = (id) => {
    return `view-request?id=${id}`;
};

class AllRequests extends Component {
    constructor() {
        super();
        this.state = {
            requests: [],
        };
    }

    async componentDidMount() {
        const response = await this.fetchRequests();
        this.setState({ requests: response.data });
    }

    fetchRequests() {
        return axios.get("http://localhost:5000/exam/");
    }

    render() {
        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">Top of page</a>
                </div>
                <main className="data-request">
                    <div className="request-controls">
                        <h1>Available requests</h1>
                        <label htmlFor="search-tag">Search by tag: </label>
                        <select id="search-tag">
                            <option value="">Select a tag</option>
                            <option value="Estetiske fag, kunst- og musikkfag">Estetiske fag, kunst- og musikkfag</option>
                            <option value="Fiskeri-, husdyr- og landbruksfag">Fiskeri-, husdyr- og landbruksfag</option>
                            <option value="Historie, religion, idèfag">Historie, religion, idèfag</option>
                            <option value="Idrettsfag, kroppsøving og friluftsliv">Idrettsfag, kroppsøving og friluftsliv</option>
                            <option value="Informasjonsteknologi og informatikk">Informasjonsteknologi og informatikk</option>
                            <option value="Juridiske fag, rettsvitenskap, politi">Juridiske fag, rettsvitenskap, politi</option>
                            <option value="Lærer- og lektorutdanning">Lærer- og lektorutdanning</option>
                            <option value="Matematikk og naturfag">Matematikk og naturfag</option>
                            <option value="Mediefag, biblotekfag og journalistfag">Mediefag, biblotekfag og journalistfag</option>
                            <option value="Medisin, odontologi, helse- og sosialfag">Medisin, odontologi, helse- og sosialfag</option>
                            <option value="Pedagogiske fag">Pedagogiske fag</option>
                            <option value="Reiselivsfag, hotellfag">Reiselivsfag, hotellfag</option>
                            <option value="Samfunnsfag, psykologi">Samfunnsfag, psykologi</option>
                            <option value="Språk, litteratur">Språk, litteratur</option>
                            <option value="Teknologi, ingeniørfag og arkitektur">Teknologi, ingeniørfag og arkitektur</option>
                            <option value="Økonomi og administrasjon">Økonomi og administrasjon</option>
                        </select>
                    </div>

                    <div className="request-list" id="request-list">
                        <Requests requests={this.state.requests} />
                    </div>
                </main>
            </div>
        );
    }
}

export default AllRequests;
