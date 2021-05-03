import React from 'react';
import './footer.css';
import Button from '@material-ui/core/Button';

export default function Footer() {
  return (
    <>
      <section
        id="contact"
        className="flex pre-footer"
        data-aos="fade-right"
        data-aos-offset="300"
      >
        <h4 className="flex">Visita la meva pàgina personal</h4>

        <Button
          variant="contained"
          href="https://www.laiasolanes.cat/"
          target="_blank"
          className="button"
        >
          laiasolanes.cat
        </Button>
      </section>

      <section className="flex footer">

        <div className="footer__title">
          <h3>Contacte</h3>
        </div>

        <div className="flex footer__data">
          <div className="footer__direction">
            <p>Adreça:</p>
            <p>Carrer Josep Serra Campdelacreu, 5</p>
            <p>Vic · 08500</p>
          </div>
          <div className="footer__phone">
            <p>
              Tel:
              {' '}
              <a
                href="phoneto: +34 653 62 87 04"
                className="link--light"
              >
                +34 653 62 87 04
              </a>
            </p>
            <p>
              E-mail:
              {' '}
              <a
                href="mailto:hola@laiasolanes.cat"
                className="link--light"
              >
                hola@laiasolanes.cat
              </a>
            </p>
          </div>
          <div className="footer__links">
            <p>
              <a
                href="https://www.linkedin.com/in/laia-solanes-farr%C3%A9s-68a066147/"
                target="_blank"
                rel="noreferrer"
                className="link--light"
              >
                Linkedin
              </a>
            </p>
          </div>
        </div>

      </section>

      <section className="copyright">
        &copy; 2021 · Laia Solanes
      </section>
    </>
  );
}
