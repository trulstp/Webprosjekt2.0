import React, { Component } from "react";
import "./styles/style.css";
import "./styles/media.css";
import "./styles/view-request.css";

class ViewRequest extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="to-top">
                    <a href="#top">Top of page</a>
                </div>
                <main className="data">
                    <h1>Request name</h1>
                    <div className="details">
                        <p>
                            <span className="bold">Author:</span> Name Lastname
                        </p>
                        <p>Posted: 18.04.2022</p>
                        <p>Exam period: 21.05.2022 - 22.05.2022</p>
                        <ul>
                            <li>Tag 1</li>
                            <li>Tag 2</li>
                        </ul>
                    </div>

                    <h2>Description</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est massa sit imperdiet pharetra viverra. Augue porta enim sit vulputate adipiscing vel, non commodo. Sollicitudin
                        morbi sed quis accumsan et cursus purus. Quam sollicitudin arcu feugiat urna dictum faucibus tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est massa
                        sit imperdiet pharetra viverra. Augue porta enim sit vulputate adipiscing vel, non commodo. Sollicitudin morbi sed quis accumsan et cursus purus. Quam sollicitudin arcu feugiat
                        urna dictum faucibus tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est massa sit imperdiet pharetra viverra. Augue porta enim sit vulputate
                        adipiscing vel, non commodo. Sollicitudin morbi sed quis accumsan et cursus purus. Quam sollicitudin arcu feugiat urna dictum faucibus tincidunt.
                    </p>

                    <div className="btn-wrapper">
                        <button className="apply">Apply as second examiner</button>
                    </div>
                </main>
            </div>
        );
    }
}

export default ViewRequest;
