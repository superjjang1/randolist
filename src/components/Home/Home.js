import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<> 
            <div className="container-lg-">
                <div className="col">
                    <h3>Welcome to RandoList</h3>
                    <div className="row">
                        <div className="col">
                            Want to create a quick and EZ playlist?
                            <div className="col">
                                Sign in with your spotify account
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </>);
    }
}
 
export default Home;