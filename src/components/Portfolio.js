import React from 'react'

// Images
import storagerental from "../assets/storagerental.png";
import landloard from "../assets/landloard.png";
import sinuswebshop from "../assets/sinuswebshop.png";
import airbean from "../assets/airbean.png";
import conserts from "../assets/conserts.png";
import registrationform from "../assets/registrationform.png";

// Import redux
import { 
    useDispatch, 
    useSelector
} from 'react-redux';

// Import actions
import { 
    toggleProject1Action,
    toggleProject2Action,
    toggleProject3Action,
    toggleProject4Action,
    toggleProject5Action,
    toggleProject6Action
} from '../action/action';   

export default function Portfolio() {
    
    // redux useSelector
    const toggleProject1 = useSelector(state => state.toggleProject1);
    const toggleProject2 = useSelector(state => state.toggleProject2);
    const toggleProject3 = useSelector(state => state.toggleProject3);
    const toggleProject4 = useSelector(state => state.toggleProject4);
    const toggleProject5 = useSelector(state => state.toggleProject5);
    const toggleProject6 = useSelector(state => state.toggleProject6);

    // redux dispatch
    const dispatch = useDispatch();

    // Functions to display more info about my projects
    function handletoggleProject1(e) { dispatch(toggleProject1Action(!toggleProject1));}
    function handletoggleProject2(e) { dispatch(toggleProject2Action(!toggleProject2));}
    function handletoggleProject3(e) { dispatch(toggleProject3Action(!toggleProject3));}
    function handletoggleProject4(e) { dispatch(toggleProject4Action(!toggleProject4));}
    function handletoggleProject5(e) { dispatch(toggleProject5Action(!toggleProject5));}
    function handletoggleProject6(e) { dispatch(toggleProject6Action(!toggleProject6));}

    return (
        <section className="portfolioWrapper">
            <h2>Portfolio</h2>

            <div className="divider"></div>
            
            <img className="portfolioImg" onClick={handletoggleProject1} src={storagerental} alt='portfolioImg1'></img>
                {toggleProject1 ? 
                <div className="cover">
                    <div className="portfolioToggleContainer">
                        <h2>Storage Rental</h2>
                        <div className="divider"></div>
                        <a href="https://github.com/DutenLobarn/StorageRentalPage" target="_blank"  rel="noreferrer">
                            <img className="portfolioToggleImg" src={storagerental} alt='Storage Rental'></img>
                        </a>
                        <p className="portfolioP">A webpage for my brother.</p>
                        <p>In this projekt my goal was to brush up on my React and Redux skills and also automatize email corresponding with potentional costumer.</p>
                        <button className="portfolioButton" onClick={handletoggleProject1}>Close Window</button>
                    </div>
                </div>
                : ''}

            <img className="portfolioImg" onClick={handletoggleProject2} src={landloard} alt='portfolioImg2'></img>
                {toggleProject2 ? 
                <div className="cover">
                    <div className="portfolioToggleContainer">
                        <h2>The Landloard</h2>
                        <div className="divider"></div>
                        <a href="https://github.com/DutenLobarn/App-for-a-landlord-company" target="_blank"  rel="noreferrer">
                            <img className="portfolioToggleImg" src={landloard} alt='Example2'></img>
                        </a>
                        <p className="portfolioP">Also a webpage for my brother.</p>
                        <p>In this projekt my goal was to brush up on my HTML and CSS skills and also play around with the CSS.</p>
                        <p>Far from done!</p>
                        <button className="portfolioButton" onClick={handletoggleProject2}>Close Window</button>
                    </div>
                </div>
                : ''}

            <img className="portfolioImg" onClick={handletoggleProject3} src={sinuswebshop} alt='portfolioImg3'></img>
                {toggleProject3 ? 
                <div className="cover">
                    <div className="portfolioToggleContainer">
                        <h2>Node Teamwork</h2>
                        <div className="divider"></div>
                        <a href="https://github.com/DutenLobarn/nackademin-slutprojekt-backend-Grupparbete-Domus" target="_blank"  rel="noreferrer">
                            <img className="portfolioToggleImg" src={sinuswebshop} alt='Example3'></img>
                        </a>
                        <p className="portfolioP">Final School Exam in our Node JS Course</p>
                        <p>Me and another student got a finished FrontEnd (Vue) and worked with Node JS, Mongoose and MongoDB for the school exam.</p>
                        <p>Very fun project and awesome collaboration!</p>
                        <button className="portfolioButton" onClick={handletoggleProject3}>Close Window</button>
                    </div>
                </div>
                : ''}

            <img className="portfolioImg" onClick={handletoggleProject4} src={airbean} alt='portfolioImg4'></img>
                {toggleProject4 ? 
                <div className="cover">
                    <div className="portfolioToggleContainer">
                        <h2>React Teamwork</h2>
                        <div className="divider"></div>
                        <a href="https://github.com/Avancerad-JavaScript-med-React-JS-EC/grupparbete-golden-rangers" target="_blank"  rel="noreferrer">
                            <img className="portfolioToggleImg" src={airbean} alt='Example4'></img>
                        </a>
                        <p className="portfolioP">Final School Exam in our React Course</p>
                        <p>Me and 3 students got a Figma sketch that our final result should look like. First time using testing. Easy exercise i think.</p>
                        <button className="portfolioButton" onClick={handletoggleProject4}>Close Window</button>
                    </div>
                </div>
                : ''}

            <img className="portfolioImg" onClick={handletoggleProject5} src={conserts} alt='portfolioImg5'></img>
                {toggleProject5 ? 
                <div className="cover">
                    <div className="portfolioToggleContainer">
                        <h2>Booking Site</h2>
                        <div className="divider"></div>
                        <a href="https://github.com/Avancerad-JavaScript-med-React-JS-EC/inlamningsuppgift-4-DutenLobarn" target="_blank"  rel="noreferrer">
                            <img className="portfolioToggleImg" src={conserts} alt='Example5'></img>
                        </a>
                        <p className="portfolioP">A simple school project  using React.
                        Teacher gave us 3 Figma pages that we should make with code. </p>
                        <button className="portfolioButton" onClick={handletoggleProject5}>Close Window</button>
                    </div>
                </div>
                : ''}

            <img className="portfolioImg" onClick={handletoggleProject6} src={registrationform} alt='portfolioImg6'></img>
                {toggleProject6 ? 
                <div className="cover">
                    <div className="portfolioToggleContainer">
                        <h2>Registration</h2>
                        <div className="divider"></div>
                        <a href="https://github.com/Avancerad-JavaScript-med-React-JS-EC/inlamningsuppgift-3-DutenLobarn" target="_blank"  rel="noreferrer">
                            <img className="portfolioToggleImg" src={registrationform} alt='Example6'></img>
                        </a>
                        <p className="portfolioP">Also a school project, like other school projects we got some Figma pages to code with React.</p> 
                        <p>Our first time using Redux.</p>
                        <button className="portfolioButton" onClick={handletoggleProject6}>Close Window</button>
                    </div>
                </div>
                : ''}
        </section>
    )
}