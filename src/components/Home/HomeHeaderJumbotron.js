import React, {useEffect, useRef}from 'react'
import { Button, Jumbotron  } from 'react-bootstrap'
import { TimelineMax, CSSPlugin, AttrPlugin } from "gsap/all";

//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
const plugins = [ CSSPlugin, AttrPlugin ];
   console.log(plugins);

const HomeHeaderJumbotron = () => {

  let  bgOpeningEffect = useRef(null)
  let  headerEffect = useRef(null)
  let  fadeInEffect = useRef(null)
  let  setHeightAuto = useRef(null)

  useEffect(() => {
    const tl = new TimelineMax();
    tl.fromTo(bgOpeningEffect, 3, {height:"10%"}, {height:"90%"})
    .set(setHeightAuto, {height:'auto'})
    .fromTo(headerEffect, 2, {
      opacity: 0,
      height:"0%",
      padding: '0px'
    }, {
      opacity: 1,
      height: "100%",
      padding: '20px'
    })
    .fromTo(fadeInEffect, 3, {opacity: 0}, {opacity: 1}, "-=2");
}); // End of useEffect

  return (
        <div className="header" ref={div => setHeightAuto = div}>
          <div className="bg-img" ref={div => bgOpeningEffect = div}>
            <Jumbotron>
                <h1 className="headline">CULTURAL CONCERTS</h1>
                <div className="home-header-box">
                  <div ref={div => headerEffect = div}>
                    <h2 className="subheadline" ref={div => fadeInEffect = div}><span className="pmmp">P</span>rague <span className="pmmp">M</span>ulticultural <br/> <span className="pmmp">M</span>usic <span className="pmmp">P</span>roject</h2>
                    <Button variant="danger" >June 24 - July 2, 2020​</Button>
                  </div> {/* End Of headerEffect */}
                </div> {/* End Of .home-header-box */}
            </Jumbotron>
          </div> {/* End Of .bg-img */}
        </div>
  )
}

export default HomeHeaderJumbotron
