import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<> 
            <div className="container-fluid">
                <div className="row">
                    <h1>Sanity</h1>
                </div>
            </div>
         </>);
    }
}
 
export default Home;