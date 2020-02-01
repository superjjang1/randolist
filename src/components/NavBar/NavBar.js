import React, {Component} from 'react';
import './NavBar.css';
import Login from './Login';
import ModalSplash from './ModalSplash';




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
            
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Create PlayList</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        
                    </ul>

                
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