import React, {Component} from 'react';
import './NavBar.css';
import Login from './Login';
import {Link} from 'react-router-dom';
import ModalSplash from './ModalSplash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



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
    render() { 
        return (<> 
        <p>Navbar Sanity</p>
        <Login/>
         </>);
    }
}
 
export default NavBar;