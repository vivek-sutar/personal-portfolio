import React, { useEffect, useState } from 'react'
import {FaRegEye} from 'react-icons/fa'
const Portfolio = () => {
    const [categories, setCategories] = useState([])
    const [projects, setProjects] = useState([])
    const [filteredProjects,setFilteredProjects] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                const uniqeCategories = [...new Set(data.map(project => project.category))]
                setCategories(['All',...uniqeCategories])
                setFilteredProjects(data)
            })
    }, [])
    
    const handleFilter = (category) => {
        if(category==='All'){
            setFilteredProjects(projects);
        }else{
            setFilteredProjects(projects.filter(project=>project.category==category))
        }
        setSelectedCategory(category);
    }

    return (
        <section>
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <ul className="filter-list">
                {
                    categories.map((category, index) => (
                        <li key={index} className='filter-item'>
                            <button className={category == selectedCategory ? 'active' : ''}
                                onClick={() => handleFilter(category)}>{category}</button>
                        </li>
                    ))
                }
            </ul>

            <section className='projects'>
                <ul className="project-list">
                    {
                        filteredProjects.map(project=>(
                            <li key={project.id} className='project-item active'>
                                <a href="#">
                                    <figure className='project-img'>
                                        <div className="project-item-icon-box">
                                            <FaRegEye/>
                                        </div>
                                        <img src={project.image} alt="" loading='lazy'/>
                                    </figure>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </section>
    )
}

export default Portfolio