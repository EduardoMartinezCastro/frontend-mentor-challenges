import FaqQAView from "../views/FaqQAView";

/*
  Implemented MVC pattern, but didn't need a controller or model in this case LOL.
  So I'm leaving it just like this.
*/

const init = () => {
  FaqQAView.addToggleFaqListener();
};

init();
