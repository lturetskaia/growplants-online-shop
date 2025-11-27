import { Accordion } from "react-bootstrap";
export default function ProductAccordion({
  description,
}: {
  description: string;
}) {
  return (
    <Accordion defaultActiveKey="0" alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>About</Accordion.Header>
        <Accordion.Body>
          {" "}
          <p>{description} </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Delivery</Accordion.Header>
        <Accordion.Body>
          {" "}
          <p>
            <span>Packaging:</span> We pack all items using custom-designed
            boxes with special compartments and supports to prevent movement and
            damage, so your products arrive in perfect condition. Our plant
            boxes are 100% recyclable, so they can be responsibly disposed of
            without harming the planet.
          </p>
          <p>
            <span>Quick delivery:</span> The standard delivery time for our
            plants is 2-3 days. You can also choose next day delivery with the
            same fee for any amount of plants & accessories.
          </p>
          <p>
            <span>Plastic Nursery Pots:</span> All our plants are supplied in
            practical plastic nursery pots. If you prefer a more decorative
            option, we offer a range of stylish pots available for purchase
            separately.
          </p>
          <p>
            <span>Plant Pot Sizes:</span> Pot sizes may vary by +/- 1cm. To
            ensure a proper fit, we recommend selecting a decorative cachepot
            that is 1-2cm larger than the nursery pot size. For instance, if you
            purchase a plant in a 15cm pot, a 16 - 17cm decorative pot would be
            ideal.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
