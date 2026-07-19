let enterEmail =document.getElementById("email");
let enterMsg = document.getElementById("message");
let button =document.getElementById("butt");
let  msgt= document.getElementById("messageText")

button.addEventListener('click',function(event){
    const msg = enterMsg.value;
    const mail = enterEmail.value;


    if (msg === "" || mail === ""){
        event.preventDefault();
        msgt.textContent =  "Please Fill The Content First"
        return;
        
        


        
    }
})


