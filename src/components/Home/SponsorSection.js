import React from 'react';
import styles from '../../styles/components/sponsor_section.css'

const sponsors = [
  {
    href: 'https://engineering.vanderbilt.edu/cs',
    imgSrc: 'assets/sponsors/cs.png',
    alt: 'Computer Science',
  },
  {
    href: 'https://engineering.vanderbilt.edu/ece',
    imgSrc: 'assets/sponsors/ece.png',
    alt: 'Electrical and Computer Engineering',
  },
  {
    href: 'https://www.vumc.org/vuiis/welcome',
    imgSrc: 'assets/sponsors/vuiis.png',
    alt: 'Vanderbilt University Institute of Imaging Science',
  },
  {
    href: 'https://medschool.vanderbilt.edu/brain-institute',
    imgSrc: 'assets/sponsors/vbi.png',
    alt: 'Vanderbilt Brain Institute',
  },
  {
    href: 'https://www.vanderbilt.edu/vise',
    imgSrc: 'assets/sponsors/vise.png',
    alt: 'Vanderbilt Institute for Surgery and Engineering',
  },
  {
    href: 'https://vkc.vumc.org/vkc',
    imgSrc: 'assets/sponsors/vkc.png',
    alt: 'Vanderbilt Kennedy Center',
  },
  {
    href: 'https://engineering.vanderbilt.edu',
    imgSrc: 'assets/sponsors/vuse.png',
    alt: 'Vanderbilt University School of Engineering',
  },
  {
    href: 'https://www.vanderbilt.edu/datascience',
    imgSrc: 'assets/sponsors/dsi.png',
    alt: 'Vanderbilt Data Science Institute',
  },
  {
    href: 'https://engineering.vanderbilt.edu/bme/',
    imgSrc: 'assets/sponsors/bme.png',
    alt: 'Biomedical Engineering',
  },
];

const SponsorsSection = () => (
  <div className="sponsors-section">
    <h2>Thank you to our Sponsors:</h2>
    <div className="sponsors-grid">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="sponsor-card">
          <a
            href={sponsor.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={sponsor.imgSrc} alt={sponsor.alt} />
          </a>
          <p>{sponsor.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default SponsorsSection;
