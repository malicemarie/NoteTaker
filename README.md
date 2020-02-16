# Unit 11 Express Homework: Note Taker

## Note Taker Web Application

[Note Taker](https://malicemarie.github.io/NoteTaker/)

I have created a web application that allows you to create new notes, save, review saved notes & delete notes.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## HTML Routes

- /notes for adding new notes to the library
- / home page to display in order to get into the note library

## API Routes

- Using a db.json file as the Database for this application

- GET /api/notes reads the database file and displays all the notes in the library
- POST /api/notes will recieve the new note and write it to the database.
- DELETE /api/notes/:id will delete a note based on the id that is assigned when the note is saved.

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## MVP

User can add a new note to the note library, User can view previously saved notes, User can delete previously saved notes.

# User Instructions

1. Visit the link at the top of this Readme.
2. Click Get started
3. Add a title for your note, & type a note body.
4. Click the save icon in the top right corner.
5. To Delete click on the Red trash can icon to the right of your note.
6. To view previously saved notes click on the title of the note.
