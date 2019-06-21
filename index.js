function loadGame() {

    // To check user attempts
    var common = 0;

    // To check correct attempts
    var win = 0;

    const answers = ['s', 'c', 'r', 'i', 'p', 't'];
    console.log(answers.length);

    const alphabets = [
        { id: 'a', value: 'A' },
        { id: 'b', value: 'B' },
        { id: 'c', value: 'C' },
        { id: 'd', value: 'D' },
        { id: 'e', value: 'E' },
        { id: 'f', value: 'F' },
        { id: 'g', value: 'G' },
        { id: 'h', value: 'H' },
        { id: 'i', value: 'I' },
        { id: 'j', value: 'J' },
        { id: 'k', value: 'K' },
        { id: 'l', value: 'L' },
        { id: 'm', value: 'M' },
        { id: 'n', value: 'N' },
        { id: 'o', value: 'O' },
        { id: 'p', value: 'P' },
        { id: 'q', value: 'Q' },
        { id: 'r', value: 'R' },
        { id: 's', value: 'S' },
        { id: 't', value: 'T' },
        { id: 'u', value: 'U' },
        { id: 'v', value: 'V' },
        { id: 'w', value: 'W' },
        { id: 'x', value: 'X' },
        { id: 'y', value: 'Y' },
        { id: 'z', value: 'Z' }
    ];

    var alphabet_parent = document.getElementById("alphabets");


    // To create buttons 
    for (var i = 0; i <= alphabets.length - 1; i++) {
        var input = document.createElement("input");
        input.setAttribute("type", "button");
        input.setAttribute("value", alphabets[i].value);
        input.setAttribute("id", alphabets[i].id);
        input.setAttribute("class", "button");

        alphabet_parent.appendChild(input);
        const answers = ['s', 'c', 'r', 'i', 'p', 't'];
        input.onclick = function () {
            if (answers.includes(this.id)) {
                document.getElementById(this.id).style = "color:white;background:green;";
                if (this.id === 's') {
                    document.getElementById("test_1").innerHTML = this.value;
                    document.getElementById(this.id).disabled = true;

                }
                if (this.id === 'c') {
                    document.getElementById("test_2").innerHTML = this.value;
                    document.getElementById(this.id).disabled = true;
                }
                if (this.id === 'r') {
                    document.getElementById("test_3").innerHTML = this.value;
                    document.getElementById(this.id).disabled = true;
                }
                if (this.id === 'i') {
                    document.getElementById("test_4").innerHTML = this.value;
                    document.getElementById(this.id).disabled = true;
                }
                if (this.id === 'p') {
                    document.getElementById("test_5").innerHTML = this.value;
                    document.getElementById(this.id).disabled = true;
                }
                if (this.id === 't') {
                    document.getElementById("test_6").innerHTML = this.value;
                    document.getElementById(this.id).disabled = true;
                }
                win++;
                common++;
                
                if (win === 6) {
                    document.getElementById("guess").innerHTML = "You win!   :)";
                    for (var i = 0; i <= alphabets.length - 1; i++) {
                        document.getElementById(alphabets[i].id).disabled = true;
                    }
                }
            }
            else {
                document.getElementById(this.id).style = "color:white;background:red;";
                document.getElementById(this.id).disabled = true;
                common++;
            }

            if (common === 6 && win != 6) {
                document.getElementById("guess").innerHTML = "You Lose!   :(";
                for (var i = 0; i <= alphabets.length - 1; i++) {
                    document.getElementById(alphabets[i].id).disabled = true;
                }
            }
        }
    }
}


function refresh_button() {
    const refreshElement = document.getElementById("refresh");

    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("id", "refresh_button");
    button.setAttribute("value", "Refresh");
    refreshElement.appendChild(button);
    button.onclick = function () {
        window.location.reload(true);
    }
}