import React from 'react';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';


class App extends React.Component {




    render() {
        return (
            <div className="application">
                <BrowserRouter
                    forceRefresh={false}>
                    <div>
                        <h1> Hello team</h1>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}




export default App
