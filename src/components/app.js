import React from 'react';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import VoiceTranslator from './voiceTranslator'


class App extends React.Component {






    render() {
        return (
            <div className="application">
                <BrowserRouter
                    forceRefresh={false}>
                    <div>
                        <h1> Hello team</h1>
                        <VoiceTranslator />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}




export default App
