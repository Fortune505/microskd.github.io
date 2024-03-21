document.getElementById('loanAmount').addEventListener('input', function(e) {
    document.getElementById('output').innerText = e.target.value;
    calculate();
});

function setTerm(term) {
    document.getElementById('loanTerm').value = term;
    calculate();
}

function calculate() {
    let loanAmount = document.getElementById('loanAmount').value;
    let loanTerm = document.getElementById('loanTerm').value;
    let period = loanTerm * 1;
    let test = loanAmount / period;
    //let icPercent = (test * 30)/100;
    let test2 = (test * 30)/100;
    let payment = test2 + test;
    let icPercent = payment * period;

    document.getElementById('payment').innerText = payment.toFixed(0);
}