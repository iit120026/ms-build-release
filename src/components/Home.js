import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {
    state = {}
    render() { 
        return ( 
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginLeft: -225,
                marginTop: -24.2
            }}>
                <Link to="/web">Web</Link>
                <Link to="/backend">Back End</Link>
                <Link to="/admin">Admin</Link>
            </div>
         )
    }
}
 
export default Home;