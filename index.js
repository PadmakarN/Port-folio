function getExpDays(fromDateStr) {
    const fromDate = new Date(fromDateStr);
    const toDate = new Date();

    let years = toDate.getFullYear() - fromDate.getFullYear();
    let months = toDate.getMonth() - fromDate.getMonth();
    let days = toDate.getDate() - fromDate.getDate();

    // Adjust days and months if necessary
    if (days < 0) {
        months -= 1;
        const prevMonth = new Date(toDate.getFullYear(), toDate.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return { years, months, days };
}

// Update HTML element with formatted experience string
const exp = getExpDays('01-Feb-2023');
$('#totalexp').text(`${exp.years} years, ${exp.months} months, ${exp.days} days`);


async function fetchgitdata(username){
try{
const response=await fetch(`https://api.github.com/users/${username}`)
const data=await response.json();
return data.avtar_url;
}catch(error){
alert('something went Wrong',error);
}
}

fetchgitdata('https://github.com/Padmakarn')

$(#submit).click(function(){
const name=$('#name')
});

function SendWhatsApp(){debugger;
 const name=$('#nameinput').val();
 const email=$('#emailinput').val();
 const subject=$('#subjetinput').val();
 const msg=$('#msginput').val();

const data='Name:'+name+'
'+'Email:'+email+'
'+ Subject:'+subject+'
'+Message:'+msg;

href://wa.me/7057262105/text=data

}