# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Consoles.destroy_all

Games.destroy_all

Console.create([
                 { name: 'Xbox',
                   console_img: 'dummy url' },
                 { name: 'Xbox 360',
                   console_img: 'dummy url2' },
                 { name: 'Xbox One',
                   console_img: 'dummy url3' },
                 { name: 'PS1',
                   console_img: 'dummy url4' },
                 { name: 'PS2',
                   console_img: 'dummy url' },
                 { name: 'PS3',
                   console_img: 'dummy url2' },
                 { name: 'PS4',
                   console_img: 'dummy url3' },
                 { name: 'PS5',
                   console_img: 'dummy url4' },
                 { name: 'PC',
                   console_img: 'dummy url' },
                 { name: 'Atari 2600',
                   console_img: 'dummy url2' },
                 { name: 'N64',
                   console_img: 'dummy url3' },
                 { name: 'SNES',
                   console_img: 'dummy url4' },
                 { name: 'NES',
                   console_img: 'dummy url' },
                 { name: 'Switch',
                   console_img: 'dummy url2' },
                 { name: 'NDS',
                   console_img: 'dummy url3' },
                 { name: 'GameBoy',
                   console_img: 'dummy url4' },
                 { name: 'GameBoy Colour',
                   console_img: 'dummy url' },
                 { name: 'GameBoy Advance',
                   console_img: 'dummy url2' },
                 { name: 'Sega Genesis',
                   console_img: 'dummy url3' },
                 { name: 'Sega Master System',
                   console_img: 'dummy url4' },
                 { name: 'Sega Dreamcast',
                   console_img: 'dummy url' },
                 { name: 'Sega Saturn',
                   console_img: 'dummy url2' }

               ])

Game.create([
              {
                title: 'Half-Life 2 PC',
                cover_img: 'https://vgboxart.com/boxes/PC/33072-halflife-2.jpg',
                description: 'Half-Life 2 is a 2004 first-person shooter game developed and published by Valve. Like the original Half-Life (1998), it combines shooting, puzzles, and storytelling, and adds features such as vehicles and physics-based gameplay. Players control Gordon Freeman, who fights the alien Combine with allies including resistance fighter Alyx Vance, using weapons such as the object-manipulating gravity gun.'
              },
              {
                title: 'Journey',
                cover_img: 'https://vgboxart.com/boxes/PS4/74816-journey.jpg',
                description: "Journey is an indie adventure game co-developed by Thatgamecompany and Santa Monica Studio, published by Sony Computer Entertainment, and directed by Jenova Chen. It was released for the PlayStation 3 via PlayStation Network in March 2012 and ported to PlayStation 4 in July 2015. It was later ported to Microsoft Windows in June 2019 and iOS in August 2019.

               In Journey, the player controls a robed figure in a vast desert, traveling towards a mountain in the distance. Other players on the same journey can be discovered, and two players can meet and assist each other, but they cannot communicate via speech or text and cannot see each other's names until after the game's credits. The only form of communication between the two is a musical chime, which transforms dull pieces of cloth found throughout the levels into vibrant red, affecting the game world and allowing the player to progress through the levels. The developers sought to evoke in the player a sense of smallness and wonder and to forge an emotional connection between them and the anonymous players they meet along the way. The music, composed by Austin Wintory, dynamically responds to the player's actions, building a single theme to represent the game's emotional arc throughout the story."
              },
              {
                title: 'Halo: Master Chief Collection',
                cover_img: 'https://vgboxart.com/boxes/XboxOne/66794-halo-master-chief-collection.png',
                description: 'Halo: The Master Chief Collection is a compilation of first-person shooter video games in the Halo series, originally released in November 2014 for the Xbox One, and later on Microsoft Windows through 2019 and 2020. An enhanced version was released for the Xbox Series X|S in November 2020. The collection was developed by 343 Industries in partnership with other studios and was published by Xbox Game Studios. The collection includes Halo: Combat Evolved Anniversary, Halo 2: Anniversary, Halo 3, Halo 3: ODST, Halo: Reach, and Halo 4, which were originally released on earlier Xbox platforms. A living anthology of past Halo games, it continues to receive regular updates and new content as more games age-out of being commonly offered in the retail setting.'
              }
            ])
