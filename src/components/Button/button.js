import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { media, mediamax } from '../../utils/media'

const Button = styled(({small, tiny, ...props}) => props.external ? <a {...props} target="_blank" /> : <Link {...props} />
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
    font-size: ${ props => ( props.tiny ? '13px' : props.small ? '15px' : '19px' ) }; 
    padding: ${ props => ( props.tiny ? '.6em 1.25em .5em' : props.small ? '.7em 1.25em .6em' : '1.3em 1.2em 1.2em' ) };
    width: ${ props => (props.inlineicon ? '100%' : 'auto')};
    text-align: ${ props => (props.inlineicon == "left" ? 'right' : 'left')};
    ${media.medium`
        padding: ${ props => ( props.tiny ? '.6em 1.25em .5em' : props.small ? '.7em 1.25em .6em' : '1.3em 2em 1.2em' ) };
    `}
    ${media.large`
        font-size: ${ props => ( props.tiny ? '14px' : props.small ? '19px' : '24px' ) };
        padding: ${ props => ( props.tiny ? '.7em 1.5em .6em' : props.small ? '1em 1.5em .9em' : '1.3em 2em 1.2em' ) };
    `}
    &:hover {
        background: #111;
        background: var(--bg);
        color: #000;
        color: var(--secondary);
        padding: ${ props => ( props.tiny ? '.6em 1.25em .5em' : props.small ? '.7em 1.25em .6em' : '1.3em 1.2em 1.2em' ) };
        @media (-moz-touch-enabled: 0), (hover: hover) {
            transform: translate3d(${ props => ( props.tiny ? '0' : props.small ? '6px, -6px, 0' : '6px, -6px, 0' ) });
        }
        ${media.medium`
            padding: ${ props => ( props.tiny ? '.6em 1.25em .5em' : props.small ? '.7em 1.25em .6em' : '1.3em 2em 1.2em' ) };
        `}
        ${media.large`
            @media (-moz-touch-enabled: 0), (hover: hover) {
                transform: translate3d(${ props => ( props.tiny ? '0' : props.small ? '8px, -8px, 0' : '10px, -10px, 0' ) });
            }
            padding: ${ props => ( props.tiny ? '.7em 1.5em .6em' : props.small ? '1em 1.5em' : '1.3em 2em 1.2em' ) };
        `}
    }
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
        z-index: -2;
        background-color: #111;
        background-color: var(--bg);
        border: 2px solid #ff0;
        border: 2px solid var(--primary);
        // border-width: ${ props => ( props.tiny ? '1px' : '4px')};
        transform: translate3d(0,0,0);
    }
    
    &:hover:before {
        background: #ff0;
        background: var(--primary);
    }
    &:hover:after {
        border: 2px solid #ff0;
        border: 2px solid var(--primary);
        // border-width: ${ props => ( props.tiny ? '1px' : '4px')};
        @media (-moz-touch-enabled: 0), (hover: hover) {
            transform: translate3d(${ props => ( props.tiny ? '0' : props.small ? '-6px, 6px, 0' : '-6px, 6px, 0' ) });
            ${media.large`
                transform: translate3d(${ props => ( props.tiny ? '0' : props.small ? '-8px, 8px, 0' : '-10px, 10px, 0' ) });
            `}
        }
    }
    &:active {
        transform: translate3d(0,0,0);
    }
    &:active:after {
        transform: translate3d(0,0,0);
    }
    
    span {
        float: ${ props => (props.inlineicon == "left" ? 'left' : 'right')};
    }
`;


export default Button
