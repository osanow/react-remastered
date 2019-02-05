import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import data from '../../../../algoliaSearch';

import { updateObject } from '../../../../shared/utility';
import classes from './SearchForm.module.scss';
import ResultBox from './ResultBox/ResultBox';

library.add(faSearch,faTrashAlt);

class SearchForm extends Component {

    state = {
        value: '',
        showResults: false,
        results: [],
    }

    onFocusToggleHandler = ( el ) => {
        el.target.parentElement.classList.toggle(classes.active);
        this.setState(updateObject(this.state , {
            showResults: !this.state.showResults && el.target.value !== "",
        } ));
    }

    onChangeHandler = ( el ) => {
        let value = el.target.value;

        data.search({ query: value })
            .then(content => {
                if (value !== this.state.value )
                    this.setState(updateObject(this.state, {
                        value,
                        results: content.hits,
                        showResults: !(value === "")
                    }));
            }).catch(err => {
                console.log(err);
                console.log(err.debugData);
                this.setState(updateObject(this.state, {
                    value,
                    showResults: false
                }));
            });
    }

    clearInput = () => {
        this.setState(updateObject(this.state, {
            value: '',
            showResults: false }));
    }

    render() {
        return (
            <form
            className={classes.SearchForm}
            onSubmit={ (el) => { el.preventDefault() } } >

                <FontAwesomeIcon icon="search" onClick={() => this.inputElem.focus()} />

                <input type="text" placeholder="Search"
                ref={(inp) => {this.inputElem = inp} }
                onFocus={this.onFocusToggleHandler}
                onBlur={this.onFocusToggleHandler}
                value={this.state.value}
                spellCheck="false"
                onChange={this.onChangeHandler} />

                <FontAwesomeIcon icon="trash-alt"
                onClick={ this.clearInput }
                style={ this.state.value ? '' : { opacity: '0' } } />

                { this.state.showResults ? <ResultBox results={this.state.results} query={this.state.value} /> : null }

            </form>
        );
    }
}

export default SearchForm;