import React from 'react';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube } from 'react-icons/fa';
import Argentum from '../images/Argentum_Hotel_Group_200x200.png';
import SeventhHeaven from '../images/7th_heaven_200x200.png';
import Garlond from '../images/garlond_ironworks_200x200.png';
import Shinra from '../images/Shin-ra_logo.jpg';

export default function Footer() {
    function fakeClick() {
        alert("This link is fake LOL");
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                <section className="footer-address footer-column">
                    <h3 className="featuredFont"><em><a href="https://finalfantasy.fandom.com/wiki/Galdin_Quay" target="_blank" rel="noopener noreferrer">Galdin Quay Hotel & Resort</a></em></h3>
                    <p>3000 Vannath Highway</p>
                    <p>Leide, Lucis 99232-1001</p>
                    <br />
                    <p>International 1.888.555.2915</p>
                    <p>National 1.800.555.2900</p>
                </section>
                <section className="footer-social footer-column">
                    <h4>Let's Connect</h4>
                    <div onClick={fakeClick}><FaFacebook /> Like us on Facebook</div>
                    <div onClick={fakeClick}><FaTwitter /> Follow us on Twitter</div>
                    <div onClick={fakeClick}><FaInstagram /> Check us out on Instagram</div>
                    <div onClick={fakeClick}><FaPinterest /> Pin us on Pinterest</div>
                    <div onClick={fakeClick}><FaYoutube /> Watch us on YouTube</div>
                </section>
                <section className="footer-awards footer-column">
                    <a href="https://finalfantasy.fandom.com/wiki/Prompto_Argentum" target="_blank" rel="noopener noreferrer"><img src={Argentum} alt="Argentum Hotel Group" /></a>
                    <a href="https://finalfantasy.fandom.com/wiki/7th_Heaven" target="_blank" rel="noopener noreferrer"><img src={SeventhHeaven} alt="Part of the 7th Heaven Restaurant Family" /></a>
                    <a href="https://finalfantasy.fandom.com/wiki/Garlond_Ironworks" target="_blank" rel="noopener noreferrer"><img src={ Garlond } alt="Partners with Garlond Ironworks" /></a>
                    <a href="https://finalfantasy.fandom.com/wiki/Shinra_Electric_Power_Company" target="_blank" rel="noopener noreferrer"><img src={ Shinra } alt="Sponsored by Shin-ra Electric Power Company" /></a>
                </section>
            </div>
            <div className="footer-disclaimer">
                <p>This site is for educational purposes only. All intellectual property presented here related to the Final Fantasy franchise is © Square Enix Co., Ltd.</p>
                <p>Designed in part by John Smilga from <a href="https://youtu.be/LXJOvkVYQqA" target="_blank" rel="noopener noreferrer">In-Depth React Tutorial: Build a Hotel Reservation Site (with Contentful and Netlify)</a>. Additional design by Jonathan Tuala.</p>
            </div>
        </footer>
    )
}