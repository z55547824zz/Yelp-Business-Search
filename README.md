# Yelp-Business-Search
Supplyframe Challenge Project
Web app using Nodejs, Expressjs, EJS, Bootstrap, jQuery, Jest as well as Yelp Fusion API and Ipinfo API.

## Features

- Search business on the Yelp with customized Keyword, Distance, Category, Location with Yelp Fusion API
- Auto-detect location function with IPinfo API
- Achieve the detail information of the chosen business you interested.
- Optimized for both Desktop and Mobile platform with Bootstrap
- Use pagination to move through sets of results

## Environment setup

You need to have [Node.js](https://nodejs.org/) installed on your computer.

Verify the tools by running the following command:

```sh
npm --version
```

Clone Repo

```sh
git clone https://github.com/z55547824zz/Yelp-Business-Search.git
```

Npm install dependencies

```sh
cd Yelp-Business-Search
npm install
```

Start Server

```sh
node server.js
```

## Usage

1. Heading to the Home Page with url: http://127.0.0.1:3000/
<img width="1000" alt="image" src="https://z55547824zz.github.io/mess/Home_Page.png">

2. Input the required information for the target businesses
<img width="1000" alt="image" src="https://z55547824zz.github.io/mess/Home_Page1.png">

3. If th input information is valid and there are results returned, search results will be displayed in a list with pagination
<img width="1000" alt="image" src="https://z55547824zz.github.io/mess/Business_List.png">

Otherwise there will be a prompt of notice showing the sample of valid input
<img width="1000" alt="image" src="https://z55547824zz.github.io/mess/Business_List1.png">

4. Click the row of the business you may interested, then the detail of that business will be shown 
<img width="1000" alt="image" src="https://z55547824zz.github.io/mess/Business_Detail.png">




## Jest Unit Test

Start Server

```sh
node server.js
```

Run Jest Test

```sh
npm test
```

<img width="600" alt="image" src="https://z55547824zz.github.io/mess/jest_test.png">

