
import Book from "./Book"


function UserLibrary( { user, books, onRemoveBook }) {


    // needs an IF to stop the react error 
    const renderLibrary = books.filter(book => book.user_id === user.id).map((book) => <Book key={book.id} book={book} onRemoveBook={onRemoveBook}/>)

    return (
        <div>
           {renderLibrary}
        </div>
    )
}

export default UserLibrary