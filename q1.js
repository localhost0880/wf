
function validateForm() {
    let firstname = document.getElementById("fname").value.trim();
    let lastname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let prn = document.getElementById("prn").value.trim();
    let id = document.getElementById("id").value.trim();
    let salary = document.getElementById("salary").value.trim();
    let dob = document.getElementById("dob").value;
    let joiningDate = document.getElementById("joiningDate").value;

    let nameRegex = /^[a-zA-Z]+$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    if (
        firstname === "" || lastname === "" || email === "" || prn === "" ||
        id === "" || salary === "" || dob === "" || joiningDate === ""
    ) {
        alert("❌ Please fill in all fields");
        return false;
    }

    if (!nameRegex.test(firstname)) {
        alert("❌ First name should only contain alphabets");
        return false;
    }

    if (!nameRegex.test(lastname)) {
        alert("❌ Last name should only contain alphabets");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("❌ Please enter a valid email address");
        return false;
    }

    if (prn.length > 12) {
        alert("❌ PRN No. should not exceed 12 digits");
        return false;
    }

    let dobDate = new Date(dob);
    let joiningDateObj = new Date(joiningDate);
    let ageDiff = joiningDateObj.getFullYear() - dobDate.getFullYear();

    if (ageDiff < 20) {
        alert("❌ Date of Birth should be at least 20 years before the joining date");
        return false;
    }

    alert("✅ Form submitted successfully!");
    return true;
}

function toUppercase(input) {
    input.value = input.value.toUpperCase();
}

----------------------------------------------------------------------------------------------
# Student registration js
Index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Registration</title>
    <link rel="stylesheet" href="style1.css">
</head>

<body>

    <h1>Student Registration</h1>

    <form id="registrationForm" onsubmit="return validateAndSubmit()">
        <label for="firstName">First Name:</label><br>
        <input type="text" id="firstName" name="firstName"><br>
        <span id="firstNameError" class="error"></span><br>

        <label for="lastName">Last Name:</label><br>
        <input type="text" id="lastName" name="lastName"><br>
        <span id="lastNameError" class="error"></span><br>

        <label for="age">Age:</label><br>
        <input type="number" id="age" name="age"><br>
        <span id="ageError" class="error"></span><br>

        <label for="course">Course:</label><br>
        <select id="course" name="course">
            <option value="CS">Computer Science</option>
            <option value="ENG">Engineering</option>
            <option value="MGT">Management</option>
        </select><br><br>
        
        <input type="submit" value="Register">
    </form>

    <script>
function validateForm() {
            let firstName = document.getElementById("firstName").value;
            let lastName = document.getElementById("lastName").value;
            let age = document.getElementById("age").value;

            let firstNameError = document.getElementById("firstNameError");
            let lastNameError = document.getElementById("lastNameError");
            let ageError = document.getElementById("ageError");

            firstNameError.textContent = "";
            lastNameError.textContent = "";
            ageError.textContent = "";

            let isValid = true;

            if (!/^[a-zA-Z]+$/.test(firstName)) {
                firstNameError.textContent = "First name must contain only alphabets.";
                isValid = false;
            }

            if (!/^[a-zA-Z]+$/.test(lastName)) {
                lastNameError.textContent = "Last name must contain only alphabets.";
                isValid = false;
            }

            if (isNaN(age) || age < 18 || age > 50 || age == "") {
                ageError.textContent = "Age must be a number between 18 and 50.";
                isValid = false;
            }
            return isValid; // Very important: Return the isValid value
        }
        function validateAndSubmit(){
            if(validateForm()){
                alert("Registration Successful")
                return false;
            }
            else{
                return false;
            }
        }
< script>
</body>
</html>
---------------------------------------------------------------------------
#Employee Registration
Index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Registration</title>
    <link rel="stylesheet" href="style2.css">
