import React from 'react'
import { FaBookReader } from 'react-icons/fa'
import TimelineItem from './TimelineItem'
import SkillItem from './SkillItem'
const Resume = () => {
    return (
        <section>
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>
            <div className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <FaBookReader />
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className='timeline-list'>
                    <TimelineItem title='University of school' date='2006-2007' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque ab? Dolore officia aut nostrum laudantium suscipit quidem, enim eligendi mollitia, labore provident accusamus. A magni impedit deleniti optio earum.' />
                    <TimelineItem title='University of school' date='2006-2007' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque ab? Dolore officia aut nostrum laudantium suscipit quidem, enim eligendi mollitia, labore provident accusamus. A magni impedit deleniti optio earum.' />
                    <TimelineItem title='University of school' date='2006-2007' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque ab? Dolore officia aut nostrum laudantium suscipit quidem, enim eligendi mollitia, labore provident accusamus. A magni impedit deleniti optio earum.' />
                    <TimelineItem title='University of school' date='2006-2007' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque ab? Dolore officia aut nostrum laudantium suscipit quidem, enim eligendi mollitia, labore provident accusamus. A magni impedit deleniti optio earum.' />
                </ol>
            </div>

            <div className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <FaBookReader />
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>
                <ol className='timeline-list'>
                    <TimelineItem title='University of school' date='2006-2007' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque ab? Dolore officia aut nostrum laudantium suscipit quidem, enim eligendi mollitia, labore provident accusamus. A magni impedit deleniti optio earum.' />
                    <TimelineItem title='University of school' date='2006-2007' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque ab? Dolore officia aut nostrum laudantium suscipit quidem, enim eligendi mollitia, labore provident accusamus. A magni impedit deleniti optio earum.' />
                    <TimelineItem title='University of school' date='2006-2007' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque ab? Dolore officia aut nostrum laudantium suscipit quidem, enim eligendi mollitia, labore provident accusamus. A magni impedit deleniti optio earum.' />
                    <TimelineItem title='University of school' date='2006-2007' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque ab? Dolore officia aut nostrum laudantium suscipit quidem, enim eligendi mollitia, labore provident accusamus. A magni impedit deleniti optio earum.' />
                </ol>
            </div>

            {/* skills */}
            <div className="skills">
                <h3 className="h3 skills-title">My Skills</h3>
                <ul className="skills-list content-card">
                    <SkillItem title='Web Design' value={80}/>
                    <SkillItem title='Web Design' value={80}/>
                    <SkillItem title='Web Design' value={80}/>
                    <SkillItem title='Web Design' value={80}/>
                </ul>
            </div>
        </section>
    )
}

export default Resume
