import { Repo } from "./types"

interface RepoProps {
    item: Repo
}


const RepoItem = ({ item }: RepoProps) => {
    return (
        <div key={`${item.repoUrl}`}>
            <a href={item.repoUrl}><img src={item.imageUrl} alt="" />
                <p>Owner: {item.ownerName}</p>
                <p>Repo Name: {item.repoName}</p>
            </a>
            <p>Created at: {item.createdAt}</p>
            <p>Last Updated: {item.updatedAt}</p>
        </div>
    )
}

export default RepoItem