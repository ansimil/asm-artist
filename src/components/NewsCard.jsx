
const NewsCard = ({ article }) => {
    console.log(article)
  return (
    <div className='newscard-container'>
        <img className="newscard__img" src={article.imgUrl} alt="card-img" />
        <h4 className="newscard__header">{article.title}</h4>
        <p className="newscard__date">{article.date}</p>
        <p className="newscard__description">{article.description}</p>
    </div>
  )
}

export default NewsCard