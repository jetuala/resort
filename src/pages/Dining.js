import React from 'react'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';
import DiningBcg from '../images/sunset-962156_1920.jpg';
import Title from '../components/Title';
import DinnerVideo from '../components/DinnerVideo'
import Fish from '../images/fish1.jpg';
import Shrimp from '../images/shrimp.jpg';
import Paella from '../images/paella.jpg';

const Dining = () => {
    return (
        <>
            <StyledHero img={DiningBcg}>
                <Banner title="Mother of Pearl" subtitle="Indulge your appetite">
                    <Link to='/' className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </StyledHero>
            <section className="resort">
                <Title title="Dining At Its Best" />
                <div className="dining-center">
                    <div className="row">
                        <div className="column">
                            <img src={Shrimp} alt="Shrimp" />
                        </div>
                        <div className="column dining-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. A cras semper auctor neque vitae tempus quam. Neque egestas congue quisque egestas diam in arcu cursus euismod. Adipiscing enim eu turpis egestas. Sed augue lacus viverra vitae congue eu consequat ac felis. Velit laoreet id donec ultrices tincidunt arcu. Vulputate dignissim suspendisse in est ante in nibh. Pulvinar pellentesque habitant morbi tristique senectus et.</p>
                        </div>
                        <div className="column">
                            <img src={Fish} alt="Fish" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <p>Etiam dignissim diam quis enim lobortis scelerisque. Mattis aliquam faucibus purus in massa tempor nec feugiat. Donec adipiscing tristique risus nec feugiat in. A cras semper auctor neque vitae tempus quam pellentesque nec. Fringilla est ullamcorper eget nulla facilisi etiam. Urna et pharetra pharetra massa massa ultricies. Dolor sit amet consectetur adipiscing elit. Eleifend mi in nulla posuere. Vel orci porta non pulvinar neque laoreet. Sed sed risus pretium quam vulputate. Ut aliquam purus sit amet luctus venenatis.</p>
                        </div>
                        <div className="column">
                            <img src={Paella} alt="Paella" />
                        </div>
                        <div className="column">
                            <p>Nunc mi ipsum faucibus vitae aliquet. Pellentesque sit amet porttitor eget dolor morbi non. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Leo a diam sollicitudin tempor id eu nisl. Proin libero nunc consequat interdum. Volutpat maecenas volutpat blandit aliquam etiam erat. Turpis cursus in hac habitasse. Elit ullamcorper dignissim cras tincidunt lobortis. At imperdiet dui accumsan sit amet nulla facilisi morbi. A lacus vestibulum sed arcu non odio.</p>
                        </div>
                    </div>
                    {/* 

                    

                    <p>Purus sit amet luctus venenatis lectus. Odio ut enim blandit volutpat maecenas volutpat. Tempus egestas sed sed risus pretium quam vulputate dignissim. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Morbi blandit cursus risus at ultrices mi tempus. Molestie nunc non blandit massa enim nec. At elementum eu facilisis sed odio morbi quis commodo. Eget gravida cum sociis natoque penatibus et magnis. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Pharetra magna ac placerat vestibulum lectus mauris. Tortor posuere ac ut consequat semper. Faucibus turpis in eu mi bibendum neque egestas congue. Diam vulputate ut pharetra sit amet aliquam. Lacinia quis vel eros donec ac odio tempor. Senectus et netus et malesuada fames.</p> */}
                </div>
            </section>
            <DinnerVideo />
            <Footer />
        </>
    )
}

export default Dining;

