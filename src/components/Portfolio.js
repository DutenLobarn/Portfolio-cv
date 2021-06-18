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
                        <h2>Exempel 1</h2>
                        <div className="divider"></div>
                        <img className="portfolioToggleImg" src={storagerental} alt='Example1'></img>
                        <p className="portfolioP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam</p>
                        <button className="portfolioButton" onClick={handletoggleProject1}>Close Window</button>
                    </div>
                </div>
                : ''}

            <img className="portfolioImg" onClick={handletoggleProject2} src={landloard} alt='portfolioImg2'></img>
                {toggleProject2 ? 
                <div className="cover">
                    <div className="portfolioToggleContainer">
                        <h2>Exempel 2</h2>
                        <div className="divider"></div>
                        <img className="portfolioToggleImg" src={landloard} alt='Example2'></img>
                        <p className="portfolioP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam</p>
                        <button className="portfolioButton" onClick={handletoggleProject2}>Close Window</button>
                    </div>
                </div>
                : ''}

            <img className="portfolioImg" onClick={handletoggleProject3} src={sinuswebshop} alt='portfolioImg3'></img>
                {toggleProject3 ? 
                <div className="cover">
                    <div className="portfolioToggleContainer">
                        <h2>Exempel 3</h2>
                        <div className="divider"></div>
                        <img className="portfolioToggleImg" src={sinuswebshop} alt='Example3'></img>
                        <p className="portfolioP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam</p>
                        <button className="portfolioButton" onClick={handletoggleProject3}>Close Window</button>
                    </div>
                </div>
                : ''}

            <img className="portfolioImg" onClick={handletoggleProject4} src={airbean} alt='portfolioImg4'></img>
                {toggleProject4 ? 
                <div className="cover">
                    <div className="portfolioToggleContainer">
                        <h2>Exempel 4</h2>
                        <div className="divider"></div>
                        <img className="portfolioToggleImg" src={airbean} alt='Example4'></img>
                        <p className="portfolioP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam</p>
                        <button className="portfolioButton" onClick={handletoggleProject4}>Close Window</button>
                    </div>
                </div>
                : ''}

            <img className="portfolioImg" onClick={handletoggleProject5} src={conserts} alt='portfolioImg5'></img>
                {toggleProject5 ? 
                <div className="cover">
                    <div className="portfolioToggleContainer">
                        <h2>Exempel 5</h2>
                        <div className="divider"></div>
                        <img className="portfolioToggleImg" src={conserts} alt='Example5'></img>
                        <p className="portfolioP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam</p>
                        <button className="portfolioButton" onClick={handletoggleProject5}>Close Window</button>
                    </div>
                </div>
                : ''}

            <img className="portfolioImg" onClick={handletoggleProject6} src={registrationform} alt='portfolioImg6'></img>
                {toggleProject6 ? 
                <div className="cover">
                    <div className="portfolioToggleContainer">
                        <h2>Exempel 6</h2>
                        <div className="divider"></div>
                        <img className="portfolioToggleImg" src={registrationform} alt='Example6'></img>
                        <p className="portfolioP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam</p>
                        <button className="portfolioButton" onClick={handletoggleProject6}>Close Window</button>
                    </div>
                </div>
                : ''}
        </section>
    )
}