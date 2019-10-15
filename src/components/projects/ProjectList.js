import React from 'react';

import gotfeedback from '../../images/gotfeedback.png';
import Project from './Project';

const ProjectList = () => {
    return (
        <div className="ui divided items">
            <Project
                imgalt="imgalt1"
                img={gotfeedback}
                project="Got Feedback?"
                description="testingalsgda h;ghiaowehgaoghasoigsag"
                livehref="https://complexion-got-feedback-app.herokuapp.com/"
                githubhref="https://github.com/Complex1on/Got_Feedback_App"
            />
        </div>
    );
};

export default ProjectList;
