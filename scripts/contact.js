const contactsData = {
    "contacts": [
      {
        "socialMedia": "linkedin",
        "link": "https://www.linkedin.com/in/mitchell-zhou/",
        "imageSrc": "/images/linkedin.png",
        "altText": "LinkedIn",
        "text": "Mitchell Zhou"
      },
      {
        "socialMedia": "facebook",
        "link": "https://www.facebook.com/mitchell.zhou/",
        "imageSrc": "/images/facebook.png",
        "altText": "Facebook",
        "text": "Mitchell Zhou"
      },
      {
        "socialMedia": "gmail",
        "link": "mailto:mitche.zhou1@gmail.com?subject=Hello&body=I%20hope%20you%20are%20doing%20well!",
        "imageSrc": "/images/gmail.jpg",
        "altText": "Gmail",
        "text": "mitche.zhou1[at]gmail.com"
      },
      {
        "socialMedia": "github",
        "link": "https://github.com/Mitchellzhou1",
        "imageSrc": "/images/github.png",
        "altText": "GitHub",
        "text": "Mitchellzhou1"
      }
    ]
  };

  // Function to generate HTML elements
  function generateContacts(data) {
    const container = document.querySelector('.image-container');
    const contacts = data.contacts;

    contacts.forEach(contact => {
      const div = document.createElement('div');
      div.className = 'icon-container';
      div.style.margin = '0 4vw';

      const innerDiv = document.createElement('div');
      innerDiv.style.display = 'flex';
      innerDiv.style.flexDirection = 'column';
      innerDiv.style.alignItems = 'center';

      const img = document.createElement('img');
      img.src = contact.imageSrc;
      img.style.cursor = 'pointer';
      img.style.height = '12vh';
      img.style.width = '7vw';
      img.alt = contact.altText;
      img.className = 'image';
      img.onclick = function() {
        window.location.href = contact.link;
      };

      const p = document.createElement('p');
      p.textContent = contact.text;

      innerDiv.appendChild(img);
      innerDiv.appendChild(p);
      div.appendChild(innerDiv);
      container.appendChild(div);
    });
  }

  // Call the function to generate contacts
  generateContacts(contactsData);