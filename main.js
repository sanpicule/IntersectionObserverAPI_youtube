let imagesItems = [...document.querySelectorAll(".img-wrap")];
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");


//監視対象になった瞬間、activeを付加する関数
let setItemActive = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active")
    }
  })
}

let options = {
  rootMargin: "0px",
  threshold: 0.5,
}

//どこにいるのかを監視し、特定の位置に来たら関数を実行する
let observer = new IntersectionObserver(setItemActive, options);

observer.observe(titleMessage);

//img-wrapは偶数と奇数で表示される位置が違います
imagesItems.map((item, index) => {
  item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
  index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
  observer.observe(item);
});

titles.map((title, index) => {
  index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "35%");
  observer.observe(title)
});
