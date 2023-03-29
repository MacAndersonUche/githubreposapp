import { useEffect, useState } from "react";
import { Repo } from "../types";

function useGithub() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const fetchRepos = async () => {
    try {
      const response = await fetch("https://api.github.com/repositories");

      const data = await response.json();

      const urls = data.map((item: { url: any }) => item.url).slice(0, 10);

      const dataObj = await Promise.all(
        urls.map(async (url: string) => {
          const res = await fetch(url);

          const data = await res.json();

          return {
            repoName: data.name,
            repoUrl: data["html_url"],
            ownerName: data.owner.login,
            createdAt: data["created_at"],
            updatedAt: data["updated_at"],
            imageUrl: data.owner["avatar_url"],
          };
        })
      );

      //   console.log(dataObj);

      return dataObj;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRepos();
      if (data) {
        setRepos(data);
      }
    };
    fetchData();
  }, []);

  return {
    repos,
  };
}

export default useGithub;
