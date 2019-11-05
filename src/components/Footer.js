import React from 'react'

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
     return(
        <footer className="bg-color">

          <p>&copy; Copyright {currentYear} - Made With <span id="heart">&#10084;</span>  By
             <a id="sharif-khlief"href="https://sharef184.github.io/MyPortfolio/"> SharifKhlief</a>
          </p>
        </footer>
    )
  }
}

export default Footer
