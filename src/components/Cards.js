import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Must read articles</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.png'
              text='Big Data in Smart Farming - A review'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Impact of population growth on global food production'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='A review of types of risks in agriculture'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Brief history of agriculture systems modeling'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Losses, inefficencies and waste in the global food system'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
