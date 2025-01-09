import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { GoProject } from 'react-icons/go';
import { FaArrowCircleDown } from 'react-icons/fa';
import Hello from '../images/Hello.jpg';
import Pencil from '../images/Pencil.jpg';
import { motion } from 'framer-motion';

export default function CarouselImage() {
  return (
    <div id='start'>
      <Carousel
        dynamicHeight
        infiniteLoop={true}
        interval={6000}
        useKeyboardArrows={true}
        transitionTime={1700}
        emulateTouch
        showArrows={false}
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img className={classes.image} src={Hello} alt='myImage' />
          <div className={classes.h1}>
            I'm Charan Starion
            <motion.h1
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }} // Define the scale values for the bouncing effect
              transition={{ duration: 3.3, repeat: Infinity }} // Set the duration and repeat
              whileHover={{
                scale: 1.1
              }}
            >
              <a
                href='https://drive.google.com/file/d/1XwQYR6QtuNPT8v4fHkbajk1ll9LTbi/view?usp=sharing'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW CV <FaArrowCircleDown />
              </a>
            </motion.h1>
          </div>
        </div>
        <div>
          <img className={classes.image} src={Pencil} alt='myImage' />
          <div className={classes.h2}>
            <h1> I love writing</h1>
            <h1>THINGS!!</h1>
            <a
                href='https://docs.google.com/document/d/1-zISNiCrfHPtTAPe3zwlE88MIsmWCh8MWmw-LhlZ8Xs/edit'
                rel='opener noreferrer'
                target='_blank'
            >
              VIEW Articles SAMPLES <GoProject/>
            </a>
            <div className={classes.secondButton}>
              <a
                  href='https://docs.google.com/document/d/13Hm_7GdvnibOSag6j2f2P_PrZ70CFA3LASyPXW1Xtns/edit?usp=sharing'
                  rel='opener noreferrer'
                  target='_blank'
              >
                VIEW SCRIPTS SAMPLES <GoProject/>
              </a>
            </div>
            <div className={classes.secondButton}>
              <a
                  href='https://docs.google.com/document/d/1WQEjhFCTXR0R3WSfdgYwz00AE9KZPQjpypdZCTzwUas/edit?usp=sharing'
                  rel='opener noreferrer'
                  target='_blank'
              >
                VIEW GEO & LANDING PAGES SAMPLES <GoProject/>
              </a>
            </div>
            <div className={classes.secondButton}>
              <a
                  href='https://docs.google.com/document/d/1WQEjhFCTXR0R3WSfdgYwz00AE9KZPQjpypdZCTzwUas/edit?usp=sharing'
                  rel='opener noreferrer'
                  target='_blank'
              >
                VIEW EMAIL SAMPLES <GoProject/>
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
