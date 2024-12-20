import links from "./data.js";

const linksContainer = document.getElementById("links");

// Clear the container to prevent duplicates
linksContainer.innerHTML = "";

// Generate links dynamically
links.forEach((link) => {
  const linkElement = document.createElement("a");
  linkElement.href = link.url;
  linkElement.target = "_blank"; // Open links in a new tab

  // Check if a custom icon is provided
  if (link.customIcon) {
    const customIcon = document.createElement("img");
    customIcon.src = link.customIcon;
    customIcon.alt = `${link.title} icon`;
    customIcon.className = "custom-icon"; // Add a class for styling
    linkElement.appendChild(customIcon);
  } else {
    // Add Font Awesome icon
    const icon = document.createElement("i");
    icon.className = link.icon; // Use the icon class from data.js
    linkElement.appendChild(icon);
  }

  // Add title
  const text = document.createElement("span");
  text.textContent = link.title;
  linkElement.appendChild(text);

  linksContainer.appendChild(linkElement);
});
document.getElementById("share-button").addEventListener("click", async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: "Check out this profile!",
                text: "Take a look at Dimitrios Athinaios' portfolio and social links!",
                url: window.location.href, // The current page URL
            });
            console.log("Share successful!");
        } catch (error) {
            console.error("Error sharing:", error);
        }
    } else {
        alert("Sharing is not supported on this browser.");
    }
});

