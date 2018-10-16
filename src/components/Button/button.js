import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { media, mediamax } from '../../utils/media'

const Button = styled(({small, tiny, ...props}) => <Link {...props} />
    )`
    transform: translate3d(0,0,0);
    outline: 0;
    box-shadow: none;
    display: inline-block;
    transition: all 0.125s ease-in-out;
    position: relative;
    backface-visibility: hidden;
    text-decoration: none;
    background-color: #111;
    background-color: var(--bg);
    line-height: 1.33333;
    font-size: ${ props => ( props.tiny ? '13px' : props.small ? '15px' : '24px' ) }; 
    padding: ${ props => ( props.tiny ? '.5rem 1.5rem' : props.small ? '1rem 2.5rem' : '2rem 6rem' ) };
    ${media.medium`
        font-size: ${ props => ( props.tiny ? '15px' : props.small ? '17px' : '24px' ) };
        padding: ${ props => ( props.tiny ? '.5rem 1.5rem' : props.small ? '1.25rem 3.5em' : '2rem 8rem' ) };
    `}
    &:before, &:after {
        transition: all 0.125s ease-in-out;
        content: ' ';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    &:before {
        background: none;
        z-index: -1;
    }
    &:after {
        opacity: 1;
        z-index: -2;
        border: 2px solid #ff0;
        border: 2px solid var(--primary);
        transform: translate3d(0,0,0);
    }
    &:hover {
        background: #111;
        background: var(--bg);
        color: #000;
        color: var(--secondary);
        transform: translate3d(${ props => ( props.tiny ? '-5px, -5px, 0' : props.small ? '-7px, -7px, 0' : '-12px, -12px, 0' ) });
        padding: ${ props => ( props.tiny ? '.5rem 1.5rem' : props.small ? '1rem 2.5rem' : '2rem 6rem' ) };
        ${media.medium`
            padding: ${ props => ( props.tiny ? '.5rem 1.5rem' : props.small ? '1.25rem 3.5em' : '2rem 8rem' ) };
        `}
    }
    &:hover:before {
        background: #ff0;
        background: var(--primary);
    }
    &:hover:after {
        transform: translate3d(${ props => ( props.tiny ? '5px, 5px, 0' : props.small ? '7px, 7px, 0' : '12px, 12px, 0' ) });
        opacity: .4;
    }
    &:active {
        transform: translate3d(0,0,0);
    }
    &:active:after {
        transform: translate3d(0,0,0);
    }
`;


export default Button
