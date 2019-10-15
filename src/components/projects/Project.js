import React from 'react';

const Project = props => {
    return (
        <div className="item">
            <div class="image">
                <img alt={props.imgalt} src={props.img} />
            </div>
            <div className="content">
                <a href="#" class="header">
                    {props.project}
                </a>
                <div className="description">
                    <p>{props.description}</p>
                </div>
                <div class="extra">
                    <a
                        href={props.githubhref}
                        className="ui right floated primary button"
                    >
                        Github
                        <i className="right github icon" />
                    </a>
                    <a
                        href={props.livehref}
                        className="ui right floated secondary button"
                    >
                        Live
                        <i className="right chevron icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
