# API
Action            | Request Type  |   Path          | Body          | Required columns
----------------- | ------------- | ----------------| ------------- | -----------------
Get tasks         |      GET      |      /tasks     |       -       | 
Create new task   |      POST     |      /tasks     | New Task      | text, status, number, list_id
Update task       |   PUT/PATCH   | /tasks/status/id| Updated Task  | text, status, number, list_id
Update number     |   PUT/PATCH   | /tasks/number/id| Updated Number|
Get list by id    |      GET      |      /lists     |       -       |
Get all lists     |      POST     |      /lists     |       -       | Name

# Launching
node app.js
