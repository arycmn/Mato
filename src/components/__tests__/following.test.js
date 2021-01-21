import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import FollowingList from "../organisms/FollowingList/index";

describe("Following List", () => {
  test("Should show some images and names", async () => {
    const data = [
      {
        completeName: "Débora",
        image_url: "https://picsum.photos/200",
      },
      {
        completeName: "Isabel",
        image_url: "https://picsum.photos/200",
      },
      {
        completeName: "Carlos",
        image_url: "https://picsum.photos/200",
      },
      {
        completeName: "Igor",
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

  test("Should show a text", () => {
    render(<FollowingList data={[]} />);

    const fromScreen = screen.getByText(/Você não está seguindo ninguém/);

    expect(fromScreen).toBeInTheDocument();
  });
});
