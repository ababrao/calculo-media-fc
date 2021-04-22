function submit() {

    var nota_n1 = document.querySelector("#n1").value;
    var nota_n2 = document.querySelector("#n2").value;
    var nota_aps = document.querySelector("#aps").value;

    media = ((nota_n1 * 0.4) + ((nota_n2 * 0.9 + nota_aps * 0.1)*0.6));
    
    document.getElementById("media").innerHTML = media.toFixed(1);

}


