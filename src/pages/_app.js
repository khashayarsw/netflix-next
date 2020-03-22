import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../store/index";

class MyApp extends App {
  static async getStaticProps({ Component, ctx }) {
    const pageProps = Component.getStaticProps
      ? await Component.getStaticProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
