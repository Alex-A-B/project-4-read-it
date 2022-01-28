# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "📃 Seeding data..."

5.times do
    user = User.create(
        username: Faker::Ancient.unique.hero.downcase.gsub(/\W/, '_')
    )

    rand(6..12).times do
        book = Book.create(
            title: Faker::Book.title,
            author: Faker::Book.author,
            cover_img: Faker::LoremFlickr.image(size: "150x160", search_terms: ['book', 'covers']),
            read: Faker::Boolean.boolean(true_ratio: 0.2),
            user_id: user.id
        )
    end

end



puts "✅ done seeding!"