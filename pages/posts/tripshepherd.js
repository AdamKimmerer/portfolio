import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

import PostContainer from "../../components/PostContainer";
import ImageContainer from "../../components/ImageContainer";

const Post = () => {
  const { pathname } = useRouter();
  const path = pathname.replace("/posts/", "");

  return (
    <PostContainer
      title="TripShepherd: Building Trust & Discovery in Travel"
      postType="Showcase"
    >
      <ImageContainer>
        <Image
          src={`/images/${path}/intro.png`}
          layout="intrinsic"
          alt="Screenshots of main video feed, experience details page, and content creation page."
          width="2614"
          height="1203"
        />
      </ImageContainer>
      <h1>The Challenge</h1>
      <p>
        Travelers don’t trust generic OTA listings. Reviews are anonymous,
        itineraries are vague, and there’s little accountability once the
        booking is done. Younger travelers, especially Gen Z, have shifted their
        discovery to TikTok and Instagram, but those platforms don’t connect to
        bookable experiences.
      </p>
      <p>
        Hosts need better tools to scale trust. They can’t just rely on a
        profile picture and a line of text. They need structured ways to show
        what their experiences are, who they are, and why travelers should trust
        them.
      </p>
      <p>
        Our job was to build a system where trust and discovery were inseparable
        , not bolted on after the fact.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/trust-gap.png`}
          layout="intrinsic"
          alt="Diagram showing pain points in the travel journey funnel from discovery to trust gap to booking friction"
          width="1509"
          height="1504"
        />
      </ImageContainer>

      <h1>My Role</h1>
      <p>
        I led product and design across the MVP, working with squads distributed
        across Canada, Pakistan, and Brazil. My role wasn’t just to design flows
        or prioritize a backlog, it was to create the systems and frameworks
        that allowed the team to move quickly, stay aligned, and build something
        coherent.
      </p>
      <ul>
        <li>
          <strong>Product Strategy:</strong> Sequenced the roadmap into three
          themed sprints (social → discovery → booking).
        </li>
        <li>
          <strong>Design Leadership:</strong> Directed app navigation, feed
          design, booking flows, and review functionality.
        </li>
        <li>
          <strong>Cross-functional Orchestration:</strong> Aligned engineers,
          designers, and ops across three continents.
        </li>
        <li>
          <strong>Org Practices:</strong> Transitioned teams from Jira to Plane
          and restructured epics, stories, and tasks to fit hybrid squads.
        </li>
      </ul>
      <h1>The Approach</h1>
      <p>We worked in arcs, each sprint layering onto the last:</p>
      <ol>
        <li>
          <strong>Videos & Profiles:</strong> gave us the social foundation,
          TikTok-style feed, profile pages, engagement.
        </li>
        <li>
          <strong>Search & Navigation:</strong> built discovery flows, filters,
          and search.
        </li>
        <li>
          <strong>Booking & Post-Tours:</strong> tied it together with trust:
          reviews, cancellation flows, refund clarity.
        </li>
      </ol>
      <ImageContainer>
        <Image
          src={`/images/${path}/roadmap.png`}
          layout="intrinsic"
          alt="Subway-style roadmap graphic showing three stops: Videos & Profiles, Search & Navigation, Booking & Post-Tours"
          width="1873"
          height="416"
        />
      </ImageContainer>
      <p>
        The sequencing mattered. We didn’t start with booking because trust
        isn’t something you bolt on. It has to grow out of the way people
        discover, engage, and connect.
      </p>

      <h1>Solution Pillars</h1>
      <h2>1. Trust & Transparency</h2>
      <ul>
        <li>
          Rich experience pages with itineraries, host profiles, and transparent
          pricing.
        </li>
        <li>Video & text reviews for accountability.</li>
        <li>Cancellation flows with clear refund breakdowns.</li>
      </ul>
      <ImageContainer>
        <Image
          src={`/images/${path}/experience-page.png`}
          layout="intrinsic"
          alt="Experience detail page with floating booking CTA, itinerary details, and host profile"
          width="2352"
          height="1631"
        />
      </ImageContainer>

      <h2>2. Quality Content & Discovery</h2>
      <ul>
        <li>
          TikTok-style video feed with city, experience, and following filters.
        </li>
        <li>
          Social tagging, location metadata, and &apos;See More&apos; deep links
          to experiences.
        </li>
      </ul>
      <ImageContainer>
        <Image
          src={`/images/${path}/feed.png`}
          layout="intrinsic"
          alt="Travel video feed with filters at the top and See More button linking to an experience"
          width="1904"
          height="1631"
        />
      </ImageContainer>

      <h2>3. Scalable IA & Booking</h2>
      <ul>
        <li>
          Global search with filters for city, date, price, and accessibility.
        </li>
        <li>Experiences hub with tabs for all, booked, and saved.</li>
        <li>
          Booking confirmation with shareable link, guest management, and refund
          policies.
        </li>
      </ul>
      <ImageContainer>
        <Image
          src={`/images/${path}/booking-confirmation.png`}
          layout="intrinsic"
          alt="Booking confirmation page showing pricing breakdown, guest management, and share link"
          width="1904"
          height="1530"
        />
      </ImageContainer>

      <h2>4. Operational Foundations</h2>
      <ul>
        <li>
          BOAT moderation tool extended to TripShepherd for content, users, and
          experiences.
        </li>
        <li>Analytics framework spanning growth, sales, and engagement.</li>
      </ul>

      <h1>Reviews as the Keystone</h1>
      <p>Reviews became the growth loop, more than just feedback:</p>
      <ul>
        <li>Guests gain trust from authentic video and text reviews.</li>
        <li>Hosts build reputation and credibility.</li>
        <li>Platform collects structured data for better recommendations.</li>
        <li>Content from reviews feeds back into discovery.</li>
      </ul>
      <ImageContainer>
        <Image
          src={`/images/${path}/video-reviews.png`}
          layout="intrinsic"
          alt="Video review feed with 5-star rating overlay and reviewer profile"
          width="2340"
          height="1004"
        />
      </ImageContainer>

      <h1>Growth</h1>

      <h2>Acquisition Through Deep-Linking Our Network</h2>
      <p>
        Thanks to the incredible work of our sales and partnership teams and
        our MVP, we were able to onboard a significant network of content
        creators and experience creators. By providing deep linking to our
        network&apos;s profiles and experiences, we created a kind of symbiotic
        relationship between TripShepherd&apos;s goals and our creator
        network&apos;s.
      </p>
      <p>
        As creators shared their profiles and experiences for increased reach
        and revenue, we gained a free acquisition channel.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/growth-acquisition.png`}
          layout="intrinsic"
          alt="Placeholder graphic showing deep links from creator content to TripShepherd experiences"
          width="2210"
          height="1203"
        />
      </ImageContainer>

      <h2>Low-Friction Exploration and Onboarding</h2>
      <p>
        While this isn&apos;t anything novel, TripShepherd&apos;s combination
        of travel and social commerce platforms is. Social commerce, in
        general, is still fairly novel in the Western world. This meant we had
        to allow low-friction exploration and onboarding to help users
        understand the platform. Sign-up prompts only show up when a user wants
        to perform an action which is tied to a user account. For example,
        saving an experience. If they&apos;ve attempted to save an experience,
        we&apos;ve already activated them.
      </p>

      <h3>Onboarding</h3>
      <p>
        Another complication with this novel combination of platforms meant we
        had to implement patterns in a novel way. Some onboarding gave some
        guidance, but we also didn&apos;t want to front-load information, so we
        provided behaviour-specific onboarding when a user performed a relevant
        action. A little bit of help when needed.
      </p>
      <VideoContainer>
        <VideoWrapper>
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="Placeholder graphic illustrating low-friction onboarding flows tied to user actions"
            width="480"
            height="1031"
          >
            <source src={`/images/${path}/logged-out-feed.mp4`} type="video/mp4" />
          </video>
        </VideoWrapper>
        <VideoWrapper>
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="Placeholder graphic illustrating low-friction onboarding flows tied to user actions"
            width="480"
            height="1038"
          >
            <source src={`/images/${path}/onboarding.mp4`} type="video/mp4" />
          </video>
        </VideoWrapper>
      </VideoContainer>

      <h2>Retention and Engagement Through Shared Profits</h2>
      <p>
        TripShepherd is a B2B2C app at its core. We&apos;re helping experience
        creators book their experience, and content creators build their
        audience. In this context, the work of the latter is advertising for
        the former. So we created a profit-sharing feature. If a user books an
        experience through a content creator&apos;s video, the content creator
        gets a cut.
      </p>
      <p>
        Of course, this creates massive retention benefits and encourages
        content creators to push engagement on their content from their other
        networks.
      </p>
      <p>
        But we also allowed regular users to post their content after completing
        an experience, so why not allow them the same profit-sharing? This
        gives us an army of users, content creators, and experience creators
        pushing their friends, audiences, and customers who get paid if their
        content is engaged with.
      </p>
      <VideoWrapper>
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="Placeholder graphic illustrating low-friction onboarding flows tied to user actions"
            width="480"
            height="853"
          >
            <source src={`/images/${path}/money.mp4`} type="video/mp4" />
          </video>
        </VideoWrapper>

      {/* <h1>Accessibility Concerns</h1>
      <p>
        From the start, we knew TripShepherd had to work for everyone. Travel
        apps lean heavily on video, imagery, and dense booking flows, all of
        which can become barriers if not designed with accessibility in mind. To
        address this, we aligned our design and development process with the
        AODA pillars (POUR framework: Perceivable, Operable, Understandable,
        Robust).
      </p>
      <p>
        <strong>Perceivable</strong>: Every image, icon, and video has alt text
        or captions. We built video uploads with automatic captioning in mind,
        knowing this benefits not just accessibility but also Gen Z travelers
        who default to sound-off browsing.
      </p>
      <p>
        <strong>Operable</strong>: All interactive elements (buttons, filters,
        booking forms) meet minimum touch-target sizes and support keyboard
        navigation for users relying on assistive devices.
      </p>
      <p>
        <strong>Understandable</strong>: Labels are clear, flows are
        predictable, and booking errors provide actionable suggestions (e.g.,
        “Choose a different time slot” instead of a vague “Invalid entry”).
      </p>
      <p>
        <strong>Robust</strong>: We implemented semantic structures and ARIA
        roles across the app to ensure compatibility with screen readers, with a
        roadmap to expand into voice commands and haptic confirmations.
      </p>

      <ImageContainer>
        <Image
          src={`/images/${path}/accessibility-video-captions.png`}
          layout="intrinsic"
          alt="User-generated travel video with captions displayed on screen"
          width={2108}
          height={1004}
        />
      </ImageContainer>

      <h2>Future Vision</h2>
      <p>Accessibility shouldn’t stop at compliance. We’re planning:</p>
      <ul>
        <li>
          <strong>AI-generated transcripts</strong> for user travel videos.
        </li>
        <li>
          <strong>Inclusive booking metadata</strong>: Hosts mark experiences as
          wheelchair accessible, sensory-friendly, or ASL-supported.
        </li>
        <li>
          <strong>Customizable UI</strong>: In-app font scaling and
          high-contrast themes.
        </li>
        <li>
          <strong>Alternative discovery modes</strong>: Text-based summaries of
          map results for low-vision users.
        </li>
      </ul>
      <p>
        By embedding accessibility into TripShepherd’s foundation, we’re not
        just checking boxes, we’re expanding who gets to explore the world.
      </p> */}
      
    </PostContainer>
  );
};

const VideoContainer = styled.div`
    width: 110%;
    margin: auto;
    position: relative;
    left: -5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    max-height: 700px;

    @media (max-width: 768px) {
      flex-direction: column;
      max-height: none;
    }
`;

const VideoWrapper = styled.div`
  max-width: 480px;
  width: 100%;
  max-height: 100%;
  display: flex;
  padding-bottom: 35px;
  box-sizing: border-box;
  
  video {
    width: 100%;
    height: auto;
    max-height: calc(700px - 35px);
    display: block;
    border-radius: 8px;
    object-fit: contain;
  }
`;

export default Post;
