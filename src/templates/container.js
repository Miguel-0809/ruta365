import React from 'react'
import Navbar from "../components/navBar/Navbar"
import { BrowserRouter as Router } from 'react-router-dom';

export default function Container(props) {
    return (
        <div>
            <Router>
                <Navbar />
                <div>
                    {props.children}
                </div>
            </Router>
        </div>
    )
}
