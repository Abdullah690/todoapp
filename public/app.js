var ul_list = document.getElementById("ul_list")

function Add_items(){
       // input
    var todo_items = document.getElementById("todo_items")
    var li = document.createElement("li")
    var li_text = document.createTextNode(todo_items.value)
    li.appendChild(li_text)
     
       
      // Edit btn
      var editbtn = document.createElement("button")
      var editText =document.createTextNode("Edit")
      editbtn.appendChild(editText)
      editbtn.setAttribute("onclick","edititem(this)")
      editbtn.setAttribute("class","editbtn")
      li.appendChild(editbtn)

 // Delete btn
 var dltBtn = document.createElement("button")
 var btnText = document.createTextNode("Delete")
 dltBtn.setAttribute("onclick","deleteitem(this)")
 dltBtn.setAttribute("class","delBtnEdit")


 dltBtn.appendChild(btnText)
 li.appendChild(dltBtn)



    ul_list.appendChild(li)
    console.log(li)
    todo_items.value = ""
}


function deleteitem(e){
    e.parentNode.remove()
}


function All_delete(e){
    ul_list.innerHTML = ""
}

function edititem(f){
    
    var val = prompt( "Enter Update Value",f.parentNode.firstChild.nodeValue)
    f.parentNode.firstChild.nodeValue = val
}