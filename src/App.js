import './App.css';
import { AudioListContainer } from './components/AudioListContainer';
import { Navbar } from './components/Navbar';
import { AboutContainer } from './components/AboutContainer';
import NewsCardContainer from './components/NewsCardContainer';
import ContactContainer from './components/ContactContainer';
import MobileNavbar from './components/MobileNavbar';


const pages = [
  {
    title: "news",
    component: <NewsCardContainer />,
  },
  {
    title: "music",
    component: <AudioListContainer />,
  },
  {
    title: "about",
    component: <AboutContainer />,
  },
  {
    title: "contact",
    component: <ContactContainer />,
  },
]


function PageSection({ pageInfo }) {
  return (
    <details 
    id={`${pageInfo.title}-details`}
    className={`details-container ${pageInfo.title}-details`}
    >
      <summary 
      className={`summary-container ${pageInfo.title}-summary`}
      onClick={() => {
        const els = document.getElementsByClassName("details-container")
        const elsKeys = Object.keys(els)
        elsKeys.forEach((key) => {
          if (els[key].id !== `${pageInfo.title}-details`){
            els[key].open = false
          }
        })
      }}
      >
        <h4 className='summary__header'>{pageInfo.title}</h4>
      </summary>
        {pageInfo.component}
    </details>
  )
}

function App() {

  return (
    <div className="App">

      <Navbar />
      <MobileNavbar />

      <div className='sections-container'>
        {pages.map((page) => {
          return (
            <PageSection pageInfo={page} />
          )
        })}
      </div>
      
    </div>
  );
}

export {
  App, PageSection
};
