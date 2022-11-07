import TwoSideSection from "../components/TwoSideSection";
import Button from "../components/Button";
import Card from "../components/Card";
import Accordion from "../components/Accordion";
import {newsdata} from "../data/news-data";
import NewsCard from "../components/NewsCard";
import React from "react";

const Home = () => {
    return (
        <main>
            <TwoSideSection className="two-side-section_backcolor-blue">
                <div className="intro-heading">
                    <h1 className="website__title">
                        Building stellar websites for early startups
                    </h1>
                    <p className="website__subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                    <div className="intro-buttons">
                        <Button variant="contained" href="#">
                            View our work
                        </Button>
                        <Button variant="text" href="#">
                            View Pricing
                            <img src="./img/svg/arrow1.svg" alt="Arrow" className="intro_text-button_arrow"/>
                        </Button>
                    </div>
                </div>
                <div className="intro__illustration">
                    <img src="./img/svg/home/intro/illustration.svg" alt="Picture"/>
                </div>
            </TwoSideSection>
            <TwoSideSection className="two-side-section_backcolor-grey">
                <div className="how__heading">
                    <h2 className="section__title">
                        How we work
                    </h2>
                    <p className="how__heading-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                    <Button href="" variant="text_blue">
                        Get in touch with us
                        <img src="./img/svg/arrow-blue.svg" alt="Arrow" className="how__heading-link__arrow"/>
                    </Button>
                </div>
                <div className="how__cards">
                    <Card
                        ico_src="./img/svg/home/how%20we%20work/01.svg"
                        iconAlt="01"
                        heading="Strategy">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                    </Card>
                    <Card
                        ico_src="./img/svg/home/how%20we%20work/02.svg"
                        iconAlt="02"
                        heading="Wireframing">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                    </Card>
                    <Card
                        ico_src="./img/svg/home/how%20we%20work/03.svg"
                        iconAlt="03"
                        heading="Design">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                    </Card>
                    <Card
                        ico_src="./img/svg/home/how%20we%20work/04.svg"
                        iconAlt="04"
                        heading="Development">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                    </Card>
                </div>
            </TwoSideSection>
            <TwoSideSection className="two-side-section-container">
                <div className="projects">
                    <div className="projects-header">
                        <h2 className="section__title">
                            View our projects
                        </h2>
                        <Button href="#" variant="text_black">
                            View More
                            <img src="img/svg/arrow-black.svg" alt="arrow"/>
                        </Button>
                    </div>
                    <div className="projects-content">
                        <div className="projects-big-card">
                            <img src="img/jpg/home/projects/big-card-pic.jpg" alt="big project card"/>
                        </div>
                        <div className="projects-small-cards">
                            <div className="project-card">
                                <img src="img/jpg/home/projects/card-pic-2.jpg" alt="small project card"/>
                            </div>
                            <div className="project-card">
                                <img src="img/jpg/home/projects/card-pic-1.jpg" alt="small project card"/>
                            </div>
                        </div>
                    </div>
                </div>
            </TwoSideSection>
            <TwoSideSection className="two-side-section_backcolor-grey">
                <div className="features">
                    <h2 className="features__pre-title">
                        Features
                    </h2>
                    <h3 className="section__title features__title">
                        Design that solves problems, one product at a time
                    </h3>
                    <div className="features-table">
                        <Card variant="block-card"
                              ico_src="img/svg/home/features/persons-ico.svg"
                              iconAlt="Persons icon"
                              heading="Uses Client First">
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib
                            turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                        </Card>
                        <Card variant="block-card"
                              ico_src="img/svg/home/features/check-mark-ico.svg"
                              iconAlt="Check mark icon"
                              heading="Two Free Revision Round">
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib
                            turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                        </Card>
                        <Card variant="block-card"
                              ico_src="img/svg/home/features/pencil-ruler-ico.svg"
                              iconAlt="Pencil and ruler icon"
                              heading="Template Customization">
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib
                            turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                        </Card>
                        <Card variant="block-card"
                              ico_src="img/svg/home/features/dialog-ico.svg"
                              iconAlt="Question dialog icon"
                              heading="24/7 Support">
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib
                            turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                        </Card>
                        <Card variant="block-card"
                              ico_src="img/svg/home/features/timer-ico.svg"
                              iconAlt="Timer icon"
                              heading="Quick Delivery">
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib
                            turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                        </Card>
                        <Card variant="block-card"
                              ico_src="img/svg/home/features/pen-paper-ico.svg"
                              iconAlt="Pen and paper icon"
                              heading="Hands-on approach">
                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib
                            turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                        </Card>
                    </div>
                </div>
            </TwoSideSection>
            <TwoSideSection className="reviews two-side-section_backcolor-light-grey">
                <div className="reviews-heading">
                    <h2 className="reviews-heading__title">
                        What our clients say about us
                    </h2>
                    <p className="reviews-heading__subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                    </p>
                </div>
                <div className="review">
                    <p className="review__text">
                        "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
                    </p>
                    <div className="review-bottom-box">
                        <div className="reviewer">
                            <img src="img/jpg/home/reviews/profile-ico.jpg" alt="User`s avatar icon" className="reviewer-ico"/>
                            <div className="reviewer-info">
                                <h3 className="reviewer__name">
                                    Jenny Wilson
                                </h3>
                                <h4 className="reviewer__bio">
                                    Vice President
                                </h4>
                            </div>
                        </div>
                        <div className="reviews-arrows">
                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="24.0995" cy="24" rx="24.0997" ry="24" transform="rotate(-180 24.0995 24)" fill="white"/>
                                <path opacity="0.6" d="M28.5859 13L30 16.2195L20.9695 23.9106L30 31.7805L28.5859 35L17 24.626L17 22.8374L28.5859 13Z" fill="#282938"/>
                            </svg>
                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="24.0997" cy="24" rx="24.0997" ry="24" fill="#5239FA"/>
                                <path d="M18.4141 35L17 31.7805L26.0305 24.0894L17 16.2195L18.4141 13L30 23.374V25.1626L18.4141 35Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </TwoSideSection>
            <TwoSideSection>
                <div>
                    <div className="faq">
                        <div className="faq-heading">
                            <h2 className="faq__title">
                                Frequently asked questions
                            </h2>
                            <a href="#" className="faq__link">
                                Contact us for more info
                            </a>
                        </div>
                        <Accordion>

                        </Accordion>
                    </div>
                    <div className="contact">
                        <div className="contact-start-convert-heading">
                            <h2 className="website__title website__title_narrow">
                                Building stellar websites for early startups
                            </h2>
                            <p className="website__subtitle website__subtitle_narrow">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                        <div className="contact-form-block">
                            <h2 className="contact-form__title">
                                Send inquiry
                            </h2>
                            <p className="contact-form__desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore.
                            </p>
                            <form action="" className="contact-form">
                                <div>
                                    <input type="text" name="username" placeholder="Your Name"/>
                                </div>
                                <div>
                                    <input type="text" name="user-email" placeholder="Email"/>
                                </div>
                                <div>
                                    <input type="text" name="users-work-url" placeholder="Paste your Figma design URL"/>
                                </div>
                                <div>
                                    <input className="contact-form__submit" type="submit" name="submit"
                                           value="Send an Inquiry"/>
                                </div>
                                <a href="#" className="contact-form__link">
                                    Get in touch with us
                                    <img src="./img/svg/arrow1.svg" alt="Arrow" className="contact-form__arrow"/>
                                </a>
                            </form>
                        </div>
                    </div>
                    <div className="blog">
                        <h2 className="section__title blog__title">
                            Our Blog
                        </h2>
                        <div className="news-cards">
                            {newsdata.map((item,i) => {
                                console.log(item);
                                return <NewsCard
                                    key={i}
                                    img_url={item.img_src}
                                    img_alt={item.img_alt}
                                    date={item.date}
                                    title={item.title}
                                    desc={item.desc}
                                    link={item.link}/>
                            })}
                        </div>
                    </div>
                </div>
            </TwoSideSection>
        </main>
    )
}

export default Home;