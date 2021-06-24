import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Timeline</span>
                {/* <h2 className="colorlib-heading animate-box">Timeline</h2> */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate Degree at MIT <span>Sep 2017-Jun 2021</span></h2>
                        <p>Bachlors of science in Computer Science and Engineering with a minor in Mathematics. </p>
                        <p> GPA: 4.80/5.00</p>
                        <p> Course highlights:
                          <ul>
                            <li>Computer Systems Engineering</li>
                            <li>Database Systems </li>
                            <li> Parallel Computing and Scientific Machine Learning </li>
                            <li>Probability and Random Variables </li>
                            <li> Real Analysis Theory of Computation </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergradate Researcher at MIT CSAIL <span>Jan 2020-Oct 2020</span></h2>
                        <ul>
                          <li>Helped to implement novel inference algorithms for time-series metagenomic analysis. </li>
                          <li>Implemented a generative model to produce semi-synthetic metagenomic data for testin </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Data Science Internship at Argo AI <span>Jun 2020-Aug 2020</span></h2>
                        <p>Helped to explore, analyze, and extract insights from the large amount of self-driving car data generated by other teams across the company. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Data Science Internship at nference <span>Jun 2019-Aug 2019</span></h2>
                        <p>Full stack data science for biomedical data, ranging from web scraping to database storage and querying to web UI creation. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> High School Diploma at Main School of Science and Mathematics <span> Aug 2015-May 2017</span></h2>
                        <p> GPA: 3.99/4.00 </p>
                        <p> Standardized Test Highlights: </p>
                        <ul>
                          <li> SAT: 1570/1600</li>
                          <li> Chemistry Subject Test: 800/800</li>
                          <li> Physics Subject Test: 800/800</li>
                          <li> Math II Subject Test: 800/800</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
