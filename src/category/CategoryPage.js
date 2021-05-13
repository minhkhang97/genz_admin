import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchAllCategories } from "./categoriesSlice";
import CategoryItem from "./CategoryItem";
import { useDispatch } from "react-redux";

const CategoryPage = (props) => {
  const { status, categories } = useSelector(
    (state) => state.categoriesReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
        await dispatch(fetchAllCategories());
    })();
  }, []);

  if (status === "loading") return <div>loading</div>;
  if (status === "failed") return <div>failed</div>;
  return (
    <div className="bg-indigo-50">
      {/*  */}
      <div className="mb-1 mt-5">
        <h1 className="uppercase text-xl font-semibold text-gray-800 tracking-wide ">
          sản phẩm
        </h1>
      </div>

      {/* danh sach category */}
      <div className="bg-white grid grid-cols-3 gap-2 py-3 px-4 rounded-md uppercase font-medium text-sm text-gray-800">
        <span>
          <p>id</p>
        </span>
        <span>
          <p>tên sản phẩm</p>
        </span>
        <span>
          <p>ngày tạo</p>
        </span>
      </div>

      <div className="bg-white my-4 rounded-md uppercase font-semibold text-sm text-gray-900">
          {categories.map((el, index) => <CategoryItem index={index} key={index} name={el.name} create_at={el.create_at} />)}
      </div>
    </div>
  );
};

CategoryPage.propTypes = {};

export default CategoryPage;
