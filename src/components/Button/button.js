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
    line-height: 1.2;
    letter-spacing: 0;
    text-transform: uppercase;
    word-break: break-all;
    user-select: none;
    font-size: ${ props => ( props.tiny ? '13px' : props.small ? '17px' : '19px' ) }; 
    padding: ${ props => ( props.tiny ? '.6em 1.25em .6em' : props.small ? '.66em 3em .5em' : '1.3em 1.5em' ) };
    ${media.medium`
        font-size: ${ props => ( props.tiny ? '14px' : props.small ? '19px' : '24px' ) };
        padding: ${ props => ( props.tiny ? '.7em 1.5em .625em' : props.small ? '.6em 3.5em .6em' : '1.3em 3em' ) };
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
        transform: translate3d(${ props => ( props.tiny ? '5px, -5px, 0' : props.small ? '6px, -6px, 0' : '6px, -6px, 0' ) });
        padding: ${ props => ( props.tiny ? '.6em 1.25em .6em' : props.small ? '.66em 3em .5em' : '1.3em 1.5em' ) };
        ${media.medium`
            transform: translate3d(${ props => ( props.tiny ? '6px, -6px, 0' : props.small ? '8px, -8px, 0' : '10px, -10px, 0' ) });
            padding: ${ props => ( props.tiny ? '.7em 1.5em .625em' : props.small ? '.6em 3.5em .6em' : '1.3em 3em' ) };
        `}
    }
    &:hover:before {
        background: #ff0;
        background: var(--primary);
    }
    &:hover:after {
        transform: translate3d(${ props => ( props.tiny ? '-5px, 5px, 0' : props.small ? '-6px, 6px, 0' : '-6px, 6px, 0' ) });
        opacity: .4;
        border: 2px solid #ff0;
        border: 2px solid var(--primary);
        ${media.medium`
            transform: translate3d(${ props => ( props.tiny ? '-6px, 6px, 0' : props.small ? '-8px, 8px, 0' : '-10px, 10px, 0' ) });
        `}
    }
    &:active {
        transform: translate3d(0,0,0);
    }
    &:active:after {
        transform: translate3d(0,0,0);
    }
`;


export default Button
