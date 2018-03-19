import React from "react";

import marked from 'marked';
class File extends React.Component {


	state = {}
    
        componentWillMount() {
    

            let releaseNotes = undefined;

            const { env, proj } = this.props;

            console.log(env, proj)

            if (proj === 'backend') {

                if (env === 'qa') {
                    releaseNotes = require("../markdown/backend/qae-release.md"); 
                } else if (this.props.env==='dg') {
                    releaseNotes = require("../markdown/backend/deploy-guides.md"); 
                } else {
                    releaseNotes = require("../markdown/backend/live-release.md");
                }
                

            } else if (proj === 'web') {

                if (env === 'qa') {
                   // releaseNotes = require("../qae-release.md"); 
                } else {
                   // releaseNotes = require("../live-release.md");
                }
                

            } if (proj === 'admin') {

                if (env === 'qa') {
                    releaseNotes = require("../markdown/admin/qae-release.md"); 
                } else {
                   // releaseNotes = require("../live-release.md");
                }
                

            }

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