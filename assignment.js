// https://github.com/Plabss/assignment-03








// Problem-01:

function kilometerToMeter(km) {
    if (typeof km != 'number') {
        return "You Should enter a Number."
    }
    else if (km < 0) {
        return "Please enter a non-negative value. (Distance can not be negative)";
    }
    else {
        return km * 1000;          // 1 kilo meter = 1000 meter
    }
}









// Problem-02:

function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop) {
    let result = 0;
    if (typeof numberOfMobile != 'number' || typeof numberOfWatch != 'number' || typeof numberOfLaptop != 'number' || numberOfLaptop % 1 != 0 || numberOfMobile % 1 != 0 || numberOfWatch % 1 != 0) {
        return "You must enter integer Numbers.(Number of Watch/Mobile/Laptop can not be 'String' or 'Float' or 'Array'.)"
    }
    else if (numberOfWatch < 0 || numberOfMobile < 0 || numberOfLaptop < 0) {
        return "Please enter non-negative value of Parameter. (Number of Watch/Mobile/Laptop can not be negative)"
    }
    else {
        result = result + (numberOfWatch * 50);   // Price of a watch = 50 $
        result = result + (numberOfMobile * 100); // Price of a Mobile = 100 $
        result = result + (numberOfLaptop * 500); // Price of a Laptop = 500 $
        return result;
    }
}




// Problem-03:

function hotelCost(numberOfDays) {
    if (typeof numberOfDays != 'number' || numberOfDays % 1 != 0) {
        return "You Should enter a Number and It must be an Integer.(Number of days can not be 'string' or 'float')"
    }
    else if (numberOfDays < 0) {
        return "Please enter a non-negative value of Parameter. (Number of days can not be negative)"
    }
    else if (numberOfDays <= 10 && numberOfDays >= 0) {
        return numberOfDays * 100;                                      // In first 10 days: cost=100Tk/Day
    }
    else if (numberOfDays > 10 && numberOfDays <= 20) {
        return (10 * 100) + ((numberOfDays - 10) * 80);                 // In 11th to 20th day: cost=80Tk/Day
    }
    else {
        return (10 * 100) + (10 * 80) + ((numberOfDays - 20) * 50);     // After 20 days: cost=50Tk/Day
    }
}







// Problem-04:

function megaFriend(arr) {
    if (arr.length == 0) {
        return "Opps! You have no friend.";
    }
    else {
        var nameOfMaximumlength = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length > nameOfMaximumlength.length) {
                nameOfMaximumlength = arr[i];
            }
        } var result = nameOfMaximumlength;
        if (typeof result != 'string') {
            return "You should push an array of only 'String' into parameter.";
        }
        else {
            return result;
        }
    }
}



