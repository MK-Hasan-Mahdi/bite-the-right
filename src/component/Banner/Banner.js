import React from 'react';
import banner from '../../Assets/banner.png';

const Banner = () => {
    return (
        <section className='bg-blue-500'>
            <div>

            </div>
            <div className=''>
                <img className='w-full' src={banner} alt="" />
                <div className='flex justify-center'>
                    <input className='' type="text" placeholder='Search' />
                </div>
            </div>

        </section>
    );
};

export default Banner;