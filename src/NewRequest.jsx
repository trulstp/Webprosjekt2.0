import React, { Component } from "react";
import "./styles/style.css";
import "./styles/media.css";

class NewRequest extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">Top of page</a>
                </div>
                <main className="data">
                    <h1>New request</h1>
                </main>
            </div>
        );
    }
}

export default NewRequest;
