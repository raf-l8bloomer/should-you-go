// Introduction saving yourName
// However, needs a loop until a proper name is saved but idk what or how to format that

let yourName = prompt("Hey! What's your name?");
if (yourName === null || yourName === "" ) {
    let yourName = prompt("Sorry, I didn't catch that. What was your name again?");
    alert(`Oh, hi ${yourName}! My bad, I have bad hearing. So ya don't know if you should go out huh? Lemme help you out-`)
} else {
    alert(`Hi ${yourName}! So ya don't know if you should go out huh? Lemme help you out-`);
}

let rideshare = prompt('Are you ridesharing? (Yes/No)');
if (rideshare.toUpperCase() === "YES") {
    let rideshare$ = prompt('Okay, but how much is the ride one way?');
    let cost = Number(rideshare$.replace(/[^\d.]/g, ''));
    if (parseInt(cost) < 30) {
        let eaten = prompt("Not bad! Have you eaten yet though? (Yes/No)");
        if (eaten.toUpperCase() === "YES"){
            alert(`Great! Cause you're not you when you're hungry..`);
            // ENDING SOCIAL BATTERY CHECK IN BRANCH
            let social = prompt("Let's do a social battery check-in: On a scale from 1-10, how social are you feeling?"); 
            if (parseInt(social) >= 5 ){
                let whosThere = prompt("Yay you're feelin charged~ Will there be more friends, acquaintances, or strangers there? (valid answers: friends/acquaintances/strangers)");
                if(whosThere.toUpperCase() === "FRIENDS"){
                    alert(`omg just gooooo ${yourName}! Your friends are all waiting and excited to see you!`);
                } else if (whosThere.toUpperCase() === "ACQUAINTANCES") {
                    alert(`You got this ${yourName}! Treat yourself, take risks, and turn them into friends!`);
                } else if (whosThere.toUpperCase() === "STRANGERS") {
                    alert(`You sound like you're downnnn, ${yourName}. You never know who you're gonna meet! Just be safe out there <3`);
                } else {
                    alert(`oh girl, idk what you typed - musta been a typo haha we're gonna have to start over (refresh page).`)
                }
             } else {
            alert(`Stomach full but social battery on E? Save it, ${yourName}.`)
             }
        } else {
            let eaten$ = prompt ("Do you have eating money for where you're going? (Yes/No)");
            if (eaten$.toUpperCase() === "YES"){
                alert(`Don't spend it all on drinks though cause tbh ${yourName}, you're not you when you're hungry...`);
                let social = prompt("Let's do a social battery check-in: On a scale from 1-10, how social are you feeling?");
                if (parseInt(social) >= 5 ){
                    let whosThere = prompt("Yay you're feelin charged~ Will there be more friends, acquaintances, or strangers there? (valid answers: friends/acquaintances/strangers)");
                    if(whosThere.toUpperCase() === "FRIENDS"){
                         alert(`omg just gooooo ${yourName}! Your friends are all waiting and excited to see you!`);
                    } else if (whosThere.toUpperCase() === "ACQUAINTANCES") {
                         alert(`You got this ${yourName}! Treat yourself, take risks, and turn them into friends!`);
                    } else if (whosThere.toUpperCase() === "STRANGERS") {
                         alert(`You sound like you're downnnn, ${yourName}. You never know who you're gonna meet! Just be safe out there <3`);
                    } else {
                         alert(`oh girl, idk what you typed - musta been a typo haha we're gonna have to start over (refresh page).`)
                     }
                 } else {
                    alert(`Save your money and energy, ${yourName}. People deserve you at your best!`)
                 }
             } else {
                 alert(`Shit is adding UGHP. Let's save and chill @ home, ${yourName}`);
            }
        }

    } else {
        alert(`DAAAAAYYUMNN. It's not worth it babes. Party @ home ${yourName}.`);
    }
} else {
    let driving = prompt('Are you driving? (Yes/No)');
    if (driving.toUpperCase() === "YES"){
        let eaten = prompt("Ok chill~ but have you eaten yet? (Yes/No)");
        if (eaten.toUpperCase() === "YES"){
            alert(`Great! Cause you're not you when you're hungry..`);
            let social = prompt("Let's do a social battery check-in: On a scale from 1-10, how social are you feeling?"); 
            if (parseInt(social) >= 5 ){
                let whosThere = prompt("Yay you're feelin charged~ Will there be more friends, acquaintances, or strangers there? (valid answers: friends/acquaintances/strangers)");
                if(whosThere.toUpperCase() === "FRIENDS"){
                    alert(`omg just gooooo ${yourName}! Your friends are all waiting and excited to see you!`);
                } else if (whosThere.toUpperCase() === "ACQUAINTANCES") {
                    alert(`You got this ${yourName}! Treat yourself, take risks, and turn them into friends!`);
                } else if (whosThere.toUpperCase() === "STRANGERS") {
                    alert(`You sound like you're downnnn, ${yourName}. You never know who you're gonna meet! Just be safe out there <3`);
                } else {
                    alert(`oh girl, idk what you typed - musta been a typo haha we're gonna have to start over (refresh page).`)
                }
             } else {
            alert(`Stomach full but social battery on E? Gas is hella expensive anyways. Save it, ${yourName}`)
             }
        } else {
            let eaten$ = prompt ("Do you have eating money for where you're going? (Yes/No)");
            if (eaten$.toUpperCase() === "YES"){
                alert(`Don't spend it all on drinks though cause tbh ${yourName}, you're not you when you're hungry...`);
                let social = prompt("Let's do a social battery check-in: On a scale from 1-10, how social are you feeling?");
                if (parseInt(social) >= 5 ){
                    let whosThere = prompt("Yay you're feelin charged~ Will there be more friends, acquaintances, or strangers there? (valid answers: friends/acquaintances/strangers)");
                    if(whosThere.toUpperCase() === "FRIENDS"){
                         alert(`omg just gooooo ${yourName}! Your friends are all waiting and excited to see you!`);
                    } else if (whosThere.toUpperCase() === "ACQUAINTANCES") {
                         alert(`You got this ${yourName}! Treat yourself, take risks, and turn them into friends!`);
                    } else if (whosThere.toUpperCase() === "STRANGERS") {
                         alert(`You sound like you're downnnn, ${yourName}. You never know who you're gonna meet! Just be safe out there <3`);
                    } else {
                         alert(`oh girl, idk what you typed - musta been a typo haha we're gonna have to start over (refresh page).`)
                     }
                 } else {
                    alert(`Save your money and energy, ${yourName}. People deserve you at your best!`)
                 }
             } else {
                 alert('Save your money because gas is hella expensive anyways ${yourName}');
            }
        }
                
    // NOT DRIVING BRANCH

    } else {
        let eaten = prompt("Ok chill~ but have you eaten yet? (Yes/No)");
        if (eaten.toUpperCase() === "YES"){
            alert(`Oh good... cause no shade ${yourName}, you're not you when you're hungry..`);
            let social = prompt("Let's do a social battery check-in: On a scale from 1-10, how social are you feeling?");
            if (parseInt(social) >= 5 ){
                let whosThere = prompt("Yay you're feelin charged~ Will there be more friends, acquaintances, or strangers there? (valid answers: friends/acquaintances/strangers)");
                if(whosThere.toUpperCase() === "FRIENDS"){
                    alert(`omg just gooooo ${yourName}! Your friends are all waiting and excited to see you!`);
                } else if (whosThere.toUpperCase() === "ACQUAINTANCES") {
                    alert(`You got this ${yourName}! Treat yourself, take risks, and turn them into friends!`);
                } else if (whosThere.toUpperCase() === "STRANGERS") {
                    alert(`You sound like you're downnnn, ${yourName}. You never know who you're gonna meet! Just be safe out there <3`);
                } else {
                    alert(`oh girl, idk what you typed - musta been a typo haha we're gonna have to start over (refresh page).`)
                }
            } else {
                 alert(`Stomach full but social battery on E? Sounds like you're ready for bed, ${yourName} LMAO let's not push ourselves. Brush your teeth to lock the night in.`)
             }
        } else {
            let eaten$ = prompt ("Do you have eating money for where you're going? (Yes/No)");
            if (eaten$.toUpperCase() === "YES"){
                alert(`Don't spend it all on drinks though cause tbh ${yourName}, you're not you when you're hungry...`);
                let social = prompt("Let's do a social battery check-in: On a scale from 1-10, how social are you feeling?");
                if (parseInt(social) >= 5 ){
                    let whosThere = prompt("Yay you're feelin charged~ Will there be more friends, acquaintances, or strangers there? (valid answers: friends/acquaintances/strangers)");
                     if(whosThere.toUpperCase() === "FRIENDS"){
                    alert(`omg just gooooo ${yourName}! Your friends are all waiting and excited to see you!`);
                     } else if (whosThere.toUpperCase() === "ACQUAINTANCES") {
                    alert(`You got this ${yourName}! Treat yourself, take risks, and turn them into friends!`);
                        } else if (whosThere.toUpperCase() === "STRANGERS") {
                    alert(`You sound like you're downnnn, ${yourName}. You never know who you're gonna meet! Just be safe out there <3`);
                     } else {
                    alert(`oh girl, idk what you typed - musta been a typo haha we're gonna have to start over (refresh page).`)
                     }
                 } else {
                    alert(`Save your money and energy, ${yourName}. People deserve you at your best!`)
                 }
            } else {
                alert(`Eat a quick something first and come back. We'll do a social battery check-in.`);
                let social = prompt("Let's do a social battery check-in: On a scale from 1-10, how social are you feeling?");
                if (parseInt(social) >= 5 ){
                    let whosThere = prompt("Yay you're feelin charged~ Will there be more friends, acquaintances, or strangers there? (valid answers: friends/acquaintances/strangers)");
                     if(whosThere.toUpperCase() === "FRIENDS"){
                        alert(`omg just gooooo ${yourName}! Your friends are all waiting and excited to see you!`);
                     } else if (whosThere.toUpperCase() === "ACQUAINTANCES") {
                         alert(`You got this ${yourName}! Treat yourself, take risks, and turn them into friends!`);
                        } else if (whosThere.toUpperCase() === "STRANGERS") {
                         alert(`You sound like you're downnnn, ${yourName}. You never know who you're gonna meet! Just be safe out there <3`);
                     } else {
                         alert(`oh girl, idk what you typed - musta been a typo haha we're gonna have to start over (refresh page).`)
                     }
                 } else {
                         alert(`Save your money and energy, ${yourName}. People deserve you at your best!`)
                 }
            }
        }
    }
} 