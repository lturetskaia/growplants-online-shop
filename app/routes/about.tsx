import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Greenery Awaits" },
    {
      name: "description",
      content:
        "Find out more about our company ",
    },
  ];
}

export default function About() {
  return <div>About Page</div>;
}
