
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
} from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({handleSearch}) => {

    console.log('handle search', handleSearch);

    const [showSearchInput, toggleShowInput] = useState(false);

    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        handleSearch(searchValue);
        resetInputField();
    }

        return (
            <InputGroup className="mb-3">
                <InputGroup.Prepend
                    onClick={() => toggleShowInput(!showSearchInput)}
                >
                    <InputGroup.Text id="basic-addon2">
                        <FontAwesomeIcon icon={faSearch} />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    style={{ display: showSearchInput ? '' : 'none' }}
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    placeholder="Search"
                    aria-label="search"
                    aria-describedby="search"
                />
                <input onClick={callSearchFunction} type="submit" value="Search" />
            </InputGroup>
        );
    }

export default SearchBar;