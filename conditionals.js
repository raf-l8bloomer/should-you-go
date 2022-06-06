let yourName = prompt("Hey! What's your name?");
if (yourName === null || yourName === "" ) {
    let yourName = prompt("Sorry, I didn't catch that. What was your name again?");
    alert(`Oh, hi ${yourName}! My bad, I have bad hearing. So ya don't know if you should go out huh? Lemme help you out-`)
} else {
    alert(`Hi ${yourName}! So ya don't know if you should go out huh? Lemme help you out-`);
}
