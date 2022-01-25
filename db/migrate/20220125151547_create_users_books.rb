class CreateUsersBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :users_books do |t|
      t.integer :user_id
      t.integer :book_id
      t.boolean :read

      t.timestamps
    end
  end
end
