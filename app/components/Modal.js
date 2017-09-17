import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import noop from 'lodash/noop';

class Modal extends PureComponent {
    constructor (props) {
        super(props);

        this.defaultActions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={() => this.props.onRequestClose()}
            />,
        ];
    }

    render () {
        return (
            <Dialog
                title={this.props.title}
                actions={this.props.actions || this.defaultActions}
                modal={true}
                open={this.props.open}
                onRequestClose={() => this.props.onRequestClose()}
            >
                {this.props.message}
            </Dialog>
        );
    }
}

Modal.propTypes = {
    title: PropTypes.string,
    actions: PropTypes.array,
    message: PropTypes.node,
    open: PropTypes.bool,
    onRequestClose: PropTypes.func,
};

Modal.defaultProps = {
    title: 'Oops, something went wrong',
    message: <p>Something went wrong. Please try it again.</p>,
    actions: null,
    open: false,
    onRequestClose: noop,
};

export default Modal;
