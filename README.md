# Dev Stack Builder

Dev Stack Builder is a React website where users can explore different web development technologies and create their own technology stack.

## Technologies Used

- React
- JavaScript
- CSS
- JSON
- React Toastify
- Vite

## Features

1. Users can explore different technologies.
2. Users can add technologies to their own stack.
3. Users can remove individual technologies or remove all technologies.

## React Questions

### 1. What is JSX, and why is it used?

JSX is a syntax used in React to write HTML-like code inside JavaScript. It makes React components easier to write and understand.

### 2. What is the difference between Props and State?

Props are used to pass data from a parent component to a child component. State is used to store data that can change inside a component.

### 3. What is useState?

useState is a React Hook used to create and manage state in a component. In this project, it is used for technologies, stack, and loading state.

### 4. What is useEffect?

useEffect is a React Hook that runs side effects in a component. Here it is used to load technology data from the JSON file when the page loads.

### 5. Why is a unique key important when rendering a list?

A unique key helps React identify each item in a list and update the correct item when the list changes.

### 6. What is conditional rendering?

Conditional rendering means showing different content depending on a condition. For example, this project shows an empty message when the stack has no technology.

### 7. How can you pass data from a parent component to a child component?

Data can be passed from a parent to a child using props. A callback function can also be passed as a prop so the child can send information back to the parent.