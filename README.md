# Project_FitMate
A Fitness tracker
React (Frontend)
      │
      │ HTTP Requests (Axios / Fetch)
      ▼
Spring Boot REST API (Backend)
      │
      │ JPA / Hibernate
      ▼
MySQL Database



// SignUp & login 
Signup → Save User in MySQL (Password Encrypted)
Login → Verify Password
      → Generate JWT Token
      → Send Token to React

React stores Token (localStorage)

For protected APIs:
React sends Token in Header

Authorization: Bearer <token>

Spring Boot JWT Filter
→ Validate Token
→ Extract User
→ Allow API access