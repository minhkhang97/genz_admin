import React from "react";
import PropTypes from "prop-types";

const CategoryItem = ({ index, name, create_at }) => {
  return (
    <div class="px-4 grid grid-cols-3 border-b border-solid border-gray-200 py-3 hover:shadow-md hover:rounded-md">
      <span>
        <p class="font-semibold text-gray-700">{index}</p>
      </span>
      <span>
        <p>{name}</p>
      </span>
      <span>
        <p class="text-gray-500">{create_at}</p>
      </span>
    </div>
  );
};

CategoryItem.propTypes = {};

export default CategoryItem;
