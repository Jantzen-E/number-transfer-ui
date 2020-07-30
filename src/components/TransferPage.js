import React from 'react';

class TransferPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="utah">
                    <select>
                        <option>Utah</option>
                    </select>
                    <div className="numbers">
                        <p>here is number #1 for utah</p>
                        <p>801-555-5555</p>
                        <p>801-667-6677</p>
                        <p>801-888-8888</p>
                    </div>
                    <div>
                        <button>New</button>
                        <button>View</button>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>Copy to other state</button>
                    </div>
                </div>
                <div className="ohio">
                    <select>
                        <option>Ohio</option>
                    </select>
                    <div className="numbers">
                        <p>here is number #1 for ohio</p>
                        <p>330-333-3333</p>
                        <p>330-444-4444</p>
                        <p>330-999-9999</p>
                    </div>
                    <div>
                        <button>New</button>
                        <button>View</button>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>Copy to other state</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TransferPage;