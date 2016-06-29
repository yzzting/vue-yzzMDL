import html from "./install.md"

function markdown() {
    if (document.getElementById('container')) {
        var container = document.getElementById('container');

        container.innerHTML = html;

    }
}
export default {
    markdown
}
