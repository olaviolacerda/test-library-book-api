# Library Book API
> An API for managing users and books. (https://library-book-api-olavio.herokuapp.com/)
> Docs Collection. (https://github.com/olaviolacerda/library-book-api/blob/master/insomnia_collection.json)

## Technologies
* NodeJS - version 10.17.0
* npm - version 6.11.3
* Docker - version 18.09.7
* Sequelize - version 5.21.2

## Routes

##### Session

| method | resource | description                            |
|--------|----------|----------------------------------------|
| POST   | `/login` | Generate a Bearer Token to use the api |

##### Users

| method | resource | description                     |
|--------|----------|---------------------------------|
| POST   | `/users` | Create an user                  |
| GET    | `/users` | List all users                  |
| GET    | `/users/:userId` | Show infos about an user        |
| POST   | `/users/:userId/favourites` | Add a book on user favourites   |
| DELETE | `/users/:userId` | Delete an user                  |
| PUT    | `/users/:userId` | Edit user                       |
| GET    | `/users/:userId` | List favourite books of an user |

##### Books

| method | resource | description                     |
|--------|----------|---------------------------------|
| POST   | `/books` | Create a book                  |
| GET    | `/books` | List all books                  |
| GET    | `/books/:bookId` | Show infos about a book        |
| DELETE | `/books/:bookId` | Delete an book                  |
| PUT    | `/books/:bookId` | Edit book                       |

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

