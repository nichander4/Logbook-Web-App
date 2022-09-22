// ** Ripple Button
import "src/@core/components/ripple-button";

// ** Fake Database
import "src/@fake-db";

// ** PrismJS
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx.min";

// ** React Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css";

// ** Third Party Packages
import ResizeObserver from "resize-observer-polyfill";

// ** Sidebar
import "styles/@core/base/pages/app-ecommerce.scss";

// ** Datepicker
import "styles/@core/react/libs/flatpickr/flatpickr.scss";

// ** React Toastify
import "styles/@core/react/libs/toastify/toastify.scss";

// ** React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/custom/Slider.scss";

// wizard form
import "bs-stepper/dist/css/bs-stepper.min.css";
// import '../../../@core/scss/base/plugins/forms/form-wizard.scss'
import "styles/@core/base/plugins/forms/form-wizard.scss";
// import 'src/@core/scss/react/libs/react-select/_react-select.scss'
import "styles/@core/react/libs/react-select/_react-select.scss";

// ** Core Styling
import "styles/index.scss";
import "src/@core/assets/fonts/feather/iconfont.css";
import "styles/@core/core.scss";
import "styles/assets/style.scss";
import "animate.css/animate.css";
import "styles/@core/react/libs/flatpickr/flatpickr.scss";

const App = ({ Component, pageProps }) => {
  // Prevent error on macOS and iOS devices
  if (typeof window !== "undefined") {
    if (!window.ResizeObserver) {
      window.ResizeObserver = ResizeObserver;
    }
  }

  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

export default App;
