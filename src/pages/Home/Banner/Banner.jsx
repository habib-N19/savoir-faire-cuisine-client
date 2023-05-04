// import React from 'react'
// import bannerImage from '../../../assets/banner.jpg'
// import AwesomeSlider from 'react-awesome-slider'
// import withAutoplay from 'react-awesome-slider/dist/autoplay'
// import './banner.css'
// const Banner = () => {
//   const AutoplaySlider = withAutoplay(AwesomeSlider)
//   const aws = 'aws'

//   return (
//     <div className='card w-11/12 h-[300px] mx-auto my-16'>
//       <AutoplaySlider
//         play={true}
//         cancelOnInteraction={false}
//         interval={6000}
//         className={aws}
//       >
//         <h2 className=' text-center text-primary mx-auto text-4xl'>
//           Discover the Art of French Cooking:
//           <br /> Join Our Passionate Community of Chefs and Foodies
//         </h2>
//       </AutoplaySlider>
//     </div>
//   )
// }

// export default Banner
import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    // <div className='w-11/12 mx-auto min-h-[200px] border shadow-xl rounded my-10 flex items-center justify-center'>
    //   <h2 className='text-center'>
    //
    //   </h2>
    // </div>
    <div
      className='hero min-h-screen mb-20 mx-auto'
      style={{
        backgroundImage: `url("banner.jpg")`
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
          <p className='mb-5 font-semibold text-2xl'>
            Discover the Art of French Cooking: Join Our Passionate Community of
            Chefs and Foodies
          </p>
          <Link to='/login'>
            <button className='btn btn-primary'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
