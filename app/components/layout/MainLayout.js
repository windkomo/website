import React from 'react'

import Header from './Header'
import Sidemenu from './Sidemenu'

export default class MainLayout extends React.Component {
    render () {
        return (
            <div className="app">
                <Header />
                <Sidemenu />
                <main className="content-wrapper">
                    { this.props.children }
                </main>
            </div>
        )
    }
}
