import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../style/menu/menu.scss"
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from "react-intl"
import "../../i18n/react-intl/en.json"
import "../../i18n/react-intl/pl.json"


const Header = ({ siteTitle }) => {
  const intl = useIntl().messages

  return (
  <header
    //style={{
      //background: `black`,
     // marginBottom: `1.45rem`,
      //marginTop: '1.45rem',
    //}}
  >
    <div class='menu'> 
      <ul id="ul_top_hypers">
      <li id="menu-logo">
      <Link to="/"><StaticImage
      src="../yuma_website_assets/LOGO/SVG/final/LOGO_Icon.svg"
      alt="logoSygnet"
      //placeholder="blurred"
      layout="fixed"
      width={42}
      height={42}
    /></Link>
      </li>
      <li id="menu-head">
      <Link to="/"><StaticImage
      src="../yuma_website_assets/LOGO/SVG/final/LOGO_Sygnet.svg"
      alt="logoSygnet"
      //placeholder="blurred"
      layout="fixed"
      width={134}
      height={16}
    /></Link>
      </li>
      
      <li id="start">
      <Link to="/"
      style={{
        color: `#DADADA`,
        textDecoration: `none`,}}>Start</Link>
        </li>
        <li id="about">
      <Link to="/about"
      style={{
        color: `#DADADA`,
        textDecoration: `none`,}}>{intl.HeaderAbout}</Link>
        </li>
        <li id="offer">
        <Link to="/offer"
      style={{
        color: `#DADADA`,
        textDecoration: `none`,}}>{intl.HeaderOffer}</Link>
        </li>
        <li id="jobs">
        <Link to="/jobs"
      style={{
        color: `#DADADA`,
        textDecoration: `none`,}}>{intl.HeaderJobs}</Link>
        </li>
        <li id="blog">
        <a style={{
        color: `#DADADA`,
        textDecoration: `none`,}} href="https://blog.yumasoft.pl" target="_blank" rel="noopener noreferrer">
        Blog
      </a>
        </li>
        <li id="contact">
        <Link to="/contact"
      style={{
        color: `#DADADA`,
        textDecoration: `none`,}}>{intl.HeaderContact}</Link>
        </li>
        <li id="en-flag">
        <Link to="/"><StaticImage
      src="../yuma_website_assets/ASSETS/flagENG_On.png"
      alt="logoSygnet"
      //placeholder="blurred"
      layout="fixed"
      width={20}
      height={12}
    /></Link>
        </li>
        <li id="pl-flag">
        <Link to="/pl"><StaticImage
      src="../yuma_website_assets/ASSETS/flagPOL_On.png"
      alt="logoSygnet"
      //placeholder="blurred"
      layout="fixed"
      width={20}
      height={12}
    /></Link>
        </li>
        </ul>
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
