function calculate() {

    var input = new Date(document.getElementById("inputDate").value);
    var today = new Date();

    var birthday = {
        date: input.getDate(),
        month: input.getMonth() + 1,
        year: input.getFullYear()
    }
    var tdate = today.getDate()
    var tmonth = today.getMonth() + 1
    var tyear = today.getFullYear()

    var ageyear, agemonth, agedate;

    if (tyear >= birthday.year) {
        ageyear = tyear - birthday.year;
    }

    if (birthday.month > tmonth) {
        ageyear--
        agemonth = ((tyear - 2000) - birthday.month) - tmonth;

    } else {
        agemonth = tmonth - birthday.month;
    }

    if (birthday.date > tdate) {
        //conditions to be written
    } else
        agedate = tdate - birthday.date;

    if (birthday.year > tyear) {
        alert("Date of Birth should not be greater than current Year")

    } else {

        document.getElementById("agebox").value = "You are " + ageyear + " Years " + agemonth + " months and " + agedate + " days old";
    }



}