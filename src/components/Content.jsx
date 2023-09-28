import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const contentStyle = {
    height: '160px',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const Content = () => {
    const contents = [
        {
            id: 1,
            content: "Text-to-image diffusion models are nothing but a revolution, allowing anyone, even without design skills, to create realistic images from simple text inputs. With powerful personalization tools like DreamBooth, they can generate images of a specific person just by learning from his/her few reference images. However, when misused, such a powerful and convenient tool can produce fake news or disturbing content targeting any individual victim, posing a severe negative social impact. In this paper, we explore a defense system called Anti-DreamBooth against such malicious use of DreamBooth. The system aims to add subtle noise perturbation to each user's image before publishing in order to disrupt the generation quality of any DreamBooth model trained on these perturbed images. We investigate a wide range of algorithms for perturbation optimization and extensively evaluate them on two facial datasets over various text-to-image model versions. Despite the complicated formulation of DreamBooth and Diffusion-based text-to-image models, our methods effectively defend users from the malicious use of those models. Their effectiveness withstands even adverse conditions, such as model or prompt/term mismatching between training and testing.",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQxeRgrOSr8WxQI3jrPQh6lshkj0CAATCI4Vn-5BXgHA4xL6HcKIMsBo2I4K-3CmMH-Q&usqp=CAU",
        },
        {
            id: 2,
            content: "Text-to-image diffusion models are nothing but a revolution, allowing anyone, even without design skills, to create realistic images from simple text inputs. With powerful personalization tools like DreamBooth, they can generate images of a specific person just by learning from his/her few reference images. However, when misused, such a powerful and convenient tool can produce fake news or disturbing content targeting any individual victim, posing a severe negative social impact. In this paper, we explore a defense system called Anti-DreamBooth against such malicious use of DreamBooth. The system aims to add subtle noise perturbation to each user's image before publishing in order to disrupt the generation quality of any DreamBooth model trained on these perturbed images. We investigate a wide range of algorithms for perturbation optimization and extensively evaluate them on two facial datasets over various text-to-image model versions. Despite the complicated formulation of DreamBooth and Diffusion-based text-to-image models, our methods effectively defend users from the malicious use of those models. Their effectiveness withstands even adverse conditions, such as model or prompt/term mismatching between training and testing.",
            carousel: [
                {
                    id: 1,
                    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQxeRgrOSr8WxQI3jrPQh6lshkj0CAATCI4Vn-5BXgHA4xL6HcKIMsBo2I4K-3CmMH-Q&usqp=CAU",
                    label: "label"
                },
                {
                    id: 2,
                    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQxeRgrOSr8WxQI3jrPQh6lshkj0CAATCI4Vn-5BXgHA4xL6HcKIMsBo2I4K-3CmMH-Q&usqp=CAU",
                    label: "label 2"
                }
            ]
        },

    ];
    return (
        <div name="Section 3" className='container'>
            <div className='content'>
                <div>
                    <h1 className='title'>Content</h1>
                </div>
                {contents.map(({ id, content, link, carousel }) => (
                    <div className='content-div'>
                        <p key={id} className="content">
                            {content}
                        </p>
                        {link ? <img src={link} alt="" /> : <br />}

                        <div className='carousel'>
                            {carousel ? (
                                <Carousel>
                                    {carousel.map(({ id, link, label }) => ( // Added 'id' to the carousel map function
                                        <div key={id}> {/* Added key prop */}
                                            <img src={link} />
                                            <p className="legend">{label}</p>
                                        </div>
                                    ))}
                                </Carousel>
                            ) : (
                                <br />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Content