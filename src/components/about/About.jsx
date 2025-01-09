import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            Hi! My name is <b>Charan Starion</b>. I write SEO articles, blog posts, You-Tube & Snap Scripts, press releases, product descriptions{' '}
            <b>HARO </b> <b>Ad copies </b> & <b>Many more</b> I’m also a copywriter and I write content that gets results.
            My goal is to help brands grow by narrating the best stories possible.
            My style is conversational and engaging with a touch of wit. I also deliver my work on time beating the set deadlines
            :)
          </p>
          <p className={classes.br}>
            I have over 6 years of experience strategizing innovative content writing experiences for small startups to the world’s biggest brands.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default About;
