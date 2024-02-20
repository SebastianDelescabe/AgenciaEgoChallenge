import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getInfoById } from '../../helpers';
import './Detail.css';

const Detail = () => {

  const { id } = useParams();

  const [carById, setCarById] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getInfoById(id)
      .then(response => {
        setCarById(response[0])
      })

    setTimeout(() => {
      setLoading(false)
    }, 1500);

  }, [id])

  return (
    <>
      {loading && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
      {
        !loading && (
          <div className='detail animate__animated animate__fadeIn '>
            <div className='detail__header'>
              <img loading='lazy' src={carById.photo} alt='not found' />
              <div className='detail__header-text'>
                <span>{carById.name}</span>
                <span className='detail__header-text-title'>{carById.title}</span>
                <span className='detail__header-text-description' dangerouslySetInnerHTML={{ __html: carById.description }} />
              </div>
            </div>
            <div className='detail__features'>
              {
                carById.model_highlights && carById.model_features.map(e => (
                  <div key={e.id} className='detail__features-container'>
                    <div className='detail__features-img'>
                      <img loading='lazy' className='detail__features-container-image' src={e.image} alt="not found" />
                    </div>
                    <div className='detail__features-text'>
                      <span className='detail__features-container-title'>{e.name}</span>
                      <span className='detail__features-container-text' dangerouslySetInnerHTML={{ __html: e.description }} />
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='detail__higligths'>
              {
                carById.model_features && carById.model_highlights.map(e => (
                  <div key={e.id} className='detail__higligths-data'>
                    <img loading='lazy' className='detail__higligths-img' src={e.image} alt="not found" />
                    <div className='detail__higligths-container'>
                      <span className='detail__higligths-container-title'>{e.title}</span>
                      <span className='detail__higligths-container-text' dangerouslySetInnerHTML={{ __html: e.content }}></span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div >

        )
      }
    </>
  )
}

export default Detail