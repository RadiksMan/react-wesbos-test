import React from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {

    constructor(){
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e,key){

        const fish = this.props.fishes[key];
        //take a copy of that fish and update it with the new data
        //console.log('fish',fish)
        const updateFish = {
            ...fish,
            [e.target.name]: e.target.value //заменяет name в ...fish
        };

        this.props.updateFish(key,updateFish)
        //console.log(updateFish)

    }

    renderInventory(key){
        const fish = this.props.fishes[key];

        return(
            <div className="fish-edit" key={key}>
                <input type="text" name="name" value={fish.name} placeholder="Fish Name" onChange={(e) => this.handleChange(e,key)} />
                <input type="text" name="price" value={fish.price} placeholder="Fish price" onChange={(e) => this.handleChange(e,key)} />
                <select name="status" value={fish.status} onChange={(e) => this.handleChange(e,key)} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sould Out</option>
                </select>
                <textarea type="text" name="description" value={fish.description} placeholder="Fish description" onChange={(e) => this.handleChange(e,key)} ></textarea>
                <input type="text" name="image" value={fish.image} placeholder="Fish image" onChange={(e) => this.handleChange(e,key)} />
                <button onClick={() => this.props.removeFish(key)} >Remove the fish!</button>
            </div>
        )
    }


    render() {
        return(
            <div>
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(this.renderInventory)}
                <AddFishForm addFish={this.props.addFish}></AddFishForm>
                <button onClick={this.props.loadSamples} >Load Sample Fishes</button>
            </div>
        );
    }
}
export default Inventory;