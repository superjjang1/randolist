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
                    <div className="col">
                        something
                    </div>
                    <div className="col">
                        something
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                        something
                    </div>
                    <div className="col">
                        something
                    </div>
                </div>
            </div>
         </>);
    }
}
 
export default Home;