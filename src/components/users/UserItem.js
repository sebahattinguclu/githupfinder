import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const UserItem = ({user: {login, avatar_url, html_url}}) => {
    return (
        <div className="card align-items-center m-1">
            <img src={avatar_url}
                 alt=""
                 className="rounded-circle mt-2"
                 style={{width: '60px'}}
            />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm mb-2 my-1">More</Link>
            </div>
        </div>
    );

};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;