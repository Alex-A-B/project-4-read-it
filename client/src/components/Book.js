import { useState } from "react"

function Book( { book, onRemoveBook } ) {
    const {cover_img, title, author, read} = book
    const [haveRead, setHaveRead] = useState(read)


    function handleDeleteClick() {
        fetch(`books/${book.id}`, {
        method: "DELETE",
         });
        onRemoveBook(book.id);
    }

    function handleUpdateClick() {
        fetch(`books/${book.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
             body: JSON.stringify({ read: !haveRead }),
            })
        .then((r) => r.json())
        setHaveRead(!haveRead)
    }

        

    

    return (
        <div className="book">
            <img src={cover_img} alt={title} width="50" length="60" /> 
            <h4>Title: {title}</h4>
            <h4>Author: {author}</h4>
            { haveRead ? (<h5>Read it!</h5> ) :( <h5>Still to Read</h5> )}
            <button onClick={handleUpdateClick}>Read it?</button>
            <button onClick={handleDeleteClick}>Remove from Library</button>
        </div>
    )
}

export default Book
