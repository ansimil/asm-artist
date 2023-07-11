import { news } from "../assets/news"
import NewsCard from "./NewsCard"

const NewsCardContainer = () => {
  return (
    <div className='newscardcontainer-container'>
        {news.map(article => {
            return (
                <NewsCard article={article}/>
            )
        })}
    </div>
  )
}

export default NewsCardContainer