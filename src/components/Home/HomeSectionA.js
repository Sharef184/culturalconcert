import React from 'react'
import HomeVideosContainer from './HomeVideosContainer.js'
import SectionA from './SectionA.js'
import SectionB from './SectionB.js'
import Home1 from './images/home1.png'
import Home2 from './images/home2.png'
import Home3 from './images/home3.png'

class HomeSectionA extends React.Component {

    state = {
      sectionAB: [
        {
          idA: 1,
          sectionAh1: 'Bridging Cultures Through Music',
          sectionAp: 'Our mission is to bring together people of various and vastly diverse political and socioeconomic backgrounds to create bridges based on love and passion for music in a city that is the embodiment of knowledge, culture, history and music.',
          sectionAimg: Home1,
          sectionAimgName: 'Concert'
        },
        {
          idB: 2,
          sectionBh1: '2019 Concert Schedule',
          sectionBp: 'The 2019  Prague Multicultural Music Project festival brings together musicians from as far away as Ireland, Iraq, New Zealand, the Czech Republic, and the U.S. in performances to be held in venues all over the beautiful city of Prague. In addition to concerts featuring a 45 member orchestra and 35 member wind ensemble.',
          sectionBimg: Home2,
          sectionBimgName: 'B'
        },
        {
          idA: 3,
          sectionAh1: 'Multicultural Music Project',
          sectionAp: 'The idea came about when the founder, Linda Shea traveled to Europe in pursuit of a project to advance her music career.  She landed in Prague during the summer of 2015 at the beginning of the refugee crisis in Europe and saw first-hand, the shocking number of refugees flowing through the Central European countries. These refugees appeared to be attempting to adjust to life in new places but not sure how successful they have been in trying to assimilate into the new cultural aspects surrounding them.',
          sectionAimg: Home3,
          sectionAimgName: 'Concert'
        }
      ]
    }

  render () {

    let sectionAB = this.state.sectionAB.map(sectionAB => (
        <div>
          {sectionAB.idA && <SectionA key={sectionAB.idA} sectionAB={sectionAB} />}
          {sectionAB.idB && <SectionB key={sectionAB.idB} sectionAB={sectionAB} />}
        </div>
      ))

    return (

      <div id='section-a'>
      <HomeVideosContainer />
        {sectionAB}
      </div>

    )
  }
}

export default HomeSectionA;
