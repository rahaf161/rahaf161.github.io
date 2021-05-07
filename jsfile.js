function check()
{
	   var x =document.getElementById('fname').value;
	   var c = document.getElementById('lname').value;
	   var b = document.getElementById('email').value;
	   var n = document.getElementById('username').value;
	   var m = document.getElementById('pwd').value;
	   
	if((x=="")&&(m=="")&&(c=="")&&(	b=="")&&(n==""))
	{
		alert("enter a Values fill the fields empty")
      document.getElementById('lname').style.borderColor="red";
	  document.getElementById('fname').style.borderColor="red";
	  document.getElementById('username').style.borderColor="red";
	  document.getElementById('email').style.borderColor="red";
	  document.getElementById('pwd').style.borderColor="red";
	}
else	
	{
		alert("please continue insert and add more values and fill all the fields");
	} 
	
}
function reset1()
{
	document.getElementById('fname').style.borderColor="black";
}
function reset2()
{
	document.getElementById('lname').style.borderColor="black";
}
function reset3()
{
	document.getElementById('email').style.borderColor="black";
	}
function reset5()
{
	document.getElementById('pwd').style.borderColor="black";
}
	function reset4()
	{
	document.getElementById('username').style.borderColor="black";
	}
function myfunction1()
{
	 var res="";
	 var b = document.getElementById('email').value;
	 var b1= b;
	if(b !="")
	{
		for(var x=0;x<b1.length;x++)
		{
			if(b1[x]!="@")
			{
				res=res+b1[x];
			}
		}
		 
	}		
return res;
}

