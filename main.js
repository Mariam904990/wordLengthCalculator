var print = function (msg) {
  document.getElementById("output").innerHTML = "Length is " + msg;
};
document.getElementById("btn").addEventListener("click", (e) => {
  print(document.getElementById("str").value.length);
  document.getElementById("output").style.display = "block";
});

document.getElementById("clr-btn").addEventListener("click", (e) => {
  document.getElementById("output").style.display = "none";
  document.getElementById("str").value = " ";
});
