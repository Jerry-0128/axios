const Photo = (arr=[]) => {
    arr.forEach(element => console.log(element));
}


export default Photo;           //  export的方法，在輸出的那支JS用import
// module.exports = Photo;      //  將function用exports的方法丟到另一支JS檔；module的方法，在輸出的那支JS用require
// module.exports = {
//     name: 'Chris'
// };

