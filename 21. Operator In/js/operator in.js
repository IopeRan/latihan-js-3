        // operator in untuk memeriksa properties ada atau tidak ada
        // apabila ada atau true maka program akan dijalankan
        // namun apabila tidak ada atau false maka program tidak di jalankan
        // peringatan : operator in tidak membaca sebuah nilai!!! 
        const person = {
            firstName: "Erlang",
            lastName : "Andriyanputra"
        };

        if ("firstName" in person) {
            alert(`Hi ${person.firstName}`);
        } else {
            alert("HAHA")
        }