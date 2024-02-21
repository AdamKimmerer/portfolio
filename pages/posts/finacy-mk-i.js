import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

import PostContainer from "../../components/PostContainer";
import ImageContainer from "../../components/ImageContainer";

const Post = () => {
  const { pathname } = useRouter();
  const path = pathname.replace("/posts/", "");

  return (
    <PostContainer title="Finacy Mk I" postType="Case Study">
      <p>
        There are three big issues with the financial education landscape:
        current solutions are outdated, especially compared to learning apps
        like Duolingo and Khan Academy; parents weren&rsquo;t taught proper
        financial education in school, if they were taught any at all; and the
        economic landscape is getting more dire as the wealth gap increases.
      </p>
      <p>
        Our mission with Finacy was to engage children in the classroom with a
        more modern financial education game, provide a means for parents to
        also engage, and build empathy for those who may not experience the
        financial reality of their peers.
      </p>
      <h1>Current State of Education Apps</h1>
      <p>
        EdTech is a difficult market. There isn&rsquo;t as much funding
        available and we&rsquo;re often dealing with issues ranging from
        procurement to curriculum when looking to enter school. Pedagogy and
        game design are also deeply technical fields that demand an expert
        knowledge and experience.
      </p>
      <p>
        Luckily, the fintech, edtech, and gaming spaces include some truly
        incredible platforms from which we can learn and be inspired. I
        won&rsquo;t include the apps that we saw as dated but let&rsquo;s
        showcase some of our big inspirations.
      </p>
      <h3>Duolingo - Gamified EdTech</h3>
      <ImageContainer>
        <Image
          src={`/images/${path}/duolingo.png`}
          layout="intrinsic"
          alt="Duolingo Screenshots"
          width="1520"
          height="778"
        />
      </ImageContainer>
      <h3>BYJU&rsquo;s - Gamified EdTech</h3>
      <ImageContainer>
        <Image
          src={`/images/${path}/byju.jpg`}
          layout="intrinsic"
          alt="BYJU Screenshot"
          width="4416"
          height="2484"
        />
      </ImageContainer>
      <h3>MyDoh - FinTech with Learning Modules</h3>
      <ImageContainer>
        <Image
          src={`/images/${path}/mydoh.png`}
          layout="intrinsic"
          alt="MyDoh Screenshot"
          width="2360"
          height="1416"
        />
      </ImageContainer>
      <h3>Toca Life World - Kids Gaming</h3>
      <ImageContainer>
        <Image
          src={`/images/${path}/toca.png`}
          layout="intrinsic"
          alt="Toca World Life screenshot"
          width="1920"
          height="1080"
        />
      </ImageContainer>
      <h2>Discovery</h2>
      <p>
        A common theme in early-stage qualitative research on younger users is
        access. Unless you have connections in schools, it&rsquo;s difficult to
        get direct conversations. Even when you can the standard 1-on-1
        interview is pretty intimidating for a kid. We&rsquo;ll see this reality
        reflected quite a bit in the next few sections.
      </p>
      <h3>SMEs</h3>
      <p>
        As I mentioned earlier, the EdTech and Gaming space require some deep
        knowledge in pedagogy and game design, respectively. Therefore, our
        first stage was SMEs in pedagogy, child behaviour, and schools.
      </p>
      <p>
        From our wonderful friends and colleagues we quickly learned that
        getting into schools early on would be a massive challenge due to
        state-based curricula and long procurement processes. This set us on a
        parent-child focus.
      </p>
      <h3>Building Personas from Parents</h3>
      <p>
        We began by sending out a survey to parents to learn what their
        financial education looked like, what they wished they were taught, and
        in what ways they worry about their children&rsquo;s financial futures.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Persona.png`}
          layout="intrinsic"
          alt="Personas"
          width="1149"
          height="923"
        />
      </ImageContainer>
      <p>
        A well-crafted survey can provide a surprisingly solid set of early
        personas and this survey did an incredible job. From there we ran 1-on-1
        interviews with select survey participants, validating and refining our
        personas.
      </p>
      <h2>Early-Stage Strategy vs. Scale-Up in Game Design</h2>
      <p>
        We were not a game design studio and did not have the resources to spend
        years on an early access title. Since we were also taking a hybrid
        EdTech/Gaming approach we could focus on the former while strategizing
        towards the latter with a gamified experience without having to deal
        with a game design engine.
      </p>
      <p>
        We do, however, have to think like a game design studio for later
        stages. This means carefully choosing assets, building features that can
        fit into the wider game ecosystem, and building as much interactivity as
        possible early on.
      </p>
      <h2>Look and Feel</h2>
      <p>
        The cooperative lack of interactivity between a web app and a game means
        we need it to feel like a game through game-like assets, animations, and
        unconventional UI.
      </p>
      <p>
        Paid assets are huge at this stage but we need assets that are modular
        so we can later build custom buildings, characters, vehicles, etc.
        I&rsquo;ll show rather than tell:
      </p>
      <h3>Modular Assets</h3>
      <ImageContainer>
        <Image
          src={`/images/${path}/modular.png`}
          layout="intrinsic"
          alt="Example of modular elements"
          width="1246"
          height="734"
        />
      </ImageContainer>
      <h3>Animations</h3>
        <VideoContainer>
          <video
            width="1920"
            height="1080"
            preload="auto"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={`/images/${path}/animations.webm`} />
            Your browser does not support the video tag.
          </video>
        </VideoContainer>

      <h3>UI Elements</h3>
      <ImageContainer>
        <Image
          src={`/images/${path}/ui-elements.jpg`}
          layout="intrinsic"
          alt="Examples of UI Elements"
          width="1357"
          height="874"
        />
      </ImageContainer>
      <h3>Experiments</h3>
      <ImageContainer>
        <Image
          src={`/images/${path}/experiments.jpg`}
          layout="intrinsic"
          alt="Screenshots of experiments"
          width="4519"
          height="1105"
        />
      </ImageContainer>
      <h2>Usability Testing</h2>
      <p>
        I&rsquo;ve found that the best way to conduct user research with kids is
        with a prototype that they can get their hands on, rather through
        abstract questions. With a prototype we were able to do contextual
        research.
      </p>
      <h3>Device and Context</h3>
      <p>
        Not terribly surprising but tablets, Chromebooks, and landscape-oriented
        phones are by far the most important devices to support. Kids are also
        often multitasking: watching TikTok on a phone while playing a game on
        their tablet.
      </p>
      <h3>Text and Images</h3>
      <p>
        We overestimated reading comprehension of younger kids, meaning we
        needed to use more images to explain the concepts and later problems.
        Assets come in to save the day again! We also realized that we needed to
        split our sections into smaller pieces so we don&rsquo;t overwhelm.
      </p>
      <h3>Sessions and Messaging</h3>
      <p>
        While our first release was based purely on teaching a concept and
        testing knowledge, our longer-term plan involved a life-sim to put those
        concepts into a real world. Perfect for multitasking!
      </p>
      <p>
        We realized that we needed to create a system by which this method
        introduced features into the game as a sort of realism progression. For
        example, a 9 year-old can receive an in-game allowance that they can
        spend or save but having their bike break down might be a touch too real
        for them.
      </p>
      <h2>Final Designs</h2>
      <ImageContainer>
        <Image
          src={`/images/${path}/final.png`}
          layout="intrinsic"
          alt="Screenshots of final design"
          width="1631"
          height="1191"
        />
      </ImageContainer>
    </PostContainer>
  );
};

const VideoContainer = styled.div`
    max-width: 110%;
    margin: auto;
    position: relative;
    left: -5%;
    display: flex;
    justify-content: flex-start;
    border: none;
  }
`;

export default Post;
