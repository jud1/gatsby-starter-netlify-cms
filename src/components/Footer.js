import React from 'react'
// import { Link } from 'gatsby'

import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="JUD"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
      </footer>
    )
  }
}

export default Footer
