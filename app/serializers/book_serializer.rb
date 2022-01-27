class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :cover_img, :read, :user_id
end
