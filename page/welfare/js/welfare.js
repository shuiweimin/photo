window.onload = () => {
  const schemes = document.querySelectorAll(".wel-scheme>div");
  schemes.forEach((ele, index) => {
    index == 0
      ? ele.classList.add("flex-left")
      : ele.classList.add("flex-right");
  });
};
