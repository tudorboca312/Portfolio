import React from "react";

const LinkComponent = ({
  linkPath,
  styles,
  text,
  icon,
  download,
  isWhatsApp,
}) => {
  return (
    <a
      href={isWhatsApp ? `https://wa.me/${linkPath}` : linkPath}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      download={download ? "Resume.pdf" : undefined}
      className={styles}
    >
      {icon ? (
        <>
          {text} {icon}
        </>
      ) : (
        text
      )}
    </a>
  );
};

export default LinkComponent;
