import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Footer = () => {
  const { footerItems, socialMedia, contact } = useContext(DataContext);
  return (
    <footer>
      <div className="footer-top">
        <svg
          className="nav-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 362.38 29.116"
        >
          <path
            d="M160.25 28.696c-1.01-.549-1.11-1.18-.511-3.22 1.596-5.44 2.04-14.206.972-19.212-.719-3.368-.27-4.07 2.997-4.677 3.158-.588 5.335-.188 5.86 1.078.298.72.246 1.04-.479 2.972-1.784 4.756-1.902 5.709-1.282 10.394.222 1.683.608 3.229 1.042 4.175 1.535 3.629 3.94-1.307 4.454-2.48.796-1.852.861-2.233.97-5.69.066-2.138-.025-4.8-.215-6.297-.4-3.154-.271-3.338 2.34-3.351 1.924-.01 3.145.547 3.397 1.548.186.744-.08 7.554-.466 11.937-.361 4.091-1.206 8.517-1.898 9.942-.702 1.445-1.355 1.714-6.368 2.624-4.318.784-9.61.91-10.812.257zm-22.838-1.261c-1.81-1.1-1.851-1.15-1.822-2.177.017-.578.288-2.181.604-3.564.767-3.363 1.027-10.172.566-14.825-.186-1.873-.267-3.69-.18-4.035.27-1.073 1.302-1.348 5.483-1.458 4.444-.117 9.903.62 11.092 1.497.846.624 1.413 2.153 2.562 6.915 1.31 4.706 1.069 9.599-.013 13.067-.542 1.73-1.167 3.495-1.388 3.923-.511.988-1.913 1.58-3.5 1.478-1.6-.464-1.233-1.516-1.233-3.562 0-3.122-.057-3.56-.555-4.234-.98-1.324-2.912-1.19-4.584.32-1.383 1.25-1.81 2.258-2.123 5.02-.152 1.338-.41 2.428-.603 2.551-.86.545-2.462.204-4.306-.916zm10.828-12.109c1.293-1.135 2.301-3.323 2.46-5.338.12-1.504.07-1.722-.546-2.383-.814-.874-1.924-.946-3.481-.228-1.906.88-2.779 2.268-2.779 4.42 0 1.543.52 2.74 1.572 3.626 1.094.92 1.638.9 2.774-.097zM5.914 28.002c-2.784-.522-4.858-1.283-5.41-1.985-.727-.924-.686-1.808.245-5.249.723-2.672.788-3.27.794-7.296.003-2.816-.144-5.254-.412-6.813-.721-4.202.054-5.145 4.74-5.765C9.479.417 15.563.426 17.384.911c1.786.475 2.23.885 3.287 3.031 1.1 2.236 1.105 5.202.258 5.633-4.967 2.244-6.018-2.74-7.475-3.41-1.135-.387-3.173-.434-4.07-.093-.883.336-1.485 1.562-1.485 3.024 0 1.645.34 2.384 1.4 3.04 1.045.645 1.798.696 3.515.236 1.111-.297 1.252-.28 1.592.183.43.589.5 3.209.114 4.227-.308.808-1.118.87-3.579.277-2.407-.582-2.343-.616-2.183 1.149 1.126 9.524 8.36 1.898 11.45 3.149 0 0 .697.134.517 1.464-.576 4.271-2.764 5.51-9.633 5.458-2.12-.016-4.45-.141-5.178-.277zM25.193 28c-1.03-.5-1.164-1.284-.583-3.427.933-3.437 1.238-14.119.59-20.628-.1-1.01-.022-1.778.25-2.429C25.96.296 26.947.002 30.534 0c3.645-.002 3.856.265 2.532 3.203-.916 2.032-1.233 3.448-1.615 7.207-.39 3.834-.02 6.681 1.077 8.276 2.688 3.907 4.754 1.985 5.96-5.545.467-2.918.37-6.807-.259-10.43L37.896.792H39.6c1.961 0 3.562.41 4.154 1.064.351.389.371.792.14 2.804-.15 1.293-.396 5.029-.548 8.303-.226 4.881-.409 6.537-1.015 9.195-.878 3.85-1.228 4.333-3.568 4.942-4.19 1.09-12.094 1.615-13.571.9zm50.466-.28c-1.51-.421-2.186-.776-2.962-1.552-1.532-1.532-1.708-2.474-1.61-8.575C70.593 7.02 72.23-1.15 83.452 1.41c2.679.661 3.848 1.456 4.813 3.27 1.207 2.27 1.49 4.244 1.454 10.136-.027 4.427-.109 5.404-.578 6.88-1.071 3.368-3.112 5.223-6.75 6.137-2.398.602-4.293.57-6.732-.111zm9.41-15.154c.214-4.718-.653-6.186-3.446-5.837-4.455.978-5.021 7.018-5.051 10.291-.015 3.192.42 4.275 3.123 4.087 4.12-.555 5.231-5.66 5.375-8.54zM96.8 27.868c-1.244-.436-3.09-1.595-3.69-2.32-.295-.354-.263-.884.199-3.263 1.2-6.183 1.265-7.253 1.02-16.982l-.044-1.707 1.097-.319c.604-.175 2.807-.58 4.895-.899 4.16-.635 6.52-.585 9.346.196 1.983.549 3.712 2.14 4.003 3.685.275 1.455-.765 9.786-1.315 10.538-.22.302-1.32.518-4.136.812-4.801.502-5.696.742-6.646 1.782-.746.817-.762.895-.765 3.884-.001 1.677-.076 3.496-.167 4.042-.162.982-.176.992-1.386.98-.672-.008-1.757-.2-2.411-.43zm8.24-14.31c1.89-1.704 2.4-4 1.163-5.237-.893-.893-1.29-.824-2.703.475-1.377 1.266-1.939 2.369-1.939 3.807 0 2.117 1.68 2.579 3.48.956zM49.824 27.37c-1.771-1.184-2.767-2.277-2.767-3.038 0-.385.234-1.82.52-3.19.939-4.5 1.16-8.305.791-13.67-.316-4.625-.31-4.855.171-5.395C51.706.84 55.526.226 59.05.656c2.415.294 5.117.657 6.164 1.33.61.393 1.665 4.304 1.926 6.715.298 1.804.14 1.494-1.428 2.278-2.332 1.746-1.846 2.757-.416 4.084 1.578 1.082 1.341 1.956 1.341 3.755 0 4.08-.96 7.916-2.171 8.67-.827.516-4.056.724-4.572.295-.503-.417-.506-1.781-.01-3.84.496-2.052.52-6.481.043-7.625-.514-1.23-1.145-1.767-2.075-1.767-1.335 0-2.48.918-3.372 2.7-.789 1.58-.808 1.706-.811 5.478-.005 4.622-.178 5.147-1.733 5.262a3.84 3.84 0 01-2.11-.622zm7.968-16.16c1.975-.655 2.759-1.512 2.759-3.017 0-1.526-.653-2.228-2.072-2.228-2.39 0-3.75 1.407-3.75 3.877 0 .796.08 1.526.177 1.623.303.303 1.528.194 2.886-.256zm133.926 16.49c-.546-.152-.992-.396-.992-.541 0-.146.286-1.107.637-2.136 1.156-3.399 1.465-10.13.658-14.338-.342-1.783-1.135-2.549-2.521-2.435-.964.08-1.053.164-1.58 1.488-.73 1.834-.928 2.006-2.069 1.792-1.477-.277-1.805-1.163-1.445-3.904.388-2.952.846-3.871 2.235-4.486 2.118-.937 4.552-1.118 11.039-.82 7.754.356 7.933.456 6.97 3.915-.2.718-.503 1.974-.673 2.79-.376 1.812-1.265 2.82-2.094 2.375-.295-.157-.789-.97-1.1-1.808-.528-1.428-1.353-2.43-2.01-2.443-.54-.01-1.648 2.765-1.963 4.92-.26 1.782-.245 2.567.095 4.63.225 1.365.489 3.173.586 4.017.098.844.509 2.562.913 3.819.404 1.257.68 2.424.615 2.595-.32.835-5.04 1.204-7.301.57zm19.827-.005c-.555-.17-1.298-.59-1.651-.931-1.257-1.215-1.429-2.579-1.457-11.525-.462-7.969.634-12.745 7.71-13.248 4.715-.312 7.31.4 8.872 2.437 2.14 2.792 3.162 14.113 1.645 18.233-.563 1.526-2.26 3.607-3.441 4.218-1.967 1.018-9.347 1.533-11.678.816zm6.878-5.643c5.129-3.297 4.076-14.276.512-14.644-1.785 0-3.021 2.234-4.02 7.265-.317 1.597-.388 2.734-.25 4.029.316 2.419 1.86 4.244 3.758 3.35zm59.593 5.601c-1.087-.052-1.931-.218-2.573-.517-.754-.352-1.598-1.478-2.327-3.543-.576-1.633-.623-2.17-.624-7.189-.003-10.038.503-12.928 2.486-14.21C276.27 1.356 279.037.764 282.42.6c4.79-.013 8.784 2.752 9.112 6.67.229 2.713-.386 3.227-2.838 3.711-1.64.324-2.043-.078-2.714-2.705-.156-.613-.545-1.298-.865-1.521-.819-.574-2.373-.513-3.184.125-1.23.968-2.333 5.601-2.279 9.573.03 2.26.16 2.758.977 3.784 1.19 1.318 2.72-.092 3.814-1.092 1.078-1.35 1.942-1.154 3.572-1.151 3.125.19 3.445.87 3.773 3.533.169 4.49-10.007 6.254-13.772 6.125zm-25.378-.658c-2.156-.28-3.909-1.131-4.129-2.008-.11-.439.143-2.262.655-4.715.991-4.755 1.05-7.207.274-11.408-.933-5.053-.896-5.316-.077-6.075 3.106-2.437 6.526-2.172 8.677-2.21 3.043-.054 6.037-.022 6.654.07 1.552.234 3.356 1.506 4.366 3.079.745 1.161.724 1.471.7 2.587-.016.696-.368 1.007-.72 1.395-.577.608-3.617 1.248-4.334-.198-1.063-2.148-1.884-1.608-4.883-1.691-2.01-.056-2.402.076-2.932.57-.542.504-.595.738-.461 2.035.266 2.583 1.417 3.374 4.453 3.06 1.822-.189 2.511.13 3.046 1.41.43 1.032.31 2.313-.338 3.565-.439.848-.807.891-2.924.34-.838-.218-1.975-.397-2.526-.397-2.766.163.329 4.225.502 4.398 1.714 1.687 2.385 1.688 3.349 1.688.933 0 1.224-.166 2.364-1.35 1.493-1.548 2.489-1.94 3.942-1.548 1.573.423 1.955 1.694 1.089 3.616-1.148 2.545-2.966 3.325-8.796 3.771-3.895.299-5.733.302-7.95.016zm46.9-.24c-1.294-.23-2.676-.015-3.27-1.876-1.234-3.469-.601-7.32-.578-10.952.054-8.571.081-9.01.627-10.137 1.13-2.335 3.657-3.252 8.973-3.254 2.926-.001 3.46.07 4.63.622 1.645.776 2.293 1.47 3.182 3.411 1.054 2.302 1.545 5.731 1.564 10.91.016 4.155-.03 4.598-.593 5.82-.779 1.69-2.696 3.488-4.928 4.62-3.355 1.158-5.725 1.46-9.607.836zm7.314-7.39c1.827-1.826 2.484-3.653 2.615-7.26.09-2.48.032-2.993-.452-3.992-1.147-2.37-2.957-3.105-4.371-1.777-.865.812-1.116 1.712-1.37 4.909-.337 4.25-.231 7.578.271 8.55.675 1.305 1.707 1.171 3.307-.43zm37.475 7.251c-.721-.203-1.525-.632-1.786-.954-.606-.748-.593-1.655.069-4.76.294-1.382.64-3.109.767-3.836.294-1.677-.113-6.648-.796-9.721-.698-3.141-.665-3.534.4-4.835 1.322-1.612 2.47-1.822 4.187-1.818 3.76.11 6.257.253 9.79.424 2.624.006 4.02 1.063 4.541 2.363.58 1.451.819 3.963.442 4.667-.493.92-3.38 1.464-4.524.852-.27-.144-.57-.623-.666-1.065-.247-1.123-1.319-2.305-2.283-2.517-1.4-.307-3.668.115-4.366.813-.537.537-.626.885-.626 2.444 0 1.607.078 1.892.675 2.453.729.684 2.03.832 3.879.44.81-.173 1.076-.114 1.52.33.668.667.747 3.076.14 4.25-.357.691-.49.753-1.257.582-.47-.105-1.452-.191-2.18-.191-1.263 0-1.326.034-1.41.769-.164 1.438.235 2.566 1.329 3.752 1.606 1.742 3.006 1.626 4.998-.416.739-.757 1.283-1.135 2.538-1.31 2.238-.31 2.47-.09 2.548 1.483.13 2.587-1.771 4.72-4.71 5.528-2.219.609-11.352.798-13.219.273zm-19.06-.822c-4.026-.644-6.242-1.212-6.762-1.73-.447-.448-.481-.794-.342-3.483.19-3.683-.306-12.655-.838-15.157-.564-2.656-.52-3.429.213-3.763 1.78-.811 4.418-1.195 6.921-1.007 1.39.104 2.527.243 2.527.31 0 .065-.408 1.524-.907 3.24-1.244 4.28-1.529 6.015-1.57 9.554-.044 3.693.21 4.506 1.938 6.208 1.17 1.152 1.454 1.3 2.709 1.402 1.145.094 1.534.011 2.12-.452.982-.775 1.355-2.2.876-3.345-.345-.828-.333-.889.21-1.064 1.134-.365 3.506-.2 4.564.316 1.628.796 1.734 1.513.677 4.57-.485 1.404-1.044 2.81-1.243 3.124-.775 1.231-6.945 1.942-11.094 1.277zM119.531 9.986c.127-.327.482-1.225.787-1.994.306-.77.56-1.96.565-2.646.008-1.112.433-2.173.871-2.173.088 0 .462.445.83.988 1.484 2.183.537 4.825-2.164 6.038-1.114.5-1.161.489-.889-.213z"
            fillRule="evenodd"
          />
        </svg>

        <div className="rating">
          <h3 className="trustpilot">Trustpilot</h3>
          <h4>#/5 basé sur #### avis</h4>
        </div>
      </div>
      <div className="coordinates">
        {contact.map((el, id) => (
          <address key={id}>
            <i className={el.cName}></i>
            <a href={el.href} title={el.name}>
              {el.name}
            </a>
          </address>
        ))}
      </div>

      <div role="contentinfo" className="footer-nav">
        {footerItems.map((item, id) => (
          <ul className="footer-nav-item" key={id}>
            <h4 className="footer-nav-title">{item.title}</h4>
            {item.content.map((el, id) => (
              <li key={id}>{el.subtitle}</li>
            ))}
          </ul>
        ))}
      </div>

      <address className="footer-social-media">
        {socialMedia.map((link, id) => (
          <a href={link.path} title={link.title} key={id} target="blank">
            <i className={link.cName}></i>
          </a>
        ))}
      </address>
      <small>
        &copy; Copyright {new Date().getFullYear()} - Europ' auto-école - Tous
        droits réservés.
      </small>
      <hr />
      <small className="developped-by">Développé par #####</small>
    </footer>
  );
};

export default Footer;