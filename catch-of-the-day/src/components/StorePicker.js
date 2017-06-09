import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {

    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    static contextTypes = {
        router: React.PropTypes.object
    }

    goToStore(event){
        event.preventDefault();
        console.log('You changed href');
        const storeId = this.storeInput.value;
        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={ (e)=>this.goToStore(e) }>
                { /* test */ }
                <input type="text" required placeholder="Store name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
                <button >Visit Store</button>
            </form>
        );
    }
}

// StorePicker.contextTypes = {
//     router: React.PropTypes.object
// }

export default StorePicker;