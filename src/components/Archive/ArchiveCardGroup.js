import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ArchiveCard from './ArchiveCard.js'
import David from './images/David.png'
import Pearl from './images/Pearl.png'
import Debashish from './images/Debashish.png'
import Jana from './images/Jana.png'
import DavidK from './images/DavidK.png'
import Greeze from './images/Greeze.png'
import Jeremy from './images/Jeremy.png'
import Ben from './images/Ben.png'
import Ari from './images/Ari.png'
import Thomas from './images/Thomas.png'
import Namalese from './images/Namalese.png'
import Smith from './images/Smith.png'
import Greg from './images/Greg.png'
import Nancy from './images/Nancy.png'
import Cora from './images/Cora.png'

  class ArchiveCardGroup extends React.Component {
      state = {
        artists: [
          {
            id: 1,
            img: Debashish,
            name: "Debashish Chaudhuri",
            p1:"Debashish Chaudhuri´s musical experience and expression is a unique blend – born in Calcutta, India and living in Central Europe for the last 14 years. He has a rich European repertoire, 15 years of professional experience with various orchestras and 19 years of professional teaching experience.",
            p2:"His passion for the search of symphonic music that is either inspired by India and Asia or written by Asian composers has enabled him to premiere several original works to critical acclaim.",
            p3:"He firmly believes that Western and Eastern musical cultures in their purest and highest form though totally different in their conception, can truly communicate.",
            p4:"He also enjoys finding and doing master works from the symphonic repertoire that have been largely forgotten.",
            bgColor:'aliceblue',
            color: 'salmon'
          },
          {
            id: 2,
            img: Jana,
            name: "Jana Chaudhuri",
            p1:"The secrets of music attracted Czech Pianist Jana Chaudhuri already as a child. Even though music is without a physical form and is experienced only at the moment one hears it, it has the power to go to the deepest regions of our being and evoke the widest, deepest and most complex emotions within us. It can convince people of various cultures and nations, without words, and cross distant barriers and boundaries.",
            p2:"It was music that created not only the first connections, but deep understanding as well, with her husband, the Indian conductor Debashish Chaudhuri. Therafter, Jana began to take a deep interest in Indian culture, philosophy and yoga. Within it she discovered a deep sense of understanding and enlightenment which continuously helps her to go deeper into the compositions which she plays as well as to the truth about music itself.",
            bgColor:'white',
            color: 'cadetblue'
          },
          {
            id: 3,
            img: David,
            name: "David Rutherford",
            p1: "David Rutherford has been involved in nearly every aspect of music – from performing to teaching, conducting to broadcasting. David is in his 7th year as Music Director for Stratus Chamber Orchestra, Colorado’s premiere innovative collaborative orchestra. He is an award-winning radio music personality, hosting Colorado Spotlight and Sacred Classics, and is the afternoon voice of Colorado Public Radio Classical, heard in Denver at 88.1FM.",
            p2: "David is also Music Director of Valor Symphonics Youth Orchestra, and for the past 6 years has been a frequent guest conductor and exclusive rehearsal conductor of the Longmont Symphony. He continues to serve as adjunct faculty for Colorado Christian University after having been Director of Orchestral Studies. He conducts shows for CCU and Broadway in Boulder, and enjoyed three years as Music Director and Conductor of the Pikes Peak Philharmonic.",
            bgColor:'aliceblue',
            color: 'salmon'
          },
          {
            id: 4,
            img: Pearl,
            name: "Pearl Rutherford",
            p1:"Soprano Pearl Rutherford currently sings with the highly acclaimed vocal ensemble, Kantorei, in Denver. She has sung the roles of Despina in Mozart’s Cosi fan tutte, Oscar in A Masked Ball, and Hanna Glawari in The Merry Widow with the Idaho Falls Opera Theatre in Idaho Falls, Idaho, as well as Maria in a Honolulu production of West Side Story.",
            bgColor:'white',
            color: 'cadetblue'
          },
          {
            id: 5,
            img: DavidK,
            name: "David Knight",
            p1:"David Knight is an exciting and gifted new artist on the Australian music scene. Since age 11, David has been studying the guitar in all its forms. Now 24 and sitting somewhere between roots, folk and virtuoso, David has developed a unique style and method of performing with the instrument that is bound to see him become one of this country’s finest and most respected guitarists.",
            p2:"He is already a regular performer on Foxtel’s ‘Guitar Gods and Masterpieces’ program… He is the youngest artist to be featured on the show. Turning professional while still in high school, David began booking his own extensive tours around Australia, often non-stop for 3 months. These tours honed David’s skills as an entertainer and as a result he gained a reputation among Australias guitar elite, performing with artists such as Lloyd Spiegel, Geoff Achison and Daniel Champagne. Festival appearances include Peats Ridge Sustainable Arts and Music Festival, Queenscliff Music Festival, The Apollo Bay Music Festival as well as a series of local festivals in Melbourne.",
            bgColor:'aliceblue',
            color: 'salmon'
          },
          {
            id: 6,
            img: Greeze,
            name: "Greeze",
            p1:"Greeze is an American blues Band that builds on the styles of Eric Clapton, Stevie Ray Vaughn, Jimi Hendrix and Albert King. They are known for their technical virtuosity and ability to stretch outside the lines of traditional blues, while still maintaining a strong connection to the roots of the music. Greeze has a host of covers and are also in the process of writing an album of all original music.",
            p2:"Eric Sheppard - Guitar and Lead Vocals. Eric has a deep rooted family connection with the blues and is also heavily influenced by psychedelic rock and western classical music. Eric’s experience with composing music of different genres comes though in his playing.",
            bgColor:'white',
            color: 'cadetblue'
          },
          {
            id: 7,
            img: Jeremy,
            name: "Dr. Jeremy Reynolds",
            p1:"Clarinetist Jeremy Reynolds has performed on six continents making his Carnegie Hall debut in 2015. He joined the faculty of the University of Denver Lamont School of Music after performing as Principal Clarinetist with the Tucson Symphony Orchestra. In addition, he currently holds the position of Assistant Principal Clarinet with the Colorado Springs Philharmonic Orchestra. He has performed for the International Clarinet Association’sC​ ​ larFest, Clarimania (Poland), ClariBogota (Colombia), Australian Clarinet and Saxophone Festival, One Month Festival (South Korea), International Alliance for Women in Music, University of Oklahoma Clarinet Symposium, International Double Reed Society and the National Flute Association.",
            p2:"He has performed with the Colorado Symphony Orchestra, Colorado Music Festival, Des Moines Metro Opera, Hyogo Performing Arts Center Orchestra, New World Symphony, National Repertory Orchestra, National Orchestral Institute, and the Aspen Music Festival.",
            bgColor:'aliceblue',
            color: 'salmon'
          },
          {
            id: 8,
            img: Ben,
            name: "Ben Redwine",
            p1:"New Orleans based clarinetist Ben Redwine feels equally comfortable playing Brahms or Ellington. He is devoted to the performance of new classical music and old jazz, as well as to teaching the next generation of performers and teachers.",
            p2:"Ben served as an Assistant Professor at The Catholic University of America in Washington, DC from 2012-2016. In 2014, he retired after 27 years in the US military band system, the majority of time serving as the e-flat clarinet soloist with the US Naval Academy Band in Annapolis, Maryland. He has been a featured soloist at seven International Clarinet Association ClarinetFests in the U.S. and Europe, and has performed extensively as a freelance musician nationally and internationally. In 2016, he moved to the New Orleans area to pursue performance opportunities in the birthplace of jazz.",
            bgColor:'white',
            color: 'cadetblue'
          },
          {
            id: 9,
            img: Ari,
            name: "Ari Mzori",
            p1:"Ari Almzori is a Violinist and a Music teacher at Dahouk Institute of fine Arts in Dahouk Governorate/Iraqi Kurdistan since 2009. He received Bachelor degree in Music from Salahaddin University in Erbil 2008. Started working in Music on Kurdish songs and music since 2004, he was a Musician and one of the founders of Dahouk Music Band 2004-2010. Studied Music Pedagogy for Strings at Music School in Greenville,North Carolina/USA for 1 year.",
            bgColor:'aliceblue',
            color: 'salmon'
          },
          {
            id: 10,
            img: Cora,
            name: "Cora Harnish",
            p1:"Cellist, Cora Harnish, has been involved in the teaching and performing of Early Music since 1989. After completing her Bachelor degree in cello performance from UNC, she received her Masters degree in Historical Performance on viola da gamba and baroque cello from the prestigious Early Music Institute at Indiana University.",
            p2:"Ms. Harnish has taught at various workshops including, the National Viola da Gamba Society of America Conclaves the Texas Toot Festivals and the Easter Viol School in Sydney, Australia.",
            p3:"Her performance highlights include the San Antonio and Alabama Symphonies, Roundtop Early Music Festival, Colorado Music Festival, Victoria Bach Festival, Estes Park Music Festival, Texas Early Music Project, Texas Bach Choir and Collegium, Dallas Bach Society, The Orchestra of New Spain and the Early Music Society of Taiwan. Ms. Harnish has also enjoyed gigs on “modern” cello with Frank Sinatra Jr., Johnny Matthis and the Trans-Siberian Orchestra.",
            bgColor:'white',
            color: 'cadetblue'
          },
          {
            id: 11,
            img: Thomas,
            name: "Thomas Weißschnur",
            p1:"Freiburg-born clarinetist Thomas Weißschnur is internationally active as soloist, chamber- and orchestra-musician.",
            p2:"His wide-ranging music education took him from the Hochschule für Musik Freiburg with Prof. Jörg Widmann, to the Sibelius Academy in Helsinki with Prof. Harri Mäki, and the University of Southern California, Los Angeles with Prof. Yehuda Gilad. Rounding out his studies, he graduated with highest honors from the Konzertexamen-program at the Universität der Künste in Berlin under the tutelage of Prof. Francois Benda. He received scholarships from the Brahms society Baden-Baden, the Fulbright Commission and the Academie Musicale de Villecroze.",
            bgColor:'aliceblue',
            color: 'salmon'
          },
          {
            id: 12,
            img: Namalese,
            name: "Namalèse Quartet",
            p1:"Since it’s founding in 2015, the Namalèse Quartet has quickly started to establish itself as an exciting and up and coming ensemble . All four members are currently earning their undergraduate degrees in music performance at the University of Colorado Boulder College of Music They are coached regularly by David Requiro and Erika Eckert, and have participated in masterclasses and coachings with the Takács Quartet. Recently, the quartet was awarded a scholarship from the Starling Foundation, which will enable them serve as the quartet in residence at the Florentia Consort CU Study Abroad program in Florence, Italy during the summer of 2017.",
            bgColor:'white',
            color: 'cadetblue'
          },
          {
            id: 13,
            img: Smith,
            name: "Smith House",
            p1:"Smith House is four musicians who live and breath Colorado folk music. Continuing a four year long journey first as a duo and now as a four-piece band, Smith House has played up and down the Colorado front range of the Rocky Mountains with an ever expanding ambition.",
            color: 'salmon'
          },
          {
            id: 14,
            img: Greg,
            name: "Greg Brown - Crystal Creek",
            p1:"Greg Brown started playing the bassoon the year before Neil Armstrong landed on the moon. He went to college at the University of Redlands, CA and Boston University, and studied with leading bassoonists in Los Angeles, Boston and Salzburg, Austria. For the next 20 years he performed and traveled all over the US and Europe as a member of the USAF Academy Band and The USAF Band, Washington DC. Greg is heard around Colorado Springs performing with the Colorado Springs Philharmonic, and other groups.",
            bgColor:'white',
            color: 'cadetblue'
          },
          {
            id: 15,
            img: Nancy,
            name: "Nancy Brown - Crystal Creek",
            p1:"Nancy Brown started playing the oboe when she was 10, after her older sister somehow convinced her it was the easiest woodwind instrument to play. She got her college training at the University of Redlands, CA and in Salzburg, Austria.",
            p2:"Crystal Creek and Smith House areplaying at the Blues Cafe in Kutna Hora on Monday, June 26th of the festival.",
            bgColor:'aliceblue',
            color: 'salmon'
          }
        ]
      }

    render () {
      let artistsCards = this.state.artists.map(artists => {
        return (
          <Col sm="12" key={artists.id}>
            <ArchiveCard artists={artists} />
          </Col>
        )
      })
      return (
        <div className="bg-color">
        <Container>
          <Row noGutters className='pb-5'>
            {artistsCards}
          </Row>
        </Container>
        </div>
      )
    }
  }

  export default ArchiveCardGroup;
