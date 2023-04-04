console.info("Hello" || "");
console.info("" || []);
console.info("0" || "NOL" );
console.info(0 || "NOL");
console.info(null || "NULL");
console.info(undefined || "UNDEFINED");
console.info(0 || false);

// console.info akan muncul di console sebagai default berwarna putih

const person = {
    firstName: "",
    lastName: "Andriyanputra"
};

const name = person.firstName || person.lastName;
console.info(name);

console.info("HI" && ''); // data kosong
console.info("" && []); // data kosong
console.info("0" && "NOL");

 // console.info akan muncul di console sebagai default berwarna putih