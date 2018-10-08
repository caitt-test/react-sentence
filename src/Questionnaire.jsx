import React from 'react';
import { connect } from 'react-redux';

import Question from './Question';
import { submitAnswers } from "./ducks";

import './Questionnaire.css';

export class Questionnaire extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            who: '',
            what: '',
            when: '',
            where: ''
        };

        this.onChange = (key) => (event) => {
            this.setState({ [key]: event.target.value });
        };

        this.onWhatChange = this.onChange('what');
        this.onWhoChange = this.onChange('who');
        this.onWhenChange = this.onChange('when');
        this.onWhereChange = this.onChange('where');

        this.onSubmit = (evt) => {
            evt.preventDefault();
            this.props.submitAnswers(this.state);
        };
    }

    render() {
        const { who, what, when, where } = this.state;
        return <form onSubmit={this.onSubmit} className='questionnaire'>
            <Question label="Who?" value={who} onChange={this.onWhoChange} />
            <Question label="What?" value={what} onChange={this.onWhatChange} />
            <Question label="When?" value={when} onChange={this.onWhenChange} />
            <Question label="Where?" value={where} onChange={this.onWhereChange} />
            <input type="submit" value="Submit" />
        </form>;
    }
}

export default connect(null, {submitAnswers})(Questionnaire);