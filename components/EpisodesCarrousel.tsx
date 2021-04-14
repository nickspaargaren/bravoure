import {useCallback, useRef, useState} from 'react'
import Image from 'next/image'
import { MdKeyboardBackspace } from "react-icons/md";

const EpisodesCarrousel = ({data, setActiefItem}) => {

  const [carrouselState, setCarrouselState] = useState({scroll: 0, pijlLinks: 'disabled', pijlRechts: ''});
  const carrouselRef = useRef(null);

  const itemWidth = 180;

  const carrousel = (actie: '+' | '-') => {

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

  const maakactief = useCallback((item) => {
    setActiefItem(item)
  }, [setActiefItem])

  return (
    <div className="episodes">
    <div className="row" ref={carrouselRef}>
      {data.Episodes.map((item, index) => (
        <div className="item" style={{ transform: `translateX(-${carrouselState.scroll}px)` }} key={index} onClick={() => {maakactief(item)}}>
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
  )
}

export default EpisodesCarrousel