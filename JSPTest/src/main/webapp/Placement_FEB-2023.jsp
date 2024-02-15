<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
    <title>FEB 2023</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <style>
             body {
            
            background-color: #fefae0;
            margin: 0;
            padding: 0;
        }
        .container {
            text-align: center;
            margin-top:50px;
        }

       .h2 {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 10px;
        font-family:railway;
        font-color:black;
    }

         table {
            border-collapse: collapse;
            width: 80%;
            margin: auto;
            
        }

        th, td {
           border:1.5px solid black;
            text-align: center;
            padding: 8px;
        }

        th {
            background-color: #f2f2f2;
        }
        
        canvas{
          padding:40px;
          border:1.5px solid black;
          border-radius:20px;
          background-color:white;
        }
    </style>
</head>
<body>
<h2 class="h2">Placement Status of Students for FEB 2023</h2>

<canvas id="myChart" style="width:80%;max-width:600px; margin: 0 auto;"></canvas>

<sql:setDataSource driver="com.mysql.cj.jdbc.Driver" url="jdbc:mysql://localhost:3306/project" user="root" password="cdac" var="ds"></sql:setDataSource>

<sql:query dataSource="${ds}" var="rsPlaced"> 
    SELECT COUNT(*) AS placedCount
    FROM companyDetail
    WHERE admissionYear = 'FEB 2023' AND placementStatus = 'Placed'; 
</sql:query>

<sql:query dataSource="${ds}" var="rsUnplaced"> 
    SELECT COUNT(*) AS unplacedCount
    FROM companyDetail
    WHERE admissionYear = 'FEB 2023' AND placementStatus = 'Unplaced'; 
</sql:query>

<sql:query dataSource="${ds}" var="rsDetails"> 
    SELECT S.studentName,CD.companyName, CD.placementStatus
    FROM companyDetail CD 
    JOIN Student S ON CD.studentId = S.studentId
    WHERE CD.admissionYear = 'FEB 2023'; 
</sql:query>

<div class="container">
    <table>
        <tr>
            <th>Student Name</th>
            <th>Company Name</th>
            <th>Placement Status</th>
        </tr>
        <c:forEach var="row" items="${rsDetails.rows}">
            <tr>
                <td><c:out value="${row.studentName}" /></td>
                <td><c:out value="${row.companyName}" /></td>
                <td><c:out value="${row.placementStatus}" /></td>
            </tr>
        </c:forEach>
    </table>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
<script>
    var placedCount = ${rsPlaced.rows[0].placedCount};
    var unplacedCount = ${rsUnplaced.rows[0].unplacedCount};

    new Chart("myChart", {
        type: "bar",
        data: {
            labels: ["Placed", "Unplaced"],
            datasets: [{
                label: 'Number of Students',
                data: [placedCount, unplacedCount],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Placement Status of Students for FEB 2023"
            }
        }
    });
</script>

</body>
</html>