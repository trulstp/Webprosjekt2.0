import React, { Component } from "react";
import "./styles/style.css";
import "./styles/media.css";

class AllRequests extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">Top of page</a>
                </div>
                <main className="data">
                    <h1>Available requests</h1>
                    <form>
                        <label htmlFor="search-tag">Search by tag: </label>
                        <input type="text" id="search-tag" className="input-field" />
                        <input type="submit" className="btn-submit" value="Search" />
                    </form>
                </main>
            </div>
        );
    }
}

export default AllRequests;
