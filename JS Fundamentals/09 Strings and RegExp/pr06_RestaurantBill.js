function calculate(bill){
    // my solution
    // let items = [];
    // let sum = 0;
    // for (let i = 0; i < bill.length; i++){
    //     if (i % 2 == 0){
    //         items.push(bill[i]);
    //     }
    //     else{
    //         let price = Number(bill[i]);
    //         sum += price;
    //     }
    // }
    // console.log("You purchased " + items.join(', ') + ` for a total sum of ${sum}`);


    // functional solution
    let towns = bill.filter((e, i) => i % 2 == 0);
    let prices = bill.filter((e, i) => i % 2 == 1).map(Number);
    let sum = prices.reduce((a, b) => a + b);

    console.log("You purchased " + towns.join(', ') + ` for a total sum of ${sum}`);
}

calculate(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])