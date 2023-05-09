# Yelp-Business-Search
Supplyframe Challenge Project

## Environment setup

You need to have [Go](https://golang.org/),
[Node.js](https://nodejs.org/),
[Docker](https://www.docker.com/), and
[Docker Compose](https://docs.docker.com/compose/)
(comes pre-installed with Docker on Mac and Windows)
installed on your computer.

Verify the tools by running the following commands:

```sh
go version
npm --version
docker --version
docker-compose --version
```

If you are using Windows you will also need
[gcc](https://gcc.gnu.org/). It comes installed
on Mac and almost all Linux distributions.

## Start in development mode

In the project directory run the command (you might
need to prepend it with `sudo` depending on your setup):

```sh
docker-compose -f docker-compose-dev.yml up
```

This starts a local MongoDB on `localhost:27017`.
The database will be populated with test records
from the [init-db.js](init-db.js) file.

Navigate to the `server` folder and start the back end:

```sh
cd server
go run server.go
```

The back end will serve on http://localhost:8080.

Before running the front end, make sure you have pnpm installed globally:

```sh
npm install -g pnpm
```

Navigate to the `webapp` folder, install dependencies,
and start the front end development server by running:

```sh
cd webapp
pnpm install
pnpm dev
```

The application will be available on http://localhost:5173.

## Start in production mode

Perform:

```sh
docker-compose up
```

This will build the application and start it together with
its database. Access the application on http://localhost:8080.

## Developer Software

<ol>
  <li>Compass: https://www.mongodb.com/products/compass</li>
  <li>Docker: https://www.docker.com/</li>
  <li>Go VScode Ext: https://zhuanlan.zhihu.com/p/320343679</li>
  <li>Postman: https://www.postman.com/</li>
</ol>

## Go Unit Test

<ol>

<li>Write test functions in files with the _test.go suffix. The test functions should be in the same package as the code they are testing.
In your test functions, use the testing package</li>

<li>In your test functions, use the testing package, specifically the *testing.T type, which provides methods to report test failures and log output.</li>

<li>To run the tests, open a terminal/command prompt and navigate to the directory containing your Go source files and test files.</li>

<li> Execute the go test command. This command will automatically discover and run all tests in the package  </li>

</ol>

<img width="449" alt="image" src="https://user-images.githubusercontent.com/130128436/233834455-475e8ea8-5e00-4de0-9bb0-282c6dc38db2.png">

