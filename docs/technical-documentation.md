
# Technical Documentation

## Overview
This project is an advanced portfolio website developed for Assignment 3. It builds on the earlier portfolio assignments and adds more advanced functionality, including API integration, state management, and improved logic.

## Main Features
- GitHub API integration to display live repositories
- Project filtering by category
- Project sorting by title or date
- Project search functionality
- Dark/light mode toggle with localStorage
- Visitor name persistence using localStorage
- Contact form validation
- Responsive design

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- GitHub REST API

## File Responsibilities
- `index.html`: page structure and content
- `css/styles.css`: all styling and responsive layout
- `js/script.js`: logic, API calls, localStorage handling, validation, and interactivity

## API Integration
The project uses the GitHub REST API:
- Endpoint: `https://api.github.com/users/DanahAlalwan/repos`

The API is used to fetch public repositories and display:
- repository name
- description
- programming language
- link to GitHub repository

If the API request fails, the application shows a user-friendly error message.

## Complex Logic
The project combines multiple conditions in the projects section:
- filter by category
- sort by title or date
- search by keyword

This creates a more advanced interactive experience compared to simple one-click actions.

## State Management
The website uses `localStorage` for:
- saving the selected theme
- saving the visitor name

This allows the app to remember user choices between visits.

## Performance Improvements
The following performance improvements were considered:
- clean and reusable CSS/JS
- no unnecessary libraries
- responsive layout
- simple lightweight design
- ability to add lazy loading for future images

## Challenges
Some challenges included:
- combining filtering, sorting, and searching in one function
- handling API errors properly
- keeping the project simple while still meeting all assignment requirements

## Future Improvements
Possible future upgrades:
- add more project cards dynamically
- deploy the project online
- add loading animations
- connect the contact form to a backend service