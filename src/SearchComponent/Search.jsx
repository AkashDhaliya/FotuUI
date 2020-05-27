import React from 'react';
import ReactDOM from 'react-dom';
import './Search.css';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    render() {
        return (
            <div>
                <input className="Search-Query" type="text" placeholder="Search.." name="search" />
            </div>
            
        );
    }
}

export default SearchComponent;