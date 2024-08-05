import React, { useRef, useState} from 'react';
import '../styles/style.css';
import { Icon } from 'semantic-ui-react';



function ImageSlider(){

   // We use the useRef hook to get a reference to the slider container
   const sliderRef = useRef(null);
   const scrollAmount = 100; // The amount to scroll when clicking the navigation buttons
   const [images, setImages] = useState([
    // Here, you can add your own image objects with their respective URLs
    { id: 1, url: 'https://as1.ftcdn.net/v2/jpg/02/84/08/56/1000_F_284085674_vaA15KXbtnnVxHVbBkTqMwMA1R6cYqNJ.jpg' },
    { id: 2, url: 'https://i.imgur.com/xdmMleG_d.webp?maxwidth=520&shape=thumb&fidelity=high' },
    { id: 3, url: 'https://i.imgur.com/daQD5Pk_d.webp?maxwidth=520&shape=thumb&fidelity=high' },
    { id: 4, url: 'https://t3.ftcdn.net/jpg/02/96/16/64/360_F_296166453_XwdTi73JIIZj4iEEw3GqJ4KZyAOoiIs5.jpg' },
    { id: 5, url: 'https://i.imgur.com/cSvfUPb_d.webp?maxwidth=520&shape=thumb&fidelity=high' },
   ]);

 // image slider compenent
 return(
 <div className="App">
  {/*Left Nav button*/}
  <button
  className="nav-btn"
  onClick={() =>{
    const container = sliderRef.current;
    container.scrollLeft -= scrollAmount; // scroll left by the specified amount
  }}
  >
     <Icon name="chevron left"/>
  </button>
  {/* Image container */}
  <div className="images-container" ref={sliderRef}>
    {images.map((image) => (
        <img
        className="image"
        alt="sliderImage"
        key={image?.id}
        src={image?.url}
        />
   ))}
  </div>
{/* Right navigation button */}
<button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount; // Scroll right by the specified amount
        }}
      >
        <Icon name="chevron right" />
      </button>
   </div>
 );
}
export default ImageSlider;