window.onload = () => {
  let ok_btn = document.getElementById("ok");
  let thoi_btn = document.getElementById("thoi");

  function randomPosition() {
    thoi_btn.classList.add("position");

    thoi_btn.style.left = Math.random() * 70 + "%";
    thoi_btn.style.top = Math.random() * 70 + "%";

    ok_btn.style.width = "120px";
  }
  thoi_btn.onclick = () => {
    randomPosition();
  };

  thoi_btn.onmouseover = () => {
    randomPosition();
  };

  ok_btn.onclick = () => {
    console.log(1);
    const main = document.querySelector(".main");
    main.innerHTML = "";
    main.style.height = "0";
    const main2 = document.querySelector(".main-2");
    main2.style.display = "flex";
  };
};
