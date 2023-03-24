import {List, Loader} from "@mantine/core";
import { useQuery } from "react-query"
import { useAppSelector } from "../hooks";
import { News } from "../types/news";
import NewsCard from "./NewsCard";
import NewsItem from "./NewsItem";

async function getNews(): Promise<News> {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=pl&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);

  if (!response.ok) {
    throw new Error(`Something went wrong with fetching news`)
}

return response.json();

}


export default function Feed() {
  const {data, isLoading, isError} = useQuery('news', getNews)

  const view = useAppSelector((state) => state.view)


  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>Error loading data</div>
  }

  return (
    <>
    {view === 'list' ? (
    <List
      spacing="lg"
      size="sm"
      center
      listStyleType="none"
    > {
      data?.articles.map((article) => (
        <NewsItem article={article} key={article.title}/>
      ))
    }
    </List>): 
      <div className="card-grid">
        {data?.articles.map((article) => (
          <NewsCard article={article} key={article.title} />
        ))}
      </div>
    }
    </>
  )
}
