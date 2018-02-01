import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';


class VoiceTranslator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    handleClick = () => {
        axios.get('', {
            params: {
                'azureClientSecret': __AZURE_CLIENT_SECRET__
            }
        })
            .then((response) => {
                console.log('azure auth token', response)
            }).catch((err) => console.log('errrorrr ', err))
    }




    render() {
        return (
            <div className="application">
                <BrowserRouter
                    forceRefresh={false}>
                    <div>
                        <Button raised color="primary" onClick={this.handleClick}>
                            Click me!
                        </Button>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}




export default VoiceTranslator
