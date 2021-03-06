# API REST base code to start building an API REST

## How to deploy db

Create a Postgresql database named **bookworm**.

Install **[Sqitch](https://sqitch.org/)**

For Debian

```cmd
sudo apt-get install sqitch libdbd-pg-perl postgresql-client libdbd-sqlite3-perl sqlite3
```

Create a `sqitch.conf` file in the root folder (copy paste `sqitch.conf.example`)

In terminal (in root)

```cmd
sqitch deploy
```

Then

```cmd
sqitch verify
```

Finally, run the seeding script (in root)

```cmd
psql -U spedata -d bookworm -f docs/seeding_bookworm.sql
```

## How to run

Install all the dependencies

```cmd
npm install
```

Create a `.env` file in the root (check `.env.example`)

Run dev script

```cmd
npm run dev
```

## What is this for?

Propose the base of an app architecture for an API REST with CRUD (Create, Read, Update, Delete) routes.

This app implements various strong and usefull tools to help :

- Back developer to build the API
- Front deveoper to use the API

## For the back developer

### Clean code

To keep clean and beautiful code, this app propose some NPMs (Node Package Module) in dev dependencies

- **[ESLlint](https://eslint.org/)** file that extends the airbnb config which is one of the most popular
- **[Prettier](https://prettier.io/)** file to formate the code
- **[EditorConfig](https://editorconfig.org/)** file to help to maintain consistent coding rules across various IDE (integrated development environment)

### Logs and debug

To have better logs in console and keep some logs saved in log files

- **[debug](https://www.npmjs.com/package/debug)** provides better console logs and allow to toggle the logs for differents parts of the modules
- **[bunyan](https://www.npmjs.com/package/bunyan)** allow to save some logs in JSON

### Validate data sent

To validate the data format

- **[joi](https://www.npmjs.com/package/joi)** allow to describe data in schemas, and validate the compliance of the data sent.

### Handle async/await

### Handle error

### Migrations folder

### SQL scripts

2 SQL scripts are provided to create an example database which works with this base app

- `create_tables_example.sql` for the DDL (Data Definition Language)
- `seeding_example.sql` for the DML (Data Manipulation Language)

## For the front developer

### Home

pug homepage with link to doc

### Documentation using the OpenAPI Specification

