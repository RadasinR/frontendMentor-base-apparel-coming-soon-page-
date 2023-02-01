function showError(elem) {
    elem.setAttribute('aria-invalid', true);
    elem.setAttribute('aria-describedby', "Email is not valid.");
    elem.classList.add("error");
    document.querySelector("#email-error").classList.add("show");

}

function empty() {

}

function clearError(elem) {
    elem.classList.remove("error");
    document.querySelector("#email-error").classList.remove("show");
    elem.setAttribute('aria-invalid', false);
    elem.setAttribute('aria-describedby', "Email not entered");
}
window.onload = ()=> {
    let input =  document.querySelector("input");
   input.addEventListener( "invalid",
    function(event) {
        event.preventDefault();
    });
}