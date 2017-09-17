import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

const iconExpand = <FontIcon className="material-icons">expand_more</FontIcon>;
const iconCollapse = <FontIcon className="material-icons">expand_less</FontIcon>;

class SourceList extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            open: true,
        };

        this.toggleList = this.toggleList.bind(this);
    }

    toggleList () {
        this.setState({ open: !this.state.open });
    }

    render () {
        return (
            <div>
                <Divider />
                <MenuItem
                    primaryText={this.props.country.toUpperCase()}
                    onClick={this.toggleList}
                    rightIcon={
                        this.state.open
                            ? iconExpand
                            : iconCollapse
                    }
                />
                <Divider />
                {
                    this.props.sources.length > 0 && this.state.open
                        ? this.props.sources.map(source => (
                            <MenuItem
                                key={source.id}
                                onClick={() => this.props.onSourceSelected(source)}
                            >
                                {source.name}
                            </MenuItem>
                        ))
                        : null
                }
            </div>
        );
    }
}

SourceList.propTypes = {
    country: PropTypes.string.isRequired,
    sources: PropTypes.array.isRequired,
    onSourceSelected: PropTypes.func.isRequired,
};

export default SourceList;
