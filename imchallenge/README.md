# Challenge

## Objective

Create a webpage that manages a home movie collection.

## User Stories

[ ] Use in latest version of Chrome

* I assume any app will be able to run in latest version of Chrome

Research just in case

[ ] As a user, I want to be able to enter new movies

* Looking at creating a button that opens up a form

[ ] As a user, I want to be able to search existing movies by an arbitrary field

* an input that allows user to search by any string

[ ] As a user I want to be able to see a list of all my movies

* A View All button that displays all movies alphabetically
* Bonus, using lodash, could display grouped by genre, actors, title, year, rating

[ ] As a user, I want to be able to either DEL or UPDATE a movie

* Add endpoints

[ ] As a user, I want to record the following movie info:

* Genre
* Actors
* Title
* Year
* Rating

## Technical Requirements

[ ] The page MUST be a single page application (though may have multiple routes and templates).

[X] You MUST use JQuery, AngularJS, or ReactJS - pick one and be prepared to defend your decision

[X] You MUST use git for version control.

* Bonus points:

      	- App is constructed using the MVC architectural pattern

  * lodash.js or underscore.js
  * bootstrap.css or equivalent
  * use Local Storage to persist the data
  * One-way dataflow using a stream library like BaconJS or RxJS

You MAY use other publicly available JS components (please document separately any libraries or frameworks that you choose to use other than the ones listed here).

## MVC

MODEL

* Genre: String
* Actors: String
* Title: String
* Year: String
* Rating: Number
* AJAX Calls, API EndPoints
  * POST
  * PUT
  * DEL
* Request URL: https://api.backendless.com/{appId}/{restAPIid}/data/movie
  * App ID = 50D208EC-1FD9-F348-FF81-3FC50E86B900
  * REST API ID = 5D23E39B-B538-CC24-FF32-A4559F913A00
* Add New Movie Button: Function
* Search Movies Input: takes a string
* Search Movies Button: Function

VIEW

* Main Page View
  * Add New Movie Button
  * Movie Detail Form with Submit
  * Search Movies Input
  * Search Movies Button
  * Movie List Item
    * Title, Year, Genre, Rating, Actors
    * Edit Button
    * Delete Button

CONTROLLER

* When user clicks Add New Movie, a movie detail form is displayed
* When user clicks Submit on form, (1) movie detail data is sent to db
  * (2) a success message is displayed, (3) page renders with new list item
* When user adds a string to search input, then clicks search button, only list
  * items with matching string will be displayed

ACTIONS/REDUCERS

* Load List (READ)
* Submit Movie (POST)
* Delete Movie (DELETE)
* Update Movie (PUT)
