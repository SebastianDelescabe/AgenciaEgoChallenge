import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getInfoById, detailInfo } from '../../helpers';
import { detailfooter1, detailfooter2 } from '../../assets';
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
    <div className='detail'>
      <div className='detail__header'>
        <img src={carById.photo} alt='not found' />
        <div className='detail__header-text'>
          <span>{carById.name}</span>
          <span className='detail__header-text-title'>{carById.title}</span>
          <span className='detail__header-text-description' dangerouslySetInnerHTML={{ __html: carById.description }} />
        </div>
      </div>
      <div className='detail__slideshow'>
        {
          carById.model_highlights && carById.model_highlights.map(e =>
          (
            <div className='detail__slideshow-container'>
              <img className='detail__slideshow-container-image' src={e.image} alt="not found" />
              <span className='detail__slideshow-container-title'>{e.title}</span>
              <span className='detail__slideshow-container-text' dangerouslySetInnerHTML={{ __html: e.content }} />
            </div>
          ))
        }
      </div>
      <div className='detail__data'>
        <div className='detail__data-one'>
          <div className='detail__data-containerText'>
            <span className='detail__data-containerText-title'>Titulo de 20px</span>
            <span className='detail__data-containerText-text'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis hic voluptates itaque, velit deserunt enim assumenda culpa
              libero,quos facere reprehenderit eligendi iste eaque vel delectus corrupti doloremque soluta consequatur!...</span>
          </div>
          <img className='detail__data-one-img' src={detailfooter2} alt="not found" />
        </div>

        <div className='detail__data-two'>
          <img className='detail__data-two-img' src={''} alt="not found" />
          <div className='detail__data-containerText'>
            <span className='detail__data-containerText-title'>Titulo de 20px</span>
            <span className='detail__data-containerText-text'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis hic voluptates itaque, velit deserunt enim assumenda culpa
              libero, quos facere reprehenderit eligendi iste eaque vel delectus corrupti doloremque soluta consequatur!...
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail