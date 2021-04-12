import react, {useEffect, useState} from 'react'
import styled from 'styled-components'
import GlobalStyle from '../styles/globalStyles';

import { MdClose, MdStar } from "react-icons/md";

const Home = ({general, episodes}) => {

  const [actiefItem, setActiefItem] = useState(null);

  // if (typeof window !== 'undefined') {

  //   useEffect(() => {
  //     setData(JSON.parse(localStorage.getItem('cache')))
      
  //   },[])
  
  //   useEffect(() => {
  //     localStorage.setItem('cache', JSON.stringify({general: general, episodes: episodes.Episodes}))
  //     console.log(data);
  //   },[data])

  // }


  const ActiefItem = ({data}) => {
   


      return (
        <div className="itemDetail">
          <div className="sluiten" onClick={() => setActiefItem(null)}><MdClose/></div>
          
          <div className="afbeelding"><img src="https://via.placeholder.com/400" alt=""/></div>

          <div className="content info">
            <div>Episode {data.Episode} / {data.Released}</div>
            <div className="rating"><MdStar/> <strong>{data.imdbRating}</strong> / 10</div>
          </div>
          <div className="content">
            <h2>{data.Title}</h2>
          </div>
        </div>
      )

  }

  return (
      <>
      <GlobalStyle/>
        
        <div className="interface">
          <div className="inhoud">
            <div className="header">
              <div className="tag">Season {general.Season}</div>
              <h1>{general.Title}</h1>
              <p className="sub">{general.Plot}</p>
            </div>
            <div className="episodes">
              {episodes.Episodes.map((item, index) => (
                <div className="item" key={index} onClick={() => setActiefItem(item)}>
                  <div className="afbeelding"><img src="https://via.placeholder.com/160x100" alt=""/></div>
                    {item.Episode}
                    <h3>{item.Title}</h3>
                    <p>{item.Season}</p>
                </div>
              ))}
            </div>
          </div>
          {actiefItem && <ActiefItem data={actiefItem} />}
        </div>
        <div className="bg"><img src={general.Poster} alt="bg"/></div>
      </>
    )
}


  export async function getServerSideProps() {

    const [generalRes, episodesRes] = await Promise.all([
      fetch(`${process.env.IMDB_API}&t=insecure&type=series`), 
      fetch(`${process.env.IMDB_API}&t=insecure&type=series&Season=1`)
    ]);

    const [general, episodes] = await Promise.all([
      generalRes.json(), 
      episodesRes.json()
    ]);

    return {
      props: {
        general, episodes
      }
    };

  }


  




export default Home