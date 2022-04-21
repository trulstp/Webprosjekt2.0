import React, { Component } from "react";
import Select from "react-select";

import "./styles/style.css";
import "./styles/media.css";
import "./styles/new-request.css";
import "./styles/new-request-media.css";

class NewRequest extends Component {
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

    getDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    render() {
        const date = this.getDate();
        return (
            <div className="wrapper">
                <main className="data">
                    <h1>New request</h1>
                    <form>
                        <label htmlFor="request-title">Title</label>
                        <input type="text" id="request-title" className="input-field" placeholder="Title..." required />

                        <label htmlFor="request-deadline">Application deadline</label>
                        <input type="date" id="request-deadline" min={date} required />

                        <div className="request-exam-period">
                            <div>
                                <label htmlFor="request-exam-start">Exam period start</label>
                                <input type="date" id="request-exam-start" min={date} required />
                            </div>

                            <div>
                                <label htmlFor="request-exam-end">Exam period end</label>
                                <input type="date" id="request-exam-end" min={date} required />
                            </div>
                        </div>

                        <label htmlFor="request-tag">Tags</label>
                        <Select id="request-tag" options={this.tagList} isMulti />

                        <label htmlFor="request-examiner">Minimum education for examiner:</label>
                        <input type="text" id="request-examiner" className="input-field" placeholder="Minimum education..." required />

                        <label htmlFor="request-examination">Level of examination:</label>
                        <input type="text" id="request-examination" className="input-field" placeholder="Examination level..." required />

                        <label htmlFor="request-description">Description</label>
                        <textarea id="request-description" placeholder="Your description here..." required />

                        <input type="submit" className="btn-submit" value="Create request" />
                    </form>
                </main>
            </div>
        );
    }
}

export default NewRequest;
