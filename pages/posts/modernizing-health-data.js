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
      <p>
          For the last 25 years, Health Data Company (HDC) has been the national
          leader in Canadian health data, providing a way for policy analysts,
          politicians, the media, and the public to access a huge amount of
          health insights through a vast array of products and resources. With a
          new architecture in the works, I was brought in to lead HDC in their
          first major Agile project; developing and refining their UX processes,
          flavour of Agile, front-end technologies, and an MVP with a 3-5 year
          roadmap.
      </p>
      <h1>Problem</h1>
      <p>
          This project was based around solving three major problems. The first
          two were purely pragmatic: HDC’s myriad tools and products create a
          disjointed and weakened experience; and the question of organizing and
          presenting big data in a meaningful way for both niche and general
          users. The second problem was more human: UX does not exist at HDC,
          Waterfall is life, and there’s no user data from which to solve
          problems.
          </p><p>
          The former revolved around the fact that HDC has built and maintains a
          ton of products. Many are catalogs of data sets, reports, media of all
          kinds, etc. but there are also really interesting tools to visualize
          and compare health system performance or wait time averages. These
          products have had incredible influence on policy decisions but they’re
          difficult to find, have no functional relationship to each other, look
          different, and essentially create artificial schisms in an otherwise
          vast database that our users are forced to navigate.
          </p><p>
          The latter, I’m sure, is common to many readers who have worked in
          more conservative or old school organizations. In these cultures UX
          can be seen as a waste of time and sticky notes, and even threatening.
          The Waterfall approach is so ingrained and “has worked just fine so
          far so why should we change anything?” Of course, with this history
          comes little to no user data, UX processes, or understanding. As we
          sharpened our axe, building a foundation of personas, empathy maps,
          user journeys, etc. we would run the risk of exacerbating feelings of
          “wasting time”; a rigid implementation of Agile could feel too jarring
          and prescriptive (also a wasted design challenge); and potentially
          alienating team members.
      </p>
      <h1>Goals</h1>
      <p>
          In no particular order:
        </p>
          <ol>
            <li>
              Create the MVP for a single HDC experience that solves our users’
              navigation and mental model issues, while staying true to HDC’s
              mission of providing health data and insights to decision makers
              and the public
            </li>
            <li>
              Develop a set of flexible UX and Agile processes that can be used
              as a framework for any HDC project within the HDC culture
            </li>
            <li>
              Help HDC as a whole understand the processes and merits of Agile
              and Design Thinking
            </li>
            <li>
              Create the foundational UX documentation that can be used
              throughout the organization
            </li>
            <li>Discover and prove the most effective front-end tech stack</li>
            <li>
              Build a flexible “flag in the sand” roadmap that HDC can march
              towards for the next 3-5 years
            </li>
          </ol>
      <h1>Discovery</h1>
      <p>
          Step one: understand this beast. Not only does HDC have a ton of
          different products and tools to understand, the work they do
          internally, populating and justifying these tools, is also incredibly
          complex. Many of their employees are highly specialized data
          scientists as are many of their users. This can be overwhelming at
          first but there are ways to wrestle the niche into submission
          relatively quickly so you can start really understanding your users.
      </p>
      <h2>
        Current IA and Heuristic Evaluation
      </h2>
      <ImageContainer>
        <Image
          src={`/images/${path}/IA.png`}
          layout="intrinsic"
          alt="The silos within HDC and their relative sections of the site"
          width="1332"
          height="569"
        />
      </ImageContainer>
      <p>
          We started by understanding just what the org currently offers, how
          they organize it, and what common patterns we can see. You’ll hear a
          lot about
          <a
            href="https://en.wikipedia.org/wiki/Conway%27s_law"
            target="_blank"
            rel="noreferrer"
          >
            Conway’s Law
          </a>
          (CL) in this case study as it not only helps understand the current
          state of an org, but implies a very powerful way of approaching
          organizational change. In this case we can use CL understand HDC’s
          internal structure and even make some assumptions about its culture.{" "}
          </p><p>
          What we found was ~35 different tools, products, microsites, etc.
          mostly separate from each other, built in wildly different ways. Some
          had lots of pretty aesthetics, some very laconic, some highly
          interactive, some completely static, you get the picture.
          </p><p>
          As you can probably guess, our heuristic evaluators were mapped all
          over the place so that wasn’t very useful in getting an overall
          picture of usability but it did tell us something about the structure
          of the organization and their communication (thank you, Conway!) It
          was clear that there was a sever lack in communication between
          departments and even within those departments. We would later find out
          that some teams had gone completely rogue but still doing amazing
          work. That’s a story for another time but is a reflection of the fact
          that these teams, while heavily siloed, were passionate, and we could
          take advantage of that fact by building a product that encouraged
          collaboration.
      </p>
      <h2>
        Proto Personas and Initial Interviews
      </h2>
      <p>
          While getting to know our brilliant team members, we also had to start
          understanding our users early on. Assuming that many of these users
          were also a highly specialized bunch, we began by doing a series of
          interviews to learn their current model of HDC, how it fits into their
          workflow, wants and needs, pain points, etc.
          </p><p>
          Interviews were typically around 45 minutes to an hour and we tried to
          build lasting relationships so we could really dive deep over the
          upcoming sprints.
          </p><p>
          We ended up defining five main personas based. Here’s a taste of a few
          so as not to bore you with the details:
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
      <h2>Discovery Workshops</h2>
      <p>
          I’m a big fan of workshops early on (especially with a niche product)
          because they do three very important things: help me get a better
          understanding of the niche I’m designing for and its unique
          characteristics, required knowledge, players, etc.; create alignment
          through group participation and teamwork; and give the team an early
          taste of the tangible results you can get from fun and seemingly silly
          activities. The last point is especially important as you’ll need
          these team members to be contributing constantly and, if workshops are
          the most fun they’re going to have in their job, they’ll make time to
          attend.
          </p><p>
          Since a big part of my job was to build UX into HDC, I ran a few of
          these initial workshops for other projects. The common deliverables we
          ended up with were User Journeys, Empathy Maps, As Is Solution
          Reviews, and the like.
      </p>
      <h2>A Note on Remote Workshops</h2>
      <p>
          We had offices in Toronto and Ottawa so we had to run workshops half
          remote. This meant dealing with a lot of logistics and having to merge
          deliverables into a shareable digital format. We tried a few different
          methods but found that physicality was necessary. Sticky notes,
          markers, bumping shoulders, eating snacks, were all a part of the
          process and got people engaged. Workshops without engagement are just
          pointless meetings.
          </p><p>
          Going purely digital also had usability issues. It’s hard to teach a
          whole group of people with different levels of technology skill how to
          use a new product. Something is going to go wrong. I found this out
          very quickly when trying to use a collaborative whiteboard app with
          ~25 people. In the end the whiteboard looked like a Jackson Pollock
          and the workshop was a complete waste, ruining the first impression of
          many important participants.
          </p><p>
          We ended up going with a sort of hybrid approach. One person would run
          the workshop from Toronto or Ottawa, the other would assist in the
          other location. We would juggle leading the workshops with taking and
          sending pictures between each other, printing them off to hang them
          up, all without hopefully messing up the flow. Afterwards we would use
          to
          {" "}<a href="https://mural.co/" target="_blank" rel="noreferrer">
            MURAL
          </a>{" "}
          and Skype to organize findings and digitize the results so we had
          documentation. Not perfect but it worked.
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
      <h1>Sprints</h1>
      <p>
          After our workshops and groundwork-laying we decided on our target
          users, external analysts, and were able to start digging deeper.
          Because we were still working with such a specialized group and
          skepticism in our work was high, we needed to plan our sprints in a
          way that would allow us to continue learning more about our users,
          start building user stories, and continue our culture work.
          </p><p>
          The driving philosophy for these sprints would be the following: each
          sprint is based on a theme increasing in specificity, where the
          previous learning would be necessary for later learning and
          continuously iterated on. This allowed us to learn more about our
          users, build up from a solid foundation, and iterate the more
          foundational themes over future sprints.
          </p><p>
          We went from basic wireframes in Axure to hi-fi mockups in UXPin or
          Figma to a fully built React/Node-based prototype that would be a
          design and development proof of concept.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Sprints.png`}
          layout="intrinsic"
          alt="Sprint themes compared with the stages of building a house"
          width="2438"
          height="778"
        />
        <span>I&apos;m sure a lot of designers have used the Architect analogy.</span>
      </ImageContainer>
      <h2>Ideation</h2>
      <p>
          Continuing on the success of our workshops, we decided to include
          ideation sessions in every sprint. If we were going to use a
          theme-based approach for each of our sprints to learn more about our
          external users, we should be augmenting that approach with the
          knowledge of our internal users and team members.
          </p><p>
          The added bonus is that we include them more intimately in the
          process. If we can use at least the seeds of their ideas in our
          wireframes then they can see how we iterate each week and that a
          collaborative environment allows them to contribute regardless of
          their title.
          </p><p>
          Each ideation would go like this:
        </p>
          <ol>
            <li>Keynote talk and results from last sprint</li>
            <li>
              Pep talk (everyone’s a designer, don’t hold back, no wrong
              answers, you are loved)
            </li>
            <li>Warm up</li>
            <li>Crazy 8&apos;s-type Scenario Exercise</li>
            <li>Voting</li>
            <li>Wrap up and send everyone home</li>
            <li>Boil ideas down to their themes</li>
            <li>Rank themes by instances, votes, alignment</li>
            <li>Implement into wireframes</li>
          </ol>
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
      <h2>User Research and Testing</h2>
      <p>
          With wireframes iterated on from the last sprint and the previous
          ideation sessions we would move on to testing. Of course, this would
          based on the current theme, and continued iteration of pervious themes
          for further refinement.
          </p><p>
          We tried to work with a group of returning participants, being careful
          to know when to let go or give breaks. Each session lasting 45 minutes
          to an hour, we would break it typically do a 1:4 or 1:2 split between
          initial interview and usability testing. This way we could continue
          deepening our understanding during the interview and then continue
          continuing during the usability testing by applying the interview’s
          learning to something more pragmatic. That might have been confusing
          but basically we kept our scripts flexible so we could adjust as we
          learned.
          </p><p>
          During the sessions every member of the team, no matter their title,
          would write down their observations. As sprints went on, my designers
          and I were able to teach our team members how to be UX masters,
          throwing sticky notes to the wall like ninja stars. This really helped
          the team empathize with users, put them first, evangelize UX, and free
          us up to focus on running the sessions.
      </p>
      <h2>A Note on Audiences</h2>
      <p>
          One of the best decisions we made during this project was to invite
          members from other teams. Especially those who we needed behind us or
          teams we needed to work with to really prove our idea. 
          </p><p>
          These audiences were not allowed to ask questions of interject in any
          way during the user research sessions but could listen and observe.
          They could see how our team worked together, speaking in our sign
          language and glances, but, more importantly, they could experience
          just how deep a user interview can get. We’re trained to act almost
          like therapists, gaining trust and digging deep into our users’
          consciousness, pulling out that sweet qualitative data.
          </p><p>
          If the audience is familiar with previous findings they’re able to
          hear validation in real time. Your findings become more than just
          psychological assumptions in a slide show and become corporeal. That’s
          powerful evidence.
      </p>
      <h2>A Note on Methodology</h2>
      <p>
          The ART Methodology (excuse the cheesy name) was something I developed
          to aid in prolonged discovery with niche users in a more
          system-focused context. It allows the designer to use UI elements to
          answer more general questions about a user’s conceptual model so you
          can ask more important questions during interviews. It’s based on
          these three ideas:
          </p><p>
          <b>Ambiguity:</b>
          Include UI elements in your design with multiple valid affordances. By
          observing what a user assumes the UI element does we get a better
          picture of their mental model of the system as a whole.
          </p><p>
          <b>Redundancy:</b>
          Include UI elements in your design that would trigger the same action
          but place them in different but valid areas. By observing which
          element a user interacts with we get a better understanding of how
          they expect a page to be laid out.
          </p><p>
          <b>Terrible Design:</b>
          Include some poor implementations in your design. From my experience,
          niche users can feel very alienated by a poor implementation that they
          feel will impact their lives. This provides a unique opportunity to
          form a deeper understanding of how bad implementations affect the
          particular user and their suggested fixes provide valuable insight
          into what they’re trying to achieve from the feature.
          </p><p>
          The observations you make using this methodology need to be parsed in
          the same way as any other user research findings. They should be used
          to uncover insights and start question threads that you may not think
          to ask or even know exist.
      </p>
      <h2>Review</h2>
      <p>
          I’ll skip past the boring retro part to the review. Our reviews were
          meant for every other team would listen. They were a mixture of
          summary, Q&amp;A, and attack session, but their main purpose was the
          continue to educate and help the org see what we were doing every
          week. 
          </p><p>
          The summary was a quick recap of the theme, what we learned, how it
          tied into the previous sprint, etc. Standard book report kind of
          stuff. The Q&amp;A and attack session aspects were similar. You can
          guess Q&amp;A but the attack part was to poke holes in our ideas.
          Because we were creating both a new design and architecture we had to
          make sure the technology side made sense. Features had to be possible
          with our current governance, our roadmap had to be realistic for our
          developers, and our tech stack had to be compatible with our current
          architecture.
      </p>
      <h1>Results</h1>
      <p>
          The point of this case study is mainly to focus on process: the
          discovery phase of our work and how we were able to use that phase to
          evangelize UX and agile, break down silos, positively affect culture
          and politics, increase buy-in from all levels, and help teams
          understand how their work can help others. From this perspective in
          particular we’ve seen some major changes in branch mandates,
          communication, and the organization’s roadmap.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/IA2.png`}
          layout="intrinsic"
          alt="Sprint themes compared with the stages of building a house"
          width="1824"
          height="1071"
        />
      </ImageContainer>
      <h2>
        System Thinking vs Design Thinking
      </h2>
      <p>
          The discovery work led to our solution for a single ecosystem, built
          to absorb or provide the catalyst to retire all or many of the 35
          separate products. HDC was an extreme example of Conway’s Law that
          organizations design systems that mirror their own structure. What we
          hoped with our ecosystem solution was that we could use Conway’s Law
          in reverse. if we create a system that mirrors an organizational
          structure that we want to see will the organization follow that
          system? We began to see the organization putting projects on hold that
          reflected HDC’s old siloed ways so they could be reimagined in the new
          ecosystem. So far the “Reverse Conway” works!
      </p>
      <h2>The Ugly</h2>
      <p>
          The great reception above isn’t wholly universal. You can’t expect
          everyone to follow you off the cliff and it takes time to convert some
          people. Some people, especially in an org so big (and especially one
          so conservative), are happy with the way things are and don’t see a
          need to change. Or they may see the need to change but disagree with
          how to make the change. This is something the team is still working on
          and will be for years to come. The great thing about agile is that you
          can usually allay fears by reminding sceptics that we’re working
          progressively by making small changes with the least amount of risk
          and if they’re right that the idea is terrible you didn’t waste
          millions of dollars developing something terrible. Show them the road
          map, make sure they know they’re heard, and don’t ignore their
          worries.
      </p>
      <h2>Communication and Collaboration</h2>
      <p>
          Halfway through our sprints we switched gears to create a prototype
          using React/Node instead of hi-fi mockups. In short, we did this
          because complex interactions necessary in our users’ niche required a
          more complex prototype and we wanted a PoC to prove our proposed the
          stack. 
          </p><p>
          What this allowed was deep testing with our users but also something
          tangible to show stakeholders. Instead of wireframes that, in an
          organization that’s used to Waterfall, might seem too preliminary, or
          a hi-fi mockup that requires more imagination that might be expected,
          a functioning prototype gives them something they can grasp on to.
          </p><p>
          Many times we heard, after demoing our prototype internally, that
          seeing it in full action was what finally allowed everything to click.
          This is also what got us buy-in from the CEO and the rest of execs,
          allowed teams to imagine ways they could contribute, and reigned in
          those rogue elements by implementing their work directly into the
          prototype.
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
      <ImageContainer>
        <Image
          src={`/images/${path}/happy-business-people-in-suits-700x467.jpeg`}
          layout="intrinsic"
          alt="Sprint themes compared with the stages of building a house"
          width="700"
          height="467"
        />
        <span>Look at how happy they are! This is what it’s all for.</span>
      </ImageContainer>
    </PostContainer>
  );
};

export default Post;
