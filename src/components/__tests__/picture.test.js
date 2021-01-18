import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Picture from "../atoms/Picture";

describe("When everything is ok", () => {
  test("Should show an image and a description text", () => {
    render(
      <Picture
        src="https://picsum.photos/200"
        width="200px"
        height="200px"
        picturetype="location"
        pictureText="Imagem aleatória"
      />
    );

    const fromScreen = screen.getByText("Imagem aleatória");

    expect(fromScreen).toBeInTheDocument();
  });
  test("Should show an image", async () => {
    render(
      <Picture
        src="https://picsum.photos/200"
        width="200px"
        height="200px"
        picturetype="location"
        pictureText="Imagem aleatória"
      />
    );

    const fromScreen = screen.getByRole("img");

    expect(fromScreen).toBeInTheDocument();
  });
  test("Should show an image with a random width", async () => {
    const width = Math.floor(Math.random() * 100) + "px";
    const height = "100px";

    render(
      <Picture
        src="https://picsum.photos/200"
        width={width}
        height={height}
        picturetype="location"
        pictureText="Imagem aleatória"
      />
    );

    const fromScreen = screen.getByRole("img").getAttribute("width");

    expect(fromScreen).toBe(width);
  });
  test("Should show an image with a random height", async () => {
    const width = Math.floor(Math.random() * 100) + "px";
    const height = Math.floor(Math.random() * 100) + "px";

    render(
      <Picture
        src="https://picsum.photos/200"
        width={width}
        height={height}
        picturetype="location"
        pictureText="Imagem aleatória"
      />
    );

    const fromScreen = screen.getByRole("img").getAttribute("height");

    expect(fromScreen).toBe(height);
  });
});
