import React, { Component } from "react";
import "./styles/style.css";
import "./styles/media.css";

class Template extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">Top of page</a>
                </div>
                <main className="data">
                    <p>hei hei</p>
                </main>
            </div>
        );
    }
}

export default Template;
