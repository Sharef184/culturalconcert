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
import Aram from './images/Aram.png'
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
            img: David,
            name: "David Rutherford",
            p1: "David Rutherford has been involved in nearly every aspect of music – from performing to teaching, conducting to broadcasting. David is in his 7th year as Music Director for Stratus Chamber Orchestra, Colorado’s premiere innovative collaborative orchestra. He is an award-winning radio music personality, hosting Colorado Spotlight and Sacred Classics, and is the afternoon voice of Colorado Public Radio Classical, heard in Denver at 88.1FM. Many of CPR Classical live broadcasts of the Colorado Symphony, New York Philharmonic, Philadelphia Orchestra and more are hosted by David. He has interviewed some of the world’s greatest artists, composers and conductors, including Robert Spano, Bramwell Tovey, John Eliot Gardiner, Olga Kern, Edgar Meyer, Morten Lauridsen, Eric Whitacre, and the late Marvin Hamlisch.",
            p2: "David is also Music Director of Valor Symphonics Youth Orchestra, and for the past 6 years has been a frequent guest conductor and exclusive rehearsal conductor of the Longmont Symphony. He continues to serve as adjunct faculty for Colorado Christian University after having been Director of Orchestral Studies. He conducts shows for CCU and Broadway in Boulder, and enjoyed three years as Music Director and Conductor of the Pikes Peak Philharmonic. He founded and directed a non-traditional chamber orchestra in the Denver area known as UnStaged. He was also Director of Orchestral Studies and Music Education at Colorado Christian University. As a bassist, David has served as Principal Bass of the Cheyenne Symphony orchestra, as well as Assistant Principal Bass in the Greeley Philharmonic Orchestra. He continues to actively freelance along the Front Range.",
            p3: "David is a graduate of the University of Northern Colorado, with a bachelor’s degree in Double Bass Performance and a master’s in Music Education with an emphasis in conducting. While at UNC, he played in six orchestras, was principal bass in three of those, and was the first (and to this day, the only) double bassist in the history of the university's music department to have won the annual solo competition. He was also heard as an announcer on KUNC, the local public radio station.",
            p4: "Since then, David has taught public school orchestra programs from the elementary through secondary level in Nevada, Wyoming and Idaho. During his tenure in Wyoming, Rutherford was selected as a National Teacher Fellow at the John. F. Kennedy Center for the Performing Arts/National Symphony Orchestra in Washington D.C. There he studied conducting with Elisabeth Schulze and Barry Jekowsky, then-Associate Conductors of the National Symphony Orchestra, as well as double bass with Bob Oppelt, Principal Bassist of the NSO. His orchestra program was featured on a national broadcast of NBC Nightly News with Tom Brokaw.",
            p5: "In 1997, David moved to Idaho Falls, where he founded the Snake River Chamber Orchestra and served as its Music Director for its first four years. In this capacity, Rutherford has worked with such national and international stars as Craig Schulman (Phantom of the Opera, Les Misérables), Cris Groenendaal (Phantom), as well as pop/country star Kenny Rogers.",
            p6: "When he is not involved in music and radio, David enjoys spending time in the mountains with his family, hunting, fishing, hiking, berry picking and making the world’s best black currant jelly.",
            bgColor:'aliceblue',
            color: 'salmon'
          },
          {
            id: 2,
            img: Pearl,
            name: "Pearl Rutherford",
            p1:"Soprano Pearl Rutherford currently sings with the highly acclaimed vocal ensemble, Kantorei, in Denver. She has sung the roles of Despina in Mozart’s Cosi fan tutte, Oscar in A Masked Ball, and Hanna Glawari in The Merry Widow with the Idaho Falls Opera Theatre in Idaho Falls, Idaho, as well as Maria in a Honolulu production of West Side Story. Concert performances include solo appearances with Metropolitan Choral Festival in Denver, Stratus Chamber Orchestra, Orion Wind Ensemble, Colorado Christian University’s University Choir (with the Alpine Chorale), Hawaii Chamber Orchestra in Honolulu; the Star Valley Arts Council and Star Valley Choral Society in Wyoming, the Snake River Chamber Orchestra and Caritas Chorale in Idaho. She was also a member and soloist with the Idaho Falls Symphony Chorale and Anam Cara, The Chamber Choir of Idaho.",
            p2:"Pearl teaches voice at Colorado Christian University. In addition to teaching in her private voice studio, she is voice instructor and choir director at Credo Academy in Greenwood Village.",
            p3:"Pearl Rutherford is a Presser Scholar, earning her Bachelor of Music in Vocal Performance from the University of Hawaii-Manoa, and has received vocal instruction at the University of Northern Colorado. Her teachers include T. Alan Bowers, Annette Johansson, Laurence Paxton and Charmaine Coppom, and she currently studies with Andrew Adams.",
            bgColor:'white',
            color: 'cadetblue'
          },
          {
            id: 3,
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
            id: 4,
            img: Jana,
            name: "Jana Chaudhuri",
            p1:"The secrets of music attracted Czech Pianist Jana Chaudhuri already as a child. Even though music is without a physical form and is experienced only at the moment one hears it, it has the power to go to the deepest regions of our being and evoke the widest, deepest and most complex emotions within us. It can convince people of various cultures and nations, without words, and cross distant barriers and boundaries.",
            p2:"It was music that created not only the first connections, but deep understanding as well, with her husband, the Indian conductor Debashish Chaudhuri. Therafter, Jana began to take a deep interest in Indian culture, philosophy and yoga. Within it she discovered a deep sense of understanding and enlightenment which continuously helps her to go deeper into the compositions which she plays as well as to the truth about music itself.",
            bgColor:'white',
            color: 'cadetblue'
          },
          {
            id: 5,
            img: DavidK,
            name: "David Knight",
            p1:"David Knight is an exciting and gifted new artist on the Australian music scene. Since age 11, David has been studying the guitar in all its forms. Now 24 and sitting somewhere between roots, folk and virtuoso, David has developed a unique style and method of performing with the instrument that is bound to see him become one of this country’s finest and most respected guitarists.",
            p2:"He is already a regular performer on Foxtel’s ‘Guitar Gods and Masterpieces’ program… He is the youngest artist to be featured on the show. Turning professional while still in high school, David began booking his own extensive tours around Australia, often non-stop for 3 months. These tours honed David’s skills as an entertainer and as a result he gained a reputation among Australias guitar elite, performing with artists such as Lloyd Spiegel, Geoff Achison and Daniel Champagne. Festival appearances include Peats Ridge Sustainable Arts and Music Festival, Queenscliff Music Festival, The Apollo Bay Music Festival as well as a series of local festivals in Melbourne.",
            p3:"More recently David has turned his focus on expanding his performance outside of the guitar world. While audiences and peers highlighted his percussive overhand guitar style, he was dissatisfied and determined to become more than a virtuoso guitarist. Removing himself from the touring circuit for almost 2 years in order to reinvent. In 2017, Knight is ready to tour his new show that still maintains his high level of guitar skill but combined it with vocals and songwriting. ‘David has the talent and attitude to no doubt see him become one of this country’s leading guitar players.’ Lloyd Spiegel – Premier endorsee for Cole Clark guitars. 'The intricacy of what David is doing and his determination to push the acoustic guitar into new regions is really admirable. Very proud to have the future of the Australian guitar world in such good hands.' Kim Churchill - Singer/Songwriter",
            bgColor:'aliceblue',
            color: 'salmon'
          },
          {
            id: 6,
            img: Greeze,
            name: "Greeze",
            p1:"Greeze is an American blues Band that builds on the styles of Eric Clapton, Stevie Ray Vaughn, Jimi Hendrix and Albert King. They are known for their technical virtuosity and ability to stretch outside the lines of traditional blues, while still maintaining a strong connection to the roots of the music. Greeze has a host of covers and are also in the process of writing an album of all original music.",
            p2:"Eric Sheppard - Guitar and Lead Vocals. Eric has a deep rooted family connection with the blues and is also heavily influenced by psychedelic rock and western classical music. Eric’s experience with composing music of different genres comes though in his playing.",
            p3:"Kieran Cronley- Bass. Kieran is heavily influence by folk and americana music as well as traditional jazz and rock and roll. Kieran sets a rock solid foundation for the band with his fantastic time feel and melodic sensibilities.",
            p4:"Tim Weigand- Drums - Tim is heavily influenced by all manners of rock and roll as well as traditional jazz and blues.  He has a distincly dynamic playing style with the ability to change the overall tone of the music at any moment.",
            p5:"Andy Smith - Keys. Andy is heavily influenced by gospel and R&B music as well as traditional jazz and blues. Andy’s excellent feel for form and unique sense of time and rhythm provides a unique flavor to the band that will not go unnoticed.",
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
            p3:"In addition to leading his popular traditional-style jazz band, the RedwineJazz Band, Ben is a Selmer Paris and D’Addario performing artist, presenting concerts and master classes internationally. He has recorded for Mapleshade, Naxos, Vin Rouge, Big Kahuna, and AmCam record labels, and composed and performed new music for 1920s era silent films featuring actors Charley Chase and Harry Langdon, released on DVD box sets by All Day Entertainment. All of Ben’s recordings can be found at his website, redwinejazz.com.",
            p4:"Ben earned a bachelor of music education degree from the University of Oklahoma, a master of music degree from Louisiana State University, and a doctorate degree at The Catholic University of America, studying clarinet performance with a minor in Latin American music history. He has studied with Loris Wiles, David Etheridge, Steve Girko, Steve Cohen, Ignatius Gennusa, Ben Armato and Paul Cigan.",
            p5:"Founder of the company RJ Music Group, Ben manufactures quality products for discriminating musicians, including Gennusa mouthpieces, the Reed Wizard, and other products and books by Ben Armato.",
            p6: "Ben lives on the Northshore of Lake Ponchartrain with his wife, Leslie, and their flock of chickens. Ben performs exclusively on Selmer Paris instruments and D’Addario reeds.",
            bgColor:'white',
            color: 'cadetblue'
          },
          {
            id: 9,
            img: Ari,
            name: "Ari Almzori",
            p1:"Ari Almzori is a Violinist and a Music teacher at Dahouk Institute of fine Arts in Dahouk Governorate/Iraqi Kurdistan since 2009. He received Bachelor degree in Music from Salahaddin University in Erbil 2008. Started working in Music on Kurdish songs and music since 2004, he was a Musician and one of the founders of Dahouk Music Band 2004-2010. Studied Music Pedagogy for Strings at Music School in Greenville,North Carolina/USA for 1 year.",
            bgColor:'aliceblue',
            color: 'salmon'
          },
          {
            id: 10,
            img: Aram,
            name: "Aram Almzori",
            p1:"Aram Almzori is a Violinist from Dahouk city,Iraqi Kurdistan. He started work in Music since 2000 with School activities music band as a violinist. In 2007 he joined Dahouk music band and he was a member for three years. He studied at Dahouk Institute of fine Arts and graguated in 2009 ,then he went to Erbil to continue his study in music at Salahaddin university in Erbil and graduated in 2014. He Participated in many concerts and Festivals in Dahouk, Erbil , Sulaimaniya, Austria, USA, France, Turkey,Lebanon and Jordan. Recently he received his Master degree in Music Education from (Yuzuncu Yil University ) in Van/Turkey.",
            color: 'cadetblue'
          },
          {
            id: 11,
            img: Thomas,
            name: "Thomas Weißschnur",
            p1:"Freiburg-born clarinetist Thomas Weißschnur is internationally active as soloist, chamber- and orchestra-musician.",
            p2:"His wide-ranging music education took him from the Hochschule für Musik Freiburg with Prof. Jörg Widmann, to the Sibelius Academy in Helsinki with Prof. Harri Mäki, and the University of Southern California, Los Angeles with Prof. Yehuda Gilad. Rounding out his studies, he graduated with highest honors from the Konzertexamen-program at the Universität der Künste in Berlin under the tutelage of Prof. Francois Benda. He received scholarships from the Brahms society Baden-Baden, the Fulbright Commission and the Academie Musicale de Villecroze.",
            p3:"As a soloist and chamber musician, Mr. Weißschnur has presented concerts at many international music festivals such as the Niedersächsische Musiktage, the Warsaw Autumn, and the Encuentro de Música y Academia de Santander, partnering with artists like Paul Meyer, Paul Neubauer, the Guarneri Trio Prague and the Amaryllis-Quartett.",
            p4:"A principal clarinet position with The Macau Orchestra brought him to Asia, where he also became a member of the Hong Kong New Music Ensemble. In Germany, he has held contracts as associate principal clarinet with the Württembergische Philharmonie Reutlingen and as principal clarinet with the Düsseldorfer Symphoniker. He has also been asked to play with orchestras such as WDR Sinfonieorchester Köln, Deutsche Oper Berlin, Frankfurter Opern- und Museumsorchester, Sinfonieorchester Wuppertal and the Konzerthaus Kammerorchester.",
            p5:"Mr. Weißschnur is currently based in Düsseldorf, where he has been on faculty at the Anton Rubinstein International Music Academy since 2014.",
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
            p1:"Smith House is four musicians who live and breath Colorado folk music. Continuing a four year long journey first as a duo and now as a four-piece band, Smith House has played up and down the Colorado front range of the Rocky Mountains with an ever expanding ambition. The band is focused on creating organic community through music, and carries the tenets of the community house from which its name is drawn. Their music is rich with swelling melodies and dynamic harmonies, their lyrics are raw with heartache and contemplation. You are left with a sense of both intrigue and reverie after a night with Smith House",
            color: 'salmon'
          },
          {
            id: 14,
            img: Greg,
            name: "Greg Brown - Crystal Creek",
            p1:"Greg Brown started playing the bassoon the year before Neil Armstrong landed on the moon. He went to college at the University of Redlands, CA and Boston University, and studied with leading bassoonists in Los Angeles, Boston and Salzburg, Austria. For the next 20 years he performed and traveled all over the US and Europe as a member of the USAF Academy Band and The USAF Band, Washington DC. Greg is heard around Colorado Springs performing with the Colorado Springs Philharmonic, and other groups. He and his wife Nancy are now the owners of Crystal Creek Music Company in Colorado Springs, CO, where they are dedicated to teaching the next generation of double reed musicians, and repair woodwind instruments. Not being content to play one difficult and archaic instrument, Greg took up the hammered dulcimer, and he and Nancy perform as the folk group Crystal Creek along with their son Zach on vocals and bouzouki, and Zach's wife Brittany on fiddle.",
            bgColor:'white',
            color: 'cadetblue'
          },
          {
            id: 15,
            img: Nancy,
            name: "Nancy Brown - Crystal Creek",
            p1:"Nancy Brown started playing the oboe when she was 10, after her older sister somehow convinced her it was the easiest woodwind instrument to play. She got her college training at the University of Redlands, CA and in Salzburg, Austria. While principal oboist of the Arlington, VA Symphony, Washington Post reviewers wrote about Nancy's playing: Solos by . . . oboist Nancy Brown stood out like jewels. . . Brown's oboe was prominent and outstanding . . . a lone, dreamy oboe line, played with great skill . . . She is now co-owner with her husband Greg of Crystal Creek Music Company in Colorado Springs, CO, and can be heard regularly performing with the Colorado Springs Philharmonic and other groups around town. She is a renowned teacher of young musicians, and her students have regularly filled the sections of Colorado honor bands and orchestras, while many have gone on to successful professional music careers. She formed the folk band Crystal Creek with her husband Greg on hammered dulcimer, son Zach on vocals and bouzouki, and daughter-in-law Brittany on fiddle.",
            p2:"Crystal Creek and Smith House areplaying at the Blues Cafe in Kutna Hora on Monday, June 26th of the festival.",
            bgColor:'aliceblue',
            color: 'salmon'
          },
          {
            id: 16,
            img: Cora,
            name: "Cora Harnish",
            p1:"Cellist, Cora Harnish, has been involved in the teaching and performing of Early Music since 1989. After completing her Bachelor degree in cello performance from UNC, she received her Masters degree in Historical Performance on viola da gamba and baroque cello from the prestigious Early Music Institute at Indiana University.",
            p2:"Ms. Harnish has taught at various workshops including, the National Viola da Gamba Society of America Conclaves the Texas Toot Festivals and the Easter Viol School in Sydney, Australia.",
            p3:"Her performance highlights include the San Antonio and Alabama Symphonies, Roundtop Early Music Festival, Colorado Music Festival, Victoria Bach Festival, Estes Park Music Festival, Texas Early Music Project, Texas Bach Choir and Collegium, Dallas Bach Society, The Orchestra of New Spain and the Early Music Society of Taiwan. Ms. Harnish has also enjoyed gigs on “modern” cello with Frank Sinatra Jr., Johnny Matthis and the Trans-Siberian Orchestra.",
            p4:"After 14 years of teaching for the Alamo Heights Strings Program, she now runs her own award winning cello studio, teaching students ranging from 1st grade thru High school. Her students consistently give top-ranking performances at Area contests, winning chairs in the All Region and All State Orchestras and most importantly, receive college scholarships!",
            p5:"Cora also trains people how to train their own dogs. She has trained her own Labradors in Agility, Search and Rescue, Therapy work and Obedience and often volunteers for SNIPSA, a dog rescue organization in San Antonio.",
            bgColor:'white',
            color: 'cadetblue'
          }
        ]
      }

    render () {
      let artistsCards = this.state.artists.map(artists => {
        return (
          <Col sm="12">
            <ArchiveCard key={artists.id} artists={artists} />
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
