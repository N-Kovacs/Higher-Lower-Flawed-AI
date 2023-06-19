import React from "react";
import PropTypes from "prop-types";
import "./card.css";
/**
 * Primary UI component for user interaction
 */
export const Card = ({ number, suit, selected, ...props }) => {
  return (
    <div>
      {number}
      {suit}
    </div>
  );
};

// Card.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// Card.defaultProps = {};
