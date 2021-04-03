import React from 'react'

function Videos() {
    return (
    <div className = "vid">
            <div className = "d.flex justify-content-center py-5">
                <h1>Videos</h1>
            </div>

            <div className = "container vid-wrapper">
                <div className = "row">
                    <div className = "vid-holder col-lg-4 col-xm-12">
                    
                        <div className = "box">
                            <div className = "vid-photo-wrap mb">
                                <iframe className = "vid-item" width="1280" height="720" src="https://www.youtube.com/embed/qZbvC38auMQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                        </div>

                    </div>

                    <div className = "vid-holder col-lg-4 col-xm-12">
                        <div className = "box">
                            <div className = "vid-photo-wrap mb">
                                <iframe className = "vid-item" width="1280" height="720" src="https://www.youtube.com/embed/2mgUPt2KI08" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                        </div>

                    </div>

                    <div className = "vid-holder col-lg-4 col-xm-12">

                        <div className = "box">
                            <div className = "vid-photo-wrap mb">
                                 <iframe className = "vid-item" width="1280" height="720" src="https://www.youtube.com/embed/xrzq_X1NNaA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            
                        </div>

    

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Videos
