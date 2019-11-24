import React from 'react';
import './collection-overview.style.scss'


import CollectionPreview from '../collection-preview/collection-preview.component';

import { connect } from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';

const collectionOverview = ({collections}) => {
    console.log(collections);
    return(
            <div className="collectionOverview">
                {
                    collections.map(collection => (
                        <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>
                    ))
                }
            </div>
        )}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(collectionOverview);