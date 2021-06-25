import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Technical Interests</h2>
                                            <p> My main focus is <b>full-stack data science</b>. As such, I spend time studying both <b>data engineering</b> and <b>statistical techniques</b>. </p>
                                            <p> With that said, my technical interests are varied as I strongly believe having a thorough conceptual understanding of all parts of a company's process is important regardless of one's specific role. </p>
                                            <h2 className="colorlib-heading">Domain Knowledge</h2>
                                            <ul>
                                                <li>Autonomous Vehicles</li>
                                                <li>Computational Biology</li>
                                                <li>Algorithmic Trading</li>
                                            </ul>
                                            <h2 className="colorlib-heading">Hobbies</h2>
                                            <p> I enjoy studying personal finance (particularly real estate) and staying active. I also enjoy staying up to date with trending technologies. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}