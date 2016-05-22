import React, { Component } from 'react'

import MenuLink from './Menulink'

class Sidemenu extends Component {
    render() {
        const links = [
            { label: 'Home', to: '/', class: 'home', icon: 'fa-home' },
            { label: 'About', to: '/about', icon: 'fa-cog' }
        ].map((link, index) =>
            <MenuLink
                key={index}
                to={link.to}
                label={link.label}
                class={link.class}
                icon={link.icon}
            />
        )

        return (
            <div className="sidemenu-wrapper">
                <div className="sidemenu-nav">
                    { links }
                </div>
            </div>
        )
    }
}

export default Sidemenu
