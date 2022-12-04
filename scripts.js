function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let servicequal = document.getElementById('servicequal').value;
    let people = document.getElementById('people').value;

    if(bill == '' | servicequal == 0){
        alert("Por favor, preencha todos os campos")
        return;
    }

    if(people == "" | people <= 1) {
        people = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let totaltip = (bill * servicequal) / people;
    totaltip = totaltip.toFixed(2);
    document.getElementById('tip').innerHTML = totaltip;
    document.getElementById('totaltip').style.display = "block";

}

document.getElementById('totaltip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsform').addEventListener('submit',calculateTip);