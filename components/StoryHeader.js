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
      <DetailsContainer>
        <div>
          <h2>{postType}</h2>
          <h1>{title}</h1>
          <ChapterContainer>{renderChapters()}</ChapterContainer>
        </div>
      </DetailsContainer>
    </Main>
  );
};

const Main = styled.header`
  border-bottom: 1px solid #304141;
`;

const DetailsContainer = styled.section`
  padding: 5% 10%;

  h1 {
    font-size: 58px;
    font-weight: bolder;

    @media (max-width: 1200px) {
      font-size: 30px;
    }

    @media (max-width: 850px) {
      font-size: 24px;
    }
  }

  h2 {
    font-size: 24px;

    @media (max-width: 1200px) {
      font-size: 24px;
    }

    @media (max-width: 850px) {
      font-size: 18px;
    }
  }
`;

const ChapterContainer = styled.div`
  span {
    font-style: italic;
    font-size: 18px;
    display: inline-block;
    &:not(:last-child):after {
      content: "•";
      margin: 0px 6px;
    }
  }
`;

export default StoryHeader;
