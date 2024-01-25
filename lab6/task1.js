function check(email) {
        if (email.value != document.getElementById('Email').value) {
            email.setCustomValidity('Email Must be Matching.');
        } else {
            // email is valid -- reset the error message
            email.setCustomValidity('');
        }
    }
	
function getAge() 
{
    var dateString = document.getElementById("DOB").value;
    
	if(dateString !="")
    {
        var today = new Date();
        var birthDate = new Date(dateString); //format is mm.dd.yyyy
        var age = today.getFullYear() - birthDate.getFullYear();

        if(age < 20 || age > 100)
        {
            alert("Age "+age+" is restrict");
        } 
    } 
    else 
    {
        alert("please provide your date of birth");
    }
}

function dateCheck(input)
{
	var today = new Date();
	 if (today.value > document.getElementById('StartingDate').value) {
            input.setCustomValidity('Email Must be Matching.');
        } else {
            // email is valid -- reset the error message
            input.setCustomValidity('');
        }
}