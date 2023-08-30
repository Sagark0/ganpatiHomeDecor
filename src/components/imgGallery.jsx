import React from "react";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import './imgGallery.css';
const Gallery = ({ images }) => {
    const [imgSrc, setImgSrc] = useState();
    const [fullImage, setFullImage] = useState(false);
    const imgStyle = {
        display: fullImage ? 'flex' : 'none'
    }
    const handleImgClick = (img) => {
        setImgSrc(img);
        setFullImage(true);
    }
  return (
    <>
    <div className="full-img" style={imgStyle}>
        <img src={imgSrc} />
        <CloseIcon className="closeIcon" onClick={() => setFullImage(false)}/>
    </div>
    <div className="grid-wrapper">
      {images.map((img) => (
        <div key={img}>
          <img src={img} onClick={() => handleImgClick(img)}/>
        </div>
      ))}
    </div>
    </>
  );
};

export default Gallery;
