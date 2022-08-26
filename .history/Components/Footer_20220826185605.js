import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-semibold">ABOUT</h5>
        <p>How airbnb works</p>
        <p>newsroom</p>
        <p>investors</p>
        <p>airbnb plus</p>
        <p>airbnb luxury</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-semibold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>it is pretty awesome clone</p>
        <p>Referals Accepted</p>
        <p>explore</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-semibold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Saftey</p>
        <p>Terms & Conditions</p>
        <p>it is build for educational purposes</p>
        <p>all rights reserved to airbnb @2022 it is a demo!</p>
      </div>
    </div>
  );
}

export default Footer;
