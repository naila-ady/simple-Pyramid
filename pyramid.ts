
console.log("Making Pyramid using Named functions\n");
    function printPyramid(height:number):void{
    for (let i = 0 ; i < height; i++){
        let row='';
        //console.log(i,"i");
        
        //adding space
         for (let j = 0; j < height -i -1 ;j++){
             row+='';
        //   console.log(j,"j");
        }
    //adding asteriks
    for (let k = 0; k<= i;k++){
        row+= '*';
      //  console.log(k,"k");

    }
    console.log(row);

    }

    }
    let height=10;
    printPyramid(height);