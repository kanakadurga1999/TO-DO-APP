function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange =function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var table= document.getElementById("todoTable");
            table.innerHTML="";
            var headerRow = table.createTHead().insertRow(0);
            var headerCell1 = headerRow.insertCell(0);
            var headerCell2 =headerRow.insertCell(1);
            headerCell1.innerHTML ="Title";
            headerCell2.innerHTML="Completed";
            
            var tableBody = table.createTBody();

            var completedCount = 0;
            for(var i=0;i<response.length;i++){
            

                var row= tableBody.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML =response[i].title;
                var checkbox = document.createElement('input');
                checkbox.type ="checkbox";
                checkbox.disabled = false;
                cell2.appendChild(checkbox);
               
                checkbox.addEventListener("change", function() {
                    if (this.checked) {
                        completedCount++;
                        if (completedCount === 5) {
                            alert("Congrats! 5 tasks have been successfully completed");
                        }
                    } else {
                        completedCount--;
                    }
                });
            
                }
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
