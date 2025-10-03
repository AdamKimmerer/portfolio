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

      {/* <h1>Leadership in Action</h1>
      <p>
        My role as a product and design lead was less about designing screens
        and more about creating clarity:
      </p>
      <ul>
        <li>
          <strong>Tradeoffs:</strong> Sequenced features for MVP impact without
          overbuilding.
        </li>
        <li>
          <strong>Alignment:</strong> Ran exec retreats to define OKRs and build
          proto-Opportunity Solution Trees.
        </li>
        <li>
          <strong>Cross-discipline:</strong> Introduced dual-track agile and
          replaced QA with design QA + ownership.
        </li>
      </ul>
      <ImageContainer>
        <Image
          src={`/images/${path}/exec-retreat.png`}
          layout="intrinsic"
          alt="Workshop board or proto-Opportunity Solution Tree diagram from executive retreat"
          width="1500"
          height="800"
        />
      </ImageContainer>

      <h1>Impact & Vision</h1>
      <ul>
        <li>
          <strong>Today:</strong> MVP launched with trust, discovery, and
          booking flows aligned.
        </li>
        <li>
          <strong>Tomorrow:</strong> Expanding into AI-generated itineraries,
          pop-up event detection, and personalization from reviews.
        </li>
      </ul>
      <ImageContainer>
        <Image
          src={`/images/${path}/ai-itinerary.png`}
          layout="intrinsic"
          alt="Conceptual mockup of AI itinerary assistant with dynamic map and personalized suggestions"
          width="1500"
          height="800"
        />
      </ImageContainer>
      <p>
        Big picture: TripShepherd is building the first platform that merges
        social travel content with trusted, bookable experiences.
      </p> */}
      <h1>Accessibility Concerns</h1>
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
      </p>
      
    </PostContainer>
  );
};

const VideoContainer = styled.div`
    width: 110%;
    margin: auto;
    position: relative;
    left: -5%;
    display: flex;
    justify-content: flex-start;
    border: none;
  }
`;

export default Post;
