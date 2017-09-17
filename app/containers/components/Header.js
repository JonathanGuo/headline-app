import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import CircularProgress from 'material-ui/CircularProgress';
import groupBy from 'lodash/groupBy';
import { action } from '../../config/Store';
import SourceList from '../../components/sources/SourceList';
import Modal from '../../components/Modal';
import About from './About';

class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false,
            aboutOpen: false,
            modalMessage: '',
        };

        this.sourcesByCountry = {};
        this.countries = [];
    }

    componentDidMount () {
        action('FETCH_SOURCES_ASYNC');
    }

    componentWillReceiveProps(nextProps) {
        // Group sources by country code
        if (nextProps.loadedSources) {
            this.sourcesByCountry = groupBy(nextProps.sources, 'country');
            this.countries = Object.keys(this.sourcesByCountry).sort();
        }

        // When the app initials
        // pops out the drawer for users to quickly select a source
        if (nextProps.sources.length > 0 && !nextProps.currentSource) {
            this.setState({ drawerOpen: true });
        }
    }

    toggleDrawer () {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

    /**
     * Load news of a source
     *
     * @param  {Object} source
     * @return {void}
     */
    loadSource (source) {
        this.setState({
            drawerOpen: false,
        });

        action('FETCH_NEWS_ASYNC', { source });
    }

    showAboutModal () {
        this.setState({ aboutOpen: true });
    }

    render () {
        return (
            <div>
                <Modal
                    title="About"
                    message={<About />}
                    open={this.state.aboutOpen}
                    onRequestClose={() => this.setState({ aboutOpen: false })}
                />
                <AppBar
                    title="Headline"
                    iconElementRight={<FlatButton label="About" />}
                    onLeftIconButtonTouchTap={() => this.toggleDrawer()}
                    onRightIconButtonTouchTap={() => this.showAboutModal()}
                />
                <Drawer
                    open={this.state.drawerOpen}
                    docked={false}
                    onRequestChange={open => this.setState({ drawerOpen: open })}
                >
                    <div style={{ textAlign: 'center' }}>
                        <FontIcon
                            className="material-icons"
                            style={{ fontSize: '5rem' }}
                        >
                            album
                        </FontIcon>
                        <h2>
                            Sources
                        </h2>
                    </div>
                    {
                        this.props.loadingSources
                            ? <CircularProgress />
                            : null
                    }
                    {
                        this.countries.map(country => (
                            <SourceList
                                key={country}
                                country={country}
                                sources={this.sourcesByCountry[country] || []}
                                onSourceSelected={source => this.loadSource(source)}
                            />
                        ))
                    }
                </Drawer>
            </div>
        );
    }
}

Header.propTypes = {
    sources: PropTypes.array.isRequired,
    loadingSources: PropTypes.bool.isRequired,
    loadedSources: PropTypes.bool.isRequired,
    currentSource: PropTypes.object,
};

Header.defaultProps = {
    currentSource: null,
};

export default connect((store) => {
    return {
        sources: store.Sources.sources,
        loadingSources: store.Sources.loading,
        loadedSources: store.Sources.loaded,
        currentSource: store.News.source,
    };
})(Header);
