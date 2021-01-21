import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import FollowingList from "../organisms/FollowingList/index";

describe("Following List", () => {
  test("Should show some images and names", async () => {
    const data = [
      {
        name: "Débora",
        image_url: "https://picsum.photos/200",
      },
      {
        name: "Isabel",
        image_url: "https://picsum.photos/200",
      },
      {
        name: "Carlos",
        image_url: "https://picsum.photos/200",
      },
      {
        name: "Igor",
        image_url: "https://picsum.photos/200",
      },
    ];

    render(<FollowingList data={data} />);
    const debora = screen.getByText("Débora");
    const isabel = screen.getByText("Isabel");
    const carlos = screen.getByText("Carlos");
    const igor = screen.getByText("Igor");

    const image = screen.getAllByRole("img");

    expect(debora).toBeInTheDocument();
    expect(isabel).toBeInTheDocument();
    expect(carlos).toBeInTheDocument();
    expect(igor).toBeInTheDocument();
    expect(image).toHaveLength(4);
  });
});
