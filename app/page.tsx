import FeaturedMenu from '@/components/home/FeaturedMenu'
import FindUs from '@/components/home/FindUs'
import Footer from '@/components/home/Footer'
import Hero from '@/components/home/Hero'
import OpeningHours from '@/components/home/OpeningHours'
import RestaurantStory from '@/components/home/RestaurantStory'
import Reviews from '@/components/home/Reviews'
import TodaySpecial from '@/components/home/TodaySpecial'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full'>
      <Hero />
      <TodaySpecial />
      <FeaturedMenu />
      <FindUs />
      <OpeningHours /> 
      <Footer />
    </div>
  )
}

export default page