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
        Travel has a trust problem and a discovery problem, and they&apos;re the
        same problem.
      </p>
      <p>
        Travelers don&apos;t trust generic OTA listings. Reviews are anonymous,
        itineraries are vague, and there&apos;s no accountability after the
        booking. Younger travelers have mostly moved their discovery to TikTok
        and Instagram anyway, but those platforms don&apos;t connect to anything
        bookable. You see a great tour in Kyoto, you close the app, you forget
        about it.
      </p>
      <p>
        On the supply side, experience hosts are good at running experiences,
        not building audiences. They need to fill bookings but mostly hate doing
        their own marketing.
      </p>
      <p>
        Content creators can build audiences and drive discovery, but travel
        content doesn&apos;t convert to income without a booking layer
        underneath it. Three parties with complementary needs and no mechanism
        connecting them.
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
        I led product and design across the MVP, working with distributed squads
        across Canada, Pakistan, and Brazil. The work covered defining the
        marketplace mechanics, translating them into a coherent product system,
        and creating the frameworks that let the team move fast and stay
        aligned.
      </p>
      <p>
        That included product strategy and roadmap sequencing, design leadership
        across the full app, cross-functional orchestration across three time
        zones, and restructuring how the team worked in Plane after migrating
        from Jira.
      </p>
      <h1>The Marketplace Design</h1>
      <p>
        Before any UX work, we had to solve a classic chicken-and-egg problem:
        no experiences without hosts, no hosts without travelers, no travelers
        without content, no content without creators who have a financial reason
        to produce it.
      </p>
      <p>
        The answer was a profit-sharing model that gives every participant a
        reason to do the platform&apos;s distribution work voluntarily.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/flywheel.png`}
          layout="intrinsic"
          alt="Profit-sharing model"
          width="733"
          height="503"
        />
      </ImageContainer>
      <p>
        Hosts are good at running experiences, not marketing them. By partnering
        with content creators, they outsource discovery without paying upfront.
        Creators earn on bookings, so the incentive to perform is built in.
      </p>
      <p>
        Content creators post travel content to their existing audiences. When
        someone books an experience through their content, they earn a cut. That
        gives them a financial reason to push their content harder across every
        channel they own.
      </p>
      <p>
        Users who complete an experience can post their own content and earn the
        same way creators do. Satisfied customers become a distribution layer.
        They invite friends, share content, and grow the platform's supply of
        both content and travelers at the same time.
      </p>
      <p>
        Each participant has a financial reason to grow the platform. The
        consumer UX is the interface through which they do it.
      </p>
      <h1>MVP Pillars</h1>
      <p>
        With the marketplace mechanics defined, we built the foundations of the
        consumer app around three functional pillars:
      </p>
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

      <h1>Solution Pillars</h1>
      <h2>1. Trust & Transparency</h2>
      <p>
        The experience detail page is where discovery converts to commitment. It
        needed to establish host credibility, communicate what travelers are
        actually getting, and remove the ambiguity that kills bookings on
        generic OTAs.
      </p>
      <p>
        Rich itineraries, host profiles, transparent pricing, and video reviews
        all live here as the foundation for that trust.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/experience-page.png`}
          layout="intrinsic"
          alt="Experience detail page with floating booking CTA, itinerary details, and host profile"
          width="2352"
          height="1631"
        />
      </ImageContainer>

      <h2>2. Authentic Content & Discovery</h2>
      <p>
        The video feed is the entry point for most users and had to feel native
        to how Gen Z already discovers travel. Short-form, scrollable, social.
        City, experience, and following filters let users narrow without
        friction. Deep links from each video connect directly to bookable
        experiences, closing the gap between inspiration and action.
      </p>
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
      <p>
        Global search with filters for city, date, price, and accessibility. An
        Experiences hub with tabs for all, booked, and saved. Booking
        confirmation with shareable links, guest management, and explicit refund
        policies.
      </p>
      <p>
        The shareable booking link is a distribution mechanic. When a traveler
        shares their booking, they're doing acquisition for the platform.
      </p>
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
      <p>
        We extended BOAT, an existing moderation tool, to cover TripShepherd
        content, users, and experiences. We also built an analytics framework
        across growth, sales, and engagement to give the team visibility into
        how the flywheel was actually performing.
      </p>

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

      <h1>Low-Friction Onboarding</h1>
      <p>
        Social commerce is still novel in Western markets, which created an
        onboarding problem a standard tutorial couldn't solve. Front-loading
        information kills activation before users understand the value.
      </p>
      <p>
        Instead we used behavior-specific onboarding. Guidance appeared when a
        user attempted a relevant action for the first time. Sign-up prompts
        only triggered when an action required an account, like saving an
        experience. By that point the user had already signaled intent, which
        meant activation happened before we asked them to commit.
      </p>
      <VideoContainer>
        <VideoWrapper>
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="Gif showing the logged out feed"
            width="480"
            height="1031"
          >
            <source
              src={`/images/${path}/logged-out-feed.mp4`}
              type="video/mp4"
            />
          </video>
        </VideoWrapper>
        <VideoWrapper>
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="Gif showing the onboarding flow"
            width="480"
            height="1038"
          >
            <source src={`/images/${path}/onboarding.mp4`} type="video/mp4" />
          </video>
        </VideoWrapper>
      </VideoContainer>

      <h1>Results</h1>
      <p>
        TripShepherd now hosts hundreds of experiences across Niagara Falls,
        Toronto, and New York City, with content posted from users across the
        Americas. Behavior-specific onboarding reversed early retention problems
        caused by platform novelty. The profit-sharing mechanic has since
        evolved into a Creator Marketplace, currently in closed beta, allowing
        content creators and experience hosts to partner directly.
      </p>

      <VideoWrapper>
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-label="Gif showing the profit-sharing feature"
          width="480"
          height="853"
        >
          <source src={`/images/${path}/money.mp4`} type="video/mp4" />
        </video>
      </VideoWrapper>

      <h1>A Note on our AI Approach</h1>
      <p>
      We used ChatGPT throughout the project as a structured thinking partner. The most valuable application was documentation: generating a canonical MVP Spine and Core PRD designed from the start to be ingested by AI coding tools like Cursor downstream. That created a single source of truth that kept design and engineering aligned across three continents without constant syncs.
      </p>
      <p>
      We also used it to pressure-test edge cases before they hit design or engineering. Booking conflicts, host cancellations, missing location permissions, refund logic. Running those scenarios early in a draft, critique, refine loop surfaced failure modes that would have been expensive to find later. For a lean product team working with distributed squads, AI acted as the team members we didn't have.
      </p>
{/*
      <h1>Accessibility Concerns</h1>
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
  justify-content: space-evenly;
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
