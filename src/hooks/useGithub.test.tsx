import { render, screen } from "@testing-library/react";
import App from "../App";
import useGithub from "./useGithub";

const mockUseGithub = useGithub as jest.MockedFunction<typeof useGithub>;

jest.mock("./useGithub", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    repos: [],
  }),
}));

test("renders repo name", async () => {
  const mockRepos = [
    {
      repoName: "name",
      repoUrl: "html_url",
      ownerName: "login",
      createdAt: "created_at",
      updatedAt: "updated_at",
      imageUrl: "avatar_url",
    },
  ];
  mockUseGithub.mockReturnValueOnce({ repos: mockRepos });

  render(<App />);

  const linkElement = await screen.findByText(/name/i);
  expect(linkElement).toBeInTheDocument();
});
