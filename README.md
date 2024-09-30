

# Todo App (Using Bun & Vite)

This Todo application is built using **Bun** as the runtime and **Vite** as the build tool. The application provides a simple and interactive interface where users can add, edit, mark as complete, and delete tasks. The standout feature of this app is that it does **not use any backend** or external database to store data. Instead, all task data is persisted locally using **localStorage**. This ensures that the tasks remain saved even if the page is refreshed or the browser is closed and reopened.

## Key Features:
- **Add New Tasks**: Users can input new tasks into the list. If a task is already added or the input is empty, the app intelligently prevents duplicate or invalid entries.
- **Mark Tasks as Complete**: A checkmark button allows users to toggle the completion state of each task. Completed tasks are visually distinguished from incomplete ones.
- **Delete Single Tasks**: Each task comes with a delete button, enabling the removal of individual tasks from the list.
- **Clear All Tasks**: The "All Clear" button allows users to wipe out the entire task list with a single click.
- **Persistent Data Storage**: The app uses the browser's `localStorage` to store the tasks. This means the tasks will persist even after the browser is refreshed or closed.

## Technology Stack:
- **Bun**: Bun is used as the JavaScript runtime, offering fast and efficient performance.
- **Vite**: Vite serves as the frontend build tool, ensuring fast development and optimized production builds.
- **React**: The frontend is built with React to provide a component-based architecture and smooth user interface.
- **localStorage**: Instead of relying on a server-side database, the app leverages `localStorage` for task persistence.

## How It Works:
1. When a user adds a new task, it is saved in the browser's `localStorage` and rendered on the screen.
2. If the page is refreshed or reopened later, the tasks stored in `localStorage` will be automatically loaded and displayed.

---


This description should effectively highlight the core features and technologies of your Todo app! You can adjust any parts as needed.
