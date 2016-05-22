import React, { Component, PropTypes } from 'react'

import App from './App'

class AppContainer extends Component {
    render() {
        return (
            <App>
                { this.props.children }
            </App>
        )
    }
}

AppContainer.propsTypes = {
    actions: PropTypes.object.isRequired
}

export default AppContainer
