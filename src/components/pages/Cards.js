import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css'
import img9 from "../../assets/images/img-9.jpg"
import img2 from "../../assets/images/img-2.jpg"
import img3 from "../../assets/images/img-3.jpg"
import img4 from "../../assets/images/img-4.jpg"
import img8 from "../../assets/images/img-8.jpg"
import img6 from "../../assets/images/img-6.jpg"
import img7 from "../../assets/images/img-7.jpg"

function Cards() {
  return (
    <div className="cards">
        <h1>Check out our Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src={img9}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                    />
                    <CardItem 
                        src={img2}
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services"
                    />
                </ul>
                <ul className="cards__items">
                <CardItem
                    src={img3}
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    label='Mystery'
                    path='/services'
                />
                <CardItem
                    src={img4}
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Adventure'
                    path='/products'
                />
                <CardItem
                    src={img8}
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Adrenaline'
                    path='/sign-up'
                />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src={img6}
                        text="Immerse yourself in the busy street"
                        label="Experience"
                        path="/sign-up"
                    />
                    <CardItem 
                        src={img7}
                        text="Challenge to change yourself in 30 days with us"
                        label="Challenge"
                        path="/sign-up"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;