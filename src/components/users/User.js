import React, {Component, Fragment} from 'react';
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Repos from "../repos/Repos";

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired
    }

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            company,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;
        const {loading,repos} = this.props;
        if (loading) return <Spinner/>

        return (
            <Fragment>
                <Link to="/" className="btn btn-dark mt-1 mb-2 mr-2">
                    Back To Search
                </Link>
                Hireable:{''}
                {hireable ? (<i className="fas fa-check text-success"/>) :
                    (<i className="fas fa-times-circle text-danger"/>)}
                <div className="card grid-2 p-2">
                    <div className="text-center">
                        <img src={avatar_url}
                             className="rounded-circle"
                             alt=''
                             style={{width: '100px'}}/>
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div className="text-center">
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )
                        }
                        <a href={html_url} className="btn btn-dark my-1">
                            Visit Githup Profile
                        </a>
                        <ul className="list-group">
                            <li className="list-group-item">
                                {login && (
                                    <Fragment>
                                        <strong>Username: </strong>{login}
                                    </Fragment>
                                )}
                            </li>
                            <li className="list-group-item">
                                {company && (
                                    <Fragment>
                                        <strong>Company: </strong>{company}
                                    </Fragment>
                                )}
                            </li>
                            <li className="list-group-item">
                                {blog && (
                                    <Fragment>
                                        <strong>Website: </strong>{blog}
                                    </Fragment>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-body">
                        <div className="badge badge-primary mr-1">Fllowers: {followers}</div>
                        <div className="badge  badge-success mr-1">Fllowing: {following}</div>
                        <div className="badge badge-danger mr-1">Public Repos: {public_repos}</div>
                        <div className="badge badge-dark mr-1">Public Gists: {public_gists}</div>
                    </div>
                </div>
                <Repos repos={repos}/>
            </Fragment>

        );
    }
}

export default User;