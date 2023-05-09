import { RecaptchaVerifier } from "firebase/auth";

import {auth}from "../../config/firebase"
// import * as firebase from 'firebase';
export function onCaptchaVerify () {
    // let appVerify = new auth.RecaptchaVerifier('recaptcha-container');

    if (!window.recaptchaVerifier) {
    //   window.recaptchaVerifier = new RecaptchaVerifier(
    //     "recaptcha-container",
    //     {
    //       size: "invisible",
    //       callback: (response) => {
    //         // reCAPTCHA solved, allow signInWithPhoneNumber.
    //         // ...
    //         // console.log(response);

    //         // onSignup();
    //         return;
    //       },
    //       "expired-callback": () => {
    //         // Response expired. Ask user to solve reCAPTCHA again.
    //         // ...
    //       },
    //     },
    //     auth
    //   );
    //   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')
      
    }
    // const recaptchaVerifier = new RecaptchaVerifier(
    //   "recaptcha-container",
    //   {},
    //   auth
    // );
    // recaptchaVerifier.render();
    // <return></return>
  };