import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.js';
import "./SearchForm.css";

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className='search-form'>
        <div className='container'>
            <div className='search-form-content'>
                <form onSubmit={handleSubmit}>
                <div className='search-form-elem'>
                    <input type="text" className='form-control' placeholder='The Lost World ...' ref={searchText} />
                    <button type="submit" className='search-button' onClick={handleSubmit}>  
                    <FaSearch className='text-purple' size={32} />
                    </button>
                </div>
                </form>
            </div>
        </div>
     </div>
  )
}

export default SearchForm