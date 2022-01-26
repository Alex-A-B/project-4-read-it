# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "📃 Seeding data..."

50.times do
    book = Book.create(
        title: Faker::Book.unique.title,
        author: Faker::Book.author,
        cover_img: Faker::LoremFlickr.image(size: "150x160", search_terms: ['book', 'covers'])
    )
end

5.times do
    user = User.create(username: Faker::Ancient.hero.downcase.gsub(/\W/, '_'))

    rand(3..8).times do
        user.users_books.create(
            book_id: rand(1..50),
            read: Faker::Boolean.boolean(true_ratio: 0.2)
        )
    end
end


puts "✅ done seeding!"