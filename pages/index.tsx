import react, {useRef, useState} from 'react'
import Image from 'next/image'

import Layout from '../components/Layout';
import Rating from '../components/Rating';

import { MdClose, MdKeyboardBackspace } from "react-icons/md";

const Home = ({general, episodes}) => {

  const [actiefItem, setActiefItem] = useState(null);

  const ActiefItem = ({data}) => {

    return (
      <div className="itemDetail">
        <div className="sluiten" onClick={() => setActiefItem(null)}><MdClose/></div>

        <div className="afbeelding"><Image src={`/images/aflevering-${data.Episode}.png`} width={400} height={400} alt={data.Title} /></div>

        <div className="content info">
          <div>Episode {data.Episode} — {data.Released}</div>
          <Rating rating={data.imdbRating} />
        </div>
        <div className="content">
          <h2>{data.Title}</h2>
        </div>
      </div>
    )
  }

  const [carrouselState, setCarrouselState] = useState({scroll: 0, pijlLinks: 'disabled', pijlRechts: ''});
  const carrouselRef = useRef(null);

  const itemWidth = 180;

  const carrousel = (actie) => {

    const maxWidth = carrouselRef.current.childElementCount * itemWidth - itemWidth;

    if(actie === '+' && maxWidth > carrouselState.scroll && (maxWidth - itemWidth) !== carrouselState.scroll) { // Standaard volgende scroll
      setCarrouselState(prevState => ({...carrouselState, pijlLinks: '', scroll: (prevState.scroll + itemWidth)}));
    } else if (actie === '+' && (maxWidth - itemWidth) === carrouselState.scroll) { // Einde bereikt
      setCarrouselState(prevState => ({...carrouselState, pijlLinks: '', pijlRechts: 'disabled', scroll: (prevState.scroll + itemWidth)}));
    } else if (actie === '-' && carrouselState.scroll > itemWidth) { // Terug
      setCarrouselState(prevState => ({...carrouselState, pijlRechts: '', scroll: (prevState.scroll - itemWidth)}));
    } else if (actie === '-' && carrouselState.scroll === itemWidth) { // Terug en einde bereikt
      setCarrouselState(prevState => ({...carrouselState, pijlLinks: 'disabled', pijlRechts: '', scroll: 0}));
    } 

  }

  return (
        <Layout title={`${general.Title} | Season ${episodes.Season}`} description={general.Plot}>
          <div className="interface">
            <div className="inhoud">
              <div className="header">
                <p>Season {episodes.Season}</p>
                <h1>{general.Title}</h1>
                <p className="sub">{general.Plot}</p>
              </div>
              <div className="episodes">
                <div className="row" ref={carrouselRef}>
                  {episodes.Episodes.map((item, index) => (
                    <div className="item" style={{ transform: `translateX(-${carrouselState.scroll}px)` }} key={index} onClick={() => setActiefItem(item)}>
                      <div className="afbeelding"><Image src={`/images/aflevering-${item.Episode}.png`} width={160} height={106} alt={item.Title} /></div>
                      <div className="id">{item.Episode}</div>
                      <h3>{item.Title}</h3>
                      <p>{item.Released}</p>
                    </div>
                  ))}
                </div>
                <div className="navigatie">
                  <div className={carrouselState.pijlLinks} onClick={() => carrousel('-')}><MdKeyboardBackspace /></div>
                  <div className={carrouselState.pijlRechts} onClick={() => carrousel('+')}><MdKeyboardBackspace style={{ transform: 'rotate(180deg)' }} /></div>
                </div>
              </div>
            </div>
            {actiefItem && <ActiefItem data={actiefItem} />}
          </div>
          <div className="bg">
            <Image src={general.Poster.replace('300.', '1300.')} width={1080} height={1350} alt="bg" />
          </div>
      </Layout>
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