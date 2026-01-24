import "./content.scss";
import img1 from "../../../images/content/1.jpg";
import img2 from "../../../images/content/2.jpg";

const Content = () => {
    return ( 
        <div className="content">
            <div className="content__container">
                <div className="content__row">
                    <div className="content__col">
                        <p className="content__label">Our Mission</p>
                        <h2 className="content__title">Inspire, Innovate, Share</h2>
                        <p className="content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <img src={img1} alt="Content image" draggable="false" className="content__image" />
                </div>
                <div className="content__row">
                    <img src={img2} alt="Content image" draggable="false" className="content__image" />
                    <div className="content__col">
                        <p className="content__label">Our Vision</p>
                        <h2 className="content__title">Laser focus</h2>
                        <p className="content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Content;