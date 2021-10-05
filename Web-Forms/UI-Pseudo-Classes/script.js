document.getElementById("billing-checkbox").addEventListener("change", toggleBilling);

function toggleBilling() {
  let billingItems = document.querySelectorAll("#billing input[type='text']");
  let billingLabels = document.querySelectorAll(".billing-label");

  billingItems.forEach((item, index) => {
    item.disabled = !item.disabled;

    if (billingLabels[index].getAttribute("class") === "billing-label disabled-label") {
      billingLabels[index].setAttribute("class", "billing-label");
    } else {
      billingLabels[index].setAttribute("class", "billing-label disabled-label");
    }
  });
}
