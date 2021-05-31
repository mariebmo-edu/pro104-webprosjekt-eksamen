const NotificationModule = function () {

    const notification = [
        { date: new Date("2021-06-01"), restaurant: "Oslo", message: "Kjøleskap byttes" },
        { date: new Date("2021-06-02"), restaurant: "Bergen", message: "Ny ansatt (daglig leder) Julie Julie starter" },
        { date: new Date("2021-06-04"), restaurant: "Oslo", message: "Ny kampanje setter i gang (To for To Torsdag)" },
        { date: new Date("2021-06-05"), restaurant: "Kristiansand", message: "Ansatt (kokk) Bob Bob slutter" },
        { date: new Date("2021-06-05"), restaurant: "Oslo", message: "Sommervikar Trine Trine starter" },
        { date: new Date("2021-06-08"), restaurant: "Oslo", message: "Kampanje Tacotorsdag slutter" },
        { date: new Date("2021-06-08"), restaurant: "Stavanger", message: "Lisbeth går ut i mammaperm" },
        { date: new Date("2021-06-13"), restaurant: "Stavanger", message: "Siste frist for å melde seg på julebord" },
        { date: new Date("2021-06-16"), restaurant: "Oslo", message: "Sjefstur til granka" },
        { date: new Date("2021-06-16"), restaurant: "Oslo", message: "Guttastemning" }

    ]

    const getAllNotifications = () => notification;
    const getNotificationByRestaurant = (restaurant) => notification.filter(notification => notification.restaurant.toLowerCase() === restaurant.toLowerCase());
    const getNotificationByDate = (date) => notification.filter(notification => notification.date.toString === date);
    const addNotification = (newDate, newRestaurant, newMessage) => notification.push({ date: new Date(newDate), restaurant: newRestaurant, message: newMessage })
    const printNotificationItem = (notificationItem) => {
        return `
   
        <div class="column is-full">
            <div class="columns">
                <div class="date-info-card column is-one-fifth card">
                    ${notificationItem.date.toDateString()}
                </div>
                <div class="info-text-card column is-four-fifths card">
                    ${notificationItem.message}
                </div>
            </div>
        </div>
        `}

    return { getAllNotifications, getNotificationByRestaurant, getNotificationByDate, printNotificationItem, addNotification }
}()

export default NotificationModule;