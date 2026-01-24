import "./team.scss";
import team1 from "../../../images/team/team1.png";
import team2 from "../../../images/team/team2.png";
import team3 from "../../../images/team/team3.png";
import team4 from "../../../images/team/team4.png";
import facebook from "../../../images/team/facebook.svg";
import twitter from "../../../images/team/twitter.svg";
import linkedin from "../../../images/team/linkedin.svg";


const Team = () => {
    return ( 
        <div className="team">
            <div className="team__container">
                <h2>Meet our team</h2>
                <div className="team__items">
                    <div className="team__item">
                        <div className="team__image">
                            <img src={team1} alt="Team member" draggable="false" />
                            <div className="team__image-links">
                                <a href="#"><img src={facebook} alt="Facebook icon" /></a>
                                <a href="#"><img src={twitter} alt="Twitter icon" /></a>
                                <a href="#"><img src={linkedin} alt="Linkedin icon" /></a>
                            </div>
                        </div>
                        <div className="team__item-info">
                            <p className="team__item-name">John Smith</p>
                            <p className="team__item-position">CEO</p>
                        </div>
                    </div>
                    <div className="team__item">
                        <div className="team__image">
                            <img src={team2} alt="Team member" draggable="false" />
                            <div className="team__image-links">
                                <a href="#"><img src={facebook} alt="Facebook icon" /></a>
                                <a href="#"><img src={twitter} alt="Twitter icon" /></a>
                                <a href="#"><img src={linkedin} alt="Linkedin icon" /></a>
                            </div>
                        </div>
                        <div className="team__item-info">
                            <p className="team__item-name">Simon Adams</p>
                            <p className="team__item-position">CTO</p>
                        </div>
                    </div>
                    <div className="team__item">
                        <div className="team__image">
                            <img src={team3} alt="Team member" draggable="false" />
                            <div className="team__image-links">
                                <a href="#"><img src={facebook} alt="Facebook icon" /></a>
                                <a href="#"><img src={twitter} alt="Twitter icon" /></a>
                                <a href="#"><img src={linkedin} alt="Linkedin icon" /></a>
                            </div>
                        </div>
                        <div className="team__item-info">
                            <p className="team__item-name">Paul Jones</p>
                            <p className="team__item-position">Design lead</p>
                        </div>
                    </div>
                    <div className="team__item">
                        <div className="team__image">
                            <img src={team4} alt="Team member" draggable="false" />
                            <div className="team__image-links">
                                <a href="#"><img src={facebook} alt="Facebook icon" /></a>
                                <a href="#"><img src={twitter} alt="Twitter icon" /></a>
                                <a href="#"><img src={linkedin} alt="Linkedin icon" /></a>
                            </div>
                        </div>
                        <div className="team__item-info">
                            <p className="team__item-name">Sara Hardin</p>
                            <p className="team__item-position">Project manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Team;