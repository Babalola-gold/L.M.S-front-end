import React from 'react'
import about from "../assets/notion2.jpg";

const About = () => {
    return (
        < >
            <div className='elementorr flex justify-center ' style={{ padding: '190px' }}>
                <h1 className="p-10 w-full text-center text-white">About Us</h1>

            </div>

            <div className=' flex justify-center p-10 ml-3'>
                <h2 className='elementor-head'> Brief Background of Chokhmah International Academy</h2>
            </div>

            <div className='container-fluid'>
                <div>
                    <img style={{width:'600px'}} src={about} alt="" />
                </div>

                <div className='containerer'>

                    <p >&nbsp;Chokhmah International Academy is a private, Christian school for learners, which was established on 21st September, 2011. Chokhmah is a&nbsp; Hebrew word&nbsp; for “<em><strong>Wisdom</strong></em>“.</p>

                    <p >The Academy is located in the beautiful serene area of D/Line Port Harcourt, Nigeria. Chokhmah kicked off with a population&nbsp; of 34 learners comprising Nursery 1-3 and Primary 1-3 and&nbsp; a staff strength of over 30.</p>

                    <p>The school has a well-stocked Library, well -equipped Science, Music, Arts, Economics laboratories, Information and Communication Technology (I.C.T) Centre as well as a fantastic play hall and playground(Mini Stadium).</p>

                    <p>We are sure that our campuses will take care of the overall educational requirements of all our learners to help them to be nurtured to face the world with confidence as independent thinkers and successful leaders of the future.</p>

                    <p >We stand to be distinguished for our values, discipline, integrity, intelligence, Excellence and teamwork.</p>

                </div>
            </div>
        </>
    )
}

export default About