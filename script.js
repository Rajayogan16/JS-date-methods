function tostring()
{
    let a = String(document.getElementById("date").value);
    const b = new Date(a);
    result = b.toString();
    document.getElementById("p1").innerHTML = result;
}

function datestrg()
{
    let a = String(document.getElementById("date").value);
    b = new Date(a);
    result = b.toDateString();
    document.getElementById("p1").innerHTML = result;
}

function toUTC()
{
    let a = String(document.getElementById("date").value);
    const b = new Date(a);
    result = b.toUTCString();
    document.getElementById("p1").innerHTML = result;
}

function toISO()
{
    let a = String(document.getElementById("date").value);
    const b = new Date(a);
    result = b.toISOString();
    document.getElementById("p1").innerHTML = result;
}

function toparse()
{
    let a = String(document.getElementById("date").value);
    const b = new Date(a);
    result = Date.parse(b);
    document.getElementById("p1").innerHTML = result;
}

function year()
{
    let a = String(document.getElementById("getdate").value);
    const b = new Date(a);
    result = b.getFullYear();
    document.getElementById("p2").innerHTML = result;
}

function getmon()
{
    let a = String(document.getElementById("getdate").value);
    const b = new Date(a);
    result = b.getMonth();
    document.getElementById("p2").innerHTML = result + 1;
}

function getdays()
{
    let a = String(document.getElementById("getdate").value);
    const b = new Date(a);
    result = b.getDate();
    document.getElementById("p2").innerHTML = result;
}

function gethour()
{
    let a = String(document.getElementById("getdate").value);
    const b = new Date(a);
    result = b.getHours();
    document.getElementById("p2").innerHTML = result;
}

function min()
{
    let a = String(document.getElementById("getdate").value);
    const b = new Date(a);
    result = b.getMinutes();
    document.getElementById("p2").innerHTML = result;
}

function getsec()
{
    let a = String(document.getElementById("getdate").value);
    const b = new Date(a);
    result = b.getSeconds();
    document.getElementById("p2").innerHTML = result;
}

function getms()
{
    let a = String(document.getElementById("getdate").value);
    const b = new Date(a);
    result = b.getMilliseconds();
    document.getElementById("p2").innerHTML = result;
}

function day()
{
    let a = String(document.getElementById("getdate").value);
    const b = new Date(a);
    result = b.getDay();
    document.getElementById("p2").innerHTML = result;
}

function gettime()
{
    let a = String(document.getElementById("getdate").value);
    const b = new Date(a);
    result = b.getTime();
    document.getElementById("p2").innerHTML = result;
}

function datenow()
{   
    const result = Date.now()
    document.getElementById("p3").innerHTML = result;
}

function timezone()
{   
    const b = new Date();
    document.getElementById("p3").innerHTML = b.getTimezoneOffset();
}

function setyear()
{
    const b = new Date();
    let a = String(document.getElementById("setdate").value);
    b.setFullYear(a);
    document.getElementById("p4").innerHTML = b;
}

function setmon()
{
    let a = String(document.getElementById("setdate").value);
    const b = new Date();
    b.setMonth(a);
    document.getElementById("p4").innerHTML = b;
}

function setdays()
{
    let a = String(document.getElementById("setdate").value);
    const b = new Date();
    b.setDate(a);
    document.getElementById("p4").innerHTML = b;
}

function sethour()
{
    let a = String(document.getElementById("setdate").value);
    const b = new Date();
    b.setHours(a);
    document.getElementById("p4").innerHTML = b;
}

function setmin()
{
    let a = String(document.getElementById("setdate").value);
    const b = new Date();
    b.setMinutes(a);
    document.getElementById("p4").innerHTML = b;
}

function setsec()
{
    let a = String(document.getElementById("setdate").value);
    const b = new Date();
    b.setSeconds(a);
    document.getElementById("p4").innerHTML = b;
}

function settime()
{
    let a = String(document.getElementById("setdate").value);
    const b = new Date();
    b.setTime(a);
    document.getElementById("p4").innerHTML = b;
}


