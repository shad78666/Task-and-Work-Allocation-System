# Product Requirements Document (PRD)

## Project Title
Task Work Allocation System

---

# 1. Project Overview

The Task Work Allocation System is a web-based application designed to help managers or administrators assign, monitor, and manage tasks given to employees.

The system allows:
- Admin/manager login
- Employee task assignment
- Task status tracking
- Employee work monitoring
- Task completion updates
- Basic dashboard management

This project is being developed using:
- HTML
- CSS
- JavaScript

The main goal of this project is to practice frontend web development while building a useful real-world management system.

---

# 2. Problem Statement

In many small teams or organizations, task management is often done manually through chats, calls, or spreadsheets, which makes tracking difficult.

Problems include:
- No proper task tracking
- Difficulty checking employee progress
- Missing deadlines
- Poor task organization
- No centralized work management system

This project solves these issues by creating a centralized platform where tasks can be assigned and monitored easily.

---

# 3. Objectives

### Primary Objectives
- Create a task allocation website
- Allow admin to assign tasks to employees
- Track task progress
- Show completed and pending work
- Improve task organization

### Secondary Objectives
- Practice frontend development
- Improve JavaScript logic building
- Learn DOM manipulation
- Learn local storage handling

---

# 4. Target Users

## Admin / Manager
Can:
- Login
- Add employees
- Assign tasks
- Update task details
- Monitor employee work

## Employee
Can:
- Login
- View assigned tasks
- Update task status
- Mark tasks as completed

---

# 5. Features

## 5.1 Authentication System
### Description
Simple login system for Admin and Employees. A default Admin account will be provided.

### Functionalities
- Username/password login
- Role-based routing (Admin vs Employee)
- Basic validation
- Logout functionality

---

## 5.2 Dashboard

### Description
Main control panel after login.

### Functionalities
- Total tasks count
- Completed tasks
- Pending tasks
- Employee count

---

## 5.3 Employee Management

### Description
Manage employee records.

### Functionalities
- Add employee
- Delete employee
- View employee list

### Employee Details
- Employee ID
- Name
- Department
- Email

---

## 5.4 Task Management

### Description
Assign and manage tasks.

### Functionalities
- Create task
- Assign task to employee
- Set deadline
- Set priority
- Edit task
- Delete task

### Task Details
- Task ID
- Task title
- Description
- Assigned employee
- Deadline
- Status
- Priority

---

## 5.5 Task Status Tracking

### Description
Track progress of each task.

### Status Types
- Pending
- In Progress
- Completed

---

## 5.6 Search and Filter

### Functionalities
- Search employee
- Search tasks
- Filter by status
- Filter by employee

---

## 5.7 Local Storage Support

### Description
Store data using browser localStorage.

### Stored Data
- Employee records
- Task details
- Login session

---

# 6. Functional Requirements

| ID | Requirement |
|----|-------------|
| FR-1 | User should be able to login |
| FR-2 | Admin should add employees |
| FR-3 | Admin should assign tasks |
| FR-4 | Employee should view assigned tasks |
| FR-5 | User should update task status |
| FR-6 | System should save data in localStorage |
| FR-7 | Dashboard should display statistics |

---

# 7. Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| Performance | Website should load quickly |
| Usability | Simple and clean UI |
| Security | Basic password protection |
| Compatibility | Works on modern browsers |
| Responsiveness | Mobile-friendly design |

---

# 8. Technology Stack

## Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Storage
- Browser Local Storage

## Development Tool
- Visual Studio Code

---

# 9. System Flow

1. User opens website
2. Login page appears
3. Admin logs in
4. Dashboard opens
5. Admin adds employees
6. Admin assigns tasks
7. Employees view tasks
8. Employees update task status
9. Dashboard updates statistics

---

# 10. UI Pages

## 10.1 Login Page
Contains:
- Username input
- Password input
- Login button

---

## 10.2 Admin Dashboard Page
Contains:
- Statistics cards
- Navigation menu
- Recent tasks

---

## 10.2b Employee Dashboard Page
Contains:
- Assigned tasks list
- Navigation menu
- Status update buttons

---

## 10.3 Employee Page
Contains:
- Employee list
- Add employee form

---

## 10.4 Task Page
Contains:
- Task table
- Task creation form
- Status update buttons

---

# 11. Future Improvements

Future versions may include:
- Database integration (MySQL/MongoDB)
- Backend using Node.js or PHP
- Real authentication system
- Email notifications
- File upload support
- Role-based access
- Dark mode
- Charts and analytics

---

# 12. Challenges Expected

- Managing dynamic task data
- DOM manipulation
- Handling localStorage correctly
- Creating responsive layouts
- Writing reusable JavaScript code

---

# 13. Success Criteria

Project will be successful if:
- Admin can assign tasks successfully
- Employees can track work
- Data is stored properly
- Dashboard updates correctly
- UI is clean and responsive

---

# 14. Conclusion

The Task Work Allocation System is a beginner-friendly web development project that helps improve frontend development skills while solving a practical management problem.

The project focuses on:
- Task organization
- Employee monitoring
- Frontend logic building
- Real-world project structure

This project will help strengthen understanding of:
- HTML structure
- CSS styling
- JavaScript functionality
- Local storage
- CRUD operations

---