import React, {Component} from 'react';
import './Home.css';
import SearchBox from './SearchBox';
const queryString = require("query-string");
const SpotifyWebApi = require("spotify-web-api-node");
const spotifyApi = new SpotifyWebApi();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInfo: {}
         };
    }
    componentDidMount() {
        const {location} = this.props;
        const {access_token} = queryString.parse(location.search);
        if (!access_token) return;
        spotifyApi.setAccessToken(access_token);
        spotifyApi.getMe().then(
            data=>{
                this.setState({
                    userInfo: data.body
                });
            },
            err =>{
                console.log("something is wrong",err);
            }
        )
    }
    render() { 
        return (<> 
            <div className="container-fluid mw-80">
                
                    <h3 className="text-white">Welcome to RandoList</h3>
                    <div className="row">
                        <div className="home col-sm-8 heroman">
                            Want to create a quick and EZ playlist?
                            <div className="col-sm-4 bg-dark text-white spotifyman">
                                Sign in with your spotify account
                            </div>
                            <h1>Hello {this.state.userInfo.display_name}</h1>
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