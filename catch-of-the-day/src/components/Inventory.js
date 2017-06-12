import React from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {

    constructor(){
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            uid:null,   // user ID
            owner:null
        }
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

    renderLogin() {
      return (
        <nav className="login">
          <h2>Inventory</h2>
          <p>Sign in to manage your store's inventory</p>
          <button className="github" onClick={() => this.authenticate('github')}>Log In with Github</button>
          <button className="facebook" onClick={() => this.authenticate('facebook')} >Log In with Facebook</button>
          <button className="twitter" onClick={() => this.authenticate('twitter')} >Log In with Twitter</button>
        </nav>
      )
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
        //check if they are no logged in at alls
        if (!this.state.uid) {
            return <div>{this.renderLogin()}</div>
        }

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

Inventory.propTypes = {
  fishes: React.PropTypes.object.isRequired,
  updateFish: React.PropTypes.func.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  addFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired,
  //storeId: React.PropTypes.string.isRequired
};

export default Inventory;