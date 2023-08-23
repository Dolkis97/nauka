

const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];



const showMessage = (e) => {
 

  passwords.forEach((password, i) => {
  
    const input = e.target.value.toLowerCase();

    if (password.toLowerCase() === input) {
      div.textContent = messages[i];
    }
  });
};

input.addEventListener("input", showMessage);
