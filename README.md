# BSW Rails/Webpack 6 Talk code

Uses latest version of Ruby (2.6.x) and Rails 6.

You'll need to also install a local MongoDB (via brew recommended)

Run mongod and then use following command to seed your db...
  mongoimport --db bsw_demo_development --collection posts --drop --file posts.json

Then install gems with
  bundle install

You'll then need to install all yarn mods with
  yarn install

To run the app that is accessible via http://localhost:3000, do a
  rails s

And then in another command window do a 
  bin/webpack-dev-server
