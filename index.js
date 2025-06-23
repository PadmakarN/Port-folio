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


function SendWhatsApp() {
    debugger;
    const name = $('#nameinput').val();
    const email = $('#emailinput').val();
    const subject = $('#subjetinput').val(); // Note: typo in ID might be intended
    const msg = $('#msginput').val();

    // Construct the message
    const data = 'Name: ' + name + '\n' +
                 'Email: ' + email + '\n' +
                 'Subject: ' + subject + '\n' +
                 'Message: ' + msg;

    // Encode the message for URL
    const encodedData = encodeURIComponent(data);

    // Redirect to WhatsApp
    const phoneNumber = '7057262105'; // Include country code if needed, e.g., '917057262105'
    const url = `https://wa.me/${phoneNumber}?text=${encodedData}`;

    window.open(url, '_blank'); // Opens in new tab
}
