import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

const SignIn = ({ onClick, icon, text }) => {
    return (
        <div className = "container">
            {icon && cloneElement(icon)}
            <span>{text}</span>
        </div>
    )
}

SignIn.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.element,
    text: PropTypes.string.isRequired,
}

export default SignIn;