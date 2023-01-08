let inputBtn=document.getElementById('input-btn')
const myLeads=[]
const inputEl=document.getElementById('input-el')
const ulEl=document.getElementById('ul-el')

inputBtn.addEventListener('click',function(){
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value=''
})


function renderLeads(){
    let listItems=''
    myLeads.forEach(element =>{
        listItems+=`
        <li>
            <a target='_blank' href='${element}'> 
                ${element} 
            </a>
        </li>`
    })
    ulEl.innerHTML=listItems

}
renderLeads()