import React, { useCallback } from 'react'
import Image from 'next/image'
import Rating from '../components/Rating';
import { MdClose } from 'react-icons/md';

const ActiefItem = ({data, setActiefItem}) => {

  const close = useCallback(() => {
    setActiefItem(null)
  }, [setActiefItem])

  return (
    <>
    <div className="itemDetail">
      <div className="close" onClick={close}><MdClose/></div>

      <div className="image"><Image src={`/images/episode-${data.Episode}.png`} width={400} height={400} alt={data.Title} /></div>

      <div className="content info">
        <div className="description"><span>Episode {data.Episode}</span> <span className="sep">—</span> <span className="date">{data.Released}</span></div>
        <Rating rating={data.imdbRating} />
      </div>
      <div className="content">
        <h2>{data.Title}</h2>
      </div>
    </div>
    <div className="itemDetailBg" onClick={close}></div>
    </>
  )
}

export default ActiefItem