</head>
<body>
    <h1>Employee Registration</h1>
    <form id="registrationForm">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>

        <label for="dob">Date of Birth:</label><br>
        <input type="date" id="dob" name="dob" required><br><br>

        <label for="joiningDate">Joining Date:</label><br>
        <input type="date" id="joiningDate" name="joiningDate" required><br><br>

        <label for="salary">Salary:</label><br>
        <input type="number" id="salary" name="salary" required min="0"><br><br>

        <button type="submit">Register</button>
    </form>

    <div id="errorMessages"></div>

    <script >

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const dob = document.getElementById('dob').value;
    const joiningDate = document.getElementById('joiningDate').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; // Clear previous error messages
    let errors = [];

    const dobDate = new Date(dob);
    const joiningDateDate = new Date(joiningDate);
    const today = new Date();
    const ageInMilliseconds = today.getTime() - dobDate.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    if (dobDate >= today) {
       alert("Date of Birth must be before today.");
    }

    if (ageInYears < 20) {
        alert("Employee must be at least 20 years old.");
    }

    if (joiningDateDate <= dobDate) {
        alert("Joining Date must be after Date of Birth.");
    }

    if (ageInYears < 20 && joiningDateDate <= new Date(dobDate.getFullYear() + 20, dobDate.getMonth(), dobDate.getDate())) {
        alert("Joining date must be at least 20 years after the date of birth.");
    }
    

    if (isNaN(salary) || salary < 0) {
        alert("Salary must be a non-negative number.");
    }

    if (errors.length > 0) {
        errors.forEach(error => {
            errorMessages.innerHTML += error + "<br>";
        });
        return; // Stop form submission
    }

    alert("Registration Successful!");
    document.getElementById('registrationForm').reset();
});

</script>
</body>
</html>
---------------------------------------------------------------------------
#login using javascript and validation
Index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="style3.css">
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form id="loginForm" onsubmit="return validateForm()">
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br>
            <span id="emailError" class="error"></span><br><br>

            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br>
	<span id="passwordError" class="error"></span><br><br>

            <button type="submit">Login</button>
        </form>
    </div>
    <script>
function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";
    let isValid = true;
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = "Invalid email format.";
            isValid = false;
        }
    }
    if (password === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        passwordError.textContent = "Password must contain at least one uppercase letter.";
        isValid = false;
    } else if (!/[0-9]/.test(password)) {
        passwordError.textContent = "Password must contain at least one digit.";
        isValid = false;
    }
    return isValid;
}

< script>
</body>
</html>
---------------------------------------------------------------------------
#Admission Form

<!DOCTYPE html>
<html>
<head>
    <title>Admission Form</title>
</head>
<body>

    <form id="admissionForm" onsubmit="return validateForm()">
        <h2>Admission Form</h2>
        
        <label for="prn">PRN Number:</label>
        <input type="text" id="prn" name="prn" maxlength="12" placeholder="Enter 12-digit PRN">
        <span id="prnError" class="error"></span>

        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" onkeyup="convertToUppercase()">
        <label for="class">Class:</label>
        <select id="class" name="class">
            <option value="B.Sc.">B.Sc.</option>
            <option value="B.Com">B.Com</option>
            <option value="B.A.">B.A.</option>
            <option value="M.Sc.">M.Sc.</option>
        </select>

        <label for="qualification">Previous Qualification:</label>
        <input type="text" id="qualification" name="qualification" placeholder="Enter your previous qualification">
        <button type="submit">Submit</button>
    </form>

    <script>
        function validateForm() {
            let prn = document.getElementById('prn').value;
            let prnError = document.getElementById('prnError');

            prnError.innerHTML = "";

            if (!/^\d{12}$/.test(prn)) {
                prnError.innerHTML = "PRN must be exactly 12 digits and contain only numbers!";
                return false;
            }
            alert("Form submitted successfully!");
            return true;
        }
        function convertToUppercase() {
            let nameInput = document.getElementById('name');
            nameInput.value = nameInput.value.toUpperCase();
        }
    </script>
</body>
</html>
---------------------------------------------------------------------------
#Style.css

body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

form, .login-container {
    width: 400px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

h1, h2 {
    text-align: center;
    color: #333;
}

label {
    font-weight: bold;
    margin-top: 10px;
    display: inline-block;
    color: #333;
}

input, select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}
.error {
    color: red;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 10px;
}
button, input[type="submit"] {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover, input[type="submit"]:hover {
    background-color: #45a049;
}

input[type="date"], input[type="number"] {
    width: calc(100% - 20px);
}

.login-container {
    text-align: center;
}
@media (max-width: 500px) {
    form, .login-container {
        width: 90%;
    }
}

form + form {
    margin-top: 20px;
}
---------------------------------------------------------------------------
# append file content

const express = require('express');
const path = require('path')
const fs = require('fs')
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(`
        <h2>Append File</h2>
        <form action="/append" method="POST">
            Name of Source<input type="text" name="file1"></input>
            Name of Destination<input type="text" name="file2"></input>
            <button type="submit">Append</button>
        </form>
    `);
})
app.post('/append', (req, res) => {
    let file1 = path.join(__dirname, req.body.file1);
    let file2 = path.join(__dirname, req.body.file2);
    fs.readFile(file1, (err, data) => {
        if (err) return res.send("Error opening file");
        fs.appendFile(file2, data, (err) => {
            if (err) return res.send("Error apending file")
            res.send("File appended")
        });    });	});
