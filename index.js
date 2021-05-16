(async () => {
    var loader = document.querySelector(".loader");
    document.querySelector(".loader").style.display = "block";
    const response = await fetch("https://putatoeapp-k3snqinenq-uc.a.run.app/v1/api/getbanner", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "subservice_id": null,
            "service_id": 6
        })
    })
    var dataRecieved = await response.text();
    dataInJSON = JSON.parse(dataRecieved);
    console.log(dataInJSON);
    console.log(dataInJSON['Banner details'].length);
    for (let index = 0; index < dataInJSON['Banner details'].length;index++) {
        var btn = document.createElement("img");
        btn.alt = "Image";
        btn.src = dataInJSON['Banner details'][index].image;
        btn.classList.add("imageStyle");
        document.querySelector(".images").appendChild(btn);
    }
    document.querySelector(".loader").style.display = "none";
})();