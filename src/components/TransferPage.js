import React from 'react';

class TransferPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div>
                    <select>
                        <option>Utah</option>
                    </select>
                </div>
                <div>
                    <select>
                        <option>Ohio</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default TransferPage;