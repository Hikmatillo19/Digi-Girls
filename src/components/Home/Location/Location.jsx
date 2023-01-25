import React from "react";
import "./Location.scss";
function Location() {
  return (
    <section className="location container" id="contact">
      <div className="contLocat">
        <div className="contact">
          <div className="text__contact">
            <span>
              <i className="bi bi-globe"></i>
              <p>
                Веб сайт <br />
                <a href="digitalcity.uz">digitalcity.uz</a>
              </p>
            </span>
            <span>
              <i className="bi bi-telephone-fill"></i>
              <p>
                Телефон <br />
                <a href="tel: +99874 222-22-22">+99874 222-22-22</a>
              </p>
            </span>
            <span>
              <i className="bi bi-envelope-fill"></i>
              <p>
                Почта <br />
                <a href="mail to:dcity@info.com">dcity@info.com</a>
              </p>
            </span>
            <span>
              <i class="bi bi-geo-alt-fill"></i>
              <p>
                Адресс <br />
                улица Бобур Шох, <br /> Andizhan, Узбекистан
              </p>
            </span>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.908330830745!2d72.35783735654724!3d40.74691220747839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1sru!2s!4v1674627172552!5m2!1sru!2s"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;
