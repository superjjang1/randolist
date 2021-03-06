// import React, {Component} from 'react';
// import './NavBar.css';
// import Login from './Login';
// import ModalSplash from './ModalSplash';
// import {Link} from 'react-router-dom';





// class NavBar extends Component {
//     state = {
//         showModal: false,
//         modalContent: <ModalSplash/>
//     }
//     componentDidMount(){
//         this.setState({
//             modalContent:<ModalSplash changeModalContent={this.changeModalContent}/>
//         })
//     }
//     login=(e)=>{
//         this.setState({
//             showModal:true
//         })
//     }
//     changeModalContent=(newContent)=>{
//         let modalContent = <ModalSplash changeModalContent={this.changeModalContent}/>
//         if (newContent==='login'){
//             modalContent = <Login changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>
//         }
//         this.setState({modalContent})
//     }
//     closeModal = (e) => {
//         document.querySelector('body').classList = '';
//         this.setState({
//             showModal: false
//         })
//     }
//     // buildNavLinks = () =>{
//     //     let navLinks = 
//     //     <ul id="nav-mobile" className="Right">
//     //             <li>
//     //                 <Link to="#"> hello?</Link>
//     //             </li>
//     //             <li>
//     //                 <Link to="#">Link</Link>
//     //             </li>
//     //             <li>
//     //                 <Link to="#">Link</Link>
//     //             </li>
//     //             <li>
//     //                 <Link to="#">Link</Link>
//     //             </li>
//     //             <li>
//     //                 <Link to="#">Link</Link>
//     //             </li>
//     //         </ul>
            
        
//     //     // if(!this.props.auth.token){
//     //     //     navLinks = 
//     //     //     <ul id="nav-mobile" className="Right">
//     //     //         <li>
//     //     //             <Link to="#">Link</Link>
//     //     //         </li>
//     //     //         <li>
//     //     //             <Link to="#">Link</Link>
//     //     //         </li>
//     //     //         <li>
//     //     //             <Link to="#">Link</Link>
//     //     //         </li>
//     //     //         <li>
//     //     //             <Link to="#">Link</Link>
//     //     //         </li>
//     //     //         <li>
//     //     //             <Link to="#">Link</Link>
//     //     //         </li>
//     //     //     </ul>
//     //     // }else{
//     //     //     navLinks=
//     //     //     <ul id="nav-mobile" className="right">
//     //     //         <li>
//     //     //             <Link to="#">Link</Link>
//     //     //         </li>
//     //     //         <li>
//     //     //             <Link to="#">Link</Link>
//     //     //         </li>
//     //     //         <li>
//     //     //             <Link to="#">Link</Link>
//     //     //         </li>
//     //     //         <li>
//     //     //             <Link to="#">Link</Link>
//     //     //         </li>
//     //     //         <li>
//     //     //             <Link to="#">Link</Link>
//     //     //         </li>
//     //     //     </ul>
//     //     // }
//     //     // return navLinks
//     // }
//     render() { 
       
//         // if(this.props.location.pathname !=='/'){
//         //     navColor="black";
//         // }
//         // const navLinks= this.buildNavLinks();
//         return (
//             <div className="container-fluid">
//             <div className="row">
//                 <nav className="navbar  navbar-expand-lg">
//                     <a className="navbar-brand text-secondary" href="#">RandoList</a>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mr-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link text-secondary" href="#">Create Playlist</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link text-secondary" href="#" onClick={this.login}>Login</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
                
                               
//                 <div className="login-modal" style={this.state.showModal ? {"display": "block"} : {}} >
//                     <button id="close-modal" onClick={this.closeModal}>x</button>
//                     <div className="modal-content">

//                     {this.state.modalContent}
//                     </div>
//                 </div>
//             </div>

//         </div>
//             );
//     }
// }
 
// export default NavBar;
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  title: {
    flex: 1
  }
};

const Header = props => {
  const { user } = props;
  return (
    <div>
      <AppBar position="static">
        <ToolBar>
          <Typography type="title" variant="h6" style={styles.title}>
            RandoList
          </Typography>
          {user && (
            <Button
              color="inherit"
              onClick={() => {
                window.location = `http://localhost:8010/auth/logout`;
              }}
            >
              Logout
            </Button>
          )}
        </ToolBar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object
};

export default Header;