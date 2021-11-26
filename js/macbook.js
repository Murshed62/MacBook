const minMemory = document.getElementById("min-memory");
const midMemory = document.getElementById("mid-memory");
const minStorage = document.getElementById("min-storage");
const midStorage = document.getElementById("mid-storage");
const lgStorage = document.getElementById("lg-storage");
const minDelivery = document.getElementById("min-delivery");
const midDelivery = document.getElementById("mid-delivery");

const memoryField = document.getElementById("memory-field");
const storageField = document.getElementById("storage-field");
const deliveryField = document.getElementById("delivery-field");
const totalField = document.getElementById("total-field");
const bestPriceField = document.getElementById("bestPrice-field");

let finalPrice = document.getElementById("final-price");

// calculateTotal
function updateTotal() {
  const memoryInput = parseFloat(memoryField.innerText);
  const storageInput = parseFloat(storageField.innerText);
  const deliveryInput = parseFloat(deliveryField.innerText);
  const bestPriceInput = parseFloat(bestPriceField.innerText);
  const grandTotal = memoryInput + storageInput + deliveryInput;
  const total = grandTotal + bestPriceInput;
  totalField.innerText = total;
  finalPrice.innerText = total;
}

// update Field
minMemory.addEventListener("click", function () {
  memoryField.innerText = "0";
  updateTotal();
});
midMemory.addEventListener("click", function () {
  memoryField.innerText = "180";
  updateTotal();
});

minStorage.addEventListener("click", function () {
  storageField.innerText = "0";
  updateTotal();
});
midStorage.addEventListener("click", function () {
  storageField.innerText = "100";
  updateTotal();
});
lgStorage.addEventListener("click", function () {
  storageField.innerText = "180";
  updateTotal();
});

minDelivery.addEventListener("click", function () {
  deliveryField.innerText = "0";
  updateTotal();
});
midDelivery.addEventListener("click", function () {
  deliveryField.innerText = "20";
  updateTotal();
});

// promoCode setup
document.getElementById("apply-voucher").addEventListener("click", function () {
  const promoCode = document.getElementById("promo-code").value;
  const totalField = document.getElementById("total-field").innerText;
  const totalAmount = parseFloat(totalField);
//   check promoCode
  if (promoCode == 'stevekaku'){
      const discount = (totalAmount / 100) * 20;
      finalPrice.innerText = totalField - discount;
  }
  document.getElementById('promo-code').value = '';
  
});
