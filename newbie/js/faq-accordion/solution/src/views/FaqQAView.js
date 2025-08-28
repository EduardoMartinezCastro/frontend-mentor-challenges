class FaqQAView {
  #parentElement = document.querySelector(".faq__body__section");

  constructor() {}

  addToggleFaqListener() {
    this.#parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".button__expand");

      if (!btn) return;

      const img = btn.firstElementChild;

      const pluIconUrl = new URL(
        "../../assets/images/icon-plus.svg",
        import.meta.url
      );

      const minusIconUrl = new URL(
        "../../assets/images/icon-minus.svg",
        import.meta.url
      );

      img.src = img.src.includes("minus") ? pluIconUrl : minusIconUrl;

      const currentParagraph = btn.closest(
        ".faq__item__title__section"
      ).nextElementSibling;

      currentParagraph.classList.toggle("hidden");
      const faqItems = this.#parentElement.querySelectorAll(".faq__item");

      faqItems.forEach((faqItem) => {
        if (!faqItem.contains(btn)) {
          const currentDescription = faqItem.querySelector(
            ".faq__item__description"
          );

          if (!currentDescription.classList.contains("hidden")) {
            currentDescription.classList.add("hidden");
            faqItem.querySelector(".faq__item__icon").src = pluIconUrl;
          }
        }
      });
    });
  }
}

export default new FaqQAView();
