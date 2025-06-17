// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const errorElements = document.querySelectorAll('.error-message');
//     errorElements.forEach(el => el.style.display = 'none');

//     // Get form values
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const phone = document.getElementById('phone').value.trim();
//     const message = document.getElementById('message').value.trim();

//     let isValid = true;

//     // Name validation
//     if (name === '') {
//         document.getElementById('nameError').textContent = 'Name is required';
//         document.getElementById('nameError').style.display = 'block';
//         isValid = false;
//     }

//     // Email validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email === '' || !emailPattern.test(email)) {
//         document.getElementById('emailError').textContent = 'Valid email is required';
//         document.getElementById('emailError').style.display = 'block';
//         isValid = false;
//     }

//     // Phone validation
//     const phonePattern = /^[0-9]{10}$/;
//     if (phone === '' || !phonePattern.test(phone)) {
//         document.getElementById('phoneError').textContent = 'Valid phone number is required';
//         document.getElementById('phoneError').style.display = 'block';
//         isValid = false;
//     }

//     // Message validation
//     if (message === '') {
//         document.getElementById('messageError').textContent = 'Message is required';
//         document.getElementById('messageError').style.display = 'block';
//         isValid = false;
//     }
//     if (isValid) {
//         alert('Form submitted successfully!');
//     }
// });

function validate(){
    const name=document.getElementById("name").value;
    const phone=document.getElementById("phone").value;
    const email=document.getElementById("email").value;
    const error=document.getElementById('error');
    const nameError=document.getElementById('nameError');
    const phoneError=document.getElementById('phoneError');
    const emailError=document.getElementById('emailError');

    const alphaExp= /^[a-zA-Z]+$/;
    const numExp= /^[0-9]+$/;
    const emailExp= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let nameStatus=false;
    let phoneStatus=false;
    let emailStatus=false;

    if(name==="" && phone==="" && email===""){
        error.textContent= "Please Enter All The Details";
        return nameStatus;
    }

    //Name validation
    if(name === ""){
        nameError.textContent= "please Enter Name";
     }
     else{
         if(name.match(alphaExp)){
             nameError.textContent="";
             nameStatus=true;
         }
         else{
             nameError.textContent= "Name should be only Characters"
         }
     }

     //Mobile Validation
    if(phone === ""){
        phoneError.textContent ="Please Enter Mobile Number";
    }
    else{
        if(phone.match(numExp)){
            if(phone.length===10){
                phoneError.textContent="";
                phoneStatus=true;
            }
            else{
                phoneError.textContent ="Number should be 10 Digits";
            }
        } 
        else{
            phoneError.textContent ="Mobile Number should be only Numbers";
        }
    }

    //Email Validation
    if(email===""){
        emailError.textContent ="Please Enter Email";
    }
    else{
        if(email.match(emailExp)){
            emailError.textContent="";
            emailStatus=true;
        }
        else{
            emailError.textContent="Email is not valid";
        }
    }

    //Return Validation
    if(nameStatus && phoneStatus && emailStatus){
        return true
    }
    else{
        return false
    }

}