
import React, { Component } from "react";

export default class LocationList extends Component {
    render() {
        return (
            <article>
                <h1>New Location List</h1>
                <ul>Southside Nashville</ul>
                <li>300 Mc Cann St, Nashville, TN 37210</li>
                <ul>Midtown Nashville</ul>
                <li>1418 Church St, Nashville, TN 37203</li>
                <ul>Downtown Nashville</ul>
                <li>701 Drexel St, Nashville, TN 37203</li>
            </article>
        );
    }
}