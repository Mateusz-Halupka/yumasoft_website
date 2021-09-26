import * as React from "react"
// import NavBar from "../js/components/navbar"
// import LayoutSoftware from "../js/layouts/layout-software"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"
import "../../i18n/react-intl/en.json"
import "../../i18n/react-intl/pl.json"
import Layout from "../components/layout"
import "../style/home.scss"
import SEO from "../components/seo"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <div className="home-header"></div>
      <div className="home-software"></div>
      <div className="home-emblems"></div>
      <div className="home-map"></div>
      {/* <ClientsSlider />
      <Testimonials /> */}
      <div className="home-success"></div>
      {/* <ContactBar /> */}
      <div className="home-request"></div>
      {/* section 7 'it outsourcing from wroclaw...' (3 cols) (previously homepage-footer - shares the background with the actual footer) */}
    </Layout>
  )
}

export default IndexPage
