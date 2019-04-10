//document.getElementById("enviar").addEventListener("click", enviar);
var persona =[];
function enviar(){
    let num = document.getElementById('numero').value;
    let ubica = document.getElementById('ubicacion').value;
    let clien = document.getElementById('cliente').value;
    let dni = document.getElementById('dni').value;
    let numper = document.getElementById('numperso').value;
    let fech = new Date();

    console.log(num);
    console.log(ubica);
    console.log(clien);
    console.log(dni);
    console.log(numper);

    var objPersona ={
        numero: num,
        ubicacion: ubica,
        cliente: clien,
        dni: dni,
        Date : fech,
        numperso: numper
    }
    persona.push(objPersona);
    
    listar();
    
    document.getElementById('numero').value = "";
    document.getElementById('ubicacion').value = "";
    document.getElementById('cliente').value = "";
    document.getElementById('dni').value = "";
    document.getElementById('select').value = "";
    document.getElementById('numperso').value = "";
}
function listar(){
    let datoclieente = '';
    for (let i = 0; i < persona.length; i++) {
        const element = persona[i];
        datoclieente = datoclieente + '<tr><td>'+
            (i+1)+'</td><td>'+
            element.cliente+'</td><td>'+
            element.dni+'</td><td>'+
            element.Date+'</td><td>'+
            element.ubicacion+'</td></tr>'  
    }
    document.getElementsByTagName('tbody')[0].innerHTML = datoclieente;
    let data = document.getElementsByTagName("td");
    alinear_tdata(data);
}
function alinear_tdata(data){
    for (let i = 0; i < data.length; i++) {
        const element = data[i];    
        element.classList.add('dato');
    }
}