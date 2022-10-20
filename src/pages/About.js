import React from "react";

export default function About() {
  return (
    <div className="about-main-container">
    <section className="section about-img">
    <img src="img2.png" alt="mocktail/img"/>
    </section>
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </p><br/><br/>
      <button className="btn-primary"><a href="https://github.com/coderkishornimje?tab=repositories" target="_blank">Stay Connect With us...</a></button>
    </section>
    </div>
  );
}