import styled from "styled-components";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

const SocialLinksComponent = ({ right }) => {
  return (
    <SocialLinks className={right ? "right" : "left"}>
      <a
        href="https://drive.google.com/file/d/1ZD4MBtw6fhacGp6GkSgdgcMTM7oDTRm4/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faAddressCard} />
      </a>
      <a
        href="https://www.linkedin.com/in/adamkimmerer/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </SocialLinks>
  );
};

const SocialLinks = styled.div`
  &.right a {
    margin-right: 20px;

    @media (max-width: 650px) {
        margin-right: 14px;
    }
  }

  &.left a {
    margin-left: 20px;

    @media (max-width: 650px) {
        margin-left: 14px;
    }
  }

  svg {
    width: 26px;
    height: 26px;

    @media (max-width: 650px) {
        width: 20px;
        height: 20px;
    }
  }
`;

export default SocialLinksComponent;
