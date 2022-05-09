function calculate() {

    var input = new Date(document.getElementById("inputDate").value);
    var today = new Date();

    var birthday = {
        date: input.getDate(),
        month: input.getMonth(),
        year: input.getFullYear()
    }


    var tdate = today.getDate()
    var tmonth = today.getMonth()
    var tyear = today.getFullYear()


    var ageyear = tyear - birthday.year;
    var agemonth = tmonth - birthday.month;
    var agedate = tdate - birthday.date;

    if (birthday.year > tyear) {

        alert("Date of Birth should not be greater than current Year")

    } else {

        document.getElementById("agebox").value = "You are " + ageyear + " Years " + agemonth + " months and " + agedate + " days old";
    }



}