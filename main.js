const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const imageThree = document.querySelector(".image-3")
const imageFour = document.querySelector(".image-4")
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

function getRandomPicture() {
    // Generate a random number between 0 and 2
    return Math.floor(Math.random() * 3);
}

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";

  imageOne.classList.add("hide");
  imageThree.classList.remove("hide");


  const randomPic = getRandomPicture();
    imageOne.classList.add('hide');
    imageThree.classList.add('hide');
    imageFour.classList.add('hide');

    if (randomPic === 0) {
        imageOne.classList.remove('hide');
        imageTwo.classList.add('hide');
        imageThree.classList.add('hide');
        imageFour.classList.add('hide');
    } else if (randomPic === 1) {
        imageOne.classList.add('hide');
        imageTwo.classList.remove('hide');
        imageThree.classList.add('hide');
        imageFour.classList.add('hide');
    } else if (randomPic === 2) {
        imageOne.classList.add('hide');
        imageTwo.classList.add('hide');
        imageThree.classList.remove('hide');
        imageFour.classList.add('hide');
    }
});

btnNo.addEventListener("click", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";

  imageOne.classList.add("hide");
  imageThree.classList.remove("hide");


  const randomPic = getRandomPicture();
    imageOne.classList.add('hide');
    imageThree.classList.add('hide');
    imageFour.classList.add('hide');

    if (randomPic === 0) {
        imageOne.classList.remove('hide');
        imageTwo.classList.add('hide');
        imageThree.classList.add('hide');
        imageFour.classList.add('hide');
    } else if (randomPic === 1) {
        imageOne.classList.add('hide');
        imageTwo.classList.remove('hide');
        imageThree.classList.add('hide');
        imageFour.classList.add('hide');
    } else if (randomPic === 2) {
        imageOne.classList.add('hide');
        imageTwo.classList.add('hide');
        imageThree.classList.remove('hide');
        imageFour.classList.add('hide');
    }
});

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.add("hide");
  imageThree.classList.add("hide");
  imageFour.classList.remove("hide");
  btnYes.classList.add("hide");
  setTimeout(function() {
    window.location.href = 'flower.html'; 
}, 5000);
});