import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import {AddItem} from '../../redux/cart/cart.actions';

const CollectionItem = props => (
    <div className="collection-item">
        <div className="image" style={{
            backgroundImage: `url(${props.item.imageUrl})`
        }}></div>
        <div className="collection-footer">
            <span className="name">{props.item.name}</span>
            <span className="price">{props.item.price}</span>
        </div>
        <CustomButton inverted onClick={() => props.addItem(props.item)}>Add To Cart</CustomButton>
    </div>
)
    

const mapDispatchToState = dispatch => ({
    addItem: (item) => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToState)(CollectionItem);