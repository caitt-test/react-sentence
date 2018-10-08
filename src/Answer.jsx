import React from 'react';
import {connect} from 'react-redux';

const answer = ({ text }) => <div className="answer">{text}</div>;

const mapStateToProps = state => ({ text: state.sentence || '' });

export default connect(mapStateToProps)(answer);