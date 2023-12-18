function abc()
{
    var mail=document.getElementById("c").value
    var pass=document.getElementById("d").value
    event.preventDefault()


    if(mail === null || mail === "")
    {
        var mail=document.getElementById("c")
        mail.style.border="1px solid red"
        mail.style.borderRadius="8px"
        var errorMsg1=document.getElementById("aa")
        errorMsg1.innerHTML="Email or phone number is empty"
        errorMsg1.style.color="red"
        errorMsg1.style.fontSize="15px"
        errorMsg1.style.position="relative"
        errorMsg1.style.left="15px"
    }
    else if(pass === null || pass === "")
    {
        var pass=document.getElementById("d")
        pass.style.border="1px solid red"
        pass.style.borderRadius="8px"
        var errorMsg2=document.getElementById("bb")
        errorMsg2.innerHTML="Enter Mail or phone no First"
        errorMsg2.style.color="red"
        errorMsg2.style.fontSize="15px"
        errorMsg2.style.position="relative"
        errorMsg2.style.left="15px"
    }
    else{
        var mail=document.getElementById("c")
        mail.style.border="1px solid green"
        mail.style.borderRadius="8px"
        var errorMsg1=document.getElementById("aa")
        errorMsg1.innerHTML="validation complete"
        errorMsg1.style.color="green" 
        errorMsg1.style.fontSize="15px"
        errorMsg1.style.position="relative"
        errorMsg1.style.left="15px"
         

        var pass=document.getElementById("d")
        pass.style.border="1px solid green"
        pass.style.borderRadius="8px"
        var errorMsg2=document.getElementById("bb")
        errorMsg2.innerHTML="validation complete"
        errorMsg2.style.color="green" 
        errorMsg2.style.fontSize="15px"
        errorMsg2.style.position="relative"
        errorMsg2.style.left="15px"
    }
}