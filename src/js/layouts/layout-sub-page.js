import React from 'react'
import '../../style/subpage.scss'
import { Responsive } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class LayoutSubPage extends React.Component {
  render () {
    return (
      <div className='subpage'>
        <div className='top-text'>
          dghdfhdfhg
        </div>
        {this.image()}
      </div>
    )
  }

  image () {
    if (this.props.imageName) {
      return (
        <Responsive minWidth={process.env.COMPUTER_BREAKPOINT}>
          <div className={this.props.imageName} />
        </Responsive>
      )
    }
  }
}

LayoutSubPage.propTypes = {
  imageName: PropTypes.string
}

export default LayoutSubPage
