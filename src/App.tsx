import './App.css'
import useGithub from './hooks/useGithub';
import { Repo } from './types';

function App() {
  const { repos } = useGithub()

  return (
    <div className="App">
      <ul>
        {repos.map((item: Repo) => {
          return (
            <div key={`${item.repoUrl}`}>
              <a href={item.repoUrl}><img src={item.imageUrl} alt="" /></a>
              <p>Owner: {item.ownerName}</p>
              <p>Repo Name: {item.repoName}</p>
              <p>Created at: {item.createdAt}</p>
              <p>Last Updated: {item.updatedAt}</p>
            </div>

          )
        })}
      </ul>
    </div>
  )
}

export default App