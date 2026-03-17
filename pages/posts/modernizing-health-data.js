import Image from "next/image";
import { useRouter } from "next/router";

import PostContainer from "../../components/PostContainer";
import ImageContainer from "../../components/ImageContainer";

const Post = () => {
  const { pathname } = useRouter();
  const path = pathname.replace("/posts/", "");

  return (
    <PostContainer
      title="Modernizing Health Data"
      postType="Case Study"
      postImage="/images/modernizing-health-data.png"
    >
      <h1 style={{ fontStyle: "italic", fontSize: "26px" }}>TL;DR</h1>
      <p>
        HDC had been Canada&apos;s leading health data authority for 25 years
        and had accumulated roughly 35 separate tools, microsites, and products
        that did not talk to each other. I was brought in to unify them into a
        single ecosystem while simultaneously introducing UX practice and Agile
        process to an organization that had neither.
      </p>
      <p>
        The work ran on two tracks at once: designing a product and changing how
        the organization thought about design. The result was a validated MVP
        architecture, a proven React and Node stack, a 3 to 5 year roadmap, and
        enough internal buy-in to shift branch mandates and get teams to
        voluntarily put siloed projects on hold to reimagine them within the new
        system.
      </p>
      <p>
        The full case study below gets into the how. It is long because the
        problem was layered, and the most interesting parts are in the layers.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Screens.png`}
          layout="intrinsic"
          alt="Sprint themes compared with the stages of building a house"
          width="5252"
          height="5543"
        />
        <span>Most of the prototype. No need to get too busy.</span>
      </ImageContainer>
      <h1>Background</h1>
      <p>
        For the last 25 years, Canada&apos;s definitive health data authority
        had a problem that was not about data. Across 25 years, HDC had built
        roughly 35 tools, microsites, and products, each siloed, each with its
        own look and logic, and no UX practice to speak of. I was brought in to
        do two things simultaneously: design an MVP that unified a fragmented
        ecosystem, and build the organizational muscle to sustain that work
        going forward.
      </p>
      <h1>Problem</h1>
      <p>The harder problem was not the product. It was the organization.</p>
      <p>
        HDC had built remarkable things: interactive tools for comparing health
        system performance, wait time visualizations that shaped actual policy
        decisions. But those tools had grown in isolation, maintained by siloed
        teams that had largely stopped talking to each other. Conway&apos;s Law
        was visible everywhere. The architecture of their products was a direct
        reflection of their org structure.
      </p>
      <p>
        The product problem had a compounding organizational layer. UX did not
        exist at HDC. Waterfall was deeply entrenched, not just as process, but
        as identity. There was no user research to stand on. And any attempt to
        introduce Agile or design thinking risked being read as criticism of a
        culture that had, by its own measure, worked fine for decades.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/IA.png`}
          layout="intrinsic"
          alt="The silos within HDC and their relative sections of the site"
          width="1332"
          height="569"
        />
      </ImageContainer>
      <h1>Goals</h1>
      <p>In no particular order:</p>
      <ol>
        <li>
          Create the MVP for a single HDC experience that solves our users’
          navigation and mental model issues, while staying true to HDC’s
          mission of providing health data and insights to decision makers and
          the public
        </li>
        <li>
          Develop a set of flexible UX and Agile processes that can be used as a
          framework for any HDC project within the HDC culture
        </li>
        <li>
          Help HDC as a whole understand the processes and merits of Agile and
          Design Thinking
        </li>
        <li>
          Create the foundational UX documentation that can be used throughout
          the organization
        </li>
        <li>Discover and prove the most effective front-end tech stack</li>
        <li>
          Build a flexible “flag in the sand” roadmap that HDC can march towards
          for the next 3&ndash;5 years
        </li>
      </ol>
      <h1>Discovery</h1>
      <h2>Diagnosing the System</h2>
      <p>
        Before designing anything, we needed to understand what we were actually
        working with and what it revealed about the organization behind it.
      </p>
      <p>
        A heuristic review across all 35 products told us less about usability
        patterns than we expected, and more about organizational structure than
        we had anticipated. The products did not just look different. They
        reflected entirely separate communication cultures. Some teams had
        essentially gone rogue, building excellent work in complete isolation.
        Conway&apos;s Law was not just a useful analytical frame here. It was
        the X-ray.
      </p>
      <p>
        From there, we ran a series of user interviews, typically 45 to 60
        minutes each, skewing toward building lasting relationships rather than
        one-time sessions. Our five resulting personas ranged from highly
        specialized internal data scientists to general public users, each with
        a dramatically different relationship to HDC&apos;s information
        architecture.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Persona.png`}
          layout="intrinsic"
          alt="External and Internal Analysts as well as Public personas"
          width="1149"
          height="923"
        />
      </ImageContainer>
      <h2>Discovery Workshops: Research as Culture Change</h2>
      <p>
        Early workshops served double duty. On one level they were research,
        surfacing user journeys, empathy maps, and as-is solution reviews. On
        another level, they were a deliberate cultural intervention, giving a
        skeptical organization an early and tangible experience of what
        collaborative design practice actually produces.
      </p>
      <p>
        With offices in Toronto and Ottawa, we ran a hybrid format: one
        facilitator per location, physical sticky notes and markers at each
        site, photos exchanged between sites in real time, then consolidated in
        MURAL afterward. Digital-only whiteboarding with 25 people is a reliable
        way to produce chaos and destroy trust in the process at the same time.
        Preserving the physicality was worth the logistical overhead.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Workshops.png`}
          layout="intrinsic"
          alt="Photos of whiteboards from our workshops plus the resulting deliverables"
          width="1763"
          height="1995"
        />
      </ImageContainer>
      <h1>Sprint Structure</h1>
      <p>
        We designed the sprint cadence around a specific constraint: we were
        learning from users and teaching the organization at the same time, and
        one could not wait for the other.
      </p>
      <p>
        Each sprint had a unifying theme, increasing in specificity across the
        project, where earlier learning was deliberately prerequisite to later
        learning. This kept the work from feeling scattered and gave internal
        stakeholders a legible narrative to follow week over week.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Sprints.png`}
          layout="intrinsic"
          alt="Sprint themes compared with the stages of building a house"
          width="2438"
          height="778"
        />
        <span>
          I&apos;m sure a lot of designers have used the Architect analogy.
        </span>
      </ImageContainer>
      <h2>Ideation Sessions</h2>
      <p>
        Ideation opened each sprint and served a purpose beyond idea generation.
        It gave cross-functional team members, regardless of title, visible
        ownership of the work. If the seed of someone&apos;s idea shows up in a
        wireframe the following week, they become an advocate. We ran structured
        sessions: a sprint recap, a scenario exercise adapted from Crazy 8s,
        voting, then distillation into ranked themes by frequency, votes, and
        strategic alignment.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Ideation.png`}
          layout="intrinsic"
          alt="Results of ideation sessions on whiteboards"
          width="1956"
          height="1262"
        />
        <span>We encourage crazy ideas and try to be seasonal.</span>
      </ImageContainer>
      <h2>Research and Testing</h2>
      <p>
        Sessions ran 45 to 60 minutes, split roughly between continued discovery
        interviewing and usability testing of current wireframes. We kept
        scripts intentionally flexible, as insights from the first 20 minutes
        regularly reshaped the testing questions. Over time, we trained team
        members from other disciplines to observe and note during sessions.
        Watching users struggle in real time is one of the fastest known cures
        for organizational skepticism about UX.
      </p>
      <h2>Audiences from Other Teams</h2>
      <p>
        Colleagues from other parts of the organization were invited to observe
        research sessions silently. Hearing a user validate a finding in their
        own words, in real time, carries more weight than any slide deck. This
        became one of the most effective tools for building cross-organizational
        buy-in.
      </p>

      <h1>The ART Methodology</h1>
      <p>
        Standard usability testing misses a lot with expert, niche user bases.
        To get at users&apos; deeper mental models, we developed what we called the
        ART Methodology: three deliberate design choices that turn UI artifacts
        into research instruments.
      </p>
      <ul>
        <li>
          <b>Ambiguity.</b> Include UI elements with multiple valid affordances.
          What a user assumes an element does reveals how they conceptualize the
          system as a whole.
        </li>
        <li>
          <b>Redundancy.</b> Duplicate an action in multiple plausible
          locations. Which one a user reaches for tells you how they expect a
          page to be organized.
        </li>
        <li>
          <b>Terrible Design.</b> Intentionally include a poor implementation.
          Niche users react strongly to things that will affect their workflow,
          and their suggested fixes often surface requirements you would not
          have known to ask about.
        </li>
      </ul>
      <ImageContainer>
        <Image
          src={`/images/${path}/ART.svg`}
          layout="intrinsic"
          alt="An illustration of the ART Methodology"
          width="1440"
          height="804"
        />
      </ImageContainer>
      <p>
        ART does not replace standard analysis. Findings still need to be parsed
        and triangulated. But for a specialized user population, it generates
        question threads that no interview script would anticipate.
      </p>
      <h1>The Prototype Pivot</h1>
      <p>
        Midway through the project, we made a deliberate call: stop building
        hi-fi mockups and build a functioning React and Node prototype instead.
        If this were 2026 and Claude Code could push this out for us, this would
        been a no-brainer. But in 2022, it was a big risk.
      </p>
      <p>
        The reasons were layered. Our users&apos; workflows were complex enough
        that static representations were not generating reliable feedback. But
        beyond research utility, a working prototype changed the organizational
        conversation entirely. In an org trained by Waterfall to expect polished
        deliverables before committing, mockups read as preliminary. A prototype
        you can actually use, with real interactions and real data structures,
        gives stakeholders something to believe in.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Screens.png`}
          layout="intrinsic"
          alt="Sprint themes compared with the stages of building a house"
          width="5252"
          height="5543"
        />
        <span>Most of the prototype. No need to get too busy.</span>
      </ImageContainer>
      <p>
        This was what finally produced executive buy-in. After a demo to the CEO
        and leadership team, the framing of the project shifted. Teams started
        seeing where their work could plug in. Some rogue elements who had built
        excellent but isolated tools saw a home for what they had made.
      </p>
      <h1>Outcomes</h1>
      <ImageContainer>
        <Image
          src={`/images/${path}/IA2.png`}
          layout="intrinsic"
          alt="Sprint themes compared with the stages of building a house"
          width="1824"
          height="1071"
        />
      </ImageContainer>
      <h2>Designing the Organization, Not Just the Product</h2>
      <p>
        The product outcome was a validated MVP architecture: a single HDC
        ecosystem designed to absorb or retire all 35 fragmented products, with
        a clear 3 to 5 year roadmap and a proven React and Node stack.
      </p>
      <p>
        The organizational outcome was harder to measure but more durable. Teams
        put existing siloed projects on hold to reimagine them within the new
        ecosystem framework, without being asked to. Branch mandates shifted.
        Internal communication structures changed. This is what Reverse Conway
        looks like in practice: if you design a system that mirrors the
        organizational structure you want to see, the organization begins to
        conform to it.
      </p>
      <h2>What Stayed Hard</h2>
      <p>
        Culture change of this kind is not won in a sprint cadence, and not
        everyone comes along. In an organization this size and this
        conservative, some stakeholders see the need for change but disagree on
        the path. Others do not see the need at all. The honest answer is that
        this work continues long after any engagement ends. What we could do was
        build a foundation that made the case for itself, and make sure that no
        one who had been skeptical felt unheard in the process.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/happy-business-people-in-suits-700x467.jpeg`}
          layout="intrinsic"
          alt="Sprint themes compared with the stages of building a house"
          width="700"
          height="467"
        />
        <span>Look at how happy they are! This is what it&apos;s all for.</span>
      </ImageContainer>
    </PostContainer>
  );
};

export default Post;
