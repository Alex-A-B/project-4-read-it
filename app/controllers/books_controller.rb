class BooksController < ApplicationController

    def index
        books = Book.all.includes(:user)
        render json: books
    end

    def create
        book = Book.create(book_params)
        render json: book, status: :created
    end

    def update
        book = Book.find_by(id: params[:id])
        book.update(book_params)
        render json: book
    end

    def destroy
        book = Book.find_by(id: params[:id])
        book.destroy
        head :no_content
    end

    private

    def book_params
        params.permit(:title, :author, :cover_img, :read, :user_id)
    end
end
