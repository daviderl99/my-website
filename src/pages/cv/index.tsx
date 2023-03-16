import React from 'react'
import Image from 'next/image'
import styles from './cv.module.scss'

const Hello = () => {
return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={'/assets/images/profile.png'}
        alt="Profile image"
        width="100"
        height="100"
      />
      <h2>Work experience</h2>
      <div className={styles.position}>
        Front-End Developer
      </div>
      <div>
        <span className="company">
          Single.Earth
        </span>
        <span className={styles.dot}></span>
        <span className="country">
          Estonia
        </span>
        <div className="date">
          Oct 2021 - Sep 2022
        </div>
      </div>
      <div className={styles.description}>
        {`
          I worked at Single.Earth for a year as a front-end developer.

          I helped maintain the company's landing page which was built with React.
          For most of the other projects I used Angular. I helped develop the company's new landing page
          and worked on projects such as Know Your Client and BackOffice.

          Single.Earth was my first work experience where I was able to test the knowledge I had gained at college and further develop myself.
          I learned more about Angular, how to properly create responsive web design, and how it's like working in a development team.
        `}
      </div>
      <h2>Education</h2>
      <h2>Languages</h2>
    </div>
  )
}

export default Hello;