import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useEffect } from "react";

import PostLink from "../components/PostLink";

export default function Home() {
  useEffect(() => {
    const vid = document.getElementsByTagName("video");
    console.log(vid[0]);
  }, []);

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
          <VideoContainer>
            <video width="100%" height="100%" preload="auto" playsInline autoPlay muted loop>
              <source src="/images/spinning.webm" />
              Your browser does not support the video tag.
            </video>
          </VideoContainer>
          <GifContainer>
            <Image
              src="/images/breathe.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="spinning thing"
            />
          </GifContainer>
          <span>Adam<br/>Kimmerer</span>
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
  width: 100%;
  max-width: 1800px;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  position: relative;
  border-bottom: 1px solid #304141;

  span {
    position: absolute;
    padding-right: 20%;
    padding-left: 20%;
    bottom: 20%;
    left: 0;
    font-size: 178px;
    line-height: 100%;
    text-transform: capitalize;
    color: #fff;
    -webkit-text-stroke: 4px #304141;
    font-style: italic;
    font-weight: bolder;
  }
`;

const VideoContainer = styled.div`
  flex-grow: 1;
  border-right: 1px solid #304141;
`;

const GifContainer = styled.div`
  position: relative;
  flex: 0 0 35%;
  border-top: 1px solid #304141;
`;

const Content = styled.section`
  padding-left: 80px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    padding: 0 5%;
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
