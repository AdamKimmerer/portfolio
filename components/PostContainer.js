import Head from "next/head";
import styled from "styled-components";

import StoryHeader from "./StoryHeader";

const PostContainer = ({ children, title, postType, postImage }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StoryContainer>
        <div>
          <StoryHeader
            title={title}
            postType={postType}
            chapters={children}
            postImage={postImage}
          />
          <StoryContents>{children}</StoryContents>
        </div>
      </StoryContainer>
    </>
  );
};

const StoryContainer = styled.article`
  height: auto;
  margin: 4%;
  background: #f6f5f0;
  padding: 2%;

  & > div {
    border: 3px solid #161414;
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: underline;
    color: blue;
  }
`;

const StoryContents = styled.section`
  font-family: "PT Serif";
  width: 70%;
  color: #252020;
  margin: auto;
  line-height: 1.58;
  margin-bottom: 60px;

  @media (max-width: 850px) {
    width: 80%;
  }

  h1, h2 {
    font-style: italic;
    margin-top: 40px;

    @media (max-width: 1200px) {
      margin-top: 20px;
    }
  }

  h1 {
    font-size: 36px;

    @media (max-width: 1200px) {
      font-size: 30px;
    }
  }

  h2 {
    margin-bottom: 10px;
    font-size: 30px;

    @media (max-width: 1200px) {
      font-size: 26px;
    }
  }

  p {
    margin: 20px 0;
    font-size: 21px;
    max-width: 600px;
    
    @media (max-width: 1200px) {
      font-size: 18px;
    }
  }
  
  ol {
    font-size: 18px;
    margin-bottom: 40px;
    opacity: .8;
    list-style: numbered;

    li {
      margin: 15px 30px;
    }
  }
`;

export default PostContainer;
