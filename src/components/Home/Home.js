import React, {Component} from 'react';
import './Home.css';
import SearchBox from './SearchBox';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<> 
            <div className="container-fluid mw-80">
                
                    <h3 className="text-white">Welcome to RandoList</h3>
                    <div className="row">
                        <div className="home col-sm-8">
                            Want to create a quick and EZ playlist?
                            <div className="col-sm-4 bg-dark text-white">
                                Sign in with your spotify account
                            </div>
                            <SearchBox/>
                        </div>
                    </div>
                   
                        <div className="col-m">
                            <h1 className="text-white">sanity</h1>
                        </div>
                    
                
            </div>
         </>);
    }
}
 
export default Home;