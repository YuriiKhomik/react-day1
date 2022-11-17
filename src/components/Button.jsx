import PropTypes from 'prop-types'

export const Button = ({ type, children }) => {
    return <button type={type}>{children}</button>
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};