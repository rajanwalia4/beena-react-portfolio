import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">resume: beenarobert</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
            Creative Industry Studies Graduate from the Fashion Institute of Design and Merchandising with a Major in Graphic Design. Specializing in visual design, logo design, company branding, illustrations, user experience, user interface, and front end development. Terrific at developing and encouraging new ideas. Highly skilled in communication skills, team collaboration, problem solving and people management. It is my passion to understand the user experience and problem solve!
                <p class="mt-5">
                <a href="https://www.linkedin.com/in/beena-robert/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="Beena LinkedIn"/></a>
                </p>
                <p>
                Download my full <a href="https://github.com/Beenarob/beena-rob-portfolio/blob/main/src/assets/Resume-Beena-Robert.pdf" class="link">resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h2>front end experience</h2>
                <p>HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery, React.js, Angular.js, IndexedDB</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>back end experience</h2>
                <p>
                Node.js, Express.js, SQL (sqlite, mySQL, postgreSQL), Sequelize, NoSQL (MongoDB, Mongoose), Python, Django, API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;