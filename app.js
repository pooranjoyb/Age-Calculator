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


    //Alert Conditions
    if (birthday.year > tyear) {

        alert("Date of Birth should not be greater than current Year")
        document.getElementById("agebox").value = "ERROR";
        console.log("Age Calculation Failure");
    } else if (birthday.year == tyear && birthday.month == tmonth && birthday.date >= tdate) {
        alert("Date should not be greater or equal than currrent date for current month")
        document.getElementById("agebox").value = "ERROR";
        console.log("Age Calculation Failure");
    } else
        console.log("Age Calculation Success");

    //logic for Year

    ageyear = tyear - birthday.year;


    //Logic for Month
    if (birthday.month > tmonth && birthday.date > tdate) {
        ageyear--
        agemonth = (((tmonth + 12) - 1) - birthday.month);

    } else if (birthday.month > tmonth) {
        ageyear--
        agemonth = ((tmonth + 12) - birthday.month);

    } else {
        agemonth = tmonth - birthday.month;
    }

    //Logic for Date
    if (birthday.date > tdate && birthday.month > tmonth) {

        agedate = (((tdate + 31) - 1) - birthday.date);

    } else if (birthday.date > tdate && birthday.month < tmonth) {

        agemonth--;
        agedate = (((tdate + 31) - 1) - birthday.date);

    } else
        agedate = tdate - birthday.date;


    //Output
    if (isNaN(agedate) == 1 || isNaN(agemonth) == 1 || isNaN(ageyear) == 1) {
        alert("Enter your Birthday in mm/dd/yyyy format ")

    } else if (ageyear == 0 && agemonth == 0) {
        if (agedate < 0) {

            document.getElementById("agebox").value = "ERROR";
        } else
            document.getElementById("agebox").value = agedate + " days old";
    } else if (ageyear == 0) {

        document.getElementById("agebox").value = agemonth + " months and " + agedate + " days old";
    } else if (agedate == 0) {

        document.getElementById("agebox").value = ageyear + " Years and " + agemonth + " months old";
    } else if (agemonth == 1 && agedate == 1) {

        document.getElementById("agebox").value = agemonth + " month and " + agedate + " day old";
    } else if (agedate == 1) {
        document.getElementById("agebox").value = agemonth + " months " + agedate + " day old";

    } else if (agedate == 1) {

        document.getElementById("agebox").value = ageyear + " Years " + agemonth + " months " + agedate + " day old";
    } else {

        document.getElementById("agebox").value = ageyear + " Years " + agemonth + " months and " + agedate + " days old";
    }
}
