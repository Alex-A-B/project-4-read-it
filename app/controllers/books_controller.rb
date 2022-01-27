class BooksController < ApplicationController

    def index
        books = Book.all.includes(:user)
        render json: books
    end
end
