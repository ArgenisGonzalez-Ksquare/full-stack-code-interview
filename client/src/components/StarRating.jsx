import React from "react";

const Start = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
  let styleClass = "star-rating-blank";
  if (rating && rating >= starId) {
    styleClass = "star-rating-filled";
  }

  return (
    <div
      className="star"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div
        height="55px"
        width="53px"
        class={styleClass}
        viewBox="0 0 25 23"
        data-rating="1"
      >
        *
      </div>
    </div>
  );
};
export default Start;
