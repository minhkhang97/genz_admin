import React from "react";
import PropTypes from "prop-types";
import ProductDetail from "../components/ProductDetail";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAllCategories } from "../../category/categoriesSlice";
import { setInitialState } from "../slice/productSlice";

const CreateProductPage = (props) => {
  const { product } = useSelector((state) => state.productReducer);
  const { status, categories } = useSelector(
    (state) => state.categoriesReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialState());
    (async () => {
      await dispatch(fetchAllCategories());
    })();
  }, []);


  if (status === "loading") return <div>loading</div>;
  if (status === "failed") return <div>failed</div>;

  return (
    <div>
      <div class="mb-1 mt-5">
        <h1 class="uppercase text-xl font-semibold text-gray-800 tracking-wide ">
          thêm mới sản phẩm
        </h1>
      </div>

      <ProductDetail product={product} categories={categories} />
    </div>
  );
};

CreateProductPage.propTypes = {};

export default CreateProductPage;
