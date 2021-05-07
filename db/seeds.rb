# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Console.create([
                 { name: 'Xbox',
                   console_img: 'dummy url' },
                 { name: 'Xbox 360',
                   console_img: 'dummy url2' },
                 { name: 'Xbox One',
                   console_img: 'dummy url3' },
                 { name: 'PS5',
                   console_img: 'dummy url4' }
               ])

Game.create([{
              title: 'dummy title1',
              cover_img: 'dummy cover 1'
            },
             {
               title: 'dummy title2',
               cover_img: 'dummy cover 2'
             },
             {
               title: 'dummy title3',
               cover_img: 'dummy cover 3'
             },
             {
               title: 'dummy title4',
               cover_img: 'dummy cover 4'
             },
             {
               title: 'dummy title5',
               cover_img: 'dummy cover 5'
             },
             {
               title: 'dummy title6',
               cover_img: 'dummy cover 6'
             },
             {
               title: 'dummy title7',
               cover_img: 'dummy cover 7'
             },
             {
               title: 'dummy title8',
               cover_img: 'dummy cover 8'
             },
             {
               title: 'dummy title9',
               cover_img: 'dummy cover 9'
             }])
