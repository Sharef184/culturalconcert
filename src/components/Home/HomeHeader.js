import React from 'react'
import HomeHeaderJumbotron from './HomeHeaderJumbotron.js'
import { Link } from 'react-scroll'

const HomeHeader = () => {
  return (
    <div>
      <HomeHeaderJumbotron />
      <Link className="scroll-down-arrow"
        to="section-a"
        smooth={true}
        duration={2000}>
      </Link>
    </div>
  )
}

export default HomeHeader
