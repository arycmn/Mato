import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FollowingList from "../FollowingList/index";

test("Following list test", async () => {
  render(<FollowingList label="setembro" />);
  const LabelElement = screen.getByText("setembro");
  expect(LabelElement).toBeInTheDocument();
});
