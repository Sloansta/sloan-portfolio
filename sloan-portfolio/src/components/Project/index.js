import React, { useState } from 'react';
import Card from '../Card';

function Project() {

    const [projectList] = useState([
        {
            title: "Weeb Keepers",
            description: "A anime tracking application where users can browse, track and keep updated with their anime watchlist."
        },
        {
            title: "Critique Code",
            description: "A place where users can gather to discuss all things code, get advice, post funny code etc."
        }
    ]);

    return (
       <div>
           <h2>Projects</h2>
           <div className='cards container'>
               {projectList.map(project => (
                   <Card className="card" title={project.title} description={project.description} key={project.title} />
               ))}
           </div>
       </div>
    );
}

export default Project;