import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import SocialLinks from "./SocialLinks.js"
import StoryHeader from "./StoryHeader";

const PostContainer = ({ children, title, postType, postImage }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StoryContainer>
        <SideBar />
        <Content>
          <Header>
            <Link href="/">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <SocialLinks/>
          </Header>
          <StoryHeader title={title} postType={postType} chapters={children} />
          <StoryContents>{children}</StoryContents>
        </Content>
      </StoryContainer>
    </>
  );
};

const StoryContainer = styled.article`
  display: flex;

  @media (max-width: 650px) {
    margin-bottom: 50px;
  }

  a {
    text-decoration: underline;
    color: blue;
  }
`;

const SideBar = styled.div`
  width: 60px;
  border-right: 1px solid #304141;
  background: #efe0e0;

  @media (max-width: 850px) {
    width: 40px;
  }

  @media (max-width: 650px) {
    width: 10px;
  }
`;

const Content = styled.div`
  flex: 1;
  position: relative;

`;

const Header = styled.nav`
  border-bottom: 1px solid #304141;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  font-size: 26px;
  z-index: 9;

  @media (max-width: 1200px) {
    height: 60px;
  }

  @media (max-width: 650px) {
    height: 50px;
    padding: 0 14px;
    flex-direction: row-reverse;
    position: fixed;
    bottom: 0;
    right: 0;
    background: #F0F0E8;
    border-top: 1px solid #304141;
  }

  svg {
    color: #304141;
    cursor: pointer;

    @media (max-width: 650px) {
      width: 20px;
    }
  }
`;

const StoryContents = styled.section`
  line-height: 1.58;
  margin-bottom: 60px;
  flex: 0 1;
  width: 80%;
  margin: auto;
  margin-top: 60px;

  @media (max-width: 850px) {
    width: 80%;
  }

  @media (max-width: 650px) {
    width: 80%;
    margin-top: 34px;
  }

  h1,
  h2 {
    @media (max-width: 1200px) {
      margin-top: 20px;
    }
  }

  h1 {
    font-size: 38px;
    font-weight: bolder;
    margin-bottom: 40px;

    @media (max-width: 1200px) {
      font-size: 30px;
    }

    @media (max-width: 650px) {
      font-size: 22px;
      margin-bottom: 24px;
    }
  }

  h2 {
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: bolder;

    @media (max-width: 1200px) {
      font-size: 26px;
    }

    @media (max-width: 650px) {
      font-size: 20px;
    }
  }

  h3 {
    font-size: 22px;
    font-weight: bolder;
    margin-bottom: 20px;

    @media (max-width: 1200px) {
      font-size: 20px;
    }

    @media (max-width: 650px) {
      font-size: 18px;
    }
  }

  p {
    margin-bottom: 40px;
    font-size: 20px;
    max-width: 680px;

    @media (max-width: 1200px) {
      font-size: 18px;
    }

    @media (max-width: 650px) {
      font-size: 16px;
      line-height: 1.40;
      margin-bottom: 20px;
    }
  }

  ol {
    font-size: 18px;
    margin-bottom: 40px;
    opacity: 0.8;
    list-style: numbered;

    @media (max-width: 650px) {
      font-size: 16px;
      line-height: 1.40;
      margin-bottom: 20px;
    }

    li {
      margin: 15px 30px;
    }
  }

  iframe {
    margin-bottom: 40px;

    @media (max-width: 650px) {
      margin-bottom: 10px;
    }
  }
`;

export default PostContainer;
