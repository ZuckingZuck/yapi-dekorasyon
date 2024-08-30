import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const ContactBar = () => {
  return (
    <div className="bg-blue-900 py-2 text-white hidden md:block">
      <div className="container mx-auto flex justify-between">
        <div id="contactPart" className="flex">
          <h1>Bize ulaşın!</h1>
          <p className="ml-10">
            Tel: <FontAwesomeIcon icon={faPhone} /> +90 539 276 77 09{" "}
          </p>
          <p className="ml-10">
            Mail: <FontAwesomeIcon icon={faEnvelope} /> fix@ipssolidarity.com
          </p>
        </div>
        <div id="socialPart" className="flex gap-5">
            <NavLink target="_blank" to={"https://www.instagram.com/ipssolidarity/"}>
                <FontAwesomeIcon icon={faInstagram} />
            </NavLink>
            <NavLink target="_blank" to={"https://www.linkedin.com/company/ipssolidarityy/"}>
                <FontAwesomeIcon icon={faLinkedin} />
            </NavLink>
            <NavLink target="_blank" to={"https://twitter.com/ipssolidarity/"}>
                <FontAwesomeIcon icon={faTwitter} />
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
