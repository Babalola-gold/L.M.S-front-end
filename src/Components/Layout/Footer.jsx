import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <> <br /><br /> <br />

            <div className=' bg-[#3E6CC1]'>
                <div className='container-fluid '> 
                    <div className='w-1/2'>
                        <br /><br />
                        <h4 className='again text-white'>About us</h4> <br /><br />
                        <p style={{ margin: '0 0 20px', fontSize: 'small', color: 'white' }}>
                            The School believes in building a solid foundation for the child and as such, we strive to turn out students with passion for excellence and who have been adequately prepared for tertiary education and life.
                        </p>
                    </div>

                    <div className='w-1/2'>
                        <div className='ml-10'>
                            <br /><br />
                            <h4 className='again text-white'>Popular Links</h4> <br /><br />
                            <div style={{ margin: '0 0 20px', fontSize: 'small', color: 'green' }}>
                                <Link to='/'>
                                    E-portal
                                </Link>

                            </div>
                            <div style={{ margin: '0 0 20px', fontSize: 'small', color: 'green' }}>
                                <Link to='/about'>
                                    About
                                </Link>

                            </div>
                            <div style={{ margin: '0 0 20px', fontSize: 'small', color: 'green' }}>
                                <Link to='/'>
                                    News
                                </Link>

                            </div>
                            <div>
                                <Link to='/'>

                                </Link>

                            </div>
                        </div>
                    </div>

                    <div cla>
                        <br /><br />
                        <h4 className=' again text-white'>Contact Us</h4> <br /><br />

                        <li style={{ margin: '0 0 20px', fontSize: 'small', color:'white' }}>Lagos: 8/10, Olawole Daodu Street, Ifako-Gbagada.
                            Ogun: Km 42, Lagos-Ibadan Expressway Opposite Deeper Life Conference Centre, Ogunrun-Ori.
                        </li>

                        <li style={{ margin: '0 0 20px', fontSize: 'small', color:'white' }}>
                            +234 90*********, +234 906 *******, +234 811********.
                        </li>
                    </div>

                </div>
                <br /><br />

                <div className='mx-20'>
                    <hr />

                </div>
                <br /><br />

                <div className='text-white text-center text-sm'>
                    Emerald Schools. Copyright © 2024 All Rights Reserved.
                </div>
            </div>
        </>
    )
}

export default Footer