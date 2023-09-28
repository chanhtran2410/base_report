import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Link } from 'react-scroll'
const NavBar = () => {
    const [navButton, setNavButton] = useState(false)

    const links = [
        {
            id: 1,
            title: "Section 1"
        },
        {
            id: 2,
            title: "Section 2"
        },
        {
            id: 3,
            title: "Section 3"
        },
        {
            id: 4,
            title: "Section 4"
        },

    ];
    const authors = [
        {
            id: 1,
            name: "Nguyen Ho Quang",
            link: "https://github.com/quang-ngh"
        },

    ];
    return (
        <div className='container navbar'>
            <div className='navbar'>
                <div>
                    <h1 className='nav-title'>Anti-DreamBooth: Protecting Users from Personalized Text-to-Image Synthesis</h1>
                </div>
                <p className="nav-authors">
                    {authors.map(({ id, name, link }) => (
                        <li key={id} >
                            <a href={link} >{name}</a>
                        </li>
                    ))}
                </p>
                <p className="nav-authors">
                    <li id="enterprise"><a href="https://www.vinai.io/">VinAI Research</a></li>
                </p>
                <div>
                    <h1 className='nav-title'>ICCV-2023</h1>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQxeRgrOSr8WxQI3jrPQh6lshkj0CAATCI4Vn-5BXgHA4xL6HcKIMsBo2I4K-3CmMH-Q&usqp=CAU" ></img>
                <ul className='nav-option'>
                    {links.map(({ id, title }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-125 duration-300 '>
                            <Link to={title} smooth duration={500}>{title}</Link>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default NavBar