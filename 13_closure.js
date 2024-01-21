var globalVariable =100;
function outerFun() {
    let outerFunVariable = 200;
    let innerFun = function() {
        let innerFunVariable = 300;
        console.log(`${innerFunVariable}`);
        console.log(`${outerFunVariable}`);
        console.log(`${globalVariable}`);
        
    }
    return innerFun;

}

outerFun()();