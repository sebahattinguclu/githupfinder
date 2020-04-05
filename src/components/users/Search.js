import React, {useState, useContext} from 'react';
import GithupContext from '../../context/githup/GithupContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {

    const githupContext = useContext(GithupContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('');


    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'secondary');
        } else {
            githupContext.searchUsers(text);
            setText('')
        }

    };

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input className="mb-2 mt-2 form-control"
                       type="text"
                       name="text"
                       value={text}
                       placeholder="Search Users..."
                       onChange={onChange}
                />
                <input type="submit"
                       value="Search"
                       className="btn btn-dark btn-block mb-2"/>
            </form>
            {
                githupContext.users.length > 0 && (
                    <button className="btn btn-light btn-block"
                            onClick={githupContext.clearUsers}>Clear</button>
                )
            }

        </div>
    );

}

export default Search;