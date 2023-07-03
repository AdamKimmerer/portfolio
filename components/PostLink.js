import Link from "next/link";
import styled from "styled-components";

const PostLink = ({ title, postType, postImage, link }) => {
  return (
    <Link 
      href={link} 
      passHref
    >
      <Main>
        <Inner postImage={postImage}>
          <DetailsContainer>
            <h1>{title}</h1>
            <h2>{postType}</h2>
          </DetailsContainer>
        </Inner>
      </Main>
    </Link>
  );
};

const Main = styled.nav`
  padding: 2% 1.5%;
  width: 49%;
  background: #f6f5f0;
  margin-bottom: 40px;
  cursor: pointer;

  @media (max-width: 850px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Inner = styled.article`
  width: 100%;
  padding-bottom: 133%;
  overflow: hidden;
  border: 3px solid #161414;
  background: inherit;
  background-image: url("${(props) => props.postImage}");
  background-position: 100% 100%;
  background-size: 100% auto;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 850px) {
    padding-bottom: 140%;
  }
`;

const DetailsContainer = styled.section`
  background: linear-gradient(180deg, #f6f5f0 70.4%, rgba(246, 245, 240, 0));
  padding: 8% 5% 40px;
  font-family: "HelveticaNeue-CondensedBold";
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
  position: absolute;;
  top: 0;
  left: 0;

  @media (max-width: 1200px) {
    padding-right: 5%;
  }

  h1 {
    color: #cd5b69;
    font-size: 40px;
    transform-origin: bottom left;
    transform: scale(0.8, 1.2);

    @media (max-width: 1200px) {
      font-size: 28px;
    }
  }

  h2 {
    color: #ccc;
    font-size: 24px;
    transform-origin: top left;
    transform: scaleY(1.2);

    @media (max-width: 1200px) {
      font-size: 18px;
    }
  }
`;

export default PostLink;
