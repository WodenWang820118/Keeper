import React from "react";

const d = new Date();
const currentYear = d.getFullYear();

function Footer(){
    return (
        <footer>
            <p className="footer p"> Copyright © {currentYear} </p>
        </footer>
    );
}

export default Footer;