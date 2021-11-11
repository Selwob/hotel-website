// Create a new hotel and input data
class Hotel {

    constructor(hotelInfo) {
        this.name = hotelInfo.name;
        this.location = hotelInfo.location;
        this.numRooms = hotelInfo.numRooms;
        this.price = hotelInfo.price;
        this.amenities = hotelInfo.amenities;
        this.tel = hotelInfo.tel;
        this.description = hotelInfo.description;
        this.hotelImgURL = hotelInfo.hotelImgURL;
    }



    // Render hotel listing
    render() {
        
        let listingEl = document.createElement('div');
        listingEl.className = "row mt-2"

        function defineIconColor(amenities, key) {
            if (amenities[key]) {
                return "White"
            }
            return "DarkGray"
        }

        listingEl.innerHTML = `
        <div class="col-sm-4"><img src="${this.hotelImgURL}" class="hotel-img img-fluid" alt="hotel-image"></div>
            <div class="hotel-info col-sm-8 bg-primary text-light">
                <h1 class="h4">${this.name}</h1>
                <p>
                    ${this.description}
                </p>

                <h1 class="h6">Info</h1>
                <p>
                    We have ${this.numRooms} rooms available for only £${this.price} per night! <br>
                    Call: ${this.tel} or visit us at ${this.location.latitude}° latitude ${this.location.longitude}° longitude.
                </p>
                
                <p>
                <h1 class="h6">Facilities</h1>
                <p class="facilities-icons">
                    <i class="bi bi-wifi" style="color: ${defineIconColor(this.amenities, 'wifi')}"></i>
                    <i class="bi bi-tv" style="color: ${defineIconColor(this.amenities, 'tv')}"></i>
                    <i class="bi bi-cart4" style="color: ${defineIconColor(this.amenities, 'shop')}"></i>
                    <i class="bi bi-coin" style="color: ${defineIconColor(this.amenities, 'atm')}"></i>
                    <i class="bi bi-film" style="color: ${defineIconColor(this.amenities, 'cinema')}"></i>
                    <i class="bi bi-telephone" style="color: ${defineIconColor(this.amenities, 'phone')}"></i>
                    <i class="bi bi-umbrella" style="color: ${defineIconColor(this.amenities, 'umbrella')}"></i>
                </p>
                </p>
            </div>
            `

        return listingEl
    }

}