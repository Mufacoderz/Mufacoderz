
const techContainer = document.getElementById("tech-container")!;
const button = document.getElementById("action-btn")!;

const techStack = [
    "HTML", "CSS", "JavaScript", "TypeScript",
    "React", "Next.js", "TailwindCSS",
    "Node.js", "Express", "MySQL"
];

let index = 0;
function showSkills() {
    if (index < techStack.length) {
        const skill = techStack[index];
        const span = document.createElement("span");
        span.textContent = `⚡ ${skill}`;
        span.className =
            "block text-lg text-gray-200 opacity-0 translate-y-3 transition-all duration-500";
        techContainer.appendChild(span);

        setTimeout(() => {
            span.classList.remove("opacity-0", "translate-y-3");
            span.classList.add("opacity-100", "translate-y-0");
        }, 100);

        index++;
        setTimeout(showSkills, 300);
    }
}
showSkills();

button.addEventListener("click", () => {
    const link = "https://youtu.be/dQw4w9WgXcQ"; 
    button.classList.add("scale-95");

    setTimeout(() => {
        window.open(link, "_blank");
        button.textContent = "🔗 Visit My Link";
        button.classList.remove("scale-95");
    }, 800);
});
