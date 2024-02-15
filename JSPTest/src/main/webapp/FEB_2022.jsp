<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>

<head>

<title> FEB 2022 </title>

<link rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
 
 <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #fefae0;
            margin: 0;
            padding: 0;
        }
        .h2 {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 10px;
        font-family:calisto MT;
    }

        .header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 20px 0;
            margin-bottom: 20px;
        }

        .container {
            text-align: center;
        }
        
        table {
            border-collapse: collapse;
            width: 80%;
            margin: auto;
            background-color:transperant; 
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        th, td {
           border:1.5px solid black; 
            text-align: center;
            padding: 10px;
        }

        th {
            background-color: #f2f2f2; 
        }
    </style>
 
</head>

<body>
  <h2 class="h2" > BATCH OF FEB-2022</h2>
  
  <sql:setDataSource driver="com.mysql.cj.jdbc.Driver" url="jdbc:mysql://localhost:3306/project"
   user="root" password="cdac" var="ds"></sql:setDataSource>

  <sql:query dataSource="${ds}" var="rs" > SELECT s.studentId, s.studentName, cd.courseName, cd.admissionYear FROM Student s JOIN CourseDetail cd ON s.studentId = cd.studentId
WHERE cd.admissionYear = 'FEB 2022' order by studentId; </sql:query>

   <div class="container">
    <table>
        <tr>
            <th>StudentID</th>
            <th>StudentName</th>
            <th>CourseName</th>
            <th>Admission Year</th>
        </tr>

        <c:forEach items="${rs.rows}" var="row">
            <tr>
                <td><c:out value="${row.studentId}"></c:out></td>
                <td><c:out value="${row.studentName}"></c:out></td>
                <td><c:out value="${row.courseName}"></c:out></td>
                <td><c:out value="${row.admissionYear}"></c:out></td>
            </tr>
        </c:forEach>
    </table>
</div>

</body>
</html>