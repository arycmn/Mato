import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import LocationList from "../organisms/LocationList";

describe("Location List", () => {
  test("Should show a locations list with a name, description and a picture", () => {
    const data = [
      {
        name: "Location",
        description: "lorem ipsum",
        pictureSrc: "https://picsum.photos/200",
      },
      {
        name: "Location 2",
        description: "lorem ipsum 2",
        pictureSrc: "https://picsum.photos/200",
      },
    ];

    render(<LocationList data={data} />);

    const name = screen.getByText("Location");
    const description = screen.getByText("lorem ipsum");
    const pictureSrc = screen.getAllByRole("img");

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(pictureSrc).toHaveLength(2);
  });
});
