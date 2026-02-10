import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const PostLink = ({ title, postType, postImage, link, postTags }) => {
  const renderTags = postTags.map((tag, i) => {
    return <div key={i}>{tag}</div>;
  });

  return (
      <Link href={link} passHref>
        <LinkContainer>
          <Main>
            <DetailsContainer>
              <div>
                <h2>{postType}</h2>
                <h1>{title}</h1>
                <TagList>{renderTags}</TagList>
              </div>
            </DetailsContainer>
            <ImageContainer>
              <Image
                src={postImage}
                layout="fill"
                objectFit="cover"
                quality={80}
                alt={title}
              />
            </ImageContainer>
          </Main>
        </LinkContainer>
      </Link>
  );
};

const LinkContainer = styled.a`
  &:last-child nav {
    border-bottom: none;
  }
`

const Main = styled.nav`
  flex: 0 1;
  cursor: pointer;
  display: flex;
  border-bottom: 1px solid #304141;
  height: 300px;

  @media (max-width: 1200px) {
    height: auto;
  }

  &:hover {
    background: #efe0e0;
  }
`;

const ImageContainer = styled.figure`
  width: 30%;
  overflow: hidden;
  height: auto;
  position: relative;
`;

const DetailsContainer = styled.section`
  display: flex;
  flex: 1;
  border-right: 1px solid #304141;
  padding: 4%;
  align-items: center;

  @media (max-width: 650px) {
    padding: 20px;
  }

  div {
    display: inline-block;
  }

  h1 {
    font-size: 48px;
    font-weight: bolder;

    @media (max-width: 1200px) {
      font-size: 28px;
    }

    @media (max-width: 650px) {
      font-size: 18px;
    }
  }

  h2 {
    font-size: 20px;
    font-weight: bold;

    @media (max-width: 1200px) {
      font-size: 18px;
    }

    @media (max-width: 650px) {
      font-size: 14px;
    }
  }
`;

const TagList = styled.div`
  margin-top: 10px;

  div {
    border: 2px solid #304141;
    border-radius: 50px;
    padding: 10px 14px;
    margin-right: 6px;
    font-size: 14px;
    font-weight: bolder;

    @media (max-width: 1200px) {
      padding: 5px 8px;
      font-size: 12px;
      border: 1px solid #304141;
      font-weight: normal;
    }
  }
`;

export default PostLink;
