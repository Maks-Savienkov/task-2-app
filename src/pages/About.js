import TwoSideSection from "../components/TwoSideSection";
import {benefitsData} from "../data/benefits-data";
import Card from "../components/Card";
import {teamData} from "../data/team-data";

export const About = () => {
    return (
        <main>
            <TwoSideSection className="preview">
                <div>
                    <div className="designers">
                        <div className="designers-heading">
                            <h1 className="designers__pre-title">
                                About us
                            </h1>
                            <h2 className="designers__title">
                                Our designs solve problems
                            </h2>
                            <p className="designers__desk">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                        <img src="img/jpg/about%20us/group-of-people-sitting-indoors.jpg"
                             alt="Group of people sitting indoors" className="designers__pic"/>
                    </div>
                    <div className="company-business-card">
                        <div className="company-business-card__heading">
                            <h3 className="company-business-card__pre-title">
                                Who we are
                            </h3>
                            <div className="heading-parts">
                                <div className="heading-part">
                                    <h2 className="company-business-card__title">
                                        Goal focussed
                                    </h2>
                                    <p className="company-business-card__desk">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <div className="heading-part">
                                    <h2 className="company-business-card__title">
                                        Continuous improvement
                                    </h2>
                                    <p className="company-business-card__desk">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img src="img/jpg/about%20us/who-we-are/man-in-blue-jacket-looking-at-white-board-7413916.jpg"
                             alt="Man in blue jacket looking at white board" className="company-business-card__image"/>
                    </div>
                    <div className="processing">
                        <h2 className="processing__title">
                            The process we follow
                        </h2>
                        <div className="processing-steps">
                            <div className="processing-step">
                                <div className="processing-line-and-ico">
                                    <img src="img/svg/about_us/process_we_follow/blue-circle-ico.svg" alt="Blue circle"
                                         className="processing-step__ico"/>
                                    <img src="img/svg/about_us/process_we_follow/blue-line.svg" alt="Blue line"
                                         className="processing-step__line"/>
                                </div>
                                <h3 className="processing-step__title">
                                    Planning
                                </h3>
                                <p className="processing-step__desc">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                </p>
                            </div>
                            <div className="processing-step">
                                <div className="processing-line-and-ico">
                                    <img src="img/svg/about_us/process_we_follow/blue-circle-ico.svg" alt="Blue circle"
                                         className="processing-step__ico"/>
                                    <img src="img/svg/about_us/process_we_follow/blue-line.svg" alt="Blue line"
                                         className="processing-step__line"/>
                                </div>
                                <h3 className="processing-step__title">
                                    Conception
                                </h3>
                                <p className="processing-step__desc">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                </p>
                            </div>
                            <div className="processing-step">
                                <div className="processing-line-and-ico">
                                    <img src="img/svg/about_us/process_we_follow/blue-circle-ico.svg" alt="Blue circle"
                                         className="processing-step__ico"/>
                                    <img src="img/svg/about_us/process_we_follow/blue-line.svg" alt="Blue line"
                                         className="processing-step__line"/>
                                </div>
                                <h3 className="processing-step__title">
                                    Design
                                </h3>
                                <p className="processing-step__desc">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                </p>
                            </div>
                            <div className="processing-step">
                                <div className="processing-line-and-ico">
                                    <img src="img/svg/about_us/process_we_follow/blue-circle-ico.svg" alt="Blue circle"
                                         className="processing-step__ico"/>
                                    <img src="img/svg/about_us/process_we_follow/blue-line.svg" alt="Blue line"
                                         className="processing-step__line"/>
                                </div>
                                <h3 className="processing-step__title">
                                    Development
                                </h3>
                                <p className="processing-step__desc">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </TwoSideSection>
            <TwoSideSection className="two-side-section_backcolor-light-blue">
                <div>
                    <div className="mission">
                        <div className="mission-heading">
                            <h2 className="mission-vision__pre-title">
                                Our Mission
                            </h2>
                            <h3 className="mission-vision__title">
                                Inspire, Innovate, Share
                            </h3>
                            <p className="mission-vision__desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <img src="img/jpg/about%20us/mission/a-man-standing-in-an-office.jpg"
                             alt="A man standing in an office" className="mission__image"/>
                    </div>
                    <div className="vision">
                        <img src="img/jpg/about%20us/vision/photo-of-women-at-the-meeting.jpg"
                             alt="Photo of women at the meeting" className="vision__image"/>
                        <div className="vision-heading">
                            <h2 className="mission-vision__pre-title">
                                Our Vision
                            </h2>
                            <h3 className="mission-vision__title">
                                Laser focus
                            </h3>
                            <p className="mission-vision__desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </TwoSideSection>
            <TwoSideSection className="benefits">
                <div>
                    <h2 className="benefits-heading">
                        The benefits of working with us
                    </h2>
                    <div className="benefits-cards">
                        {benefitsData.map((item) =>
                            <Card key={item.id}
                                  variant="block-card_grey"
                                  ico_src={item.ico_src}
                                  iconAlt={item.ico_alt}
                                  heading={item.title}>
                                {item.desc}
                            </Card>
                        )}
                    </div>
                    <div className="benefits-footing">
                        <div className="users-count">
                            <h2 className="users-number">
                                100.000+
                            </h2>
                            <h3 className="users-count__subtitle">
                                Finsweet Users
                            </h3>
                        </div>
                        <img src="img/svg/about_us/benefits/sponsors.svg" alt="" className="sponsors"/>
                    </div>
                </div>
            </TwoSideSection>
            <TwoSideSection className="our-team two-side-section_backcolor-grey">
                <div>
                    <h2 className="our-team__title">
                        Meet our team
                    </h2>
                    <div className="team">
                        {teamData.map((item) =>
                            <Card key={item.id}
                                  variant="business-card"
                                  ico_src={item.ico_src}
                                  iconAlt={item.ico_alt}
                                  name={item.name}
                                  position={item.position}/>
                        )}
                    </div>
                </div>
            </TwoSideSection>
        </main>
    )
}