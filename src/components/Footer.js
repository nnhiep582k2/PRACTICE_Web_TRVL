import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the Adventure newsletter to receive our best vacation deals!
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input className="footer-input" type="email" name="email" placeholder="Your Email" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to="/services">How it works</Link>
                    <Link to="/services">Testimonials</Link>
                    <Link to="/services">Careers</Link>
                    <Link to="/">Investors</Link>
                    <Link to="/services">Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/sign-up'>Support</Link>
                    <Link to='/services'>Destinations</Link>
                    <Link to='/sign-up'>Sponsorships</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <a href='https://www.youtube.com/channel/UCzKjcLlu8lgoIsh1o9qkj_A/featured'>Submit Video</a>
                    <Link to='/sign-up'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <a href='https://www.facebook.com/nnhiep582/'>Facebook</a>
                    <a href='https://www.youtube.com/channel/UCzKjcLlu8lgoIsh1o9qkj_A/featured'>Youtube</a>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL <i className="fa-solid fa-map-location-dot"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>NNHiep © 2022</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <a
                            className='social-icon-link facebook'
                            href='https://www.facebook.com/nnhiep582/'
                            rel="noreferrer"
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </a>
                        <a
                            className='social-icon-link youtube'
                            href='https://www.youtube.com/channel/UCzKjcLlu8lgoIsh1o9qkj_A/featured'
                            rel="noreferrer"
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </a>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <a
                            className='social-icon-link github'
                            href='https://github.com/nnhiep582k2'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='Github'
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Footer