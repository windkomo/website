import React, { Component, PropTypes } from 'react'

class App extends Component {
    render() {
        console.log(this.props.children)
        return (
            <div className="plop">
                { this.props.children }
            </div>
        )
    }
}

App.propsTypes = {
    actions: PropTypes.object.isRequired
}

export default App
