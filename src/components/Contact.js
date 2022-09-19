import "../styles/layout/contact.scss";
import pdf from "../images/cv-olgargarrucho.pdf";

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__title">Contact</h2>
      <section className="contact__rrss">
        <a
          href="https://github.com/olgargarrucho"
          className="contact__rrss--link"
          target="_blank"
          rel="noreferrer"
          title="Go to github"
        >
          <i className="icon fab fa-github-square"></i>
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/olgargarrucho/"
          className="contact__rrss--link"
          target="_blank"
          rel="noreferrer"
          title="Go to linkedin"
        >
          <i className="icon fab fa-linkedin"></i>
          Linkedin
        </a>
        <a
          href="https://twitter.com/olgargarrucho"
          className="contact__rrss--link"
          target="_blank"
          rel="noreferrer"
          title="Go to twitter"
        >
          <i className="icon fab fa-twitter-square"></i>
          Twitter
        </a>
        <a
          href="mailto: olga_1847@hotmail.com"
          className="contact__rrss--link"
          target="_blank"
          rel="noreferrer"
          title="Send an email"
        >
          <i className="fa-solid fa-envelope"></i>
          Email
        </a>
        <a
          href={pdf}
          className="contact__rrss--link"
          target="_blank"
          rel="noreferrer"
          download="cv-olgargarrucho.pdf"
          title="Download cv"
        >
          <i class="icon fa-solid fa-file-arrow-down"></i>
          Download my CV
        </a>
      </section>
    </div>
  );
}

export default Contact;
