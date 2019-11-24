import React from 'react';
import './collection.style.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {connect} from 'react-redux';
import { selectCollection }  from '../../redux/shop/shop.selector';

const collectionPage = ({collection}) => {
    console.log(collection);
    const {title,items} = collection;
   
    return(
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => <CollectionItem id={item.id} item = {item} />)}
            </div>
        </div>

    )
}

const mapstateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionID)(state)
})

export default connect(mapstateToProps)(collectionPage);