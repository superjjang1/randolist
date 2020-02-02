import React, {Component} from 'react';
import './NavBar.css';
import Login from './Login';
import ModalSplash from './ModalSplash';
import {Link} from 'react-router-dom';





class NavBar extends Component {
    state = {
        showModal: false,
        modalContent: <ModalSplash/>
    }
    componentDidMount(){
        this.setState({
            modalContent:<ModalSplash changeModalContent={this.changeModalContent}/>
        })
    }
    changeModalContent=(newContent)=>{
        let modalContent = <ModalSplash changeModalContent={this.changeModalContent}/>
        if (newContent==='login'){
            modalContent = <Login changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>
        }
        this.setState({modalContent})
    }
    closeModal = (e) => {
        document.querySelector('body').classList = '';
        this.setState({
            showModal: false
        })
    }
    // buildNavLinks = () =>{
    //     let navLinks = 
    //     <ul id="nav-mobile" className="Right">
    //             <li>
    //                 <Link to="#"> hello?</Link>
    //             </li>
    //             <li>
    //                 <Link to="#">Link</Link>
    //             </li>
    //             <li>
    //                 <Link to="#">Link</Link>
    //             </li>
    //             <li>
    //                 <Link to="#">Link</Link>
    //             </li>
    //             <li>
    //                 <Link to="#">Link</Link>
    //             </li>
    //         </ul>
            
        
    //     // if(!this.props.auth.token){
    //     //     navLinks = 
    //     //     <ul id="nav-mobile" className="Right">
    //     //         <li>
    //     //             <Link to="#">Link</Link>
    //     //         </li>
    //     //         <li>
    //     //             <Link to="#">Link</Link>
    //     //         </li>
    //     //         <li>
    //     //             <Link to="#">Link</Link>
    //     //         </li>
    //     //         <li>
    //     //             <Link to="#">Link</Link>
    //     //         </li>
    //     //         <li>
    //     //             <Link to="#">Link</Link>
    //     //         </li>
    //     //     </ul>
    //     // }else{
    //     //     navLinks=
    //     //     <ul id="nav-mobile" className="right">
    //     //         <li>
    //     //             <Link to="#">Link</Link>
    //     //         </li>
    //     //         <li>
    //     //             <Link to="#">Link</Link>
    //     //         </li>
    //     //         <li>
    //     //             <Link to="#">Link</Link>
    //     //         </li>
    //     //         <li>
    //     //             <Link to="#">Link</Link>
    //     //         </li>
    //     //         <li>
    //     //             <Link to="#">Link</Link>
    //     //         </li>
    //     //     </ul>
    //     // }
    //     // return navLinks
    // }
    render() { 
       
        // if(this.props.location.pathname !=='/'){
        //     navColor="black";
        // }
        // const navLinks= this.buildNavLinks();
        return (
            <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">RandoList</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Create Playlist</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                
                               
                <div className="login-modal" style={this.state.showModal ? {"display": "block"} : {}} >
                    <button id="close-modal" onClick={this.closeModal}>&Chi;</button>
                    <div className="modal-content">

                    {this.state.modalContent}
                    </div>
                </div>
            </div>

        </div>
            );
    }
}
 
export default NavBar;