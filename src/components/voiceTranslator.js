import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import openSocket from 'socket.io-client';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';


class VoiceTranslator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            AzureCognitiveAccessToken: '',
            timestamp: 'Nothing yet'

        }
    }

    componentDidMount() {
        const socket = openSocket('http://localhost:8000');
        socket.on('timer', timestamp => this.setState({ timestamp }));
        socket.emit('subscribeToTimer', 1000);
    }


    handleClick = () => {

        axios.post(`https://api.cognitive.microsoft.com/sts/v1.0/issueToken?Subscription-Key=` + `${__AZURE_CLIENT_SECRET__}`

        )
            .then((response) => {

                this.setState({ AzureCognitiveAccessToken: response.data })
                console.log('State after access token', this.state)
            }).catch((err) => console.log('errrorrr ', err))
    }




    render() {
        return (
            <div className="application">
                <BrowserRouter
                    forceRefresh={false}>
                    <div>
                        <Button raised color="primary" onClick={this.handleClick}>
                            Get Azure token!
                        </Button>
                        <h1>timer? ==> {this.state.timestamp} </h1>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}




export default VoiceTranslator
