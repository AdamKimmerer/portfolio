import Link from "next/link";
import styled from "styled-components";

const StoryHeader = ({ title, postType, chapters, postImage }) => {
  const renderChapters = () => {
    let chapterArray = [];

    chapters.forEach((child) => {
      if (child.type === "h1") {
        chapterArray.push(child.props.children);
      }
    });

    const chaptersRender = chapterArray.map((chapter, key) => {
      return <span key={key}>{chapter}</span>;
    });

    return chaptersRender;
  };

  return (
    <Main postImage={postImage}>
      <Link href="/" passHref>
        <BackHome>&larr; Go back home.</BackHome>
      </Link>
      <DetailsContainer>
        <h1>{title}</h1>
        <h2>{postType}</h2>
        <div>{renderChapters()}</div>
      </DetailsContainer>
    </Main>
  );
};

const Main = styled.header`
  width: 100%;
  padding-top: 47%;
  background-position: 115% 50%;
  background-size: auto 110%;
  overflow: hidden;
  background-repeat: no-repeat;
  position: relative;
  border-bottom: 1px solid #ccc;
  margin-bottom: 60px;
  font-family: "HelveticaNeue-CondensedBold";
  background-image: url("${(props) => props.postImage}");

  @media (max-width: 850px) {
    background-position: 175% 50%;
    padding-top: 0;
    background-image: none;
    height: 360px;
  }
`;

const DetailsContainer = styled.section`
  width: 40%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 700;
    color: #cd5b69;
    font-size: 40px;
    transform-origin: bottom left;
    transform: scale(0.8, 1.2);
    font-size: 54px;

    @media (max-width: 1200px) {
      font-size: 30px;
    }

    @media (max-width: 850px) {
      font-size: 24px;
    }
  }

  h2 {
    text-transform: uppercase;
    font-weight: 700;
    color: #ccc;
    transform-origin: top left;
    transform: scaleY(1.2);
    font-size: 30px;

    @media (max-width: 1200px) {
      font-size: 24px;
    }

    @media (max-width: 850px) {
      font-size: 18px;
    }
  }

  div {
    color: #666;
    font-family: "PT Serif", serif;
    font-style: italic;
    margin-top: 10px;
    font-size: 16px;
    
    @media (max-width: 850px) {
      font-size: 14px;
    }

    span {
      display: inline-block;
        &:not(:last-child):after {
            content: "•";
            margin: 0px 6px;
        }
    }
  }
`;

const BackHome = styled.nav`
  position: absolute;
  top: 30px;
  left: 99px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 1200px) {
    left: 10%;
    font-size: 16px;
  }
`;

export default StoryHeader;
