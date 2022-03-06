import React, { useState, useEffect } from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        props.language === ''
            ? setBookData('') // in order to not show "now loading..." in top page (default formData is '')
            : props.getData?.(props.language).then(response => setBookData(response));
    }, [props])

    return (
        <div className='book-list'>
            <ul className="book">
                {bookData === null
                    ? <p>now loading...</p>
                    : bookData?.data?.items?.map((book, index) => // question mark is called Optional Chaining
                        <li key={index} >
                            <div>{book.volumeInfo.title}</div>
                            <div className="flex">
                                <div>
                                    <a href={book.volumeInfo.infoLink} target="_blank" rel='noreferrer'>
                                        <img src={
                                            book.volumeInfo.imageLinks === undefined
                                                ? "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                                                : book.volumeInfo.imageLinks?.thumbnail
                                        } alt="" />
                                    </a>
                                </div>
                                <div>
                                    <div>著者: {book.volumeInfo.authors}</div>
                                    <div>出版社: {book.volumeInfo.publisher}</div>
                                    <div>出版日: {book.volumeInfo.publishedDate}</div>
                                </div>
                            </div>
                        </li>)}
            </ul>
        </div>
    );
}

export default Booklist;
