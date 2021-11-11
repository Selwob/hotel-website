function displayHotel(hotelArray) {
    hotelArray.forEach(function (hotel) {
        document.getElementById('hotel-list').innerHTML = "";
        let currentHotel = new Hotel(hotel);
        let hotelRender = currentHotel.render();
        document.getElementById("hotel-list").append(hotelRender);
    });
}