import React, {Component} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import ModalSplash from './ModalSplash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<> 
        <p>Navbar Sanity</p>
         </>);
    }
}
 
export default NavBar;