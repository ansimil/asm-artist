import { useState } from 'react'
import {isMobile} from 'react-device-detect';

const MobileNewsCard = ({ article }) => {
    return (
        <div className='newscard-container'>
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
        </div>
    )
        
}

const NewsCard = ({ article }) => {
    const [hovered, setHovered] = useState(false)
    if (isMobile){
        return (
            <div 
            className='newscard-container'
            onMouseEnter={() => {
                setHovered(true)
            }}
            onMouseLeave={() => {
                setHovered(false)
            }} 
            onTouchEnd={()=>{
                setHovered(!hovered)
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
    else {
        return (
            <MobileNewsCard article={article} />
        )
    }
  
}

export default NewsCard