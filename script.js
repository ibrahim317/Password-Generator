const a = document.getElementById("main-btn");
const b = document.getElementById("password");
const f = document.getElementById("len");
const group = document.getElementById("bottom-group");
const btn = document.createElement("button");
let first = true;
//check if the length is less than 8 or more than 20
f.addEventListener("change", function () {
  let v = parseInt(this.value);
  if (v < 8) this.value = 8;
  if (v > 20) this.value = 20;
});
//generate password with {len} charachters
function generatePassword(len) {
  var length = len,
    charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012222!@#$$#^%&^%(&*)(&()+23456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
//display on clicking the button
a.onclick = () => {
  if (first) {
    b.innerHTML = generatePassword(f.value);
    btn.classList.add("green");
    btn.id = "copy";
    btn.innerHTML = "Copy password";
    group.insertBefore(btn, group.children[1]);
    a.innerHTML = "Generate again";
    first = false;
  } else {
    b.innerHTML = generatePassword(f.value);
  }
};
btn.onclick = () => {
  /* For mobile devices */

  /* Copy the text inside the text field */
  console.log(b.innerHTML);
  navigator.clipboard.writeText(b.innerText);
};