// ** Ripple Button
import "src/@core/components/ripple-button";

// ** React Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css";

// ** Third Party Packages
import ResizeObserver from "resize-observer-polyfill";

// ** Sidebar
import "styles/@core/base/pages/app-ecommerce.scss";

// ** Datepicker
import "styles/@core/react/libs/flatpickr/flatpickr.scss";
import "react-datepicker/dist/react-datepicker.css";

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
import "styles/@core/base/pages/app-invoice.scss";
import "styles/@core/base/pages/app-invoice-print.scss";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// ** Redux
import React from "react";
import { wrapper, store } from "redux/store";
import { Provider as ProviderRedux } from "react-redux";

// ** NextAuth
import { SessionProvider } from "next-auth/react";

// ** React-Quill
import "react-quill/dist/quill.snow.css";

// import { Auth } from "helpers/authGlobalCheck";

import "styles/@core/base/pages/page-misc.scss";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  // Prevent error on macOS and iOS devices
  if (typeof window !== 'undefined') {
    if (!window.ResizeObserver) {
      window.ResizeObserver = ResizeObserver;
    }
  }

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={pageProps.session}>
      <ProviderRedux store={store}>
        {getLayout(
          <div className="h-auto">
            <style>
              {`
            ::-webkit-scrollbar {
              height: 5px;
              width : 8px;
            }
    
            ::-webkit-scrollbar-track {
              box-shadow: inset 0 0 10px 10px transparent;
              background-color: #ddf7eea3;
              border-radius: 10px;
            }
    
            ::-webkit-scrollbar-thumb {
              border-radius: 10px;
              box-shadow: inset 0 0 14px 14px #46a583;
            }
    
        `}
            </style>
            <Component {...pageProps} />
          </div>
        )}
      </ProviderRedux>
    </SessionProvider>
  );
};

export default wrapper.withRedux(App);
