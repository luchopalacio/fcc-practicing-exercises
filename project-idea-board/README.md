# Exercise: Build a project idea board

This exercise implements a simple idea management system using JavaScript classes.
It allows creating project ideas with a title, description, and status, and managing them inside a board where ideas can be pinned, unpinned, counted, and formatted as a readable string.

## Usage example
```js
// Create a new board
const board = new ProjectIdeaBoard("My Project Board");

// Create project ideas
const idea1 = new ProjectIdea(
  "Portfolio Website",
  "Personal website to showcase my projects"
);

const idea2 = new ProjectIdea(
  "Task Manager App",
  "A simple app to manage daily tasks"
);

// Update project status
idea2.updateProjectStatus(projectStatus.SUCCESS);

// Pin ideas to the board
board.pin(idea1);
board.pin(idea2);

// Display board information
console.log(board.formatToString());

// Output:

/*
My Project Board has 2 idea(s)
Portfolio Website (Pending Execution) - Personal website to showcase my projects
Task Manager App (Executed Successfully) - A simple app to manage daily tasks
*/