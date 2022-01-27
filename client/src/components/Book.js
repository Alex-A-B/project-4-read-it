function book( { book } ) {
    const {cover_img, title, author, read} = book

    return (
        <div className="book">
            <img src={cover_img} alt={title} width="50" length="60" /> 
            <h4>Title: {title}</h4>
            <h4>Author: {author}</h4>
        </div>
    )
}

export default book
