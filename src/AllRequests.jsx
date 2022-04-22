import React, { Component } from "react";
import Select from "react-select";

import "./styles/style.css";
import "./styles/media.css";
import "./styles/all-requests.css";

class AllRequests extends Component {
    constructor() {
        super();
        this.tagList = [
            { value: "t1", label: "t1" },
            { value: "t2", label: "t2" },
            { value: "t3", label: "t3" },
            { value: "t4", label: "t4" },
            { value: "t5", label: "t5" },
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
                                <ul>
                                    <li>Tag 1</li>
                                    <li>Tag 2</li>
                                </ul>
                            </div>
                            <div className="view-request-wrapper">
                                <a href="#" className="view-request">
                                    View request
                                </a>
                            </div>
                        </section>

                        <section className="request">
                            <div className="request-details">
                                <h2>Request name</h2>
                                <p>Application deadline: 24.04.2022</p>
                                <p>Exam period: 21.05.2022 - 22.05.2022</p>
                                <ul>
                                    <li>Tag 1</li>
                                    <li>Tag 2</li>
                                </ul>
                            </div>
                            <div className="view-request-wrapper">
                                <a href="#" className="view-request">
                                    View request
                                </a>
                            </div>
                        </section>

                        <section className="request">
                            <div className="request-details">
                                <h2>Request name</h2>
                                <p>Application deadline: 24.04.2022</p>
                                <p>Exam period: 21.05.2022 - 22.05.2022</p>
                                <ul>
                                    <li>Tag 1</li>
                                    <li>Tag 2</li>
                                </ul>
                            </div>
                            <div className="view-request-wrapper">
                                <a href="#" className="view-request">
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
