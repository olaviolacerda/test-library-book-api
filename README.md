# Library Book API
> An API for managing users and books. (https://library-book-api-olavio.herokuapp.com/)

## Technologies
* NodeJS - version 10.17.0
* npm - version 6.11.3
* Docker - version 18.09.7
* Sequelize - version 5.21.2

## Setup

First of all, run `npm install` or `yarn` to install all the node dependencies.

##### Docker way
Execute the docker compose file, with the following command `docker-compose up -d`. This command will create a docker container with an image containing a Postgres database named `library` with credentials as `postgres` for user and password.

*for this, you'll need to have Docker on your machine.

##### Postgres way
Just create a database named `library` or chose one database name and change the `.env` file.

Then, run the following command `npm run dabase:prepare`. This command will start the database, creating the tables, migrations and seeding some data.

Now you're ready to start, run `npm run dev`.

### Environment variables

```text
# Server Port
PORT=3000

# Database Info
DB_PORT=5432
DB_HOST=localhost
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=library_book
DB_DIALECT=postgres

# Secret Key for encrypting passwords
SECRET_KEY=library_book_api

## Features
List of features ready
* CRUD of Users
* CRUD of Books
* Authentication
* List of Favourites Books to Users

