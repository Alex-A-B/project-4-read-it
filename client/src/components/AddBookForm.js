import { useState } from "react"

function AddBookForm( { user, onAddBook }) {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [coverImg, setCoverImg] = useState("")

    const formValues = {
        title: title,
        author: author,
        cover_img: coverImg,
        read: false,
        user_id: user.id
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/books`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        })
          .then((response) => response.json())
          .then((newBook) => onAddBook(newBook));
          setTitle("")
          setAuthor("")
          setCoverImg("")
      }

    return (
        <div>
            <h5>Add a new book:</h5>
            <form onSubmit={handleSubmit}>
            <input
               value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <input
               value={author}
                onChange={e => setAuthor(e.target.value)}
                placeholder="Author"
                required
            />
            <input
               value={coverImg}
                onChange={e => setCoverImg(e.target.value)}
                placeholder="Cover Image"
                required
            />
            <button type="submit">Add book to library</button>
            </form>
        </div>
        )
        
}

export default AddBookForm