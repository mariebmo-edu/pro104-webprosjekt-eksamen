const CSSconsts = {
    reservedSpace: {
        height: "89vh",
        width: "60px"
    }
}

export const addSidebar = () => {
	const sidebar = document.createElement("div");
	sidebar.innerHTML = `
        <nav class="sidebar">
            <ul>
                <li>
                    <span class="icon">
                        <i class="bi bi-speedometer2"></i>
                    </span>
                </li>
                <li>
                    <span class="icon">
                        <i class="bi bi-cash-stack"></i>
                    </span>
                </li>
                <li>
                    <span class="icon">
                        <i class="bi bi-people"></i>
                    </span>
                </li>
                <li>
                    <span class="icon">
                        <i class="bi bi-journal-bookmark-fill"></i>
                    </span>
                </li>
                <li>
                    <a href="/Restauranter/restauranter_oslo.html">
                        <span class="icon">
                            <i class="bi bi-shop-window"></i>
                        </span>
                    </a>
                </li>
            </ul>
        </nav>`;

        const reservedSpace = document.createElement("div");
        reservedSpace.innerHTML = `<div id="reserved-space-sidebar" style="width:${CSSconsts.reservedSpace.width}; height:${CSSconsts.reservedSpace.height}"></div>`;

        const root = document.getElementById("root");

        root.prepend(reservedSpace);
        document.body.insertBefore(sidebar, root);
};
