# Teams-Taiga Dashboard

Frontend dashboard built with **React** and **Chakra UI** to simulate Microsoft Teams messages, trigger backend automation, and visualize task creation in **Taiga**.

**Backend Repo:** [teams-taiga-integration (FastAPI backend)](https://github.com/UllasZ/teams-taiga-integration)

---

## Project Intent

This dashboard supports an integration that:

- Simulates **Microsoft Teams** developer messages.
- Automatically creates or updates tasks in **Taiga** using those messages.
- Enhances tasks using **Ollama's LLM** (e.g., LLaMA 3) for richer descriptions and subtasks.

---

## Components Overview

| Component | Description |
|----------|-------------|
| `MessageSimulator` | Input form to simulate a Teams message and send it to the backend. Uses Chakra UI + toast for feedback. |
| `TaskList`         | Displays current user stories and subtasks fetched from Taiga. |
| `Dashboard`        | Combines the simulator and task list in a responsive layout. |
| `api.js`           | Axios config for communicating with the FastAPI backend. |

---

## 🗂️ Project Structure
```
bash
teams-taiga-dashboard/
├── public/
├── src/
│ ├── components/
│ │ ├── Dashboard.jsx
│ │ ├── MessageSimulator.jsx
│ │ └── TaskList.jsx
│ ├── services/
│ │ └── api.js
│ ├── App.jsx
│ └── main.jsx
├── .gitignore
├── package.json
├── yarn.lock
└── README.md
```

---

## Installation (using Yarn)

### 1. Clone the repository

```bash
git clone https://github.com/UllasZ/teams-taiga-dashboard.git
cd teams-taiga-dashboard
```

```bash
yarn install
```
Visit: http://localhost:3004

## Backend Requirements
Ensure the backend FastAPI server is running on:

```
bash
http://localhost:8000 
```
Backend GitHub Repo: https://github.com/UllasZ/teams-taiga-integration.git

## Features
- Simulate Teams messages for task creation
- Chakra UI toast notifications for feedback
- View Taiga stories and subtasks
- LLM-enhanced task descriptions (via Ollama)
- Semantic deduplication using backend logic

## Tech Stack
- React
- Chakra UI
- Axios
- FastAPI (backend)
- Taiga API
- Ollama LLM

## Future Improvements
- Add OAuth (Microsoft & Taiga)
- Use Microsoft Graph API to fetch real Teams messages
- Real-time updates with WebSocket/Server-Sent Events
- Docker support for frontend
