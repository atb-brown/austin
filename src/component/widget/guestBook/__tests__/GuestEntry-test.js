import GuestEntry from "../GuestEntry";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const tree = renderer.create(
    <GuestEntry
      name="austin"
      message="Hello World!"
      visitDate="2023-11-26"
      website="https://atb-brown.github.io/austin/"
      isFirst={true}
      isLast={true}
    />,
  );

  expect(tree).toMatchSnapshot();
});

it("top row entry", () => {
  const tree = renderer.create(
    <GuestEntry
      name="austin"
      message="Hello World!"
      visitDate="2023-11-26"
      website="https://atb-brown.github.io/austin/"
      isFirst={true}
      isLast={false}
    />,
  );

  expect(tree).toMatchSnapshot();
});

it("bottom row entry", () => {
  const tree = renderer.create(
    <GuestEntry
      name="austin"
      message="Hello World!"
      visitDate="2023-11-26"
      website="https://atb-brown.github.io/austin/"
      isFirst={false}
      isLast={true}
    />,
  );

  expect(tree).toMatchSnapshot();
});

it("renders without properties", () => {
  const tree = renderer.create(<GuestEntry />);

  expect(tree).toMatchSnapshot();
});
