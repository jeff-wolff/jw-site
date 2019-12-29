import React from 'react'

class Theme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textColor: this.props.textColor ? this.props.textColor : "#fff",
            bg: this.props.bg ? this.props.bg : "#151515",
            bgFaded: this.props.bgFaded ? this.props.bgFaded : "16,16,16",
            primary: this.props.primary ? this.props.primary : "#ff0",
            primaryFaded: this.props.primaryFaded ? this.props.primaryFaded : "rgba(255,255,0,.78)",
            secondary: this.props.secondary ? this.props.secondary : "#000",
            secondaryFaded: this.props.secondaryFaded ? this.props.secondaryFaded : "#222",
            windowTitle: this.props.windowTitle ? this.props.windowTitle : "0,0,0",
            windowBorder: this.props.windowBorder ? this.props.windowBorder : "190,190,190",
            footerBg: this.props.footerBg ? this.props.footerBg : "#000"
        }
    }
    setTheme() {
        document.documentElement.style.setProperty('--text-color', this.state.textColor);
        document.documentElement.style.setProperty('--bg', this.state.bg);
        document.documentElement.style.setProperty('--bg-faded', this.state.bgFaded);
        document.documentElement.style.setProperty('--primary', this.state.primary);
        document.documentElement.style.setProperty('--primary-faded', this.state.primaryFaded);
        document.documentElement.style.setProperty('--secondary', this.state.secondary);
        document.documentElement.style.setProperty('--secondary-faded', this.state.secondaryFaded);
        document.documentElement.style.setProperty('--window-title', this.state.windowTitle);
        document.documentElement.style.setProperty('--window-border', this.state.windowBorder);
        document.documentElement.style.setProperty('--footer-bg', this.state.footerBg);
        let metaThemeColor = document.querySelector("meta[name=theme-color]");
        metaThemeColor.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue('--bg'));
    }

    componentDidMount() {
        this.setTheme()
    }

    render() {
        return (null)
    }

}

export default Theme
