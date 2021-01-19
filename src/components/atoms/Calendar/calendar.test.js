import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Calendar from "../Calendar/index";

test("calendar react", async () => {
  render(<Calendar label="setembro" />);
  const LabelElement = screen.getByText("setembro");
  expect(LabelElement).toBeInTheDocument();
});
