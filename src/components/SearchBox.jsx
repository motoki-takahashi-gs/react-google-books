import React from 'react'
import { Form } from 'react-bootstrap'

const SearchBox = ({ handleChange, formData }) => {
    return (
        <div className='search-box'>
            <Form.Control
                type="text"
                placeholder='検索キーワードを入力'
                onChange={handleChange}
                value={formData}
            ></Form.Control>
        </div>
    )
}

export default SearchBox