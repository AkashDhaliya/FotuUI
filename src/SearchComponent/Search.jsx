import React from 'react';

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
            <section>
                <input className="Search-Query" type="text" placeholder="Search photos here.." name="search" />
            </section>
            
        );
    }
}

export default SearchComponent;