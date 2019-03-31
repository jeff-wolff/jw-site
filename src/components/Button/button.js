import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { media, mediamax } from '../../utils/media'

const Button = styled(({size = 'default', ...props}) => props.external ? <a {...props} target="_blank" /> : <Link {...props} />
    )`
    transform: translate3d(0,0,0);
    outline: 0;
    box-shadow: none;
    display: ${ props => (props.inlineicon ? 'flex' : 'inline-block')};
    justify-content: space-between;
    align-items: center;
    transition: all 0.125s ease-in-out;
    position: relative;
    backface-visibility: hidden;
    text-decoration: none;
    background-color: #212121;
    background-color: var(--bg);
    line-height: 1.2;
    letter-spacing: 0.125em;
    text-transform: uppercase;
    user-select: none;
    font-size: ${ props => ( props.size == 'tiny' ? '11px' : props.size == 'small' ? '11px' : '15px' ) }; 
    padding: ${ props => ( props.size == 'tiny' ? '.75em .85em' : props.size == 'small' ? '1.27em 1.25em' : '1.776em 1.7em ' ) };
    // width: ${ props => (props.inlineicon ? '100%' : 'auto')};
    text-align: ${ props => (props.inlineicon == 'left' ? 'right' : 'left')};
    ${media.medium`
        font-size: ${ props => ( props.size == 'tiny' ? '13px' : props.size == 'small' ? '13px' : '19px' ) }; 
        padding: ${ props => ( props.size == 'tiny' ? '.75em .85em' : props.size == 'small' ? '1em 1.25em' : '1.667em 1.6em' ) };
    `}
    ${media.large`
        font-size: ${ props => ( props.size == 'tiny' ? '14px' : props.size == 'small' ? '15px' : '21px' ) }; 
        padding: ${ props => ( props.size == 'tiny' ? '.75em .85em' : props.size == 'small' ? '1em 1.5em' : '1.62em 1.6em' ) };
    `}
    &:hover {
        color: #000;
        color: var(--secondary);
        padding: ${ props => ( props.size == 'tiny' ? '.75em .85em' : props.size == 'small' ? '1.27em 1.25em' : '1.776em 1.7em ' ) };
        @media (-moz-touch-enabled: 0), (hover: hover) {
            transform: translate3d(${ props => ( props.size == 'tiny' ? '0' : props.size == 'small' ? '4px, -4px, 0' : '6px, -6px, 0' ) });
        }
        ${media.medium`
            padding: ${ props => ( props.size == 'tiny' ? '.75em .85em' : props.size == 'small' ? '1em 1.25em' : '1.667em 1.6em' ) };
        `}
        ${media.large`
            padding: ${ props => ( props.size == 'tiny' ? '.75em .85em' : props.size == 'small' ? '1em 1.5em' : '1.62em 1.6em' ) };
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
        background-color: #212121;
        background-color: var(--bg);
        border: 1px solid #ff0;
        border: 1px solid var(--primary);
        // border-width: ${ props => ( props.size == 'tiny' || props.size == 'small' ? '1px' : '3px')};
        transform: translate3d(0,0,0);
    }
    
    &:hover:before {
        background: #ff0;
        background: var(--primary);
    }
    &:hover:after {
        border: 1px solid #ff0;
        border: 1px solid var(--primary-faded);
        // border-width: ${ props => ( props.size == 'tiny' || props.size == 'small' ? '1px' : '3px')};
        @media (-moz-touch-enabled: 0), (hover: hover) {
            transform: translate3d(${ props => ( props.size == 'tiny' ? '0' : props.size == 'small' ? '-4px, 4px, 0' : '-6px, 6px, 0' ) });
        }
    }
    &:active {
        transform: translate3d(0,0,0);
        color: #222;
        color: var(--secondary-faded);
    }
    &:active:before {
        background: rgba(255, 255, 0, 0.87);
        background: var(--primary-faded);
    }
    &:active:after {
        transform: translate3d(0,0,0);
    }
    span {
        order: ${ props => (props.inlineicon == "left" ? '-1' : '1')};
        padding: ${ props => ( props.size == 'tiny' ? '0 0.5em' : props.size == 'small' ? '0 1em' : '0 1.5em' ) };
        padding-left: ${ props => (props.inlineicon == "left" ? '0' : '')};
        padding-right: ${ props => (props.inlineicon == "right" ? '0' : '')};
    }
`;


export default Button
