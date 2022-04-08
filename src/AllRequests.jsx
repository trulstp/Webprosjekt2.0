import React, { Component } from "react";
import "./styles/style.css";
import "./styles/media.css";
import "./styles/all-requests.css";
import SearchIcon from "./icons/search.png";

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
                        <div className="search-bar">
                            <input type="text" id="search-tag" className="input-field" />
                            <button type="submit" className="btn-search">
                                <img src={SearchIcon} alt="Search" />
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        );
    }
}

export default AllRequests;
