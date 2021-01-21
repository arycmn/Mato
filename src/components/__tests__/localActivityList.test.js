import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import LocalActivtyList from "../molecules/LocalActivityList";

describe("Local Activity", () => {
  test("Should show an activity", () => {
    const id = [2, 5, 4];

    render(<LocalActivtyList activityID={id} />);

    const fromScreen = screen.getByText("Ciclismo");
    const img = screen.getAllByRole("img");

    expect(fromScreen).toBeInTheDocument();
    expect(img).toHaveLength(3);
  });
});
