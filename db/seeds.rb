# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Test User seeds
User.create(first_name: 'Logan', last_name: 'Lampton', email: 'lampton.logan@gmail.com', password: 'logan123')
User.create(first_name: 'Blake', last_name: 'Lampton', email: 'bslampton@gmail.com', password: 'blake123')
User.create(first_name: 'Emily', last_name: 'Waggoner', email: 'emily.waggoner@gmail.com', password: 'emily123')

# Test Costume seeds
Costume.create(name: 'Deluxe Marvel Avengers Endgame Men\'s Thor Costume', price: 99.99, description: 'If you want to transform into the Asgardian hero, then look no further! This Avengers: Endgame Thor Costume is a deluxe costume from the Marvel Cinematic Universe and it\'s the best way to dress like your favorite superhero. The costume comes with a full jumpsuit that has printed details to recreate Thor\'s armor. It also has a muscle padded chest and arms to help give you a true Asgardian physique. The legs feature boot covers, which allow you to wear your favorite pair of shoes with the outfit and the bright red cape puts the finishing touch to the whole look!', image: 'https://images.halloweencostumes.com/products/57743/1-2/deluxe-avengers-endgame-mens-thor-costume.jpg', link: 'https://www.halloweencostumes.com/avengers-endgame-adult-thor-deluxe-costume.html')
Costume.create(name: 'Star Wars I Am R2D2 Skater Dress Costume for Women', price: 59.99, description: 'We would trade our normal human skin for the ports and hatches of R2D2’s cheerful metallic exterior in a heartbeat, but we have to imagine that it might be a painful transformation. And droid parts can be so expensive! So for now, we’re kind of stuck in the body we’ve got. But at least there are less invasive options, like this awesome I am R2D2 Skater Dress!', image: 'https://images.halloweencostumes.com/products/33453/1-2/womens-star-wars-i-am-r2d2-dress-costume-update.jpg', link: 'https://www.halloweencostumes.com/i-am-r2d2-womens-skater-dress.html')
Costume.create(name: 'Men\'s Hulk Hogan Costume', price: 69.99, description: 'Finding your persona is key to being a great WWE star, but don’t worry! We have you covered with this Men\'s Hulk Hogan WWE Costume. This “Made By Us” costume was put together by our hard working and careful artisans, so you will feel good about wearing this for years to come. The polyester and spandex sleeveless pullover top has plenty of room for your bulging pecs and biceps, and the “Hulkamania” printed on the front makes it impossible to misidentify you as a bottle of mustard! The faux leather belt has “Hulkamania” on the back as well, so you will be easy to identify as you pull off all those awesome moves you’ve been working on. Just make sure you have a soft mat when you show them off!', image: 'https://images.halloweencostumes.com/products/34254/1-2/mens-wwe-hulk-hogan-costume.jpg', link: 'https://www.halloweencostumes.com/mens-hulk-hogan-costume.html')


# Test Review seeds
Review.create(rating: 4, written_review: 'This is pretty cool', user_id: 1, costume_id: 1)
Review.create(rating: 3, written_review: 'meh', user_id: 1, costume_id: 2)
Review.create(rating: 5, written_review: 'Awesome look!', user_id: 2, costume_id: 2)
Review.create(rating: 4, written_review: 'Looks just like the picture', user_id: 2, costume_id: 3)
Review.create(rating: 5, written_review: 'This is my jam', user_id: 3, costume_id: 3)
Review.create(rating: 1, written_review: 'Literally ruined my childhood', user_id: 3, costume_id: 1)