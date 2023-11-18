import React, { useState, useEffect, useRef } from 'react';
import Loading from '../loading';
import './index.scss';

let Masonry = null;

const images = [
  'diego1-964a74e7',
  'diego2-4b1777ac',
  'diego3-fc56f984',
  'diego4-45589fad',
  'diego5-f4a97b35',
  'diego8-5c0b8892',
  'diego15-d96978be',
  'diego16-5b4f888a',
  'jlm1-7960587d',
  'jlm2-80441d84',
  'jlm3-c08757fb',
  'jlm4-304f52fa',
  'jlm5-6c7a232d',
  'jlm7-b5832873',
  'Nonoo2-b230f46d',
  'nonoolyons1-e9295dea',
  'nonoolyons2-e085358a',
  'nonoolyons3-dbc3acf2',
  'nonoolyons4-3f268088',
  'nonoolyons5-c12e9d56',
  'kimberlytaylor1-dbc56016',
  'kimberlytaylor2-0671b345',
  'dance1-dee303b9',
  'leathercostume-3e1379a3',
];

export default function ImageGallery() {
  const [masonry, setMasonry] = useState(null);
  const [loading, setLoading] = useState(true);
  const imageRefs = useRef([]);

  useEffect(() => {
    if (!masonry) {
      Masonry = require('masonry-layout');
      const _masonry = new Masonry('#gallery', {
        itemSelector: '.grid-item',
        gridSizer: '.grid-sizer',
        percentPosition: true,
      });
      setMasonry(_masonry)
    }
    onLoad();
  }, [masonry]);

  const onLoad = () => {
    const allLoaded = imageRefs.current.every(img => img && img.complete);
    if (allLoaded) {
      setLoading(false);
    }
  }

  return (
    <div id="gallery">
      <Loading loading={loading} />
      <div className="grid-sizer" style={ loading ? {visibility: 'hidden'} : {}}>
        {
          images.map((imageName, index) => {
            return (
              <img 
                key={index}
                className="grid-item"
                ref={el => imageRefs.current[index] = el} // Store a reference to the image element
                onLoad={onLoad} // Increment load count on each image load
                src={require(`../../images/gallery/${imageName}.jpg`).default}
                alt={imageName}
              />
            );
          })
        }
      </div>
    </div>
  );
}