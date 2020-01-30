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
                
                    <h3 className="text-white">Welcome to RandoList</h3>
                    <div className="row">
                        <div className="col-sm-8">
                            Want to create a quick and EZ playlist?
                            <div className="col-sm-4 bg-dark text-white">
                                Sign in with your spotify account
                            </div>
                        </div>
                    </div>
                
            </div>
         </>);
    }
}
 
export default Home;