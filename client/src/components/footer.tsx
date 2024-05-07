import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-500 text-white text-center p-4">
      <div>
        <p>플랜픽</p>
        <p>성장동행자</p>
        <a className="text-white">고객센터</a> | 
        <a href="mailto:help@planpeak.co.kr" className="text-white">help@planpeak.co.kr</a> <br/>
        <a className="text-white">개인정보 처리방침</a>
      </div>
    </footer>
  );
}

export default Footer;