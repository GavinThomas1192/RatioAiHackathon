import React from 'react';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';


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
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}




export default App
