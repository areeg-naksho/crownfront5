import "./../styles/css/main.min.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";

import { store } from "../state/store";
import MainLayout from "../layout/MainLayout";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
