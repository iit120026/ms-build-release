import React, { Component } from 'react';

import marked from "marked";

class Test extends Component {

    state = {}

    componentWillMount() {

		const releaseNotes = require("./releases.md");

		fetch(releaseNotes)
			.then(response => {
				return response.text()
			})
			.then(text => {
				this.setState({
					markdown: marked(text)
				});
			}).catch (err => {
				console.log(err)
			});
    }
    

    render() { 

        const { markdown } = this.state;
        
        return <article style={{background: '#fff', padding: 20}} dangerouslySetInnerHTML={{__html: markdown?markdown:'Nothing yet, will be updated soon'}}></article>
    }
}
 
export default Test;