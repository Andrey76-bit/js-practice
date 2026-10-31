const globalVar = "global";

function globalFn () {
    const a = "globalFn";

function lokalFn1() {

    const b = "lokalFn1";

    const a = "lokalFn1 a";

    console.log(b,a, globalVar);

}

function lokalFn2() {

    const c = "lokalFn2";

    
}

lokalFn1 ();
lokalFn2 ();



}

globalFn ();

