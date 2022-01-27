import { useEffect, useState } from "react"
import Book from "./Book"


function UserLibrary( { user }) {
    const [userLibrary, setUserLibrary] = useState([])

    useEffect(() => {
        if (user === null) {
            return (
                setUserLibrary([])
            )
        }
        fetch("/books")
        .then(response => response.json())
        .then(books => setUserLibrary(books.filter(book => book.user_id === user.id)))

    }, [])

    console.log(user)

    console.log(userLibrary)
    
    const renderLibrary = userLibrary.map((book) => <Book key={book.id} book={book} />)

    return (
        <div>
           {renderLibrary}
        </div>
    )
}

export default UserLibrary