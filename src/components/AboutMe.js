import React from "react";
import author from "../Pastor B'09.jpg";

const AboutMe = () => {
    return (
        <div className = "container py-5">
            <div className = "row">
                
                <div className = "col-lg-6 col-xm-12">
                    <div className = "photo-wrap mb-5">
                        <img className = "profile-pic" src = {author} alt = "Pastor Baxter"/>
                    </div>
                </div>

                <div className = "col-lg-6 col-xm-12">
                    <h1 className = "about-heading">About Me</h1>
                    <p>
                    Because you cared for me and my ministry, “This Vital Moment” will be One year old in January 2021! This
                    past year 2020 AD, a year of great trials and uncertainty, became a year of hope and salvation for many
                    Muslins and Hindu converts. Also the launch of This Vital Moment television broadcast.
                    Through EternalLife.tv I was privileged to present the Gospel of our Lord in more than 40 nations on 5
                    occasions ! I am offered a spot for a weekly broadcast if I can provide a stronger internet and another
                    camera.
                    It will take $500.00 per month to reach 1.2 million Muslins and Hindi. a small fraction of the vast
                    population in more than 40 nations across the region of Pakistan. This is an amazing opportunity!! Will
                    you partner with me in prayer and support? ($5, 10 or 15 p/m)
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
