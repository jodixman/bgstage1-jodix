const data = [
    {
        user: "Soekarno Hata",
        quote: "Pelopor Bangsa",
        image:"image/oop1.jpg",
        rating:1
    },
    {
        user: "Soeharto",
        quote: "Mantap Jiwa",
        image:"image/oop2.jpeg",
        rating:2
    },
    {
        user: "Megawati",
        quote: "Penjual Pulau",
        image:"image/oop3.jpeg",
        rating:3
    },
    {
        user: "Zelda",
        quote: "Game about Zelda",
        image:"image/oop4.jpeg",
        rating:5
    },
    {
        user: "Super Mario",
        quote: "Mario Bros and Lugius",
        image:"image/oop5.png",
        rating:5
    },
    {
        user: "Pokemon",
        quote: "Tempat Mencari Hewan",
        image:"image/oop6.jpg",
        rating:5
    },
    {
        user: "GTA V",
        quote: "Criminal Town",
        image:"image/oop7.jpg",
        rating:1
    },
    {
        user: "Perfect World",
        quote: "Game First Adventure can Fly",
        image:"image/oop8.jpg",
        rating:5
    },
    {
        user: "Kriby",
        quote: "Hewan yang Pink",
        image:"image/oop9.jpeg",
        rating:2
    },
]


// INI UNTUK ALL RATING
const allRating = () => {
    let stringKosong = ``

    data.forEach((card,i)=>{
        stringKosong += `<div class="crd_grid flex">
        <div class="crd_card" id="hid">
            <a href="InProject.html">
                <div class="card_div">
                    <div class="card_div1">
                        <img src="${card.image}" alt="photo" class="card_div1-img">
                    </div>
                    <h1 class="text-xl">${card.quote}</h1>
                    <h1 class="crd_div2">${card.user}</h1>
                    <p class="flex items-center justify-end pt-5 pb-10 gap-x-2 font-bold text-xl">${card.rating}<i class="fa-solid fa-star text-yellow-500"></i></p>
                </div>
            </a>
        </div>
    </div>`
    })

    document.getElementById("text2").innerHTML = stringKosong
}

allRating(); //memanggil keluar saat di refres dia akan keluar





// INI UNTUK MENFILTER Filter Rating
const filterRating = (rating) => {
    let filterStringKosong = ``;

    const filterRat = data.filter((card) => {
        return card.rating === rating;
    });

    //bikin jika dia tidak ada maka NOT FOUND
    if (filterRat.length === 0) {
        filterStringKosong = `<p class="font-bold text-6xl flex">NOT FOUND...</p>`;
    } else {
        filterRat.forEach((card, i) => {
            filterStringKosong += `<div class="crd_grid flex">
                <div class="crd_card" id="hid">
                    <a href="InProject.html">
                        <div class="card_div">
                            <div class="card_div1">
                                <img src="${card.image}" alt="photo" class="card_div1-img">
                            </div>
                            <h1 class="text-xl">${card.quote}</h1>
                            <h1 class="crd_div2">${card.user}</h1>
                            <p class="flex items-center justify-end pt-5 pb-10 gap-x-2 font-bold text-xl">${card.rating}<i class="fa-solid fa-star text-yellow-500"></i></p>
                        </div>
                    </a>
                </div>
            </div>`;
        });
    }

    document.getElementById("text2").innerHTML = filterStringKosong;
};
