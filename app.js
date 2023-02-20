const pass = document.querySelector("#pass");
const confirm = document.querySelector('#confirm');
const errMessage = document.querySelector('.error');

const checkConformity = ()=>{
    if(confirm.value === pass.value){
        confirm.setCustomValidity('');
        errMessage.textContent = '';
    } else {
        confirm.setCustomValidity("Passwords do not match!");
        errMessage.textContent = '*Passwords do not match!';
    }
    
    confirm.reportValidity();
};




confirm.addEventListener('input', ()=>{
    checkConformity();
});

