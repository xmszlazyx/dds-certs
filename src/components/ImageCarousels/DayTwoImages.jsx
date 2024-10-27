import { useEffect, useState } from 'react';
import Carousel from '../Carousel';

const dayTwoImages = () => {
  // Automatically import all images using import.meta.glob()
  const images = import.meta.glob(`../../assets/dayTwoImages/*.{png,jpg,jpeg,svg}`);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Load images and update state
    const loadImages = async () => {
      const imagePromises = Object.values(images).map(async (image) => {
        const imgModule = await image();
        return imgModule.default;
      });

      const loadedImages = await Promise.all(imagePromises);
      setImageUrls(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <>
      <Carousel images={imageUrls} />
    </>
  );
};

export default dayTwoImages;