let h1=document.querySelector("h1")
let inp=document.querySelector(".inp")
let btn=document.querySelector(".create")
let ul=document.querySelector("ul")
btn.addEventListener("click",(e)=>{
    console.log(inp.value)

    let li=document.createElement("li")
    let task=document.createElement("p")
    let delBtn=document.createElement("button")
    let updateTodo=document.createElement("button")

    task.innerText=(inp.value.slice(0,1)).toUpperCase() + inp.value.slice(1); 
    delBtn.innerText="Delete Todo"
    updateTodo.innerText="Update Todo"

    li.classList.add("flex")
    task.addEventListener("click",()=>{
        task.classList.toggle("line-through")
    })

    delBtn.addEventListener("click",()=>{
        li.remove()    
        h1.innerText=`${ul.children.length} Todo List`
    })

    updateTodo.addEventListener("click",()=>{
        let re_name=prompt("Re-enter Todo Name")
        task.innerText=re_name
    })

    li.append(task,delBtn,updateTodo)
    ul.append(li)
    h1.innerText=`${ul.children.length} Todo List`
    inp.value=""
})