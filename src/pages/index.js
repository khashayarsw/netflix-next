import { setEmailData } from "../actions/EmailAction";
import Header from "../components/Header";
import React, { Component } from "react";
import { connect } from "react-redux";
import validator from "validator";
import Head from "next/head";

class Index extends Component {
  state = {
    inputval: "",
    invalidEmail: false,
    emailSubmit: false
  };

  componentDidMount = () => {
    const { dispatch } = this.props;
    let getData = JSON.parse(localStorage.getItem("email"));
    if (getData) {
      this.setState({
        inputval: getData
      });
      dispatch(setEmailData({ emailData: getData }));
    }
  };

  handleChange = event => {
    this.setState({ inputval: event.target.value });
  };

  handleEmailSubmit = () => {
    const { dispatch, emailData } = this.props;
    const { inputval, emailSubmit } = this.state;
    if (validator.isEmail(inputval)) {
      dispatch(setEmailData({ emailData: inputval }));
      this.setState({
        invalidEmail: false,
        emailSubmit: true
      });
      localStorage.setItem("email", JSON.stringify(inputval));
    } else {
      this.setState({
        invalidEmail: true,
        emailSubmit: false
      });
    }
  };

  render() {
    const { inputval, invalidEmail, emailSubmit } = this.state;
    const { emailData } = this.props;
    return (
      <div className="netflix-wrapper">
        <Head>
          <title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
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
        <Header />
        <div className="first-section">
          <div className="container">
            <p className="title">Unlimited movies, TV shows, and more.</p>
            <p className="desc">Watch anywhere. Cancel anytime</p>
            <div className="input-wrapper">
              <input
                placeholder="Email address"
                type="email"
                value={inputval}
                onChange={this.handleChange}
              />
              <button onClick={this.handleEmailSubmit}>
                <span>TRY 30 DAYS FREE</span>
              </button>
            </div>
            {invalidEmail && <p className="invalid">Your Email Is Invalid</p>}
            {emailSubmit && <p className="invalid"> Email Is submitted</p>}
            <p className="sub-txt">
              Ready to watch? Enter your email to create or access your account.
            </p>
          </div>
          <div className="black-bg"></div>
        </div>
        <style jsx global>{`
          body {
            margin: 0;
            font-family: sans-serif;
          }
        `}</style>
        <style jsx>{`
          .netflix-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
          .first-section {
            position: relative;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url(/imgs/netflix-background.jpg);
          }
          .first-section .title {
            max-width: 80%;
            margin: 0 auto;
            font-size: 4rem;
            color: #ffffff;
            font-weight: bold;
          }
          .first-section .desc {
            margin: 1rem auto;
            font-size: 1.625rem;
            color: #ffffff;
            font-weight: normal;
          }
          .first-section .sub-txt {
            margin: 10px auto 0 auto;
            font-size: 1.2rem;
            color: #ffffff;
          }
          .first-section .invalid {
            color: #ffffff;
            text-align: left;
            font-size: 15px;
          }
          .first-section input {
            min-width: 440px;
            height: 70px;
            vertical-align: middle;
            border: none;
            outline: none;
            padding: 0 10px;
            font-size: 15px;
          }
          .first-section input:focus::placeholder {
            transform: translatey(-20px);
            font-size: 12px;
          }
          .first-section button {
            padding-right: 3.25rem;
            padding-left: 1.6125rem;
            font-size: 1.875rem;
            font-weight: bold;
            min-height: 70px;
            color: #ffffff;
            background-color: #e50914;
            border: 1px solid #e50914;
            border-radius: 2px;
            vertical-align: middle;
            outline: none;
            cursor: pointer;
          }
          .container {
            position: absolute;
            top: 50%;
            left: 50%;
            display: inline-block;
            text-align: center;

            transform: translate(-50%, -50%);
            z-index: 2;
          }
          .black-bg {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
          }
          @media (max-width: 480px) {
            .first-section .title {
              max-width: 90%;
              font-size: 2rem;
            }
            .first-section .desc {
              font-size: 1rem;
            }
            .first-section input {
              min-width: 300px;
            }
            .first-section button {
              padding-left: 2.8rem;
              margin-top: 10px;
              font-size: 1rem;
            }
            .first-section .sub-txt {
              font-size: 1rem;
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

export default connect(mapStateToProps)(Index);
