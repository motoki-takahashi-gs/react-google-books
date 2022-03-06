import React from 'react'
import Booklist from './Booklist'
import SearchBox from './SearchBox'

const TopPage = ({ handleChange, formData, getData }) => {
    return (
        <div className='top-page'>
            <SearchBox
                handleChange={handleChange}
                formData={formData}
            />
            <Booklist
                language={formData}
                getData={keyword => getData(keyword)}
            />
        </div>
    )
}

export default TopPage