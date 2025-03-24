import React from 'react';

export default function SkillsPage(props) {
    return (
        <section>
            <div className='container my-5'>
                <div className='wrap'>
                    <div className='d-flex flex-row justify-content-around'>
                        <div className=''>
                            <h2 className='text-decoration-underline'>Technical Skills</h2>
                            <div className='cards'>
                                <h3>Java</h3>
                            </div>
                            <div className='cards'>
                                <h3>R</h3>
                            </div>
                            <div className='cards'>
                                <h3>HTML</h3>
                            </div>
                            <div className='cards'>
                                <h3>JavaScript</h3>
                            </div>
                            <div className='cards'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='text-decoration-underline'>Language Skills</h2>
                            <div className='cards'>
                                <h3>Korean</h3>
                            </div>
                            <div className='cards'>
                                <h3>Japanese</h3>
                            </div>
                            <div className='cards'>
                                <h3>English</h3>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}