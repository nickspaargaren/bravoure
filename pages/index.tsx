import react, {useState} from 'react'
import Image from 'next/image'

import Layout from '../components/Layout';
import ActiefItem from '../components/ActiefItem';
import EpisodesCarrousel from '../components/EpisodesCarrousel';

const Home = ({general, episodes}) => {

  const [actiefItem, setActiefItem] = useState(null);

  return (
        <Layout title={`${general.Title} | Season ${episodes.Season}`} description={general.Plot}>
          <div className="interface">
            <div className="overview">
              <div className="inner top">
                <p className="sub">Season {episodes.Season}</p>
                <h1>{general.Title}</h1>
                <p className="sub">{general.Plot}</p>
              </div>
              <EpisodesCarrousel data={episodes} setActiefItem={setActiefItem}/>
            </div>
            {actiefItem && <ActiefItem data={actiefItem} setActiefItem={setActiefItem} />}
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