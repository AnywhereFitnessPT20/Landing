const devList = [
    {
        name: "Tasha Hollingsworth",
        bio: "My name is Tasha Hollingsworth. I am a full-stack web developer that has a passion for designing elegant and functional user experiences while writing clean, efficient code.  When I'm not in front of a computer I enjoy painting, creating, yoga and lifting heavy things.",
        image: "img/foot2foot.jpg"
    },

    {
        name: "Bernard Murphy",
        bio: "My name is Bernard Murphy, and I am a student at Lambda school. I love designing and building things, and programming gives me the creative outlet to do so. Diet and exercise is an integral part of my life, and I am proud to have been part of making this app.",
        image: "img/slack.png"
    },

    {
        name: "Ruben Suazo",
        bio: "Unit 3 React Dev",
        image: "img/ruben.png"
    },

    {
        name: "Jessica Fuller",
        bio: "Jessica is currently a Full Stack Web Development student and Fitness Coach living in Washington State. She enjoys lifting, reading ancient philosophy, and playing World of Warcraft.", 
        Linkedin: "https://www.linkedin.com/in/jessica-fuller-65196abb/",
        Github: "https://github.com/gitnubl33t",
        image: "img/img_8740.jpg"
    },

    {
        name: "Evelyn Nguyen",
        bio: "Hello my name is Evelyn Nguyen.  I am a full stack developer, a believer in open source, and a lifelong learner.",
        image: "img/evelyn.jpg"
    }
]
var devDiv = document.querySelector("#devs");
console.log(devDiv);
for (let i = 0; i < devList.length; i++){
    let section = document.createElement("section");
    section.classList.add("developer");
    let img = document.createElement("img");
    img.setAttribute("src", devList[i].image);
    img.classList.add("dev-images");
    let div = document.createElement("div");
    div.classList.add("separate-img");
    h3 = document.createElement("h3");
    h3.classList.add("about-h3");
    h3.textContent = devList[i].name;
    div.appendChild(h3);
    let p = document.createElement("p");
    p.classList.add("about-body-text")
    p.textContent = devList[i].bio;
    div.appendChild(p);
    if (devList[i].Github){
        let git = document.createElement('p');
        git.classList.add("about-body-text")
        git.textContent = `Github: ${devList[i].Github}`;
        div.appendChild(git);
    }
    if (devList[i].Linkedin){
        let link = document.createElement('p');
        link.classList.add("about-body-text")
        link.textContent = `LinkedIn: ${devList[i].Linkedin}`;
        div.appendChild(link);
    }
    section.appendChild(img);
    section.appendChild(div);
    devDiv.appendChild(section);

}