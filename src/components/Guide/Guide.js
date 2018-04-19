import React, { Component } from 'react';


import { Link } from 'react-router-dom';

class Guide extends Component {

    render() { 

        const { proj } = this.props;

        return ( 
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginLeft: -225,
                marginTop: -24.2
            }}>
                
                <Link to={`/${proj}/live`}>Live</Link>
                <Link to={`/${proj}/qa`}>QA</Link>
                {proj==="backend"?<Link to={`/${proj}/dg`}>Deploy Guide</Link>:null}

            </div>
         )
    }
}
 
export default Guide;