function verifyCartTotal(itemPrices, displayedTotal) {
    if(!(Array.isArray(itemPrices))){   
        return 'Invalid';
    }

    // for(let item of itemPrices){
    //   if(typeof item !== 'number'){
    //     return 'Invalid';
    //   }
    // }
           
    let validateArray = itemPrices.map((item)=>{
        if(typeof item !== 'number'){
            return 'Invalid';
        }
    })

    
        let  sumAllArrayNumbar = itemPrices.reduce((acc, item)=>{
     return acc + item;
    }, 0);

    return sumAllArrayNumbar === displayedTotal




}


const arr = [250, 400, 150];
// const arr = 343;
// const arr = 'name';
const target = 800;
const result = verifyCartTotal(arr, target);
console.log(result);
console.log(verifyCartTotal([2342, 2343, 343 , 34], 5050));