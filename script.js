// AUM SHREEGANESHA-SHAARADAA-GURUBHYO NAMAH||

function getListByColor(color) {
  const allBoxes = [];
  for (let i = 1; i <= 3; i++) for (let j = 1; j <= 3; j++) allBoxes.push(document.getElementById(`box-${i}-${j}`));
  return allBoxes
  .filter(box => box.classList.contains(`box-${color}`))
  .map(box => {
    const _i = box.id.split("-");
    return 3 * (parseInt(_i[1]) - 1) + parseInt(_i[2]); // (i-1)*3 + j
  })
  .sort();
}

function isWinningConfig(list) {
  list = list.sort(); // [ 1, 2, 3 ]
  
  const seqs = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7] ]; // all winning sequences
  
  const seqInList = (tempList, seq) => {
    // Example: seq = [2, 5, 8], tempList = [1, 2, 4, 5, 8]
    let found = 0;
    seq.forEach(x => {
      if (tempList.findIndex(y => (y === x)) >= 0) found++;
    });
    return (found === 3);
  }

  for (let i = 0; i < seqs.length; i++) {
    if (seqInList(list, seqs[i])) return true; // even if one winning sequence matches
  }
  return false;
}

function announceResult(msg) {
  document.getElementById("announce-message").innerText = `GAME OVER. ${msg}`;

  const replay = document.createElement("button"); // <button id="replay" class="replay" onclick="replay()">REPLAY</button>
  replay.setAttribute("id", "replay");
  replay.setAttribute("class", "replay");
  replay.setAttribute("onclick", "replay()");
  replay.innerText = "REPLAY!";

  document.getElementById("announce").appendChild(replay);
}

function choose(i, j) {
  const box = document.getElementById(`box-${i}-${j}`);
  if (box.classList.contains("box-red") || box.classList.contains("box-green")) return;
  const curr = document.getElementById("current-player-box");
  const currColor = curr.classList.contains("box-red") ? "box-red" : "box-green";
  box.classList.add(currColor);
  curr.classList.replace(currColor, (currColor === "box-red") ? "box-green" : "box-red");

  const redList = getListByColor("red");
  const greenList = getListByColor("green");

  if (isWinningConfig(redList)) announceResult("RED WINS!");
  else if (isWinningConfig(greenList)) announceResult("GREEN WINS!");
  else if ((redList.length + greenList.length) === 9) announceResult("DRAW!");
}

function replay() {
  for (let i = 1; i <= 3; i++) for (let j = 1; j <= 3; j++) {
    const box = document.getElementById(`box-${i}-${j}`);
    box.classList.remove("box-red");
    box.classList.remove("box-green");
  }
  document.getElementById("announce").removeChild(document.getElementById("replay"));
  document.getElementById("announce-message").innerText = "";
}

document.getElementById("current-player-box").classList.add(Math.round(Math.random()) ? "box-red" : "box-green");
