const LayoutModule = function () {

    const printBaseLayout = (siteName) => {
        return `
        <div class="topbar">
            <h1 class="title margin-20">
                ${siteName}
            </h1>

        </div>

        <nav class="sidebar">
            <ul>
                <li>
                <a href="../Dashboard/dashboard.html">
                    <span class="icon">
                        <i class="bi bi-speedometer2"></i>
                    </span>
                </a>
                </li>
                <li>
                <a href="../Sales/sales.html"
                    <span class="icon">
                        <i class="bi bi-cash-stack"></i>
                    </span>
                </a>
                </li>
                <li>
                <a href="../Ansatte/ansatte.html"
                    <span class="icon">
                        <i class="bi bi-people"></i>
                    </span>
                </a>
                </li>
                <li>
                <a href="../Meny/Menu.html">
                    <span class="icon">
                        <i class="bi bi-journal-bookmark-fill"></i>
                    </span>
                </a>
                </li>
                <li>
                    <a href="../Restauranter/restauranter.html">
                        <span class="icon">
                            <i class="bi bi-shop-window"></i>
                        </span>
                    </a>
                </li>
            </ul>
        </nav>`
    }

    return {printBaseLayout}
}()

export default LayoutModule