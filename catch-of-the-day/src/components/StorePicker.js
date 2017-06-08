import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                { /* test */ }
                <input type="text" required placeholder="Store name"/>
                <button >Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;