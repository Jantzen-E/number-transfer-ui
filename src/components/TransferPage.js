import React from 'react';
// import firebase from './util/firebase';
import Utah from './Utah';
import Ohio from './Ohio';

class TransferPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
    }

    render() {
        return (
            <div className="container">
                <Utah />
                <Ohio />
            </div>
        )
    }
}

export default TransferPage;