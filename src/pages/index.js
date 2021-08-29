import * as React from "react"
// import NavBar from "../js/components/navbar"
// import LayoutSoftware from "../js/layouts/layout-software"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      {/* section 1 eff solutions
      section 2 soft for biz
      section 3 icons (2 cols)
      section 4 map
      <ClientsSlider />
      <Testimonials />
      section 5 set for success
      <ContactBar />
      section 6 at your request
      section 7 it outsourcing (3 cols) */}
    </Layout>
  )
}

export default IndexPage
