import React, { useState, useEffect } from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])

    console.log(bookData);

    return (
        <div>
            <ul className="book">
                {
                    bookData === null
                        ? <p>now loading...</p>
                        : bookData.data.items.map((x, index) =>

                            <li key={index} >
                                <div>
                                    {x.volumeInfo.title}
                                </div>
                                <div className="flex">
                                    <div>
                                        <a href={x.volumeInfo.infoLink} target="_blank">
                                            <img src={
                                                x.volumeInfo.imageLinks === undefined
                                                    ? "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                                                    : x.volumeInfo.imageLinks?.thumbnail
                                            } alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <div>
                                            著者：{x.volumeInfo.authors + ""}
                                        </div>
                                        <div>
                                            出版社：{x.volumeInfo.publisher}
                                        </div>
                                        <div>
                                            出版日：{x.volumeInfo.publishedDate}
                                        </div>
                                    </div>
                                </div>
                            </li>)
                }
            </ul>
        </div >
    );
}

export default Booklist;
