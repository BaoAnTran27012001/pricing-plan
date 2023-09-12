const infomation = {
  brand: [],
  webflow: [],
  self: [],
  dev: [],
};
const strategyGroupEl = document.querySelectorAll(".strategy-container input");
const brandingGroupEl = document.querySelectorAll(".branding-container input");
const devGroupEl = document.querySelectorAll(".dev-container input");
const priceTextEl = document.querySelector(".price h2");
const priceSubEl = document.querySelector(".price2 h2");
const priceSubInputEl = document.querySelector("#last");
const optionWebFlow = document.getElementById('webflow');
const optionSelf = document.getElementById('self');
optionWebFlow.addEventListener("change",()=>{
  if(infomation.webflow.length !== 0){
    infomation.webflow.push(optionWebFlow.value);
    let previousValue = +infomation.webflow.shift();
    let currentValue = +infomation.webflow[0];
    priceTextEl.textContent = +priceTextEl.textContent + currentValue - previousValue;
  }else{
    infomation.webflow.push(optionWebFlow.value);
    let value = +infomation.webflow[0];
    priceTextEl.textContent = +priceTextEl.textContent + value;
  }
})
strategyGroupEl.forEach((ele) => {
  ele.addEventListener("input", () => {
    if (ele.checked) {
      priceTextEl.textContent =
        +priceTextEl.textContent + Number.parseInt(ele.value);
        priceSubEl.textContent = +priceTextEl.textContent * 1.5;
        priceSubInputEl.value = priceTextEl.textContent;
      } else {
        priceTextEl.textContent =
        +priceTextEl.textContent - Number.parseInt(ele.value);
        priceSubEl.textContent = priceTextEl.textContent;
        priceSubInputEl.value = priceTextEl.textContent;
    }
  });
});

const preprocessingInput = (inputList) => {
  inputList.forEach((input) => {
    input.checked = false;
  });
};
const preprocessingOption = (inputList) => {
  inputList.value = "0";
};
const radioSelect = (radioList, ele) => {
  if (ele.checked) {
    if (radioList.length !== 0) {
      radioList.push(ele.value);
      let previousValue = +radioList.shift();
      let currentValue = +radioList[0];
      priceTextEl.textContent =
        +priceTextEl.textContent + currentValue - previousValue;

      
    } else {
      radioList.push(ele.value);
      let value = +radioList[0];
      priceTextEl.textContent = +priceTextEl.textContent + value;

    }
  }
};
brandingGroupEl.forEach((ele) => {
  ele.addEventListener("input", () => {
    radioSelect(infomation.brand, ele);
  });
});
devGroupEl.forEach((ele)=>{
  ele.addEventListener("input",()=>{
    radioSelect(infomation.dev,ele);
  })
})
document.body.addEventListener("load", preprocessingInput(strategyGroupEl));
document.body.addEventListener("load", preprocessingInput(brandingGroupEl));
document.body.addEventListener("load", preprocessingInput(devGroupEl));
document.body.addEventListener("load", preprocessingOption(optionWebFlow));
document.body.addEventListener("load", preprocessingOption(optionWebSelf));

[3400]; //push(3400)
