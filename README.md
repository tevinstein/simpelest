# simpelest

simpelest is a simple to-do list app that lets you do CRUD operations of your to-do lists.

##### This is Tevinstein's submission for a Hacktiv8 portfolio project with
- Node.js v6+
- Express
- MongoDB
- JQuery and Ajax
- JQuery UI

## Installation
- Clone the repo: `git clone https://github.com/tevinstein/simpelest.git`
- Install packages: `npm install`
- Start the server: `node server.js`
- Preview the html file in your browser **views** > **index.html** or run live-server if you have it installed `live-server`

## Restful API
| URL       | Method | Description     |
|-----------|--------|-----------------|
| /item     | GET    | Shows all items |
| /item     | POST   | Creates a item  |
| /item/:id | GET    | Shows a item    |
| /item/:id | DELETE | Deletes a item  |
| /item/:id | PUT    | Updates a item  |

## Screenshots

![simpelest](http://i.imgur.com/KgxUDUP.png "simpelest")