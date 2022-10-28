// Projekt 5 - Zadanie dla Ciebie
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];

//Zmiana każdej wartości tablicy na małe litery
// passwords.forEach((password, i) => {
//   passwords[i] = password.toLowerCase();
//   console.log(passwords[i]);
// });

const showMessage = (e) => {
  //tutaj rozwiązanie
  // PS. nie skupiaj się na niczym innym w zadaniu niż porównanie i wyświetlenie ( nie rób czyszczenia inputa itp. nie są potrzebne, chyba że masz ochotę)

  passwords.forEach((password, i) => {
    //zmienia to co wypsujemy w inpucie na małe znaki
    const input = e.target.value.toLowerCase();
    // text = password.toLowerCase();
    if (password.toLowerCase() === input) {
      div.textContent = messages[i];
    }
  });
};

input.addEventListener("input", showMessage);
