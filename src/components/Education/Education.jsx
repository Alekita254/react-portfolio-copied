import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork/>
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Script Writter <span>Oct(2023)-Present</span>
                      </h2>
                      <p>
                        I am currently working as <b> a freelance </b> at{' '}
                        <a target='_blank' href='https://www.crealon.com/'>
                          <b>CREALEON</b>
                        </a>{' '}
                        <i>
                          (previously Is a Leading Creative Media Publishing Company)
                        </i>{' '}
                        and boosting my professional skills.
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork/>
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Freelancer <span>Nov(2020)-Present</span>
                      </h2>
                      <p>
                        Content creating;articles,emails,landing pages,social media ads and newsletters.
                      </p>
                      <p>Conducting keywords research to make pages rank higher on search engines.</p>
                      <p>Conducting research on an assigned topic.</p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdWork/>
                    </div>
                    <div className={classes.label}>
                      <h2>Marketing Consultant <span> 2018 - 2020 </span></h2>
                      <p>Created and executed digital marketing strategies and content for clients.</p>
                      <p>Achieved all set marketing targets.</p>
                      <p>Focused on analytics and measurement, conversion optimization, lead generation, and content
                        marketing.</p>
                    </div>

                  </article>
                  <article>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdSchool/>
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Undergraduate at UCLA <span>2011-2013</span>
                      </h2>
                      <p>
                        I completed my undergraduate in Business Admnistration (BBA, Banking, Corporate, Finance and
                        Security Law)
                        from <a href='http://ucla.edu'>UCLA</a> with second class honors.
                      </p>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>

                  {/* </ScrollAnimation> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Education;
