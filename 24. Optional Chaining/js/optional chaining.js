        // optional chaining

        const person = {
            address: {
                country : "Indonesia" 
            }
        };

        let country = person?.address?.country;

        document.writeln(`ON SERVER`);
        document.writeln(`<p>${country}</p>`);
        document.writeln(`ON SERVER`);