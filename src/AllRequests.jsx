import React, { Component } from "react";
import axios from "axios";

import "./styles/style.css";
import "./styles/media.css";
import "./styles/all-requests.css";

const Requests = ({ requests }) => {
    if (requests.length > 0) {
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
                                <span className="bold">Level of examination:</span> {request.examLvl}
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
    } else {
        return (
            <div>
                <section className="request">
                    <p>There are currently no open requests</p>
                </section>
            </div>
        );
    }
};

const getLink = (id) => {
    return `view-request?id=${id}`;
};

class AllRequests extends Component {
    constructor() {
        super();
        this.state = {
            requests: [],
            tagValue: "",
            filteredList: [],
            filterOn: false,
        };
        this.filterRequest = this.filterRequest.bind(this);
    }

    async componentDidMount() {
        const response = await this.fetchRequests();
        this.setState({ requests: response });
    }

    filterRequest(event) {
        const tag = event.target.value;
        const requestList = this.state.requests;
        this.setState({ tagValue: tag });

        if (tag) {
            const filteredList = requestList.filter((currentRequest) => {
                return tag === currentRequest.tags;
            });
            this.setState({ filteredList: filteredList });
            this.setState({ filterOn: true });
        } else {
            this.setState({ filterOn: false });
        }
    }

    async fetchRequests() {
        const allRequests = await axios.get("https://webbackend6.herokuapp.com/exam/");
        const openRequests = allRequests.data.filter((request) => {
            return request.open && this.hasHappened(request.deadline);
        });

        return openRequests;
    }

    getDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");

        return `${year}${month}${day}`;
    }

    hasHappened(deadlineString) {
        const currentDate = parseInt(this.getDate());
        const deadline = parseInt(deadlineString.replaceAll("-", ""));

        if (deadline >= currentDate) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">To top of page</a>
                </div>
                <main className="data-request">
                    <div className="request-controls">
                        <h1>Available requests</h1>
                        <label htmlFor="search-tag">Filter by tag: </label>
                        <select id="search-tag" onChange={this.filterRequest} value={this.state.tagValue}>
                            <option value="">Select a tag</option>
                            <option value="Estetiske fag, kunst- og musikkfag">Estetiske fag, kunst- og musikkfag</option>
                            <option value="Fiskeri-, husdyr- og landbruksfag">Fiskeri-, husdyr- og landbruksfag</option>
                            <option value="Historie, religion, id??fag">Historie, religion, id??fag</option>
                            <option value="Idrettsfag, kropps??ving og friluftsliv">Idrettsfag, kropps??ving og friluftsliv</option>
                            <option value="Informasjonsteknologi og informatikk">Informasjonsteknologi og informatikk</option>
                            <option value="Juridiske fag, rettsvitenskap, politi">Juridiske fag, rettsvitenskap, politi</option>
                            <option value="L??rer- og lektorutdanning">L??rer- og lektorutdanning</option>
                            <option value="Matematikk og naturfag">Matematikk og naturfag</option>
                            <option value="Mediefag, biblotekfag og journalistfag">Mediefag, biblotekfag og journalistfag</option>
                            <option value="Medisin, odontologi, helse- og sosialfag">Medisin, odontologi, helse- og sosialfag</option>
                            <option value="Pedagogiske fag">Pedagogiske fag</option>
                            <option value="Reiselivsfag, hotellfag">Reiselivsfag, hotellfag</option>
                            <option value="Samfunnsfag, psykologi">Samfunnsfag, psykologi</option>
                            <option value="Spr??k, litteratur">Spr??k, litteratur</option>
                            <option value="Teknologi, ingeni??rfag og arkitektur">Teknologi, ingeni??rfag og arkitektur</option>
                            <option value="??konomi og administrasjon">??konomi og administrasjon</option>
                        </select>
                    </div>

                    <div className="request-list" id="request-list">
                        <Requests requests={this.state.filterOn ? this.state.filteredList : this.state.requests} />
                    </div>
                </main>
            </div>
        );
    }
}

export default AllRequests;
