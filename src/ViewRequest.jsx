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
        };
    }

    async componentDidMount() {
        const id = this.fetchId();
        const response = await this.fetchRequest(id);
        console.log(response);
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
        return axios.get(`http://localhost:5000/exam/${id}`);
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
                        <button className="apply">Apply as second examiner</button>
                    </div>
                </main>
            </div>
        );
    }
}

export default ViewRequest;
