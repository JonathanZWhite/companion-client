import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDigest } from '../actions';

function loadData(props) {
    props.fetchDigest();
}

class DigestPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        loadData(this.props);
    }

    render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

DigestPage.propTypes = {};

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, {
    fetchDigest
})(DigestPage);
