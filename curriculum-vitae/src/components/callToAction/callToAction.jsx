import React from 'react';
import './callToAction.css';
import Button from '@material-ui/core/Button';

export default function CallToAction() {
  return (
    <section className="flex highlight">

      <div
        className="highlight__text"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <h2>Treballant amb passió no s&#39;arriba mai al límit</h2>
      </div>

      <div
        className="highlight__square"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <h4>Més de 1200 hores de programació.</h4>

        <p>
          Bootcamp FullStack a Skylab Coders. Valorat com el millor bootcamp del món el 2020.
        </p>

        <Button
          variant="contained"
          color="primary"
          href="https://www.skylabcoders.com/ca"
          target="_blank"
          className="button--color"
        >
          Skylab Coders Academy
        </Button>
      </div>

    </section>
  );
}
