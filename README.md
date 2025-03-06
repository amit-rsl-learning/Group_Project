# GitHub Repository Viewer - Routes and Pages

This is a basic structure for your GitHub Repository Viewer app with different pages and their respective functionalities.

---

## Routes Overview

### 1. **Home Page (`/`)**

- **Content**:
    - Welcome message and description of the app.
    - Input field to enter the repository name (e.g., `emberjs/ember.js`).
    - A button to load the repository.
    - Optionally, a list of popular repositories (optional).
- **Purpose**: The entry point where users can start searching for a repository.

---

### 2. **Profile Page (`/users/:user_id`)**

- **Content**:
    - **User Info**: Display the user’s profile information, such as username, bio, avatar, and other profile details.
    - **Repositories List**: Show a list of repositories that the user has.
    - **Search/Filter Repos**: A search bar to filter and search through the user's repositories.
- **Purpose**: To view a user's profile and a list of their repositories with search functionality.

---

### 3. **Repository Info Page (`/repos/:repo_id`)**

- **Content**:
    - **Repository Info**: Display detailed information about the repository (name, description, owner, etc.).
    - **Repository URL**: Provide a direct link to the GitHub repository.
- **Purpose**: To show detailed information about a specific repository when clicked on.

---

### 4. **Commits Page (`/repos/:repo_id/commits`)**

- **Content**:
    - **Commit List**: Display a list of commits for the selected repository.
    - **Commit Details**: For each commit, show the commit hash, author, date, and message.
- **Purpose**: To list all the commits in a repository with details about each commit.

---

## Example Flow

1. **Home Page**: User visits `/`, enters a repository name, and starts the search.
2. **Profile Page**: User clicks on a user, and the app navigates to `/users/:user_id`, where they can see a list of the user's repositories and filter them.
3. **Repository Info Page**: Clicking on a repository from the profile page or repository search will take the user to `/repos/:repo_id`, where repository information is shown.
4. **Commits Page**: If the user wants to see commits for a specific repository, they navigate to `/repos/:repo_id/commits`, where the commit history is displayed.

---

## Structure Summary

- **Home Page (`/`)**: Entry point to search and start exploring repositories.
- **Profile Page (`/users/:user_id`)**: View a user's profile and their repositories with filter/search functionality.
- **Repository Info Page (`/repos/:repo_id`)**: Display detailed information about a selected repository.
- **Commits Page (`/repos/:repo_id/commits`)**: List all commits for a given repository.

This structure provides an organized way for users to explore GitHub repositories and related information, like commits, repositories, and user profiles.
