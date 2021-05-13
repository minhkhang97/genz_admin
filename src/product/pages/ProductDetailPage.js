//page nay de chinh sua

import React from "react";
import PropTypes from "prop-types";
import ProductDetail from '../components/ProductDetail';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchProductById } from "../slice/productSlice";

const ProductDetailPage = (props) => {
  const { status, products } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await dispatch(fetchProductById({id}));
    })();
  }, []);
  
  if (status === "loading") return <div>loading</div>;
  if (status === "failed") return <div>failed</div>;
  return (
    <div>
      <div class="mb-1 mt-5">
        <h1 class="uppercase text-xl font-semibold text-gray-800 tracking-wide ">
          chi tiết sản phẩm
        </h1>
      </div>

      {/* <ProductDetail product={products[0]}/> */}
    </div>
  );
};

ProductDetailPage.propTypes = {};

export default ProductDetailPage;
