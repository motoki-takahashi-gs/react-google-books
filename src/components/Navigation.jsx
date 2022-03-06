import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = ({ languages }) => {

    const list = languages.map(language => {
        if (language === '') return ''
        const id = language.toLowerCase()
        const elm =
            <Link to={`/${id}`} key={id}>
                <Button variant='primary' className='nav-button'>{language}</Button>
            </Link>
        return elm
    })

    return (
        <div className='nav-bar'>{list}</div>
    )
}

export default Navigation