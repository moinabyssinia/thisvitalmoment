import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeanpub } from '@fortawesome/free-brands-svg-icons';
import { faDove, faHandshake, faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons'

function Services() {
    return (
        <div className = "services">
            <h1 className = "py-5"> My Services</h1>
                <div className = "container">
                    <div className = "row">

                        <div className = "col-md-3 col-sm-6">
                            <div className = "box">

                                <div className = "circle">
                                    <FontAwesomeIcon className = "icon" icon = { faLeanpub} size = "2x"/>
                                </div>

                                <h3>Discipleship</h3>
                                <p>Discipling the next generation of leaderes</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className = "col-md-3 col-sm-6">
                            <div className = "box">

                                <div className = "circle">
                                    <FontAwesomeIcon className = "icon" icon = { faDove } size = "2x"/>
                                </div>

                                <h3>Missions</h3>
                                <p>Reaching the unreached world</p>

                            </div>
                        </div>
                        {/* - */}
                        <div className = "col-md-3 col-sm-6">
                            <div className = "box">

                                <div className = "circle">
                                    <FontAwesomeIcon className = "icon" icon = { faHandshake } size = "2x"/>
                                </div>

                                <h3>Comminity Outreach</h3>
                                <p>Community outreach</p>

                            </div>
                        </div>
                        {/* - */}
                        <div className = "col-md-3 col-sm-6">
                            <div className = "box">

                                <div className = "circle">
                                    <FontAwesomeIcon className = "icon" icon = { faMicrophoneAlt } size = "2x"/>
                                </div>

                                <h3>Public Speaking</h3>
                                <p>Have me speak at your next event</p>

                            </div>
                        </div>
                        {/* - */}
                        
                    </div>
                </div>
        </div>
    )
}

export default Services;
