import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Head from "next/head";
import { setEmailData } from "../actions/EmailAction";

class LogIn extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    let getData = JSON.parse(localStorage.getItem("email"));
    if (getData) {
      dispatch(setEmailData({ emailData: getData }));
    }
  };
  render() {
    const { emailData } = this.props;
    return (
      <div className="login-wrapper">
        <Head>
          <title>Netflix</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            property="og:description"
            content="Watch Netflix movies &amp; TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more."
          ></meta>
          <link
            rel="shortcut icon"
            href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
          ></link>
        </Head>
        <div className="layer"></div>
        <span className="login-txt">
          {emailData
            ? `Your LogIn ! Your Email is ${emailData}`
            : "Your Not LogIn !"}
        </span>
        <Link href="/">
          <a className="backBtn">back</a>
        </Link>
        <style jsx global>{`
          body {
            margin: 0;
            font-family: sans-serif;
          }
        `}</style>
        <style jsx>{`
          .login-wrapper {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background-image: url(/imgs/netflix-background.jpg);
          }
          .layer {
            position: absolute;
            right: 0;
            left: 0;
            bottom: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.8);
          }
          .login-txt {
            position: absolute;
            left: 50%;
            top: 35%;
            transform: translate(-50%, -35%);
            color: #ffffff;
            font-size: 30px;
            text-align: center;
          }
          .backBtn {
            position: absolute;
            left: 30px;
            top: 30px;
            padding: 7px 17px;
            border-radius: 3px;
            background-color: #e50914;
            line-height: normal;
            font-weight: 400;
            font-size: 1rem;
            color: #ffffff;
            text-decoration: none;
          }
          @media (max-width: 400px) {
            .login-txt {
              font-size: 25px;
            }
          }
        `}</style>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  emailData: state.Email.emailData
});

export default connect(mapStateToProps)(LogIn);
