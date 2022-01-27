class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :cover_img
      t.boolean :read
      t.integer :user_id

      t.timestamps
    end
  end
end
