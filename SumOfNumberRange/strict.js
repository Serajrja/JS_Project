function addfun(){
    let start =parseFloat(document.getElementById("start").value);
    let end =parseFloat(document.getElementById("end").value);
    let array1=[];
    if(start < 0 || start >= end){
        document.getElementById("result").innerHTML="Start Number Should Not Be Less Than 0 And Start Number should Not Be Greater than End Number.";
    }else{
        for(start;start<=end;start++){
            array1.push(start);
            let firstValue = array1[0];
            let lastValue = array1[array1.length - 1];
            document.getElementById("result").innerHTML=`${firstValue}  To ${lastValue}`;
            }
            const sumagain= array1.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
            document.getElementById("submaincontainer").innerHTML=`Total is : ${sumagain}`;
    }
    document.getElementById("start").value='';
    document.getElementById("end").value='';

    setTimeout(() => {
        location.reload();
    }, 20000);
}

