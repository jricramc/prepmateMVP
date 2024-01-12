import React from 'react'

const LocationSection = () => {
  return (
    <div className="fz-contact-location-map">
        <iframe 
        src="https://www.google.com/maps/place/MIT+Innovation+Headquarters/@42.3621535,-71.0883897,17z/data=!3m1!4b1!4m6!3m5!1s0x89e3714cc402c107:0xd79ae4db578c8712!8m2!3d42.3621496!4d-71.0858094!16s%2Fg%2F11p13r7_5b?entry=ttu" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  )
}

export default LocationSection