document.getElementById("payBtn").addEventListener("click", async () => {
  try {
    const res = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 10000 }) // amount in centavos
    });
    const data = await res.json();
    console.log(data);
    alert("Check console for PayMongo response!");
  } catch (err) {
    console.error(err);
  }
});
