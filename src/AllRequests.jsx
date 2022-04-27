import React, { Component } from "react";
import Select from "react-select";

import "./styles/style.css";
import "./styles/media.css";
import "./styles/all-requests.css";



class AllRequests extends Component {
    constructor() {
        super();
        this.tagList = [
            { value: "Estetiske fag, kunst- og musikkfag", label: "Estetiske fag, kunst- og musikkfag" },
            { value: "Fiskeri-, husdyr- og landbruksfag", label: "Fiskeri-, husdyr- og landbruksfag" },
            { value: "Historie, religion, idèfag", label: "Historie, religion, idèfag" },
            { value: "Idrettsfag, kroppsøving og friluftsliv", label: "Idrettsfag, kroppsøving og friluftsliv" },
            { value: "Informasjonsteknologi og informatikk", label: "Informasjonsteknologi og informatikk" },
            { value: "Juridiske fag, rettsvitenskap, politi", label: "Juridiske fag, rettsvitenskap, politi" },
            { value: "Lærer- og lektorutdanning", label: "Lærer- og lektorutdanning" },
            { value: "Matematikk og naturfag", label: "Matematikk og naturfag" },
            { value: "Mediefag, biblotekfag og journalistfag", label: "Mediefag, biblotekfag og journalistfag" },
            { value: "Medisin, odontologi, helse- og sosialfag", label: "Medisin, odontologi, helse- og sosialfag" },
            { value: "Pedagogiske fag", label: "Pedagogiske fag" },
            { value: "Reiselivsfag, hotellfag", label: "Reiselivsfag, hotellfag" },
            { value: "Samfunnsfag, psykologi", label: "Samfunnsfag, psykologi" },
            { value: "Språk, litteratur", label: "Språk, litteratur" },
            { value: "Teknologi, ingeniørfag og arkitektur", label: "Teknologi, ingeniørfag og arkitektur" },
            { value: "Økonomi og administrasjon", label: "Økonomi og administrasjon" }
        ];
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
                        <Select id="search-tag" options={this.tagList} placeholder="Search by tag..." isMulti />
                    </div>

                    <div className="request-list">
                        <section className="request">
                            <div className="request-details">
                                <h2>Request name</h2>
                                <p>Application deadline: 24.04.2022</p>
                                <p>Exam period: 21.05.2022 - 22.05.2022</p>
                                <p>
                                    <span className="bold">Minimum education for examiner:</span> Master
                                </p>
                                <ul>
                                    <li>Tag 1</li>
                                    <li>Tag 2</li>
                                </ul>
                            </div>
                            <div className="view-request-wrapper">
                                <a href="/view-request" className="view-request">
                                    View request
                                </a>
                            </div>
                        </section>

                        <section className="request">
                            <div className="request-details">
                                <h2>Request name</h2>
                                <p>Application deadline: 24.04.2022</p>
                                <p>Exam period: 21.05.2022 - 22.05.2022</p>
                                <p>
                                    <span className="bold">Minimum education for examiner:</span> Master
                                </p>
                                <ul>
                                    <li>Tag 1</li>
                                    <li>Tag 2</li>
                                </ul>
                            </div>
                            <div className="view-request-wrapper">
                                <a href="/view-request" className="view-request">
                                    View request
                                </a>
                            </div>
                        </section>

                        <section className="request">
                            <div className="request-details">
                                <h2>Request name</h2>
                                <p>Application deadline: 24.04.2022</p>
                                <p>Exam period: 21.05.2022 - 22.05.2022</p>
                                <p>
                                    <span className="bold">Minimum education for examiner:</span> Master
                                </p>
                                <ul>
                                    <li>Tag 1</li>
                                    <li>Tag 2</li>
                                </ul>
                            </div>
                            <div className="view-request-wrapper">
                                <a href="/view-request" className="view-request">
                                    View request
                                </a>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}

export default AllRequests;
