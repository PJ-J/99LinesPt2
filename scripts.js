document.addEventListener("DOMContentLoaded", function () {
  let btnDiv = document.createElement("div");
  btnDiv.id = "btn";

  document.body.appendChild(btnDiv);

  let button = document.createElement("button");
  let btnText = document.createTextNode("Sing!");
  button.className = "button";
  button.appendChild(btnText);

  btnDiv.appendChild(button);

  let friends = ["Alyssa", "Larry", "Amanda", "Thomas", "Phillip"];

  let makeSong = () => {
    for (let j = 0; j < friends.length; j++) {
      let friendDiv = document.createElement("div");
      friendDiv.className = "friend";
      let friendH3 = document.createElement("h3");
      let h3Text = document.createTextNode(friends[j]);
      friendH3.appendChild(h3Text);
      friendDiv.appendChild(friendH3);
      document.body.appendChild(friendDiv);
      for (let i = 99; i > 0; i--) {
        if (i === 2) {
          let friendP = document.createElement("p");
          let friendPText = document.createTextNode(
            `${i} lines of code in the file, ${i} lines of code; ${
              friends[j]
            } strikes one out, clears it all out, ${
              i - 1
            } line of code in the file`
          );
          friendP.appendChild(friendPText);
          friendDiv.appendChild(friendP);
        } else if (i === 1) {
          let friendP = document.createElement("p");
          let friendPText = document.createTextNode(
            `${i} line of code in the file, ${i} line of code; ${
              friends[j]
            } strikes one out, clears it all out, no more lines of code in the file`
          );
          friendP.appendChild(friendPText);
          friendDiv.appendChild(friendP);
        } else {
          let friendP = document.createElement("p");
          let friendPText = document.createTextNode(
            `${i} lines of code in the file, ${i} lines of code; ${
              friends[j]
            } strikes one out, clears it all out, ${
              i - 1
            } lines of code in the file`
          );
          friendP.appendChild(friendPText);
          friendDiv.appendChild(friendP);
        }
      }
    }
  };

  button.addEventListener("click", makeSong);
});
