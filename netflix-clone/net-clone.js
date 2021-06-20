const EmailVal = document.getElementById("email");
const PswVal = document.getElementById("psw");
const submitButton = document.getElementById("submit")
const thanks = document.getElementById('thank-you');
const signOut = document.getElementById("sign-out-btn");

submitButton.addEventListener('click', (e) =>{
  e.preventDefault();
  checkInputs();
});

signOut.addEventListener('click', () =>{
  window.location.reload()
})

function checkInputs(){
  const eVal = EmailVal.value.trim();
  const pVal = PswVal.value.trim();
  //the trim() removes the whitespace
  if(eVal === ''){
    alert('Email cannot be left blank');
  } else if(!isEmail(eVal)){
    alert('Email is invalid');
  } else if(isEmail(eVal)){
    console.log(true);
  }
  if(pVal === ''){
    alert('Password cannot be left blank');
  } else {
    console.log(true);
  }

  if(isEmail(eVal) == true && pVal !== true){
    thanks.innerHTML = 'Thanks for signing in. Click the sign out button'
  }
}

function isEmail(EmailVal){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(EmailVal);
}

function displayButton(){
    var final = document.getElementById('final');
    var main = document.getElementById('main');
    final.classList.toggle('closed');
    main.classList.add('closed');
}

function toggle1(){
    var x = document.getElementById('ans1');
    var y = document.getElementById('rot1');
    y.classList.toggle('rotate');
    x.classList.toggle('closed');
}

function toggle2(){
  var x = document.getElementById('ans2');
    var y = document.getElementById('rot2');
    y.classList.toggle('rotate');
    x.classList.toggle('closed');
}

function toggle3(){
    var x = document.getElementById('ans3');
    var y = document.getElementById('rot3');
    y.classList.toggle('rotate');
    x.classList.toggle('closed');
}

function toggle4(){
    var x = document.getElementById('ans4');
    var y = document.getElementById('rot4');
    y.classList.toggle('rotate');
    x.classList.toggle('closed');
}

function toggle5(){
    var x = document.getElementById('ans5');
    var y = document.getElementById('rot5');
    y.classList.toggle('rotate');
    x.classList.toggle('closed');
}

function toggle6(){
    var x = document.getElementById('ans6');
    var y = document.getElementById('rot6');
    y.classList.toggle('rotate');
    x.classList.toggle('closed');
}
