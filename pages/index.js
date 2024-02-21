import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useEffect } from "react";
import Link from "next/link";

import PostLink from "../components/PostLink";
import SocialLinks from "../components/SocialLinks";

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
      <LogoContainer>
        <Navigation>
          <Link href="#about" scroll={false}>
            About
          </Link>
          <Link href="#work">Work</Link>
        </Navigation>
        <AnimationContainer>
          <VideoContainer>
            <video
              width="100%"
              height="100%"
              preload="auto"
              playsInline
              autoPlay
              muted
              loop
              poster="/images/poster.png"
            >
              <source src="/images/spinning.webm" />
              Your browser does not support the video tag.
            </video>
          </VideoContainer>
          <GifContainer>
            <Image
              src="/images/breathe.gif"
              width={0}
              height={0}
              sizes="100vw"
              alt="spinning thing"
            />
          </GifContainer>
        </AnimationContainer>

        <span>
          Adam
          <br />
          Kimmerer
        </span>
      </LogoContainer>
      <main>
        <Section id="about">
          <SectionTitle>
            <h1>About</h1>
          </SectionTitle>
          <SectionBody>
            <p>
              Whether we use technology to stay in contact with friends, get
              help we need, or even inspire a revolution, we depend on good
              design to help people meet their goals. With the proper insight,
              research, inspiration, and innovation we can create meaningful
              online experiences that change our world.
            </p>
            <SocialLinks right />
          </SectionBody>
        </Section>

        <Section id="work">
          <SectionTitle>
            <h1>Work</h1>
          </SectionTitle>
          <CardList>
          <PostLink
              link="/posts/finacy-mk-i"
              title="Finacy Mk I"
              postType="Case Study"
              postImage="/images/thumbnails/finacy-thumb.jpg"
              postTags={["Design", "Development"]}
            />
            <PostLink
              link="/posts/know-your-vote"
              title="Know Your Vote T.O."
              postType="Showcase"
              postImage="/images/thumbnails/tpl.png"
              postTags={["Design"]}
            />
            <PostLink
              link="/posts/fake-app-for-real-transformation"
              title="Fake App for Real Transformation"
              postType="Article"
              postImage="/images/thumbnails/chunes.png"
              postTags={["Design", "Product"]}
            />
            <PostLink
              link="https://www.figma.com/file/OTNCjDUkd7JB9PfUD2dHIj/Untitled?type=whiteboard&node-id=0%3A1&t=yuWt5iJvP0Id7aHb-1"
              title="Strategic Design Process Illustrated"
              postType="External Link"
              postImage="/images/thumbnails/process.png"
              postTags={["Design"]}
            />
            <PostLink
              link="/posts/modernizing-health-data"
              title="Modernizing Health Data"
              postType="Case Study"
              postImage="/images/thumbnails/speaker.png"
              postTags={["Design", "Development"]}
            />
            <PostLink
              link="/posts/ballprk-mobile-redesign"
              title="BALLPRK Redesign | Mobile"
              postType="Showcase"
              postImage="/images/thumbnails/bp2.jpg"
              postTags={["Design"]}
            />
            <PostLink
              link="/posts/ballprk-mvp-pt1"
              title="BALLPRK MVP | Part I"
              postType="Case Study"
              postImage="/images/thumbnails/bp3.png"
              postTags={["Design", "Development"]}
            />
            <PostLink
              link="/posts/ballprk-mvp-pt2"
              title="BALLPRK MVP | Part II"
              postType="Case Study"
              postImage="/images/thumbnails/bp4.png"
              postTags={["Design", "Development"]}
            />
          </CardList>
        </Section>
      </main>
    </div>
  );
}

const LogoContainer = styled.header`
  width: 100%;
  max-width: 1800px;
  position: relative;
  border-bottom: 1px solid #304141;

  span {
    position: absolute;
    padding-left: 15%;
    bottom: 18%;
    left: 0;
    font-size: 178px;
    line-height: 100%;
    text-transform: capitalize;
    color: #f0f0e8;
    -webkit-text-stroke: 4px #304141;
    font-style: italic;
    font-weight: bolder;
    text-transform: uppercase;
    font-family: Lara;

    @media (max-width: 1200px) {
      padding-left: 10%;
      font-size: 130px;
      -webkit-text-stroke: 3px #304141;
    }

    @media (max-width: 850px) {
      padding-left: 5%;
      font-size: 100px;
      -webkit-text-stroke: 2px #304141;
    }

    @media (max-width: 650px) {
      font-size: 60px;
      -webkit-text-stroke: 1px #304141;
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  position: absolute;
  top: 30px;
  right: 30px;
  align-items: flex-end;
  z-index: 9;

  @media (max-width: 850px) {
    top: 20px;
    right: 20px;
  }

  @media (max-width: 850px) {
    top: 10px;
    right: 10px;
  }

  a {
    margin-left: 20px;
    font-size: 22px;
    font-style: italic;
    font-weight: bolder;

    @media (max-width: 850px) {
      font-size: 18px;
      margin-left: 16px;
    }

    @media (max-width: 850px) {
      font-size: 16px;
      margin-left: 16px;
    }
  }

  a:hover {
    text-decoration: underline;
  }
`;

const AnimationContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
`;

const VideoContainer = styled.div`
  flex-grow: 1;
  border-right: 1px solid #304141;
  display: flex;
  overflow: hidden;

  video {
    @media (max-width: 650px) {
      transform: scale(1.2);
      transform-origin: center;
    }
  }
`;

const GifContainer = styled.div`
  position: relative;
  flex: 0 0 35%;
  border-top: 1px solid #304141;

  img {
    position: relative !important;
    height: 100% !important;
  }
`;

const Section = styled.section`
  border-bottom: 1px solid #304141;
  display: flex;
`;

const SectionTitle = styled.header`
  border-right: 1px solid #304141;
  padding: 30px 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 70px;

  @media (max-width: 850px) {
    width: 60px;
  }

  @media (max-width: 650px) {
    width: 40px;
  }

  h1 {
    transform: rotate(180deg);
    text-align: right;
    font-size: 28px;
    writing-mode: vertical-rl;
    font-weight: bolder;

    @media (max-width: 850px) {
      font-size: 24px;
    }

    @media (max-width: 650px) {
      font-size: 16px;
    }
  }
`;

const SectionBody = styled.div`
  flex: 1;
  padding: 4%;

  p {
    font-style: italic;
    font-size: 28px;
    margin-bottom: 20px;

    @media (max-width: 850px) {
      font-size: 22px;
    }

    @media (max-width: 650px) {
      font-size: 18px;
    }
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
