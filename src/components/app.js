import React from 'react';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import VoiceTranslator from './voiceTranslator'


class App extends React.Component {

    handleClick = () => {
        console.log('hit')
    }




    render() {
        return (
            <div className="application">
                <BrowserRouter
                    forceRefresh={false}>
                    <div>
                        <h1 onClick={this.handleClick}> Hello team</h1>
                        <VoiceTranslator />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}




export default App