app.listen(3000, () => console.log('http://localhost:3000'));
---------------------------------------------------------------------------
#Date time
#module.js
function getDateTime(){
  const now=new Date()
  return now.toLocaleString()
}
module.exports.getDateTime=getDateTime

# index.js
const http=require('http')
const myModule=require('./modules')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    const dateTime=myModule.getDateTime()
    res.write(`<h2>Current Date and Time is: ${dateTime}`)
    res.end()
})
server.listen(3000,()=>{
    console.log('http://localhost:3000')
})
---------------------------------------------------------------------------
# event trigger

const http = require('http');
const url = require('url');

const htmlContent = `
<!DOCTYPE html>
<html>
<body>

  <h2>Click on a Button to Trigger an Event!</h2>

  <button onclick="sendEvent('Click')">Click Event</button>
  <button ondblclick="sendEvent('Double Click')">Double Click Event</button>
  <button onmouseover="sendEvent('Mouse Over')">Mouse Over Event</button>
  <button onmouseout="sendEvent('Mouse Out')">Mouse Out</button>
  
  <script>
    function sendEvent(eventName) {
      fetch('/event?name=' + eventName)
    }

    document.onkeydown = (event) => {
      if (event.key === 'Enter') {
        sendEvent('Key Press (Enter)');
      }
    };
  </script>
</body>
</html>
`;
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/event' && parsedUrl.query.name) {
    const eventName = parsedUrl.query.name;
    console.log(` Event Triggered: ${eventName}`); 
    res.end();
  } 
  else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
  }
});
server.listen(3000, () => {
  console.log(' Server running at http://localhost:3000');
});
---------------------------------------------------------------------------
# Circle

# Circle.js
const PI=Math.PI
function area(radius){
    return PI * radius *radius
}
function circumference(radius){
    return 2*PI*radius
}
module.exports={
    area,
    circumference
}

# main.js
const circle=require('./circle')
const radius=5
const area=circle.area(radius)
const circumference=circle.circumference(radius)
console.log(area,circumference)
---------------------------------------------------------------------------
#Word Occurance

const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter file name: ', (fileName) => {
  rl.question('Enter word to count: ', (word) => {
    
    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err.message);
        rl.close();
        return;
      }
      const count = (data.match(new RegExp(word, 'gi')) || []).length;
      console.log(`The word "${word}" occurs ${count} times.`);
      rl.close();
    });
  });
});
---------------------------------------------------------------------------
# display records using mongoDB

const { MongoClient } = require('mongodb');

async function selectAllCustomers() {
  const uri = 'mongodb://192.168.100.203:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('CustomerDatabase');
    const collection = database.collection('customers');
    const customer = await collection.find({}).toArray();
    console.log(customer);
  } finally {
    await client.close();
  }
}

selectAllCustomers().catch(console.error);

---------------------------------------------------------------------------
# insert multiple records in student table

const { MongoClient } = require('mongodb');

const uri = 'mongodb://192.168.100.203:27017';
const dbName = 'mscdb8'; 

const sampleData = [
  { name: 'xyz', age: 18, phoneNumber: '896578546' },
  { name: 'abc', age: 21, phoneNumber: '8453888976' },
];
async function connectAndInsertData() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to the database');

    const db = client.db(dbName);
    const collections = await db.listCollections().toArray();

    const studentCollectionExists = collections.some(
      (col) => col.name === 'student'
    );

    if (studentCollectionExists) {
      await insertData(client, sampleData);
    } else {
      console.log("The 'student' collection does not exist. Please create the collection first.");
    }
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

async function insertData(client, data) {
  const database = client.db(dbName);
  const collection = database.collection('student');
  const result = await collection.insertMany(data);
  console.log(`${result.insertedCount} documents inserted into the 'student' collection`);

  const insertedDocuments = await collection.find({}).toArray();
  
  console.log('Inserted documents data:', insertedDocuments);
}
connectAndInsertData().catch(console.error);

---------------------------------------------------------------------------

# delete record from the customer table

const { MongoClient } = require('mongodb');
const uri = 'mongodb://192.168.100.203:27017';
const dbName = 'CustomerDatabase';

const recordToDelete = { name: 'Jane Smith' };
async function connectAndManageData() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to the database');

    const db = client.db(dbName);
    const collection = db.collection('customers'); 

    const allRecords = await collection.find({}).toArray();
    console.log('All records in the "customers" collection:');
    console.log(allRecords);

    const deleteResult = await collection.deleteOne(recordToDelete);
    if (deleteResult.deletedCount > 0) {
      console.log('Record deleted successfully:', recordToDelete);
    } else {
      console.log('No record found matching the specified criteria to delete');
    }
    const updatedRecords = await collection.find({}).toArray();
    console.log('Updated records after deletion:');
    console.log(updatedRecords);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}
