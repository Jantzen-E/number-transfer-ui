import React from 'react';
import UtahList from './UtahList';
import OhioList from './OhioList';

class TransferPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <UtahList />
                <OhioList />
            </div>
        )
    }
}

export default TransferPage;