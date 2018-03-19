import React from "react";

import marked from 'marked';
class File extends React.Component {


	state = {}
    
        componentWillMount() {
    
            const releaseNotes = this.props.env==='qa'?require("../qae-release.md"):this.props.env==='dg'?require("../deploy-guides.md"):require("../live-release.md");
    
            fetch(releaseNotes)
                .then(response => {
                    return response.text()
                })
                .then(text => {
                    this.setState({
                        markdown: marked(text)
                    });
                }).catch(err => {
                    console.log(err)
                });
        }

        render () {

            const { markdown } = this.state;
            

            return (
                <article style = {{ background: '#fff', padding: 20 }} dangerouslySetInnerHTML = {{ __html: markdown ? markdown : 'Nothing yet, will be updated soon' }}></article >
            )
        }
    
}

export default File;