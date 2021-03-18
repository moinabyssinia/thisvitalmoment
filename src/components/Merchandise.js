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
                    <div className = "col-lg-4 col-xm-12">

                        <div className = "photo-wrap mb-5">
                            <img className = "merch-item" src = {books} alt = "books"/>
                        </div>

                    </div>

                    <div className = "col-lg-4 col-xm-12">

                        <div className = "photo-wrap mb-5">
                            <img className = "merch-item" src = {art} alt = "art paintings"/>
                        </div>

                    </div>

                    <div className = "col-lg-4 col-xm-12">

                        <div className = "photo-wrap mb-5">
                            <img className = "merch-item" src = {cds} alt = "cds"/>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Merchandise
