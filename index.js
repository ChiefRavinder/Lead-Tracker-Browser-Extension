let inputBtn=document.getElementById('input-btn')
let myLeads=[]
const inputEl=document.getElementById('input-el')
const ulEl=document.getElementById('ul-el')
const deleteBtn=document.getElementById('delete-btn')
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
const saveBtn=document.getElementById('tab-btn')

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}


saveBtn.addEventListener('click',function(){
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads){
    let listItems=''
    leads.forEach(element =>{
        listItems+=`
        <li>
            <a target='_blank' href='${element}'> 
                ${element} 
            </a>
        </li>`
    })
    ulEl.innerHTML=listItems
}


deleteBtn.addEventListener('click',function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})


inputBtn.addEventListener('click',function(){
    myLeads.push(inputEl.value)
    inputEl.value=''
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    console.log(localStorage.getItem('myLeads'))
    render(myLeads)
})

