const bttn = document.getElementById("submit");

bttn.addEventListener('click', () => {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const check = document.getElementById("check").value;

    if (fname !== '' && lname !== '' && email !== '' && check === true) {
        document.getElementById("submit").style.display = "none";
        document.getElementById("loader").style.display = "block";
        document.getElementById("form").style.color = "blue"; //testing
        setTimeout(() => {
            document.getElementById("loader").classList.remove("appear")
            document.getElementById("thanks").innerText = 'thanks for signing up!';
        }, 3000);
    } else {};
    if (fname === '') {
        document.getElementById("fname").classList.add("redBorder");
    } else {
        document.getElementById("fname").classList.remove("redBorder");
    };
    if (lname === '') {
        document.getElementById("lname").classList.add("redBorder");
    } else {
        document.getElementById("lname").classList.remove("redBorder");
    };
    if (email === '') {
        document.getElementById("email").classList.add("redBorder");
    } else {
        document.getElementById("email").classList.remove("redBorder");
    };
    if (check !== true) {
        document.getElementById("check").classList.add("redBorder");
    } else {
        document.getElementById("check").classList.remove("redBorder");
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }