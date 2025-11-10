import { Button } from "react-bootstrap";
import {NavLink} from "react-router";
import categoryList from "../backend/categoryList.json";

export default function CategoryList() {
  return (
    <ul id="categories">
      {categoryList.map((cat) => (
        <li className="category-item">
          <div className="category-image">
            <img src={`/common/${cat.name}.jpg`} alt="The image showing .." />
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
