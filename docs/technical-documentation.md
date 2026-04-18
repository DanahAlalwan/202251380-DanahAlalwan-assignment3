# Technical Documentation

## Overview
This project is an advanced portfolio website developed for Assignment 3.  
It builds on the earlier portfolio assignments by adding external API integration, more advanced JavaScript logic, state management, and better documentation.

The project was designed to remain simple, lightweight, and user-friendly while still meeting the required assignment features.

## Main Features
- GitHub API integration to display live public repositories
- Project filtering by category
- Project sorting by title and date
- Project search functionality
- Dark/light mode toggle
- Visitor name storage and display
- Contact form validation
- Responsive layout for different screen sizes

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- GitHub REST API

## File Responsibilities

### `index.html`
Contains the structure of the website, including:
- navigation bar
- hero section
- about section
- projects section
- GitHub repositories section
- visitor greeting section
- contact form
- footer

### `css/styles.css`
Contains:
- page styling
- color variables
- dark mode design
- responsive layout rules
- card layout and section styling

### `js/script.js`
Contains all interactive logic, including:
- dark mode toggle and storage
- project filtering, sorting, and search
- GitHub API fetching
- visitor name saving and clearing
- contact form validation

## API Integration
This project uses the GitHub REST API to fetch public repositories dynamically.

**Endpoint used:**
```text
https://api.github.com/users/DanahAlalwan/repos