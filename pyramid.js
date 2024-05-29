console.log("Making Pyramid using Named functions\n");
function printPyramid(height) {
    for (var i = 0; i < height; i++) {
        var row = '';
        //console.log(i,"i");
        //adding space
        for (var j = 0; j < height - i - 1; j++) {
            row += '';
            //   console.log(j,"j");
        }
        //adding asteriks
        for (var k = 0; k <= i; k++) {
            row += '*';
            //  console.log(k,"k");
        }
        console.log(row);
    }
}
var height = 10;
printPyramid(height);
