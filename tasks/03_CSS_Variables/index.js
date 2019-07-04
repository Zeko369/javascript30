const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  console.log(this.value);
  const suffix = this.dataset.sizing || ""; // dataset containes all data-NAME attributes
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(item => item.addEventListener("change", handleUpdate));
inputs.forEach(item => item.addEventListener("mousemove", handleUpdate));
