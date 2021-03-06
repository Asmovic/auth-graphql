import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="container">
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default App;