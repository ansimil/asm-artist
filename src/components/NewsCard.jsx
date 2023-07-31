import { useState } from 'react'
const NewsCard = ({ article }) => {
    const [hovered, setHovered] = useState(false)
  return (
    <div 
    className='newscard-container'
    onMouseEnter={() => {
        setHovered(true)
    }}
    onMouseLeave={() => {
        setHovered(false)
    }}    
    >
        {!hovered && <img 
        className="newscard__img" 
        src={article.imgUrl} 
        alt="card-img" 
        />}

        {
            hovered &&
            <div className='newscard__img'>
                <h4 className="newscard__header newscard__element">{article.title}</h4>
                <p className="newscard__date newscard__element">{article.date}</p>
                <p className="newscard__description newscard__element">{article.description}</p>
                    {
                        article.link &&
                        <a 
                        href={article.link} 
                        className='newscard__element'
                        target='blank'
                        rel="noopener noreferrer"
                        >
                        Link
                        </a>
                    }
            </div>
        }
    </div>
  )
}

export default NewsCard