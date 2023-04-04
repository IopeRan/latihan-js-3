        // switch statement
        const grade = 90;
        let msg;

        if (grade >= 75) {
            msg = "Congratulations";
        } else {
            msg= "Nice Try";
        }

        document.writeln(`<p>${msg}</p>`);

        // ternary operator
        msg = grade >= 70 ? "Congratulations" : "Nice Try"; // set message

        document.writeln(`<p>${msg}</p>`);
        // ternary operator terlihat lebih ringkas daripada switch statement