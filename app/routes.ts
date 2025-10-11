import {
  type RouteConfig,
  index,
  route,
  prefix,
  layout
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),

  ...prefix("products", [
    index("routes/products.tsx"),
    route(":productId", "routes/product.tsx"),
  ]),
] satisfies RouteConfig;
