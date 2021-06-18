import React from 'react'

// Animation 
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';

// Import redux
import { useDispatch, useSelector} from 'react-redux';
import { toggleMenuAction } from '../action/action';   

export default function Nav() {
    // redux useSelector
    const toggleMenu = useSelector(state => state.toggleMenu);

    // redux dispatch
    const dispatch = useDispatch();

    // Functions for dropdown menu
    function handleToggleMenu(e) { dispatch(toggleMenuAction(!toggleMenu));}

    const scrollWinPortfolio = () => {
        return (window.scrollTo(0, 651), handleToggleMenu())
    }
    const scrollWinSkills = () => {
        return (window.scrollTo(0, 2505), handleToggleMenu())
    }
    const scrollWinAbout = () => {
        return (window.scrollTo(0, 3156), handleToggleMenu())
    }
    const scrollWinContact = () => {
        return (window.scrollTo(0, 3808), handleToggleMenu())
    }

    // Style
    const Fade = styled.ul`animation: 2s ${keyframes`${fadeIn}`} `;

    return (
    <>
        <nav className="navWrapper">
            <div className="navBox">
                <h3 className='navCompanyName'>Ten Fingers</h3>
                <button onClick={handleToggleMenu} className='navBtn'>Menu
                <section>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
                </button>
            </div>
        </nav>
            <Fade>
                {toggleMenu ?
                <ul className='navUl'>
                    <li onClick={scrollWinPortfolio}className='navLi'>Portfolio</li>
                    <li onClick={scrollWinSkills} className='navLi'>Skills</li>
                    <li onClick={scrollWinAbout} className='navLi'>About</li>
                    <li onClick={scrollWinContact} className='navLi'>Contact</li>
                </ul>
                : ''}
            </Fade>
    </>
    )
}
