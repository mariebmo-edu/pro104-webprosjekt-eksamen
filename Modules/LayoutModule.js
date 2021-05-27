const LayoutModule = function () {

    const printBaseLayout = (siteName) => {

        let backgroundColors = ["transparant-background","transparant-background","transparant-background","transparant-background","transparant-background",]


        if(siteName.toLowerCase() === "dashboard"){
            backgroundColors[0] = "light-grey-background"
        } else if(siteName.toLowerCase() === "salg"){
            backgroundColors[1] = "light-grey-background"
        }else if(siteName.toLowerCase() === "ansatte"){
            backgroundColors[2] = "light-grey-background"
        }else if(siteName.toLowerCase() === "meny"){
            backgroundColors[3] = "light-grey-background"
        }else if(siteName.split(" ")[0].toLowerCase() === "restauranter"){
            backgroundColors[4] = "light-grey-background"
        }

        return `
        <div class="topbar">
            <h1 class="title margin-20">
                ${siteName}
            </h1>

        </div>

        <nav class="sidebar">
            <ul class="full-width">
                <li class="${backgroundColors[0]} center-text">
                <a href="../Dashboard/dashboard.html">
                    <span class="icon">
                        <i class="bi bi-speedometer2"></i>
                    </span>
                </a>
                </li>
                <li class="${backgroundColors[1]} center-text">
                <a href="../Sales/sales.html" alt="ikon som tar deg til Salg">
                    <span class="icon">
                        <i class="bi bi-cash-stack"></i>
                    </span>
                </a>
                </li>
                <li class="${backgroundColors[2]} center-text">
                <a href="../Ansatte/ansatte.html" alt="ikon som tar deg til Ansatte">
                    <span class="icon">
                        <i class="bi bi-people"></i>
                    </span>
                </a>
                </li>
                <li class="${backgroundColors[3]} center-text">
                <a href="../Meny/Menu.html" alt="ikon som tar deg til Restaurantmenyen"> 
                    <span class="icon">
                        <i class="bi bi-journal-bookmark-fill"></i>
                    </span>
                </a>
                </li>
                <li class="${backgroundColors[4]} center-text">
                    <a href="../Restauranter/restauranter.html" alt="ikon som tar deg til Restauranter">
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