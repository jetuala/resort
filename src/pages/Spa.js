import React from 'react'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import SpaServices from '../components/SpaServices';
import Footer from '../components/Footer';
import SpaBcg from '../images/spa_bcg.jpg';
import Title from '../components/Title';

const Spa = () => {
    return (
        <>
            <StyledHero img={SpaBcg}>
                <Banner title="Sampaguita" subtitle="An oasis for your body, soul, and mind">
                    <Link to='/' className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </StyledHero>
            <section className="resort">
                <Title title="Get Away From It All" />
                <div className="resort-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. A cras semper auctor neque vitae tempus quam. Neque egestas congue quisque egestas diam in arcu cursus euismod. Adipiscing enim eu turpis egestas. Sed augue lacus viverra vitae congue eu consequat ac felis. Velit laoreet id donec ultrices tincidunt arcu. Vulputate dignissim suspendisse in est ante in nibh. Pulvinar pellentesque habitant morbi tristique senectus et. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Vel risus commodo viverra maecenas accumsan. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Felis donec et odio pellentesque.</p>

                    <p>Etiam dignissim diam quis enim lobortis scelerisque. Mattis aliquam faucibus purus in massa tempor nec feugiat. Donec adipiscing tristique risus nec feugiat in. A cras semper auctor neque vitae tempus quam pellentesque nec. Fringilla est ullamcorper eget nulla facilisi etiam. Urna et pharetra pharetra massa massa ultricies. Dolor sit amet consectetur adipiscing elit. Eleifend mi in nulla posuere. Vel orci porta non pulvinar neque laoreet. Sed sed risus pretium quam vulputate. Ut aliquam purus sit amet luctus venenatis.</p>

                    <p>Nunc mi ipsum faucibus vitae aliquet. Pellentesque sit amet porttitor eget dolor morbi non. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Leo a diam sollicitudin tempor id eu nisl. Proin libero nunc consequat interdum. Volutpat maecenas volutpat blandit aliquam etiam erat. Turpis cursus in hac habitasse. Elit ullamcorper dignissim cras tincidunt lobortis. At imperdiet dui accumsan sit amet nulla facilisi morbi. A lacus vestibulum sed arcu non odio.</p>

                    <p>Purus sit amet luctus venenatis lectus. Odio ut enim blandit volutpat maecenas volutpat. Tempus egestas sed sed risus pretium quam vulputate dignissim. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Morbi blandit cursus risus at ultrices mi tempus. Molestie nunc non blandit massa enim nec. At elementum eu facilisis sed odio morbi quis commodo. Eget gravida cum sociis natoque penatibus et magnis. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Pharetra magna ac placerat vestibulum lectus mauris. Tortor posuere ac ut consequat semper. Faucibus turpis in eu mi bibendum neque egestas congue. Diam vulputate ut pharetra sit amet aliquam. Lacinia quis vel eros donec ac odio tempor. Senectus et netus et malesuada fames.</p>
                </div>
            </section>
            <SpaServices />
            <Footer />
        </>
    )
}

export default Spa;
