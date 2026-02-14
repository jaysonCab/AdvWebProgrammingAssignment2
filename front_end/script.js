document.getElementById("searchForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const param1 = document.getElementById("param1").value;
    const param2 = document.getElementById("param2").value;
    const param3 = document.getElementById("param3").value;

    const response = await fetch("/api/test", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ param1, param2, param3 })
    });

    const data = await response.json();

    document.getElementById("results").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
});
