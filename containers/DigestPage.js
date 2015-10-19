import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDigest } from '../actions';
import Digest from '../components/digest/Digest';
import '../assets/sass/components/digest.scss';

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
        const { articles } = this.props;
        return (
            <div>
                <Digest articles={articles}/>
            </div>
        );
    }
}

DigestPage.propTypes = {};

function mapStateToProps(state) {
    const { articles } = state.digest;
    return {
        articles
    };
}

export default connect(mapStateToProps, {
    fetchDigest
})(DigestPage);
