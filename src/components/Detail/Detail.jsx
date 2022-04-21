import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getInfoById } from '../../helpers/getInfoByid';
import { detailInfo } from '../../helpers';
import './Detail.css';

const Detail = () => {

  const { id } = useParams();
  const [carById, setCarById] = useState([])

  useEffect(() => {
    getInfoById(id)
      .then((response) => {
        setCarById(response)
      })
  }, [id])


  return (
    <>
      <div className='detail__header'>
        <img src={carById.photo} alt='not found' />
        <div className='detail__header-text'>
          <span className='detail__header-text-name'>{carById.name}</span>
          <span className='detail__header-text-segment'>{carById.segment}</span>
          <span className='detail__header-text-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur praesentium nostrum illo accusamus earum, et officiis, at numquam cupiditate suscipit! Eum, unde? Eaque accusamus iure minus porro beatae perspiciatis.</span>
        </div>
      </div>
      <div className='detail__slideshow'>
        {
          detailInfo && detailInfo.map(e =>
          (
            <div className='detail__slideshow-container'>
              <img src={e.image} alt="not found" />
              <span className='detail__slideshow-container-title'>{e.title}</span>
              <span className='detail__slideshow-container-text'>{e.text}</span>
            </div>
          ))
        }
      </div>
      <div className='detail__data'>
        <div>
          <span></span>
          <img src="" alt="" />
        </div>
        <div>
          <span></span>
          <img src="" alt="" />
        </div>
      </div>
    </>
  )
}

export default Detail