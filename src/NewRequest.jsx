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

    render() {
        return (
            <div className="wrapper">
                <main className="data">
                    <h1>New request</h1>
                    <form>
                        <label htmlFor="request-title">Title</label>
                        <input type="text" id="request-title" className="input-field" placeholder="Title..." />

                        <label htmlFor="request-tag">Tags</label>
                        <Select id="request-tag" options={this.tagList} isMulti />

                        <label htmlFor="request-description">Description</label>
                        <textarea id="request-description" placeholder="Your description here..." />

                        <input type="submit" className="btn-submit" value="Create request" />
                    </form>
                </main>
            </div>
        );
    }
}

export default NewRequest;
