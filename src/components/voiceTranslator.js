import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import openSocket from 'socket.io-client';



import Recorder from 'react-recorder'

import { ReactMic } from 'react-mic';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

const socket = openSocket('http://localhost:8000');

class VoiceTranslator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            AzureCognitiveAccessToken: '',
            timestamp: 'Nothing yet',
            accessToken: '',
            translation: '',
            record: false,
            recordedBlobURL: '',
            command: 'stop'

        }
    }

    componentDidMount() {
        socket.on('timer', timestamp => this.setState({ timestamp }));
        socket.on('azureAuth', accessToken => this.setState({ accessToken }));
        socket.on('translationReturned', translation => this.setState({ translation }))
    }

    handleStartGetDate = () => {
        socket.emit('subscribeToTimer', 1000);

    }

    handleGetTranslation = () => {
        socket.emit('translate', `${__AZURE_CLIENT_SECRET__}`)
    }


    handleClick = () => {

        axios.post(`https://api.cognitive.microsoft.com/sts/v1.0/issueToken?Subscription-Key=` + `${__AZURE_CLIENT_SECRET__}`

        )
            .then((response) => {

                this.setState({ AzureCognitiveAccessToken: response.data })
                console.log('State after access token', this.state)
            }).catch((err) => console.log('errrorrr ', err))
    }

    startRecording = () => {
        this.setState({
            record: true, command: 'start',
        });
    }

    stopRecording = () => {
        this.setState({
            record: false, command: 'stop'
        });
    }

    saveBlob = (url) => {
        this.setState({ recordedBlobURL: url })
    }


    onStop(recordedBlob) {
        console.log(recordedBlob)
        socket.emit('wordsToBeTranslated', recordedBlob)

        // console.log('recordedBlob is: ', recordedBlob);
    }





    render() {
        return (
            <div className="application">
                <BrowserRouter
                    forceRefresh={false}>
                    <div>
                        <p>_____</p>
                        <Button raised color="primary" onClick={this.handleStartGetDate}>
                            Start demo timer!
                        </Button>
                        <p>_____</p>
                        <Button raised color="primary" onClick={this.handleGetTranslation}>
                            Start TRANSLATION!
                        </Button>
                        <h1>{this.state.recordedBlobURL !== '' ? `${this.state.recordedBlobURL}` : `Nothing Recorded yet`} </h1>
                        <h3>{this.state.translation}</h3>

                        <Recorder command={this.state.command} onStop={this.onStop} />



                        {/* <ReactMic
                            record={this.state.record}
                            className="sound-wave"
                            onStop={this.onStop}
                            strokeColor="#000000"
                            backgroundColor="#FF4081" /> */}
                        < p > _____</p>
                        <Button raised color="primary" onClick={this.startRecording}>
                            Start Recording
                        </Button>
                        <Button raised color="primary" onClick={this.stopRecording}>
                            Stop
                        </Button>

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}




export default VoiceTranslator
