import { render, screen } from "@testing-library/react";
import RepoItem from "./RepoItem";

const MOCK_REPO_ITEM = {
    repoName: "name",
    repoUrl: "html_url",
    ownerName: "login",
    createdAt: "created_at",
    updatedAt: "updated_at",
    imageUrl: "avatar_url",
}
test("Renders Repo Item", () => {
    render(<RepoItem item={MOCK_REPO_ITEM} />)

    expect(screen.getByText(/login/i)).toBeInTheDocument()
    expect(screen.getByText(/created_at/i)).toBeInTheDocument()
    expect(screen.getByText(/updated_at/i)).toBeInTheDocument()
})