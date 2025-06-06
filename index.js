function getexpdays(fromdatestr){
const fromDate =new Date(fromdatestr);
const toDate= new Date();

let years=toDate.getFullYear()-fromDate.getFullYear();
let months=toDate.getMonth()-fromDate.getMonth();
let days=toDate.getDate()-fromDate.getDate();

if (days<0){
months-=1;
const prevmonth=new Date(toDate.getFullyear(),toDate.getMonth(),0);
days+=prevMonth.getDate();
}
if(month <0){
year -=1;
months +=12;}

return {years,month,days};
}

alert('')