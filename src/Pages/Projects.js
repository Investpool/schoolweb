import React from 'react';

function Projects() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 proj">
            <h3>OUR PROJECTS</h3>
            <p>The school has outlined several projects that are aimed at improving the finacial status of the school.
                Monies are needed for sporting activities, administration, organisation of in-service training, 
                emergency reliefs in case of any accidents befalling the students in school.
            </p>
            </div>
            <div className="col-md-3 forest">
            <h3>AFFORESTATION</h3>
            <p>
                The two acre afforestation project instituted by the school is the number one source of the school.
                Here, wood is periodically harvested for sales. 
            </p>
            </div>
            <div className="col-md-3 spinach">
                <h3>COCOYAM SPINACH FARM</h3>
            </div>
            <div className="col-md-3 culture">
                <h3>CULTURAL EVENTS HOSTING</h3>
            </div>
            </div>
        </div>
    )
}

export default Projects;