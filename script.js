
var save=document.getElementById("save")
var studentTable=document.getElementById("studentTable")
var tableBody = document.querySelector("#studentTable tbody")
save.addEventListener("click", function(e){
    e.preventDefault()
    var inputName=document.getElementById("inputName").value.trim()
    var inputAge=document.getElementById("inputAge").value.trim()
    var inputCourse=document.getElementById("inputCourse").value
    var inputEmail=document.getElementById("inputEmail").value.trim()
    var inputgender=document.querySelector("input[name='gender']:checked")

    var gender=inputgender ? inputgender.nextSibling.textContent.trim():"";

    if(!inputName || !inputAge ||!gender ||!inputCourse ||!inputEmail){
        alert("Please fill out fields.");
        return;
    }
    
   studentTable.classList.remove("hidden");

   var tableRow=document.createElement("tr");
   tableRow.innerHTML=`<td class="border border-gray-300 p-2">${inputName}</td>
   <td class="border border-gray-300 p-2">${inputAge}</td>
   <td class="border border-gray-300 p-2">${gender}</td>
   <td class="border border-gray-300 p-2">${inputCourse}</td>
   <td class="border border-gray-300 p-2">${inputEmail}</td>
   <td class="border border-gray-300 p-2 text-center">
   <button class="deleteItem bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
   </td>`;

   tableBody.appendChild(tableRow);
   document.querySelector("form").reset();

   var deletebtn=tableRow.querySelector(".deleteItem");
   deletebtn.addEventListener("click", function(){
    tableRow.remove();
    if(tableBody.children.length === 0){
        studentTable.classList.add("hidden")
    }
   })
})