import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = props => {
    console.log(props);
    return(
        <div className="collection-preview">
            <div className="title">{props.title.toUpperCase()}</div>
            <div className="preview">
                {props.items.slice(0,4).map(item => (
                    <CollectionItem key={item.id}
                                    name={item.name}
                                    price={item.price}
                                    imageUrl={item.imageUrl}/>
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview;