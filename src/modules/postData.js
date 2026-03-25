const postData = () => {
    return fetch('http://localhost:3000/goods', {
        method: 'POST',
        body: JSON.stringify({
            title: "Игра NeedForSpeed 5",
            price: 5000,
            sale: true,
            img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
            category: "Игры и софт"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((res) => res.json())
    //.then((json) => console.log(json));

}

export default postData