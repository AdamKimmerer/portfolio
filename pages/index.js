import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import PostLink from "../components/PostLink";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adam Kimmerer</title>
        <meta
          name="description"
          content="Adam Kimmerer's Design, Product, and Research Portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LogoContainer>
          <Image
            width="1058"
            height="552"
            layout="responsive"
            src="/images/logo.png"
            alt="Adam Kimmerer"
          />
        </LogoContainer>
        <Content>
          <BlurbContainer>
            <h1>Product Design.</h1>
            <p>
              Whether we use technology to stay in contact with friends, get
              help we need, or even inspire a revolution, we depend on good
              design to help people meet their goals. With the proper insight,
              research, inspiration, and innovation we can create meaningful
              online experiences that change our world.
            </p>
          </BlurbContainer>
          <CardList>
          <PostLink
              link="/posts/know-your-vote"
              title="Know Your Vote T.O."
              postType="Showcase"
              postImage="/images/know-your-vote.png"
            />
          <PostLink
              link="/posts/fake-app-for-real-transformation"
              title="Fake App for Real Transformation"
              postType="Article"
              postImage="/images/process-mapping.png"
            />
            <PostLink
              link="https://www.figma.com/file/OTNCjDUkd7JB9PfUD2dHIj/Untitled?type=whiteboard&node-id=0%3A1&t=yuWt5iJvP0Id7aHb-1"
              title="Strategic Design Process Illustrated"
              postType="External Link"
              postImage="/images/strategic-design-process.png"
            />
            <PostLink
              link="/posts/modernizing-health-data"
              title="Modernizing Health Data"
              postType="Case Study"
              postImage="/images/modernizing-health-data.png"
            />
            <PostLink
              link="/posts/ballprk-mobile-redesign"
              title="BALLPRK Redesign | Mobile"
              postType="Showcase"
              postImage="/images/ballprk-mobile-redesign.png"
            />
            <PostLink
              link="/posts/ballprk-mvp-pt1"
              title="BALLPRK MVP | Part I"
              postType="Case Study"
              postImage="/images/ballprk-mvp-pt1.png"
            />
            <PostLink
              link="/posts/ballprk-mvp-pt2"
              title="BALLPRK MVP | Part II"
              postType="Case Study"
              postImage="/images/ballprk-mvp-pt2.png"
            />
          </CardList>
        </Content>
      </main>
    </div>
  );
}

const LogoContainer = styled.figure`
  margin-bottom: 30px;
  margin-top: 70px;
  width: 100%;
  max-width: 900px;
`;

const Content = styled.section`
  padding-left: 80px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    padding: 0 5% ;
  }
`;

const BlurbContainer = styled.section`
  color: #d4c853;
  width: 100%;
  max-width: 1030px;
  margin-bottom: 50px;
  font-family: "Helvetica Neue", "Arial";

  h1 {
    font-size: 62px;
    text-transform: uppercase;
    font-weight: 700;

    @media (max-width: 1200px) {
      font-size: 40px;
    }

    @media (max-width: 850px) {
      font-size: 34px;
      margin-bottom: 16px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;

    @media (max-width: 1200px) {
      font-size: 18px;
    }

    @media (max-width: 850px) {
      font-size: 16px;
    }
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
