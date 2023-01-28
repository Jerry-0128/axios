// let text = "hello world!";
// console.log(text);


// let arr = [1, 2, ,3 , 4];
// arr.forEach( el => console.log(el));

//  使用require()來引入另一隻JS檔，被引入的JS檔前面要加上module.exports =
// var obj = require("./photo.js");
// console.log(obj);



// var Pfn = require("./photo.js");
// import photo from "./photo.js";
// Pfn([1,2,3,4,5,6]);
// console.log(photo);

import axios from "axios";
// var axios = require("axios");   //  使用引入方式引入第三方套件axios
// console.log(axios);

axios.get("http://www.mocky.io/v2/5ce0c2e8330000b937608c61")
.then(res => {
    console.log(res.data);
})