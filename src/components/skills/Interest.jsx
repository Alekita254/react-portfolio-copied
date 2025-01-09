import React, { Component } from 'react';
import classes from './Interest.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      <span className={classes.head}>WHAT I DO?</span>
      <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
      <div className={classes.Interest}>
        <div className={classes.web}>
          <h3>SEO Writing</h3>
          <p>
            Content Writing is all about crafting compelling content that appeals to the audience and drives conversion.
            And that’s precisely what I do!
          </p>
        </div>
        <div className={classes.app}>
          <h3>Articles & Blog Writings</h3>
          <p>
            I write engaging, informative, and well-researched articles that not only educate but also resonate with your audience, strengthening your brand’s credibility.
          </p>
        </div>
        <div className={classes.other}>
          <h3>Script Writing (YouTube & SnapChat)</h3>
          <p>
            I craft compelling scripts tailored for YouTube and Snapchat, ensuring your content keeps viewers hooked and
            encourages higher engagement.
          </p>
        </div>

        <div className={classes.app}>
          <h3>Email CopyWriting</h3>
          <p>
            I write persuasive email copy that drives conversions, nurtures leads, and strengthens customer
            relationships with clear and impactful messaging.
          </p>
        </div>
        <div className={classes.app}>
          <h3>GEO & Landing Page</h3>
          <p>
            I design persuasive landing pages optimized for conversions, ensuring visitors take the desired action and
            your brand achieves measurable success.
          </p>
        </div>

      </div>
    </div>
  );
}
