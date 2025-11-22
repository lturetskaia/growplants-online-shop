import { Button } from "react-bootstrap";
import { NavLink } from "react-router";
import categoryList from "../backend/data/categoryList.json";

export default function CategoryList() {
  return (
    <ul id="categories">
      {categoryList.map((cat) => (
        <li className="category-item" key={cat.name}>
          <div className="category-image">
            <NavLink to={"/products/" + cat.name}>
              <img src={`/common/${cat.name}.jpg`} alt="The image showing .." />
            </NavLink>
          </div>
          <div className="category-description">
            <h2>{cat.name.replaceAll("-", " ").replace("and", "&")}</h2>
            <NavLink to={"/products/" + cat.name}>
              <Button className="btn btn-outline-success">Discover</Button>
            </NavLink>
          </div>
        </li>
      ))}
    </ul>
  );
}
