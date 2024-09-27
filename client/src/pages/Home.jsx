import React from 'react'
import Banner from '../components/Home/Banner';
import Introduction from '../components/Home/Introduction';
import WhyUs from '../components/Home/WhyUs';
import Success from '../components/Home/Success';
import WhatWeDo from '../components/Home/WhatWeDo';
import Operations from '../components/Home/Operations';
const Home = () => {
  return (
    <div>
      <Banner />
      <Introduction />
      {/* <WhyUs /> */}
      <Success />
      <WhatWeDo />
      <Operations />
    </div>
  )
}

export default Home