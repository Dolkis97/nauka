window.addEventListener("click", (e) => {
  console.log(e.clientX, e.clientY);

  if (e.clientX % 2 == 0 && e.clientY % 2 == 0) {
    document.body.style.backgroundColor = "red";
  } else if (!(e.clientX % 2 == 0) && !(e.clientY % 2 === 0)) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "blue";
  }
});
