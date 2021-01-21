import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import FeedPost from "../molecules/FeedPost";

describe("Feed post", () => {
  test("Should show three images", () => {
    const imageProfile = "https://picsum.photos/200";
    const imagePost = "https://picsum.photos/300";

    render(<FeedPost postSrc={imagePost} profileSrc={imageProfile} />);

    const fromScreen = screen.getAllByRole("img");

    expect(fromScreen).toHaveLength(3);
  });
});
