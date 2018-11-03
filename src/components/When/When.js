import React from 'react';
import PropTypes from 'prop-types'

const When = ({is, children}) =>
    is && children ?
        <>{children}</> : null

When.propTypes = {
    is: PropTypes.bool
}

export default When;
