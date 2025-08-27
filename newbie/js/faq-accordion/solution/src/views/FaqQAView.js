import plusIcon from "../../assets/images/icon-plus.svg";
import minusIcon from "../../assets/images/icon-minus.svg";

class FaqQAView {
  #parentElement = document.querySelector(".faq__body__section");

  constructor() {
    console.log("Imported FaqQAView");
  }

  addToggleFaqListener() {
    this.#parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".button__expand");

      if (!btn) return;

      const img = btn.firstElementChild;

      img.src = img.src.includes("minus") ? plusIcon : minusIcon;

      const faqItems = this.#parentElement.querySelectorAll(".faq__item");

      faqItems.forEach((faqItem) => {
        const selectedFaqParagraph = faqItem.querySelector(
          ".faq__item__description"
        );
        if (faqItem.contains(img)) {
          selectedFaqParagraph.classList.remove("hidden");
        } else {
          !selectedFaqParagraph.classList.contains("hidden")
            ? selectedFaqParagraph.classList.add("hidden")
            : null;
        }
      });
    });
  }
}

export default new FaqQAView();
