import React, { Component } from "react";
import Select from "react-select";

import "./styles/style.css";
import "./styles/media.css";
import "./styles/new-request.css";
import "./styles/new-request-media.css";
import axios from "axios";

class NewRequest extends Component {
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
        this.state = {
            title: "",
            deadline: "",
            examStart: "",
            examEnd: "",
            tags: "",
            minEdu: "",
            examLvl: "",
            description: ""
        };
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDeadline = this.changeDeadline.bind(this);
        this.changeExamStart = this.changeExamStart.bind(this);
        this.changeExamEnd = this.changeExamEnd.bind(this);
        this.changeTags = this.changeTags.bind(this);
        this.changeMinEdu = this.changeMinEdu.bind(this);
        this.changeExamLvl = this.changeExamLvl.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeTitle(event) {
        this.setState({
            title: event.target.value,
        });
    }
    changeDeadline(event) {
        this.setState({
            deadline: event.target.value,
        });
    }
    changeExamStart(event) {
        this.setState({
            examStart: event.target.value,
        });
    }
    changeExamEnd(event) {
        this.setState({
            examEnd: event.target.value,
        });
    }
    changeTags(event) {
        this.setState({
            tags: event.target.value,
        });
    }
    changeMinEdu(event) {
        this.setState({
            minEdu: event.target.value,
        });
    }
    changeExamLvl(event) {
        this.setState({
            examLvl: event.target.value,
        });
    }
    changeDescription(event) {
        this.setState({
            description: event.target.value,
        });
    }

    getDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    onSubmit(event){
        event.preventDefault()

        console.log(this.state.examEnd)

        console.log(this.state.tags)

        const request = {
            title: this.state.title,
            deadline: this.state.deadline,
            examStart: this.state.examStart,
            examEnd: this.state.examEnd,
            tags: this.state.tags,
            minEdu: this.state.minEdu,
            examLvl: this.state.examLvl,
            description: this.state.description
        }
        
        axios.post("http://localhost:5000/exam/", request)
        .then(response => console.log(response.data))

        this.setState({
            title: "",
            deadline: "",
            examStart: "",
            examEnd: "",
            tags: "",
            minEdu: "",
            examLvl: "",
            description: ""
        })
    }

    render() {
        const date = this.getDate();
        return (
            <div className="wrapper">
                <main className="data">
                    <h1>New request</h1>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="request-title">Title</label>
                        <input type="text" id="request-title" className="input-field" onChange={this.changeTitle} value={this.state.title} placeholder="Title..." required />

                        <label htmlFor="request-deadline">Application deadline</label>
                        <input type="date" id="request-deadline" onChange={this.changeDeadline} value={this.state.deadline} min={date} required />

                        <div className="request-exam-period">
                            <div>
                                <label htmlFor="request-exam-start">Exam period start</label>
                                <input type="date" id="request-exam-start" onChange={this.changeExamStart} value={this.state.examStart} min={date} required />
                            </div>

                            <div>
                                <label htmlFor="request-exam-end">Exam period end</label>
                                <input type="date" id="request-exam-end" onChange={this.changeExamEnd} value={this.state.examEnd} min={date} required />
                            </div>
                        </div>

                        <label htmlFor="request-tag">Tags</label>
                        <Select id="request-tag" options={this.tagList} isMulti onChange={this.changeTags} value={this.state.tags} required />

                        <label htmlFor="request-examiner">Minimum education for examiner:</label>
                        <input type="text" id="request-examiner" onChange={this.changeMinEdu} value={this.state.minEdu} className="input-field" placeholder="Minimum education..." required />

                        <label htmlFor="request-examination">Level of examination:</label>
                        <input type="text" id="request-examination" onChange={this.changeExamLvl} value={this.state.examLvl} className="input-field" placeholder="Examination level..." required />

                        <label htmlFor="request-description">Description</label>
                        <textarea id="request-description" onChange={this.changeDescription} value={this.state.description} placeholder="Your description here..." required />

                        <input type="submit" className="btn-submit" value="Create request" />
                    </form>
                </main>
            </div>
        );
    }
}

export default NewRequest;
