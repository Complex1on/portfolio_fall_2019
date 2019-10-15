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

            <Project
                imgalt="imgalt2"
                img={gotfeedback}
                project="Streamy"
                description="testingalsgda h;ghiaowehgaoghasoigsag"
                livehref="https://complexion-react-streamy.herokuapp.com/"
                githubhref="https://github.com/Complex1on/react_stream_app"
            />

            <Project
                imgalt="imgalt3"
                img={gotfeedback}
                project="Seasonal Anime"
                description="testingalsgda h;ghiaowehgaoghasoigsag"
                livehref="https://complexion-seasonal-anime.herokuapp.com/"
                githubhref="https://github.com/Complex1on/seasonal-anime"
            />
        </div>
    );
};

export default ProjectList;
