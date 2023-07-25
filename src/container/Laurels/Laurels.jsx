import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';

import './Laurels.css';

//***********this component will only be used here**************//
const AwardCard =({award: {imgUrl, title, subtitle}})=>(
  <div className='app__laurels_award-card'>
    <img src={imgUrl} alt="award" />

    <div className='app__laurels_awars-card_content'>
      <p className='p__cormorant'  style={{color:'#dcca87'}}>
        {title}
      </p>
      <p className='p__cormorant' >
        {subtitle}
      </p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding'     id='laurels'>

    <div className='app__wrapper_info'>
      <SubHeading title='Award and Recognition'/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>

      <div className='app__laurels-awards'>
        {data.awards.map((award, index) => <AwardCard award={award} key={award.title + index }/>)}
      </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.laurels} alt="img" />
    </div>
  </div>
);

export default Laurels;
