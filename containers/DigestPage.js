import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

function loadData(props) {
    // const { login } = props;
    // call to actions
    // props.loadUser(login, ['name']);
    // props.loadStarred(login);
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

export default connect(mapStateToProps, {})(DigestPage);
