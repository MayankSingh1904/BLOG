import classNames from 'classnames'
import React from 'react'
import { ArticleList, PopularTags} from '../components'
import { useArticlesQuery, useAuth } from '../hooks'

import Footer from "../components/Footer";
import Slider from '../components/SlideShow';
import SlideShow from '../components/SlideShow';
const initialFilters = { tag: '', offset: null, feed: false }

function Home() {
  const { isAuth } = useAuth()
  const [filters, setFilters] = React.useState({ ...initialFilters, feed: isAuth })
  const { isArticlesLoading, articles, ArticlesError } = useArticlesQuery();


  React.useEffect(() => {
    setFilters({ ...initialFilters, feed: isAuth })
  }, [isAuth])

  function onTagClick(tag) {
    setFilters({ ...initialFilters, tag })
  }

  function onGlobalFeedClick() {
    setFilters(initialFilters)
  }

  function onFeedClick() {
    setFilters({ ...initialFilters, feed: true })
  }

  return (<>
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">Welcome to MEGABLOG</h1>
          <p>A place to share your knowledge and ideas!.</p>
        </div>
      </div>
      
      <div><SlideShow/></div>
      
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {isAuth && (
                  <li className="nav-item">
                    {/* <button
                      onClick={onFeedClick}
                      type="button"
                      className={classNames('nav-link', {
                        active: filters.feed,
                      })}
                    >
                      Your Feed
                    </button> */}
                  </li>
                )}
            
      
              </ul>
            <p className='feed'>Your feed</p>
            </div>
            <ArticleList  />
          </div>
          <div className='col-md-3'>
            <PopularTags />
          </div>
        </div>
      </div>
      
    </div>
    <div><Footer/></div>
    </>
  )
}

export default Home


