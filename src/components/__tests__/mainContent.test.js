import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import MainContent from "../templates/MainContent";

describe("Main Content", () => {
  test("Should show a title and a content", () => {
    const title = "Teste";
    const content = "lorem ipsum";

    render(<MainContent title={title}>{content}</MainContent>);

    const titleFromScreen = screen.getByText(/Teste/);
    const contentFromScreen = screen.getByText(/lorem ipsum/);

    expect(titleFromScreen).toBeInTheDocument();
    expect(contentFromScreen).toBeInTheDocument();
  });
});
