document.querySelectorAll(".price").forEach((node) => {
  node.textContent = new Intl.NumberFormat("ukr-UA", {
    currency: "UAH",
    style: "currency",
  }).format(node.textContent);
});
