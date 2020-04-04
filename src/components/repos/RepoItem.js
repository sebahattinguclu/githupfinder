import React from "react";
import PropTypes from 'prop-types';


const RepoItem = ({repo}) => {
    return (
        <div className="card mt-1">
            <div className="card-body">
                <h4>
                    <a href={repo.html_url}>{repo.name}</a>
                </h4>
            </div>

        </div>
    )
};

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
};


export default RepoItem;