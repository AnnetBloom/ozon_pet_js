import getData from "./getData"
//import postData from "./postData"
import renderGoods from "./renderGoods"

const load = () => {
    //const cartBtn = document.getElementById('cart')

    getData().then((data) => {
        renderGoods(data)
        //console.log(data);
    })

    /*cartBtn.addEventListener('click', () => {
        postData().then((data) => {
            console.log(data);

            getData().then((data) => {
                console.log(data);
            })
        })
    })*/

    //console.log(getData())
    //getData('get data')
    //console.log(cartBtn)
}

//load()

export default load