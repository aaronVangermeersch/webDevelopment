const setup = () => {
    const calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", () => {
        let total = 0;

        // Selecteer alle productrijen behalve de laatste (totaal)
        const rows = document.querySelectorAll("table tr:not(:last-child)");

        rows.forEach(row => {
            const priceText = row.children[1].textContent;
            const amountInput = row.children[2].querySelector("input");
            const taxText = row.children[3].textContent;
            const subtotalCell = row.children[4];

            const price = parseFloat(priceText.replace("€", "").trim());
            const amount = parseFloat(amountInput.value) || 0;
            const tax = parseFloat(taxText.replace("%", "").trim()) / 100;

            const subtotal = amount * price * (1 + tax);
            subtotalCell.textContent = subtotal.toFixed(2) + " €";
            total += subtotal;
        });

        document.getElementById("totalPrice").textContent = total.toFixed(2) + " €";
    });
};

window.addEventListener("load", setup);