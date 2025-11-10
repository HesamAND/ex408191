for (let i =1; i<= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "cointrap");
    }else if (i % 5 === 0) {
        console.log("trap");        
    }else if (i % 3 === 0){
        console.log("coin");  
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "coin");
          console.log(i, "trap");
    }
}

