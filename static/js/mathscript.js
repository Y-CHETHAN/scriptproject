areaBtn= document.querySelector('#button_cal');
areaBtn1= document.querySelector('#button_cal1');

areaBtn.addEventListener('click',function(e){

    txtR= document.querySelector('#value_r');
    txtC= document.querySelector('#value_c');

    let c;

    c= 3.14*parseFloat(txtR.value)*parseFloat(txtR.value);
    txtC.value=c;

});

areaBtn1.addEventListener('click',function(f){

    txtR1= document.querySelector('#value_r1');
    txtH= document.querySelector('#value_h');
    txtV= document.querySelector('#value_v');

    let v;

    v= 3.14*parseFloat(txtR1.value)*parseFloat(txtR1.value)*parseFloat(txtH.value);
    txtV.value=v;
});