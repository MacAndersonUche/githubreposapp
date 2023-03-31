import './App.css'
import useGithub from './hooks/useGithub';
import RepoItem from './components/RepoItem';
import { Repo } from './types';

function App() {
  const { repos } = useGithub()

  return (
    <div className="App">
      <ul>
        {repos.map((item: Repo) => {
          return (
            <RepoItem item={item} key={item.repoUrl} />
          )
        })}
      </ul>
    </div>
  )
}

export default App