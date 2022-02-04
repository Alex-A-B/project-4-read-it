import Book from "./Book"

function UserLibrary( { user, books, onRemoveBook }) {

// if statement added to remove error 

    return (
        <div>
           {user ? ( books.filter(book => book.user_id === user.id).map((book) => <Book key={book.id} book={book} onRemoveBook={onRemoveBook}/>)): (<></>) }
        </div>
    )
}

export default UserLibrary