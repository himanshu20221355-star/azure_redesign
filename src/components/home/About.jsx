/** Studio founders. Interactions are managed by useSiteExperience. */
export default function About() {
  return (
    <section id="about" data-bg="light" className="section">
      <div className="container">
        <div className="about-s">
          <div className="u-48" />
          <div className="grid">
            <div className="s_title">
              <p data-scroll-reveal="p" className="l1 a-center">
                About the studio
              </p>
            </div>
          </div>
          <div className="u-48" />
          <div className="divider">
            <div data-scroll-reveal="line" className="line-v" />
          </div>
          <div className="u-64" />
          <div className="grid">
            <div data-scroll-reveal="ctn" className="about-s_img">
              <img
                loading="lazy"
                alt="Rashi Bothra and Ruchi Gehani, principal designers of Azure Interiors"
                src="/assets/studio/founders.jpg"
                className="about-s_img_el"
              />
            </div>
            <div className="about-s_info">
              <h2 data-scroll-reveal="h" className="h2">
                Rashi Bothra
                <br />& Ruchi Gehani
              </h2>
              <div className="u-16" />
              <h3 data-scroll-reveal="h" className="c1">
                Principal Designers
              </h3>
              <div className="u-48" />
              <p data-scroll-reveal="p" className="p1">
                Professionally trained in interior design, Rashi and Ruchi
                founded Azure Interiors in Raipur in 2013 to bring a more
                personal experience to designing and styling the home.
              </p>
              <div className="u-24" />
              <p data-scroll-reveal="p" className="p1">
                Specialising in luxury residences, the studio creates
                tailor-made spaces shaped around each client&apos;s taste,
                lifestyle and budget, from concept design, consultations and
                turnaround projects to custom furniture in a range of finishes.
              </p>
              <div className="u-24" />
              <p data-scroll-reveal="p" className="p1">
                Their portfolio spans private homes, concept retail stores and
                hospitality, including Clark Hotels, Zeqon and Hello Bastar.
              </p>
            </div>
          </div>
          <div className="u-160" />
        </div>
      </div>
    </section>
  );
}
