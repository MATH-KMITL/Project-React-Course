
import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <nav className="navebar">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        {this.props.title}
                    </a>
                </div>
            </nav>
        )
    }
}

export default Header