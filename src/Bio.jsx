import React from 'react';
import { images } from './images';
import './styles/Bio.css';

const Bio = () => {
  let exhibitions = [
    {
      name: 'Landscape On The Edge',
      venue: 'Venue Name',
      city: 'City',
      start: 'MARCH 7',
      end: 'SEPTEMBER 10',
      year: '2023',
    },
    {
      name: 'Worldwide',
      venue: 'Venue Name',
      city: 'City',
      start: 'JULY 17',
      end: 'OCTOBER 1',
      year: '2023',
    },
    {
      name: 'Weather Capturing',
      venue: 'Venue Name',
      city: 'City',
      start: 'APRIL 16',
      end: 'NOVEMBER 8',
      year: '2023',
    },
    {
      name: 'The Landscape',
      venue: 'Venue Name',
      city: 'City',
      start: 'MAY 28',
      end: 'NOVEMBER 26',
      year: '2023',
    },
  ];

  let exhibitionList = exhibitions.map((exhb) => {
    return (
      <div className="Bio__sectionListItem" key={exhb.name}>
        <h4>{exhb.name}</h4>
        <p>
          {exhb.venue}, {exhb.city}
        </p>
        <p>
          {exhb.start} - {exhb.end} - {exhb.year}
        </p>
      </div>
    );
  });

  let awards = [
    {
      name: 'Landscape Photography Awards',
      city: 'San Francisco',
      year: '2015',
    },
    { name: 'Inge Morath Award', city: 'New York City', year: '2018' },
    { name: 'Fogtdal Photographers Award', city: 'Copenhagen', year: '2020' },
    { name: 'Oskar Barnack Award', city: 'Amsterdam', year: '2022' },
  ];

  let awardList = awards.map((award) => {
    return (
      <div className="Bio__sectionListItem" key={award.name}>
        <h4>{award.name}</h4>
        <p>
          {award.city} - {award.year}
        </p>
      </div>
    );
  });

  return (
    <div className="Bio container">
      <h2 className="Bio__header">Bio</h2>
      <div className="Bio__imageContainer">
        <img src={images.Self} alt="portrait of photographer" />
      </div>
      <section className="Bio__section">
        <div className="Bio__sectionHeader">
          <h3>Details</h3>
        </div>
        <div className="Bio__sectionContent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quae sed maxime ipsum odit, delectus soluta dolor
            exercitationem ducimus expedita sequi ea porro nobis, aspernatur
            sunt ipsam nam? Vero, sapiente.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quae sed maxime ipsum odit, delectus soluta dolor
            exercitationem ducimus expedita sequi ea porro nobis, aspernatur
            sunt ipsam nam? Vero, sapiente.
          </p>
        </div>
      </section>
      <section className="Bio__section">
        <div className="Bio__sectionHeader">
          <h3>Exhibitions</h3>
        </div>
        <div className="Bio__sectionContent Bio__sectionContent-list">
          {exhibitionList}
        </div>
      </section>
      <section className="Bio__section">
        <div className="Bio__sectionHeader">
          <h3>Awards</h3>
        </div>
        <div className="Bio__sectionContent Bio__sectionContent-list">
          {awardList}
        </div>
      </section>
      <section className="Bio__section">
        <div className="Bio__sectionHeader">
          <h3>Contact Me</h3>
          <p>E - info@mysite.com</p>
          <p>T - 123-456-7890</p>
        </div>
        <div className="Bio__sectionContent">Content</div>
      </section>
    </div>
  );
};

export default Bio;
