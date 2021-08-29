import React from 'react'
import Slider from 'react-slick'
import uuid from 'uuid/v1'
import Element from '../element'
import AssetStore from '../AssetStore'

import { Grid, GridRow, Image } from 'semantic-ui-react'


const sliderConfig = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  arrows: false,
  className: 'homepage-emblems slider',
  dotsClass: 'homepage-emblems dots'
}

class HomeSlider extends React.Component {
  renderSlides () {
    const ret = []

    for (let i = 0; i < AssetStore.getEmblemsLength(); i ++) {
      ret.push(this.renderCard(AssetStore.getEmblemId(i), AssetStore.getEmblem(i)))
    }

    return ret
  }

  renderCard (elementid, image) {
    return (
      <div key={uuid()} className='card'>
        <Grid>
          <GridRow style={{ display: 'block' }}>
            <Image size={'small'} src={image} />
          </GridRow>
          <GridRow>
            <div className='text'>
              <Element id_in_layout={elementid} />
            </div>
          </GridRow>
        </Grid>
      </div>
    )
  }

  render () {
    return <Slider {...sliderConfig}>{this.renderSlides()}</Slider>
  }
}

export default HomeSlider
