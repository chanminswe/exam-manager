# Exam Management System

A full-stack web application designed for schools and institutions to manage exams, users, and results efficiently. The application features two user roles: **Admins (Teachers)** and **Students**, each with specific functionality.

---

## Features

### Admin Features
- **Login & Authentication**: Secure admin login with session-based cookies.
- **Exam Management**: Create, edit, and delete exams and questions.
- **Result Viewing**: View the results of specific exams for all students.
- **User Management**:
  - View student profiles.
  - Delete or manage user accounts.


### Student Features
- **Login & Authentication**: Secure student login with session-based cookies.
- **Exam Participation**: Can Answer all available exams and review all the exams that they have answered.
- **Result Review**: View results, including which answers were correct.

---

## Technologies Used

### Frontend
- **React**: For building a responsive and interactive user interface.
- **React Router**: For navigation between pages.
- **Axios**: For API requests.
- **Tailwind CSS**: For styling the application.
- **React Toastify**: For notifications and feedback.

### Backend
- **Node.js**: For the server-side environment.
- **Express.js**: For handling API routes and middleware.
- **Cookie-Parser**: For handling session cookies securely.
- **MongoDB**: For database storage and relationships.

---

## Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) set up locally or using a cloud service like MongoDB Atlas.

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
