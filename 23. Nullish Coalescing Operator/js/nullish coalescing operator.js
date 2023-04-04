let parameter = null; // nilai null atau undefined menghasilkan Nilai Default

let data = parameter;
if(data === undefined || data === null) {
    data = "Nilai Default";
}

document.writeln(`<p>${data}</p>`);

data = parameter ?? "Nilai Default";

document.writeln(`<p>${data}</p>`);