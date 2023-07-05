# Reminder app

## Links

[Trello Board](https://trello.com/b/sju98YUZ/reminder-app])

## Client Setup

```sh
# Install client dependencies
(cd reminder-app && npm i)
```

## Run Client

```sh
(cd reminder-app && npm run dev)
```

## Server Setup

- Install MySQL: `brew install mysql`
- Start MySQL: `mysql.server start`
- Create DB:

```sh
mysql -u root <<EOF
CREATE DATABASE reminderapp;
CREATE USER 'reminder-server'@'localhost' IDENTIFIED WITH mysql_native_password BY 'remindme';
GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT ON reminderapp.* TO 'reminder-server'@'localhost';
FLUSH PRIVILEGES;
EOF
```

Create a `.env` file:

```sh
export PORT=8888
export MYSQL_HOST=127.0.0.1
export MYSQL_USER=reminder-server
export MYSQL_PASSWORD=remindme
export MYSQL_DB=reminderapp
```

Install server dependencies: `(cd server && npm i)`

## Run server

- Start MySQL: `mysql.server start`
- Import `.env` file: `source .env`
- Run MySQL migrations: `(cd server && node migration.js up)`
- Run server: `(cd server && npm run start:dev)`
