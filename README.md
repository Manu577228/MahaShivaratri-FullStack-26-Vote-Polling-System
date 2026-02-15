# 🗳️ Vote Polling System  
### Full Stack Application | Angular 20 + Spring Boot + MySQL

A simple full-stack polling system that allows users to create polls, add options, and cast votes with real-time vote count updates.  
Built using Angular 20 for the frontend, Spring Boot for REST APIs, and MySQL for persistent storage.

---

## 🚀 Tech Stack

### Frontend
- Angular 20
- Standalone Components
- TypeScript
- HTTP Client (REST API Integration)

### Backend
- Spring Boot
- Spring Web (REST APIs)
- Spring Data JPA
- Maven

### Database
- MySQL

---

## 📂 Project Structure

```
Polling-App
│
├── backend
│   ├── controllers
│   ├── model
│   ├── repositories
│   ├── request
│   ├── services
│   └── VotingappApplication.java
│
├── frontend
│   └── src/app
│       ├── poll
│       ├── poll.model.ts
│       ├── poll.service.ts
│       ├── app.ts
│       ├── app.routes.ts
│       └── app.config.ts
```

---

## ✨ Features

- Create new polls
- Add multiple options
- Cast votes
- View real-time vote counts
- Clean layered backend architecture
- RESTful communication between frontend and backend

---

## 🏗️ Backend Architecture

Controller → Service → Repository → Database

- Controller handles HTTP requests
- Service contains business logic
- Repository communicates with MySQL
- Model represents database entities

---

## 🔄 Application Flow

1. User creates or selects a poll in Angular UI  
2. Angular sends HTTP request to Spring Boot API  
3. Service layer processes business logic  
4. Data is stored or retrieved from MySQL  
5. JSON response sent back to Angular  
6. UI updates dynamically with latest vote count  

---

## ⚙️ How to Run

### 🔹 Run Backend

```
cd backend
mvn spring-boot:run
```

Backend runs at:
```
http://localhost:8080
```

---

### 🔹 Run Frontend

```
cd frontend
npm install
ng serve
```

Frontend runs at:
```
http://localhost:4200
```

---

## 🗄️ Database Configuration

Update `application.properties` in backend:

```
spring.datasource.url=jdbc:mysql://localhost:3306/voting_app
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

---

## 📌 Future Enhancements

- Poll expiration support
- Vote percentage visualization
- Live updates using WebSockets
- Docker containerization
- Cloud deployment

---

## 👨‍💻 Author

Manu Bharadwaj  
Full Stack Developer | Software Engineer