connectAndManageData().catch(console.error);
---------------------------------------------------------------------------
#Database

const {MongoClient}=require('mongodb')

const url='mongodb://192.168.100.203:27017’
const dbName='colleges'
const collectionName='bot'
const client=new MongoClient(url)

async function run(){
    try{
        await client.connect()
        const db=client.db(dbName)
        const collection=db.collection(collectionName)

        const document=await collection.find({}).toArray()
        console.log(document)
        const insertdocument=await collection.insertOne({name:'Rahul',age:20})

        console.log(`${insertdocument.insertedCount} records added`)
        const removedocument=await collection.deleteMany({name:'Rahul',age:20})
        if(removedocument.deletedCount>0){
            console.log(`${removedocument.deletedCount} records deleted`)
        } else{
            console.log("cant find record")
        }

    } catch (err){
        console.log('Error: ',err.message)
    } finally{
        await client.close()
        console.log('Connection Closed')
    }
}
run()
---------------------------------------------------------------------------

#Login System EXPRESS
Public/register.html

<!DOCTYPE html>
<html>
    <body>
        <h2>Register</h2>
        <form action="/register" method="POST">
            Username:<input type="text" name="username" required><br><br>
            Password:<input type="password" name="password" required><br><br>
            <button type="submit">Register</button>
        </form>
        <p>Already registered?<a href="./login.html">Login here</a></p>
    </body>
</html>

Public/index.html

<!DOCTYPE html>
<html>
    <body>
        <h2>Login here</h2>
        <form action="/login" method="POST">
            Username:<input type="text" name="username" required><br><br>
            Password:<input type="password" name="password" required><br><br>
            <button type="submit">Login</button>
        </form>
        <p>Not Registered?<a href="./register.html">Register here</a></p>
    </body>

</html>

App.js
const express=require('express')
const {MongoClient} = require('mongodb')
const bodyParser=require('body-parser')
const path=require('path')
const app=express()
app.use(bodyParser.urlencoded({extended:true}))
const url='mongodb://192.168.100.203:27017’
const dbName='colleges'
const collectionName='bot'
const client=new MongoClient(url)
async function connect(){
    await client.connect()
    return client.db(dbName).collection(collectionName)
}
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
    res.send('<h2>Server started<a href="/login.html">Login here</a><h2>')
})
app.post('/register',async(req,res)=>{
    const collection=await connect()
    const {username,password}=req.body
    await collection.insertOne({username,password})
    res.send('user registered successfully<br><a href="/login.html">Login Now</a>')
})
app.post('/login',async(req,res)=>{
    const collection=await connect()
    const {username,password}=req.body
    const user=await collection.findOne({username,password})
    if (user) {
        res.send(`✅ Welcome, ${username}! Login successful.`);
      } else {
        res.send('❌ Invalid username or password. <a href="/login.html">Try Again</a>');
      }
})
app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000')
})
---------------------------------------------------------------------------
#file download EXPRESS

const express=require('express')
const path=require('path')
const app=express()
app.get('/',(req,res)=>{
    res.send(`<h2>Welcome to file download system</h2><br>
       <p> <a href="/download">Click here</a> to Download the file</p>
        `)	})
app.get('/download',(req,res)=>{
    const filePath=path.join(__dirname,"uploads","sample.txt")
    res.download(filePath,"downloaded-file.txt",(err)=>{
        if(err){
            console.log('Error downloading file')
        }    })
})
app.listen(3000,()=>{
    console.log("http://localhost:3000")
})
---------------------------------------------------------------------------
#Employee-app express&ejs

Views/index.ejs

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Form</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <div class="container">
        <h2>Employee Details Form</h2>
        <form action="/submit" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="position">Position:</label>
            <input type="text" id="position" name="position" required>

            <label for="salary">Salary ($):</label>
            <input type="number" id="salary" name="salary" required>

            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>

#Views/result.ejs

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Details</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <div class="container">
        <h2>Employee Information</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Salary ($)</th>
            </tr>
            <tr>
                <td><%= employee.name %></td>
                <td><%= employee.email %></td>
                <td><%= employee.position %></td>
                <td><%= employee.salary %></td>
            </tr>
        </table>
        <a href="/">Go Back</a>
    </div>
</body>
</html>

#server.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", (req, res) => {
    const employee = req.body;
    res.render("result", { employee });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
---------------------------------------------------------------------------
