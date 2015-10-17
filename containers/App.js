import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import Explore from '../components/Explore';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, inputValue } = this.props;
        return (
            <div>
                {children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node
};

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, {})(App);
