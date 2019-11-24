import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector }  from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';

const Directory = ({sections}) => (
    <div className="directory-menu">
        {sections.map(section => (
            <MenuItem title = {section.title} 
                      image = {section.imageUrl}
                      key = {section.id}
                      size = {section.size}
                      linkUrl = {section.linkUrl} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
// const mapStateToProps = state => ({
//   sections: state.directory.sections
// })

export default connect(mapStateToProps)(Directory);