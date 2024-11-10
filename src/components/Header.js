import React from 'react'; 
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
    return (
       <header className='header'>
        <section>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>London</h3>
                <p>Nestled in the heart of the city, this charming restaurant offers a warm and inviting atmosphere with soft lighting and rustic décor. The menu features a delightful blend of local and international dishes, each crafted with fresh, seasonal ingredients.</p>
               <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
            </div>
<div className='banner-img'>
    <img src={bannerImg} alt='' />
</div>

        </section>
</header>
    )
}

export default Header ; 