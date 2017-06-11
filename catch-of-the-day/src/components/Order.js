import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

    constructor(){
        super();
        this.renderOrder = this.renderOrder.bind(this);
    }

    renderOrder(key){
        const fish = this.props.fishes[key];
        const count = this.props.order[key];

        if (!fish || fish.status === 'unabailable') {
            return (<li key={key} > Sorry, {fish ? fish.name : 'fish'} is no longer available !!</li>)
        }

        return (
            <li key={key}>
                <span>{count}lbs {fish.name}</span>
                <span className="price">{formatPrice(count * fish.price)}</span>
            </li>
        )

    }


    render(){
        const ordersIds = Object.keys(this.props.order);
        //console.log('ordersIds',ordersIds);
        //console.log('this.props',this.props);
        const total = ordersIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            //console.log('fish',fish,'    count',count)
            const isAvailable = fish && fish.status === 'available';
            //console.log('prevTotal',prevTotal)
            if(isAvailable){
                return prevTotal + (count * fish.price || 0)
            }
            return prevTotal;
        },0)

        return(
            <div className="order-wrap">
                <h2>Your order</h2>
                <ul className="order">
                    {ordersIds.map(this.renderOrder)}
                    <li className="total">
                        <strong>Total:</strong>
                        {formatPrice(total)}
                    </li>
                </ul>

            </div>
        );
    }
}
export default Order;