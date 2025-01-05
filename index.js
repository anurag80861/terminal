document.addEventListener("DOMContentLoaded", function () {
    let command = document.querySelector("#running");
    let container1 = document.querySelector('#container');
    let fixedText4 = document.querySelector('#fixedText4');
    let charText = document.querySelector("#text");
    let userinput = document.querySelector(".userinput");
    let fixedText2 = document.querySelector("#fixedText2");
    let str = "To get started; type help and press Enter!!";
    fixedText4.style.visibility = 'hidden';
    let help="help";

    function writeCbyC(str) {
        let i = 0;
        const textload = setInterval(() => {
            charText.innerHTML += str.charAt(i);
            i++;
            if (i >= str.length) {
                clearInterval(textload);
                fixedText4.style.visibility = 'visible';
            }
        }, 40);
    }

    const lang = document.querySelector(".language");

    let array = [
        "Hello",
        "Hola",
        "Bonjour",
        "Hallo",
        "Ciao",
        "Namaste",
        "Namaskaram",
        "SAT-SRI-KAL",
        "Jai Shree Ram",
        "Olá"
    ];

    function changeLanguage() {
        const randomIndex = Math.floor(Math.random() * array.length);
        lang.innerHTML = array[randomIndex];
    }

    changeLanguage();
    container1.addEventListener("animationend", () => writeCbyC(str));

    let helpFunction = (text) => {
        editableText.innerHTML = `Command executed ${text}`;
        let helpString = " Creating innovative solutions is key to driving progress in any field. impact on ";
        charText.innerHTML = "";
        fixedText4.style.visibility = 'hidden';
        writeCbyC(helpString);
    }
    let resumeFunction =  (text) => {
        userinput.value=help;
        editableText.innerHTML = `Command executed ${text}`;
        fixedText4.style.visibility = 'hidden';
        charText.innerHTML = "";
        let resumeString = "Here Is my resume guys";
        writeCbyC(resumeString);
        setTimeout(() => {
            window.open("https://drive.google.com/file/d/1f81fbff6RfUL7wGKXjc7aE113MVVf54B/view?usp=drive_link", "_blank")
        }, 4000)

    }
    let linkedinFunction = (text)=>{
        userinput.value=help;
        editableText.innerHTML=`command executed:${text}`;
        fixedText4.style.visibility = 'hidden';
        charText.innerHTML = "";
        let linkedinString='Hello Guys please visit to my linkedin profile ';
        writeCbyC(linkedinString);
        setTimeout(() => {
            window.open("https://www.linkedin.com/in/anurag-saini-72542a259", "_blank")
        }, 4000)

    }
    let githubFunction = (text)=>{
        userinput.value=help;
        editableText.innerHTML=`command executed:${text}`;
        fixedText4.style.visibility = 'hidden';
        charText.innerHTML = "";
        let githubString='Hello Guys please visit to my github profile ';
        writeCbyC(githubString);
        setTimeout(() => {
            window.open("https://github.com/anurag80861", "_blank")
        }, 4000)

    }

    function checkInputValue(input) {
        fixedText2.style.display = "none"
        switch (input) {
            case 'help':
                helpFunction(input);
                break;
            case "resume":
                resumeFunction(input);
                break;
            case "bio":
                bioFunction(input);
                break;
            case "linkedin":
                linkedinFunction(input);
                break;
            case "github":
                githubFunction(input);
                break;
            case "contact":
                contactFunction(input);
                break;
            case "random":
                randomFunction(input);
                break;
            case "date":
                dateFunction(input);
                break;
            case 'projects':
            case 'clear':
            case 'new':
            case 'man':
            case 'home':
                comingsoonFunction();
                break;
            default:
                errorFunction();
                break;
        }
    }

    userinput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkInputValue(userinput.value);
        }
    });
});
