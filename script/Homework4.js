function pow (a,b){
    let result=1;
    for (i=1; i<=b; i++){
        result=result*a;
        console.log(result);
    };
};

pow(3,6);