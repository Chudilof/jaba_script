function drawTriangle (lines,simbol='*'){
    let s=simbol;
    for (i=1; i<=lines; i++){
        console.log(s);
        s=s+simbol;
    };
};
function drawTriangleNext (lines,simbol='*'){
    let s=simbol;
    let i=0
    while(i<lines){
        console.log(s);
        s=s+simbol;
        i++;
    }
};

drawTriangle(5,"-");
drawTriangleNext(6,"0");
