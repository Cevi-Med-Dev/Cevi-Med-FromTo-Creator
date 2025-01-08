console.log("running");
var PDFs = ''
document.querySelector(".sendBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const pdfList = document.querySelector("#right");
  html2pdf(pdfList);
  PDFs = html2pdf().from(pdfList).save();
  let driveBtn = document.querySelector(".g-savetodrive")
  driveBtn.setAttribute(".data-src", PDFs)
});

let fromToInfo = {};

Array.from(document.querySelectorAll("input")).forEach((input) => {
  input.addEventListener("focusout", ({ target }) => {
    fromToInfo[`${target.name}`] = `${target.value}`;
    document.getElementById(`${target.name}`).innerText = `${target.value}`;
  });
});

Array.from(document.querySelectorAll("select")).forEach((input) => {
  input.addEventListener("change", ({ target }) => {
    if (target.name === "route") {
      document.getElementById(`${target.name}`
      ).innerHTML = `<strong>${target.value}</strong>`;
    }
    if (target.name === "Qty") {
      document.getElementById("right").innerHTML = ""
      for (let i = 0; i < target.value; i++) {
        console.log(i , "/",target.value,fromToInfo);
        document.getElementById("right").innerHTML += 
        ` <article class="pdf">
        <span id="custName"> ${fromToInfo.custName} </span>
        <strong>
            <span id="invoice"> ${fromToInfo.invoice}</span>
        </strong>
        <span id="address"> ${fromToInfo.address} </span>
        <span id="prodName">${fromToInfo.prodName}</span>
        <small id="route">${fromToInfo.notes}</small>
        <small id="qty">${i+1}/${target.value}</small>
    </article>
    <div class="html2pdf__page-break"></div>
    `
            }
    }
  });
});

// if (target.name === "Qty") {
//   console.log(target.value)
//   for (let i = 0; i < target.value; i++) {
//     document.getElementById("right") += `
//     <article class="pdf">
//             <span id="custName"> Customer Name </span>
//             <strong>
//                 <span id="invoice"> Invoice # </span>
//             </strong>
//             <span id="address"> Full Address </span>
//             <span id="prodName">Product Name and Description Specs</span>
//             <span id="route"></span>
//             <span id="qty"></span>
//     </article>`
//   }

// }
