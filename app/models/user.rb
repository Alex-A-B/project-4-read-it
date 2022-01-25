class User < ApplicationRecord
    has_secure_password

    has_many :users_books
    has_many :books, through: :users_books
end
