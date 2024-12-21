console.log("running");

document.querySelector(".sendBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const pdfList = document.querySelector("#right");
  html2pdf(pdfList);
});

Array.from(document.querySelectorAll("input")).forEach((input) => {
  input.addEventListener("focusout", ({ target }) => {
    console.log(target.value);
    console.log(target.name);
    document.getElementById(`${target.name}`).innerText = `${target.value}`;
  });
});
Array.from(document.querySelectorAll("select")).forEach((input) => {
  input.addEventListener("change", ({ target }) => {
    if (target.name === "route") {
      document.getElementById(
        `${target.name}`
      ).innerHTML = `<strong>${target.value}</strong>`;
    }
    if (target.name === "Qty") {
      console.log(target.value)
      for (let i = 0; i < target.value; i++) {
        let clone = document.querySelector(".pdf").cloneNode(true);
        document.getElementById("right").appendChild(clone);
      }

    }
  });
});
