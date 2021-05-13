import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router";
import CreateProductPage from './pages/CreateProductPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

const ProductRouter = (props) => {
  return (
    <Switch>
      <Route
        path="/admin/products/create"
        exact
        component={CreateProductPage}
      />
      <Route path="/admin/products" exact component={ProductsPage} />
      <Route path="/admin/products/:id" exact component={ProductDetailPage} />

    </Switch>
  );
};

ProductRouter.propTypes = {};

export default ProductRouter;
