# 📌 GSCORE https://gscore-datlt-fe.onrender.com/  
# 🌟 Overview  
## A system for querying 2024 National High School Exam scores consisting of:  

- Frontend (FE): React.js + TailwindCSS + Vite  
- Backend (BE): Spring Boot + MySQL  

1. Frontend (FE) https://github.com/ledat139/GSCORE-DatLT-FE  
2. Backend (BE) https://github.com/ledat139/GSCORE-DatLT-BE  

## 🌟 Features  
- Check score from registration number input  
  ![image](https://github.com/user-attachments/assets/aa2012fb-9a03-4bc4-a3b6-ed1bc9eef971)
- Statistics of the number of students with scores in the above 4 levels by subjects (>=8 points, 8 points > && >=6 points, 6 points > && >= 4 points, < 4 points)  
  ![image](https://github.com/user-attachments/assets/8da734cf-6c12-443c-bf08-65623b816665)
  ![image](https://github.com/user-attachments/assets/42721129-d55e-492d-b01f-f1db8b694920)
- List top 10 students of group A including (math, physics, chemistry)  
  ![image](https://github.com/user-attachments/assets/b964a9a5-a4fd-4f42-9bf4-71a49ea66481)

## 🚀Quick Start  
### Frontend (FE)  
npm install  
npm run dev  
npm run build  

### Backend (BE)  
- Prerequisites: JDK 17+ and Maven
- Run application
mvn spring-boot:run  
- Build executable JAR
mvn clean package  

## ⚙️ Configuration  
### Frontend Environment (.env)  
VITE_API_URL=http://localhost:8080/  

### Backend Database (application.properties) MySQL Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/gscore_db  
spring.datasource.username=your_username  
spring.datasource.password=your_password  
