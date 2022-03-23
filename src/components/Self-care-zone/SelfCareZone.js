import React from "react"
import { Link } from "react-router-dom"

export default function SelfCareZone() {
    return(
        <>
            <h1>Self Care Zone component</h1>
            <nav>
                <ul>
                    <li key="1">
                        <Link to="/self-care-zone/diet">Diet-Plan</Link>
                    </li>
                    <li key="2">
                        <Link to="/sleep-hygiene">Sleep-Hygiene</Link>
                    </li>
                    <li key="3">
                        <Link to="/setting-goals">Setting-Goals</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}