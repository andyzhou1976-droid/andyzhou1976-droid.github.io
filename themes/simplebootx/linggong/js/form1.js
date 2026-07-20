var re=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var objExp=new RegExp(re);
// var str=document.getElementById("email").value;
// objExp.test(str)==false;

function submitMsg1(){

    if(document.getElementById("full_namea").value=="Name" || document.getElementById("full_namea").value=="")
    {
    alert("Please enter your name.");
    return false; 
    }

    var str=document.getElementById("emaila").value;
    if(document.getElementById("emaila").value=="E-mail" || document.getElementById("emaila").value=="")
    {
    alert("Please enter E-mail address."); 
    return false;
    }
    else if(objExp.test(str)==false)
    {
    alert("Please enter a valid E-mail address."); 
    return false;
    }

    if(document.getElementById("msga").value=="Message" || document.getElementById("msga").value=="")
    {
    alert("Please enter your message."); 
    return false; 
    }
    
    if(document.getElementById("captcha").value=="CAPTCHA" || document.getElementById("captcha").value=="")
    {
    alert("Please enter CAPTCHA.");
    return false; 
    }
   
    return true;
}



function submitMsg2(){


	if(document.getElementById("full_nameb").value=="Name" || document.getElementById("full_nameb").value=="")
	{
	alert("Please enter your name.");
	return false; 
	}

	
	if(document.getElementById("emailb").value=="E-mail" || document.getElementById("emailb").value=="")
	{
	alert("Please enter E-mail address."); 
	return false;
	}

	var str=document.getElementById("emailb").value;
	
    if(objExp.test(str)==false)
	{
	alert("Please enter a valid E-mail address."); 
	return false;
	}

	if(document.getElementById("msgb").value=="Your Inquiry" || document.getElementById("msgb").value=="")
	{
	alert("Please enter your inquiry"); 
	return false; 
	}


	if(document.getElementById("captchb").value=="CAPTCHA" || document.getElementById("captchb").value=="")
	{
	alert("Please enter CAPTCHA.");
	return false; 
	}
   
	return true;
}
function submitMsg3(){

	if(document.getElementById("full_namec").value=="Name" || document.getElementById("full_namec").value=="")
	{
	alert("Please enter your name.");
	return false; 
	}

	var str=document.getElementById("emailc").value;
	if(document.getElementById("emailc").value=="E-mail" || document.getElementById("emailc").value=="")
	{
	alert("Please enter E-mail address."); 
	return false;
	}
    if(objExp.test(str)==false)
	{
	alert("Please enter a valid E-mail address."); 
	return false;
	}

	if(document.getElementById("msgc").value=="Message *" || document.getElementById("msgc").value=="")
	{
	alert("Please enter your message"); 
	return false; 
	}


	if(document.getElementById("captcha").value=="CAPTCHA" || document.getElementById("captcha").value=="")
	{
	alert("Please enter CAPTCHA.");
	return false; 
	}
   
	return true;
}