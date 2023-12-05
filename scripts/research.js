const researchData = {
        "researchProjects": [
            {
                "title": "AdBlocker Research Project",
                "date": "09/2023 - Present",
                "description": "I am assisting in a research project at NYU, where our research focuses on web privacy and the impact of ad-blocking extensions on web applications. We aim to unveil the adverse consequences these extensions have, including performance issues and visual disruptions. Currently, I am leading the development of a web crawler to automate this investigation. My responsibilities for the project include tasks such as reversing and understanding JavaScript and HTML code, web scraping data, and analyzing patterns and trends related to ad-blocker usage.",
                "imageSrc": "images/adblocker.jpg"
            },
            {
                "title": "Priority Based Routing and Link Scheduling for Cognitive Radio Networks",
                "date": "05/2018 - 09/2018",
                "description": "I worked as a research assistant at Old Dominion University on radio networks. The goal of the project was to minimize disruption to communication sessions due to channel switching. Our findings were later published in the European Union Digital Library.",
                "imageSrc": "images/EUDL.png",
                "link": "https://eudl.eu/doi/10.4108/eai.12-12-2017.159349"
            }
            // Add more research projects as needed
        ]
    };

        function createResearchSections() {
        const researchContainer = document.getElementById('researchProjects');
        researchData.researchProjects.forEach(project => {
            const section = document.createElement('div');
            section.className = 'section';

            const info = document.createElement('div');
            info.className = 'info';

            const title = document.createElement('h3');
            title.textContent = project.title;
            info.appendChild(title);

            const date = document.createElement('small');
            date.textContent = project.date;
            info.appendChild(date);

            const description = document.createElement('p');
            description.textContent = project.description;
            info.appendChild(description);

            if (project.imageSrc) {
                const image = document.createElement('img');
                image.src = project.imageSrc;
                image.className = 'expand-on-hover';
                image.style.width = '35%';
                info.appendChild(image);
            }

            if (project.link) {
                const link = document.createElement('a');
                link.href = project.link;
                link.textContent = 'Read More';
                link.style.color = '#c90101';
                link.style.textDecoration = 'none';
                link.style.display = 'block';
                link.style.marginTop = '10px';
                info.appendChild(link);
            }

            section.appendChild(info);
            researchContainer.appendChild(section);
        });
    }

    // Call function to generate content
    createResearchSections();
