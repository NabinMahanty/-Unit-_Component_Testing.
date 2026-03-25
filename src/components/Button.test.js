import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("button render hota hai", () => {
  render(<Button text="Click Me" />);
  const btn = screen.getByText("Click Me");
  expect(btn).toBeInTheDocument();
});
