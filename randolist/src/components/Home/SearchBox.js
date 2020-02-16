import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    state = {
        search: ""
    };
    
    handleSearch=(e)=>{
        this.setState({search: e.target.value})
        console.log(e);
    }

    render() { 
        return (<>
        <div className="input-group input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
            </div>
            <input onChange={this.handleSearch} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div>
        </>);
    }
}
 
export default SearchBox;