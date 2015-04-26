function Render(str)
{
    var getRequest;
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
    
    if (str == "")
    {
        document.getElementById("data").innerHTML = "";
        return;
    }
    
    if (window.XMLHttpRequest)
    {
        getRequest = new XMLHttpRequest; 
    }
    
        getRequest.onreadystatechange = function()
    {
        if (getRequest.readyState == 4 && getRequest.status == 200)
        {
            var output = JSON.parse(getRequest.responseText);
            Generate(output);
            
        }
        
    }
    getRequest.open("GET", url, true);
    getRequest.send(); 
}

function Generate(result)
{
    var count = 0;
    table = "";
    
    table += ("<center>" + "<table border = '3' style = 'color: white;'>");
    table += ('<th>' + 'Customer ID' +
              '<th>' + 'Company Name' +
              '<th>' + 'City'); 
   
    for (count = 0; count < result.GetAllCustomersResult.length; count ++)
    {
        table += "<tr>";
            table += "<td>" + result.GetAllCustomersResult[count].CustomerID + "</td>";
            table += "<td>" + result.GetAllCustomersResult[count].CompanyName + "</td>";
            table += "<td>" + result.GetAllCustomersResult[count].City + "</td>";
        table += "</tr>";
        
        
    }
    document.getElementById("table1").innerHTML = table; 
}
 
function History()
{
    var objRequest = new XMLHttpRequest;
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    url += document.getElementById("cid").value;
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput(output);
        }
        
    }
        objRequest.open("GET", url, true);
        objRequest.send();
 }
 
 function GenerateOutput (result)
{
    var count = 0;
    var displaytext = "";
    table = "";
    
    table += ("<center>" + "<table border = '3' style = 'color: white;'>");
    table += ('<th>' + 'Product Name' + '<th>' + 'Total'); 
   
    for (count = 0; count < result.length; count ++)
    {
        table += "<tr>";
            table += "<td>" + result[count].ProductName + "</td>";
            table += "<td>" + result[count].Total + "</td>";
        table += "</tr>";
        
        
    }
    document.getElementById("table2").innerHTML = table; 
 }
 
function Orders() 
{
    var objRequest3 = new XMLHttpRequest;
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += document.getElementById("cid2").value;
    
    objRequest3.onreadystatechange = function()
    {
        if (objRequest3.readyState == 4 && objRequest3.status == 200)
        {
            var output = JSON.parse(objRequest3.responseText);
            GenerateOutput3(output);
        }
        
    }
        objRequest3.open("GET", url, true);
        objRequest3.send();
 }
 
 function GenerateOutput3 (result)
{
    var count = 0;
    var displaytext = "";
    table = "";
    
    table += ("<center>" + "<table border = '3' style = 'color: white;'>");
    table += ('<th>' + 'Order Date' +
              '<th>' + 'Order ID' +
              '<th>' + 'Ship Address' +
              '<th>' + 'Ship City' +
              '<th>' + 'Ship Name' +
              '<th>' + 'Ship Postcode' +
              '<th>' + 'Shipped Date' ); 
   
    for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)
    {
        table += "<tr>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].OrderDate + "</td>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].OrderID + "</td>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].ShipAddress + "</td>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].ShipCity + "</td>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].ShipName + "</td>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].ShipPostcode + "</td>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].ShippedDate + "</td>";
            
        table += "</tr>";
        
        
    }
    document.getElementById("table3").innerHTML = table;
 } 
 
 
function Change()
{
    
    
    if (document.getElementById("menu").value == "Customer List")
    {
        document.getElementById("customers").style.display = "inline";
        document.getElementById("customers").style.visibility= "visible";
        document.getElementById("history").style.display = "none";
        document.getElementById("history").style.visibility= "hidden";
        document.getElementById("orders").style.display = "none";
        document.getElementById("orders").style.visibility= "hidden";
        
    }
    else if (document.getElementById("menu").value == "Customer Order History")
    {
        document.getElementById("customers").style.display= "none";
        document.getElementById("customers").style.visibility= "hidden";
        document.getElementById("history").style.display = "inline";
        document.getElementById("history").style.visibility= "visible";
        document.getElementById("orders").style.display = "none";
        document.getElementById("orders").style.visibility= "hidden";
    }
    else if (document.getElementById("menu").value == "Customer Orders")
    {
        document.getElementById("customers").style.display = "none";
        document.getElementById("customers").style.visibility= "hidden";
        document.getElementById("history").style.display = "none";
        document.getElementById("history").style.visibility= "hidden";
        document.getElementById("orders").style.display = "inline";
        document.getElementById("orders").style.visibility= "visible";
    }
    else
    {
        document.getElementById("customers").style.visibility = "hidden";
        document.getElementById("customers").style.visibility= "hidden";
        document.getElementById("history").style.visibility = "hidden";
        document.getElementById("history").style.visibility= "hidden";
        document.getElementById("orders").style.visibility = "hidden";
        document.getElementById("orders").style.visibility= "hidden";
    }       
}