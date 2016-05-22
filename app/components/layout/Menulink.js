import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import classnames from 'classnames';

class Menulink extends Component {
    render() {
        const tooltip = (
            <Tooltip id={this.props.label}>
                <strong>
                    {this.props.label}
                </strong>
            </Tooltip>
        );
        const classes = classnames('fa', this.props.icon)
        return (
            <OverlayTrigger
                placement="right"
                overlay={tooltip}
            >
                <Link to={this.props.to} className={this.props.class}>
                    <li className={classes} />
                </Link>
            </OverlayTrigger>
        )
    }
}

Menulink.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    class: PropTypes.string
}

export default Menulink
