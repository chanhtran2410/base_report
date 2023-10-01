import React, { useState } from 'react'
const Abstract = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const contents = [
        {
            id: 1,
            content: 
            `
            Preparing training data for deep vision models is a labor-intensive task. To address this, generative models have emerged as an effective solution for generating
            synthetic data. While current generative models produce image-level category
            labels, we propose a novel method for generating pixel-level semantic segmentation labels using the text-to-image generative model Stable Diffusion (SD). By
            utilizing the text prompts, cross-attention, and self-attention of SD, we introduce
            three new techniques: class-prompt appending, class-prompt cross-attention, and
            self-attention exponentiation. These techniques enable us to generate segmentation
            maps corresponding to synthetic images. These maps serve as pseudo-labels for
            training semantic segmenters, eliminating the need for labor-intensive pixel-wise
            annotation. To account for the imperfections in our pseudo-labels, we incorporate
            uncertainty regions into the segmentation, allowing us to disregard loss from those
            regions. We conduct evaluations on two datasets, PASCAL VOC and MSCOCO,
            and our approach significantly outperforms concurrent work.
            `
        },
        
    ];
    const handleImageChange = (e) => {
        console.log(e.target.value)
        setImageIndex(parseInt(e.target.value))
    }
    return (
        <div name="Section 1" className='container'>
            <div className='abstract'>
                <div>
                    <h1 className='title'>Abstract</h1>
                </div>
                {contents.map(({ id, content }) => (
                    <p key={id} className="content" >
                        {content}
                    </p>
                ))}
                {/* <div className="slider">
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
                </div> */}
            </div>
        </div>

    )
}

export default Abstract