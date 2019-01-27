import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import classes from './SearchForm.module.scss';

library.add(faSearch,faTrashAlt);

class SearchForm extends Component {

    state = {
        value: '',
    }

    onFocusToggleHandler = ( el ) => {
        el.target.parentElement.classList.toggle(classes.active);
    }

    onChangeHandler = ( el ) => {
        this.setState( { value: el.target.value } );
    }

    clearInput = () => {
        this.setState( { value: '' } );
    }

    render() {
        return (
            <form
            onClick={ () => this.inputElem.focus() }
            className={classes.SearchForm}
            onSubmit={ (el) => { el.preventDefault() } } >

                <FontAwesomeIcon icon="search" />

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

            </form>
        );
    }
}

export default SearchForm;