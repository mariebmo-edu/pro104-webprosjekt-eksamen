export const addTopbar = () => {
    const topbar = document.createElement("div");
    topbar.innerHTML = `<div class="topbar"></div>`
    const root = document.getElementById("root")
    document.body.insertBefore(topbar, root);
}
