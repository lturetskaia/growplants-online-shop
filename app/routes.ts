import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),

  ...prefix("products", [
    route("house-plants", "routes/house-plants.tsx"),
    route("garden-plants", "routes/garden-plants.tsx"),
    route("pots-and-planters", "routes/pots-and-planters.tsx"),
    route(":productId", "routes/product.tsx"),
  ]),
] satisfies RouteConfig;
