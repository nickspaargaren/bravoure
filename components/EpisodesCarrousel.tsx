import {useCallback, useRef, useState} from 'react'
import Image from 'next/image'
import { MdKeyboardBackspace } from "react-icons/md";

const EpisodesCarrousel = ({data, setActiefItem}) => {

  const [carrouselState, setCarrouselState] = useState({scroll: 0, arrowLeft: 'disabled', arrowRight: ''});
  const carrouselRef = useRef(null);

  const itemWidth = 270;

  const carrousel = (action: '+' | '-') => {

    const maxWidth = carrouselRef.current.childElementCount * itemWidth - itemWidth;

    if(action === '+' && maxWidth > carrouselState.scroll && (maxWidth - itemWidth) !== carrouselState.scroll) { // Standaard volgende scroll
      setCarrouselState(prevState => ({...carrouselState, arrowLeft: '', scroll: (prevState.scroll + itemWidth)}));
    } else if (action === '+' && (maxWidth - itemWidth) === carrouselState.scroll) { // Einde bereikt
      setCarrouselState(prevState => ({...carrouselState, arrowLeft: '', arrowRight: 'disabled', scroll: (prevState.scroll + itemWidth)}));
    } else if (action === '-' && carrouselState.scroll > itemWidth) { // Terug
      setCarrouselState(prevState => ({...carrouselState, arrowRight: '', scroll: (prevState.scroll - itemWidth)}));
    } else if (action === '-' && carrouselState.scroll === itemWidth) { // Terug en einde bereikt
      setCarrouselState(prevState => ({...carrouselState, arrowLeft: 'disabled', arrowRight: '', scroll: 0}));
    }
  
  }

  const setactive = useCallback((item) => {
    setActiefItem(item)
  }, [setActiefItem])

  return (
    <div className="episodes">
    <div className="row" ref={carrouselRef}>
      {data.Episodes.map((item, index) => (
        <div className="item" style={{ transform: `translateX(-${carrouselState.scroll}px)` }} key={index} onClick={() => {setactive(item)}}>
          <div className="image"><Image src={`/images/episode-${item.Episode}.png`} width={272} height={180} alt={item.Title} /></div>
          <div className="id">{item.Episode}</div>
          <h3>{item.Title}</h3>
          <p>{item.Released}</p>
        </div>
      ))}
    </div>
    <div className="inner bottom">
      <div className="navigation">
        <div className={carrouselState.arrowLeft} onClick={() => carrousel('-')}><MdKeyboardBackspace /></div>
        <div className={carrouselState.arrowRight} onClick={() => carrousel('+')}><MdKeyboardBackspace style={{ transform: 'rotate(180deg)' }} /></div>
      </div>
    </div>
  </div>
  )
}

export default EpisodesCarrousel