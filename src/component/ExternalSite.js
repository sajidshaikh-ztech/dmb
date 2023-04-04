import React from "react";

function ExternalSite() {
  return (
    <div>
      <iframe
        src="http://localhost:4502/content/we-retail/language-masters/en/starbucks-menu-v3.html"        
        title="External Site"
        width="100%"
        height="700px"
        frameBorder="0"
      />
    </div>
  );
}

export default ExternalSite;