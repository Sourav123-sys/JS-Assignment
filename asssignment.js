
//  First Problem : Kilometer To Meter..

function kilometerToMeter(kilometer){

    if(kilometer >= 0){

        return kilometer * 1000

    }

    return "invalid !" ;
}

let answer = kilometerToMeter(20);
console.log(answer);




//  Second Problem : Budget Calculator..

function budgetCalculator( watch, phone, laptop ) {
        
    if( watch >= 0 && phone >= 0 && laptop >= 0){

        return watch * 50 + phone * 100 + laptop * 500; 
    }

    else{
        return 'invalid !' ;          //if you won't buy a product,put '0' for that section;
    }

}


let cost = budgetCalculator(250,10000,35000);
console.log(cost);




//  Third Problem : Hotel Cost..

function hotelCost(costPerTenDays){                        // costPerTenDays means fist ten days cost.

    if(costPerTenDays <= 10 && costPerTenDays > 0){        

        return costPerTenDays * 100 ;                      // per days cost for first ten days.  
        

    }

    else if(costPerTenDays <= 20 && costPerTenDays > 10){

        let secondTenDaysCost = costPerTenDays - 10;
        return secondTenDaysCost * 80 + 1000 ;              // including first ten days cost(1000).
    
    
    }

    else if(costPerTenDays >= 21){

        let extraDaysCost = costPerTenDays - 20;
        return  extraDaysCost * 50 + 1800 ;                 // including first and second ten days cost(1800)

    }

    else{
        return 'invalid !' ;
    }
}


let bill=hotelCost(2500);
console.log(bill);




//  Forth Problem : Mega Friend
//let friendsName = ['Samsul Anwar','Asraful Hossain','Promi Chowdhury','Asifur Rahman','Zora Arvin','Sourav Arefin'];

function megaFriend(friends) {
    let result = '';
    for (let i = 0; i<friends.length; i++){
        let element = friends[i];
        if(element.length > result.length){
            result = friends[i];
        }
        
    }
    
    return result;
}
let total = megaFriend(['Samsul Anwar','Asraful Hossain','Promi Chowdhury','Asifur Rahman','Zora Arvin','Sourav Arefin']);
console.log(total);