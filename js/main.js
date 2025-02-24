function convertDollar() {
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");
    result.innerHTML = dollar * 50;

    if (dollar == "") {
        result.innerHTML = "Enter Value";
        return false;
    } else if (isNaN(dollar)) {
        result.innerHTML = "Enter Number";
        return false;
    } else if (dollar < 0) {
        result.innerHTML = "Enter Positive Number";
        return false;
    } else if (dollar == 0) {
        result.innerHTML = "Enter value bigger than zero";
        return false;
    } else {
        result.innerHTML = dollar * 50 + " L.E";
        return false;
    }
}