import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Results = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const handleImageChange = (e) => {
    console.log(e.target.value)
    setImageIndex(parseInt(e.target.value))
  }

  const contents = [
    {
      id: 1,
      content:
        `
     Our objective is to generate a synthetic dataset $D = (I_i, S_i)^{N}_{i=1}$, consisting of
      high-fidelity images $I$ and pixel-level semantic masks $S$. These images and masks capture both the
      semantic and location information of the target classes $C = {c_1, c_2, ..., c_K}$, where $K$ represents
      the number of classes. The purpose of constructing this dataset is to train a semantic segmenter Φ
      without relying on human annotation. 
      `,
      title: "Problem setting"
    },

  ];
  return (
    <>
      <div name="Section 4" className='container'>
        <div className='motivation'>
          <div>
            <h1 className='title'>Results</h1>
          </div>

          <div className="slider-scroll">
            <div className="image-wrapper">
              <img style={{ opacity: imageIndex === 0 ? 1 : 0 }} src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="sd" />
              <img style={{ opacity: imageIndex === 1 ? 1 : 0 }} src="https://www.zdnet.com/a/img/resize/ba1b1ab92085d777ab5e313b34c66a94b7aa1236/2023/06/05/79a43eb8-ce38-488c-8cc0-e04699aaca7f/bing.jpg?auto=webp&width=1280" alt="sd" />
              <img style={{ opacity: imageIndex === 2 ? 1 : 0 }} src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="sd" />
              <img style={{ opacity: imageIndex === 3 ? 1 : 0 }} src="https://img.freepik.com/premium-photo/girl-is-taking-photo-with-camera_727939-5369.jpg" alt="sd" />
              <img style={{ opacity: imageIndex === 4 ? 1 : 0 }} src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="sd" />
              <img style={{ opacity: imageIndex === 5 ? 1 : 0 }} src="https://www.zdnet.com/a/img/resize/ba1b1ab92085d777ab5e313b34c66a94b7aa1236/2023/06/05/79a43eb8-ce38-488c-8cc0-e04699aaca7f/bing.jpg?auto=webp&width=1280" alt="sd" />
              <img style={{ opacity: imageIndex === 6 ? 1 : 0 }} src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="sd" />
              <img style={{ opacity: imageIndex === 7 ? 1 : 0 }} src="https://img.freepik.com/premium-photo/girl-is-taking-photo-with-camera_727939-5369.jpg" alt="sd" />
              <img style={{ opacity: imageIndex === 8 ? 1 : 0 }} src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="sd" />
              <img style={{ opacity: imageIndex === 9 ? 1 : 0 }} src="https://www.zdnet.com/a/img/resize/ba1b1ab92085d777ab5e313b34c66a94b7aa1236/2023/06/05/79a43eb8-ce38-488c-8cc0-e04699aaca7f/bing.jpg?auto=webp&width=1280" alt="sd" />
              <img style={{ opacity: imageIndex === 10 ? 1 : 0 }} src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="sd" />
              <img style={{ opacity: imageIndex === 11 ? 1 : 0 }} src="https://img.freepik.com/premium-photo/girl-is-taking-photo-with-camera_727939-5369.jpg" alt="sd" />
              <img style={{ opacity: imageIndex === 12 ? 1 : 0 }} src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="sd" />
              <img style={{ opacity: imageIndex === 13 ? 1 : 0 }} src="https://www.zdnet.com/a/img/resize/ba1b1ab92085d777ab5e313b34c66a94b7aa1236/2023/06/05/79a43eb8-ce38-488c-8cc0-e04699aaca7f/bing.jpg?auto=webp&width=1280" alt="sd" />
              <img style={{ opacity: imageIndex === 14 ? 1 : 0 }} src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="sd" />
              <img style={{ opacity: imageIndex === 15 ? 1 : 0 }} src="https://img.freepik.com/premium-photo/girl-is-taking-photo-with-camera_727939-5369.jpg" alt="sd" />
            </div>
            <input
              type="range"
              value={imageIndex}
              min="0"
              max="15"
              onChange={handleImageChange}
            />
          </div>

        </div>

      </div>
    </>


  )
}

export default Results;
{/* <Carousel>
        <div>
          <img src="assets/1.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
</Carousel> */}