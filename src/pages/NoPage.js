import React from 'react'
import image from './images/404.svg'

const NoPage = () => {
    return(
        <>
        <div class="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center">
            <img src={image} alt="404" />
        </div>
        </>
    )
  };
  
  export default NoPage;
