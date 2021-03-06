import * as React from "react"
import SEO from "../components/seo"
import Layout from '../components/layout'
import AboutPhoto from "../yuma_website_assets/ASSETS/aboutusDesktopImage.png"
import { useIntl } from "react-intl"
import "../../i18n/react-intl/en.json"
import "../../i18n/react-intl/pl.json"

const About = () => {
  const intl = useIntl().messages

  return (
    <Layout>
      <SEO title="About us" />
      <div className="container">
        <h1>{intl.aboutTitle}</h1>
        <h2>{intl.aboutSub1}</h2>
        <p>{intl.aboutPar1}</p>
        <h2><em>{intl.aboutSub2}</em></h2>

        {/* TODO: move text below to translation files */}
        {/* <p>More than 30 customers have benefited so far from Yumasoft IT services and outsourcing, with whom we have accomplished over 100 projects. We work with customers in Western Europe and the USA. These are predominantly long-term processes in which a period of dynamic creation is followed by a period of sustainable development. Customers appreciate the flexibility of our team: we use a variety of project implementation methods and we can start the implementation process at any stage of a project. Attention to detail, stability of operation and innovative ideas – these are the steps we take to earn your satisfaction.

        We are a Microsoft partner. Our developers are MCPD (Microsoft Certified Professional Developer) and MCTS (Microsoft Certified Technology Specialist) certified.

        Reliability of Yumasoft testers is confirmed by ISTQB certifications (International Software Testing Qualifications Board).


        Efficient business is our priority. We invite you to cooperate with us!
        Yumasoft, IT services, Wrocław

        </p> */}
      </div>
      <img className="subpage-img" src={AboutPhoto} alt="about us image"></img>
    </Layout>
  )
}

export default About
