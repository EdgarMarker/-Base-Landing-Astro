import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Props {
  images: { src: string, alt: string }[];
}

const LightBox = ({ images }: Props) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <ul className="listado__x6" role="list">
        {images.map((img, index) => (
          <li key={index} onClick={() => handleOpen(index)}>
            <img src={img.src} alt={img.alt} className="img" />
          </li>
        ))}
      </ul>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
        index={currentIndex}
      />
    </>
  );
};

export default LightBox;
