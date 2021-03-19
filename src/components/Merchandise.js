import React from 'react';
import books from "../books.jpg";
import art from "../art.jpg";
import cds from "../cds.jpg";

function Merchandise() {
    return (
        <div className = "merch">
            <div className = "d.flex justify-content-center my-5">
                <h1>Merchandise</h1>
            </div>

            <div className = "container merch-wrapper">
                <div className = "row">
                    <div className = "col-lg-4 col-xm-12 d-flex justify-content-between">
                    <div className = "box">
                            <h3>Books</h3>
                            <div className = "merch-photo-wrap mb">
                                <img className = "merch-item" src = {books} alt = "cds"/>
                            </div>

                        </div>

                    </div>

                    <div className = "col-lg-4 col-xm-12">
                    <div className = "box">
                            <h3>Paintings</h3>
                            <div className = "merch-photo-wrap mb">
                                <img className = "merch-item" src = {art} alt = "cds"/>
                            </div>

                        </div>

                    </div>

                    <div className = "col-lg-4 col-xm-12">

                        <div className = "box">
                            <div className = "header">
                                <h3>Short Courses</h3> 
                            </div>

                            <div className = "merch-photo-wrap">
                                <img className = "merch-item" src = {cds} alt = "cds"/>
                            </div>
                            
                        </div>

     

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Merchandise
