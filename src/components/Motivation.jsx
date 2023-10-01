import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
var Latex = require('react-latex');

const contentStyle = {
  height: '160px',
  lineHeight: '160px',
  textAlign: 'justify',
  background: '#364d79',
};


const Motivation = () => {
  const contents = [
    {
      id: 1,
      content: 
      `
        Semantic segmentation is a fundamental task in computer vision. 
        Its objective is to assign semantic labels to each pixel in an image, making it crucial for 
        applications such as autonomous driving, scene comprehension, and object recognition. 
        However, one of the primary challenges in semantic segmentation is the high cost associated with manual annotation.
         Annotating large-scale datasets with pixel-level labels is labor-intensive, time-consuming, and requires substantial 
         human effort. To address this challenge, an alternative strategy involves leveraging generative models to synthesize
          datasets with pixel-level labels. Past research efforts have utilized Generative Adversarial Networks (GANs) to effectively
           generate synthetic datasets for semantic segmentation, thereby mitigating the reliance on manual annotation $\\href{https://quang-ngh.github.io}{DatasetGAN}$.
            Meanwhile, recent text-to-image diffusion models have emerged as a promising direction for controllable generation
             of realistic images. Harnessing such advances to automate the creation of semantic segmentation datasets could 
             provide a vital breakthrough.
      `,
      title: "Motivation"
      ,
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQxeRgrOSr8WxQI3jrPQh6lshkj0CAATCI4Vn-5BXgHA4xL6HcKIMsBo2I4K-3CmMH-Q&usqp=CAU",
    },
    {
      id: 2,
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
    <div name="Section 2" className='container'>
      <div className='motivation'>
        <div>
          <h1 className='title'>Introduction</h1>
        </div>
        {contents.map(({ id, content, link, carousel, title}) => (
          <>
            <div className="inner-title">
              <h2>{title}</h2>
            </div>
            <div className='content-div'>
              <p key={id} className="content">
                <Latex>
                  {content}
                </Latex>    
              </p>
              {/* {link ? <img src={link} alt="" /> : <br />} */}
            </div>
          </>
        ))}
      </div>
      
    </div>

  )
}

export default Motivation
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