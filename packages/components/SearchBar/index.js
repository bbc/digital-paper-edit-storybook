
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
} from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({handleSearch}) => {

    const [toggleSearchInput, setToggleShowInput] = useState(false);

    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
        handleSearch(searchValue);
    }
        return (
            <InputGroup className="mb-3">
                <InputGroup.Prepend
                    onClick={() => setToggleShowInput(!toggleSearchInput)}
                >
                    <InputGroup.Text id="basic-addon2">
                        <FontAwesomeIcon icon={faSearch} />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    style={{ display: toggleSearchInput ? '' : 'none' }}
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    placeholder="Search"
                    aria-label="search"
                    aria-describedby="search"
                />
            </InputGroup>
        );
    }

export default SearchBar;