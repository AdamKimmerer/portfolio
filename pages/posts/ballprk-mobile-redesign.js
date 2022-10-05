import Image from "next/image";
import { useRouter } from "next/router";

import PostContainer from "../../components/PostContainer";
import ImageContainer from "../../components/ImageContainer";

const Post = () => {
  const { pathname } = useRouter();
  const path = pathname.replace("/posts/", "");

  return (
    <PostContainer
      title="Ballprk Redesign | Mobile"
      postType="Showcase"
      postImage="/images/ballprk-mobile-redesign.png"
    >
      <p>
        While BALLPRK’s original design was well received I found that I had
        trouble easily adding new features and the aesthetics got in the way of
        the content. Since the original release I have been experimenting with a
        philosophy and collection of patterns that prioritized minimalism as a
        way of creating focus and branding through typography and placement.
        This showcase is the latest example of my experiment based on two years
        of testing and its application in different projects.
      </p>
      <h1>Content</h1>
      <p>
        Internally we split BALLPRK into two main sets of features: Content and
        Community. Sooo let’s organize this showcase in the same way so we’re
        all on the same page.
      </p>
      <h2>Onboarding</h2>
      <p>
        We’ll start our journey the same way our users do by taking you through
        the onboarding process. We use onboarding to do two important things:
        create just the right amount friction to keep out the riffraff and start
        to introduce our users to the patterns we’ll be using throughout the
        app.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Onboarding.png`}
          layout="intrinsic"
          alt="Flow of Onboarding from basic info to interests"
          width="2500"
          height="955"
        />
        <span>Fun little trick: The feed is built in microseconds but we add a few
          seconds delay to make it feel like an algorithm is really working hard
          to personalizing things.</span>
      </ImageContainer>
      <h2>Feed, Explore, and Tags</h2>
      <p>
        While a feed and explore are very similar we have to keep in mind the
        purpose of each. A feed is based on a personally curated experience
        (their following, groups, tags, etc.). Exploration is all about showing
        users the kind of experience they could have.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/FeedExplore.png`}
          layout="intrinsic"
          alt="Post feed based on following and tags"
          width="1412"
          height="2005"
        />
      </ImageContainer>
      <h2>Content Creation</h2>
      <p>
        BALLPRK does content thusly: Image, Video, Shout, Question, Write, or
        Link. Nothing too crazy. Shout and Question are text snippets stylized
        to easily understand their purpose, Write is blog-esque, and the rest
        are what you’d expect.
        <br />
        <br />
        I always try to design any type of content creation so that the editing
        state is as close as possible to the final content state. In the cases
        below we throw the profile info section up top and organize the inputs
        in the same order as will be displayed in the post.
        <br />
        <br />
        The most important thing to keep in mind is that these views needs to be
        flexible to add features without breaking the content creation flow that
        our users have memorized.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Content+Creation.png`}
          layout="intrinsic"
          alt="Flow of creating a photo post with a caption"
          width="1022"
          height="1843"
        />
        <span>This is a little sample of the content creation views. No need to bore
          you with every single view so here are our two most used: Image/Video
          and Write.</span>
      </ImageContainer>
      <h2>Post</h2>
      <p>
        I bet you’re just dying to see what a post looks like in its full glory!
        How I envy you right now. Posts need to support a few different views
        based on their content type and how they’re navigated to. For example,
        the same post could render differently if it’s clicked on from the feed
        vs. an external link. As well as comment and link views.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/post.png`}
          layout="intrinsic"
          alt="Viewing a post and seeing the comments and likes"
          width="1388"
          height="2724"
        />
        <span>Aaaand another sampling.</span>
      </ImageContainer>
      <h2>Search</h2>
      <p>
        We realize that Search can be touches both Community and Content so
        let’s use it as a bridge between our two feature sets. In most cases
        where search can be used for a bunch of different result types I use a
        pattern that organizes results into their respective types, allowing the
        user to see top results for each type and dive in deep if they need.
        This shows the user an overview of the types of content the app
        provides. It also provides an easy way to create custom views based on
        content type (eg. custom filters, list types, etc.).
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/search.png`}
          layout="intrinsic"
          alt="Search for users, tags, content, and sport"
          width="2500"
          height="1469"
        />
        <span>Two left-most views show the more functional aspects of search state:
          activated-with-no-input-so-show-recent-searches-note-the-type-preview-left-of-text,
          and activated-with-input-before-submission.</span>
      </ImageContainer>
      <h1>Community</h1>
      <p>
        This feature-set is based on the users and how they’re organized, as
        well as how they communicate. The former is represented by Groups, Hubs,
        and Profiles. The latter by Messaging and Sessions.
      </p>
      <h2>Profile, Brand, Hub, and Group</h2>
      <p>
        For profile, brand, hub, and group pages we use basically the same
        layout but with some variation. These views do basically the same thing:
        display content specific to one context with some specific events (eg.
        “Join” for groups, “Message” for profiles, etc.). <br />
        <br />
        On glorious display in these views is a common example of BP’s component
        reuse. We use a variation of the user/group/brand card component as the
        persistent section of this view (or vice-versa).
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Profiles.png`}
          layout="intrinsic"
          alt="Views of profiles and 'Hubs', which are basically company profiles"
          width="1808"
          height="1729"
        />
        <span>Sessions and Messaging</span>
      </ImageContainer>
      <h2>Sessions and Messaging</h2>
      <p>
        The backbone of BP is redefining mentorship. This means that mentorship
        can happen through something as small as a piece of inspiring content or
        as involved as a series of one-on-one sessions. Messaging and Sessions
        represent the latter and are tightly coupled.
        <br />
        <br />
        We use Twilio for both our messaging and video sessions and that allows
        us to merge those two functionalities. That means we can allow the
        conversations inside sessions to persist outside to keep the
        relationship alive and the advice available.
        <br />
        <br />
        The basic session flow goes like this: mentee requests session &gt;
        checks off some possible dates/times &gt; mentor selects date/time from
        options &gt; mentee pays &gt; 15 minutes before session mentee and
        mentor are allowed to join session.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Comms.png`}
          layout="intrinsic"
          alt="Views of messaging as well as booking and managing mentorship sessions"
          width="1401"
          height="1852"
        />
        <span>The booking process is missing here and it’s honestly not all that
          exciting so I’ve left it out for everyone’s sake.</span>
      </ImageContainer>
      <h1>Future Scaling and Iterations</h1>
      <p>
        This experiment is constantly evolving and but we’re already seeing the
        benefits of reduced branding and minimalist interfaces:
      </p>
      <ol>
        <li>Reduce cognitive load by keeping things aesthetically simple</li>
        <li>Typography and element placement work as functional branding</li>
        <li>
          Elements that need a stronger focus can easily be modified without
          breaking the composition
        </li>
        <li>
          Naturally flexible layouts make adding/removing features very little
          work
        </li>
        <li>
          Patterns can easily be scaled up or down to create reusable components
        </li>
        <li>Bonus: Fresh and clean</li>
      </ol>
    </PostContainer>
  );
};

export default Post;
