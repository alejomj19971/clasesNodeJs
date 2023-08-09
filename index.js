const http=require('http'); // Se crea la contanste para el modulo http

// Todo servidor sale ór un puerto
const port=4500; // Se define el puerto del servidor

// Generar el servidor
http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Holaaaaa Mundo desde NodeJS</h1>");
    res.write("<meta charset='utf-8'/>")
    res.write("<hr>");
    //res.write("<script>alert('Hola desde alert de JS') </script>");
    res.write("<h2>Mi Primera aplicación en NODEJS<h2/>");
    let salary=3500;
    res.write(`<p>El salario del empleado es ${salary} <p/>`);
    let suma =(a,b)=> a+b;
    let resta =(a,b)=> a-b;
      
    res.write(`<p>La suma es  ${suma(45,78)} <p/>`);
    res.write(`<p>La resta es  ${resta(40,18)} <p/>`);


    let datausers= [
    {username:'Jhon Doe',password:'123456',email:'jdo@gmail.com' ,salary:5000},
    {username:'Ryan Dahl',password:'456',email:'rd@example.com', salary:5000},
    {username:'Steve Jobs',password:'123456',email:'sj@gmail.com' ,salary:5000},
    ]

    res. write(`<table border='1'> <tr> <th>Username</th> <th>Password</th> <th>Email</th> <th>Salary</th> </tr>  `)
    
    datausers.forEach(user=>{
        res.write(`<tr> <td>Usuario: ${user.username}</td>  <td>password: ${user.password} </td> email: ${user.email} <td>salary: ${user.salary} </td> <tr/>`)
    })
    res.write('</table>');

    res.end();

}).listen(port,()=>{
    console.log(`Server is  running on http:localhost:${port}`)
   
});