import Image from "next/image";
import { useRouter } from "next/router";

import PostContainer from "../../components/PostContainer";
import ImageContainer from "../../components/ImageContainer";

const Post = () => {
  const { pathname } = useRouter();
  const path = pathname.replace("/posts/", "");

  return (
    <PostContainer
      title="Problem-Based Process"
      postType="Article"
      postImage="/images/process-mapping.png"
    >
      <h1>Background</h1>
      <p>
        Much of my work as Design and/or Product leader over the last few years
        has included a good amount of process transformation. This comes in a
        ton of different flavours depending on the size or age or culture of an
        organization but it&apos;s often based on the same underlying issues:
        <ol>
          <li>
            Talking to users is often seen as a too much of a time commitment
            and we need this thing built NOW!
          </li>
          <li>
            If you&apos;re not trained to talk to users and, more importantly,
            understand what they&apos;re really saying, there&apos;s not a lot you can do
            with the results of those conversations
          </li>
          <li>
            As a Product leader you&apos;re often encouraged to tell the story of
            your strategy through features that seem exciting in the current
            landscape. By now I&apos;m sure many of us have been asked to building
            something with AI just because.
          </li>
          <li>
            Top-down feature requests, especially at early-stage companies can
            completely upend long- to medium-term strategy. I&apos;ve seen this
            executives completely change strategy based on a literal dream the
            night before.
          </li>
          <li>
            Even assuming the team is comfortable with their ability to gather
            good user insights and build a problem-based strategic narrative,
            it&apos;s not clear how we actually build based on a set of user
            problems.
          </li>
        </ol>
        Of course, this just a sample of major issues that we as a problem
        solvers will encounter on a team of real people with different
        perspectives, experiences, personal goals, etc. so we have to illustrate
        a problem-based process in a way that speaks to as broad a group as
        possible.
      </p>
      <p>
        I created this process map, you might call it, after giving far too many
        presentations and having far too many conversations in which I was
        simply not able to illustrate the entire process orally. I was often too
        vague when trying to express the autonomy and creativity built into the
        process; came off as too dictatorial when trying to express the hard
        requirement for design thinking and proper research; too tool agnostic
        when trying to be... tool agnostic.
      </p>
      <p>
        The results of all of this experimentation and, frankly, embarrassment,
        came the realization that I needed to map out how this process may work
        while building an imaginary app using real tools that all members of a
        squads would be at least somewhat familiar.
      </p>
      <h1>The Map</h1>
      <p>
        This map is meant to be a visual aid alongside a presentation that
        encourages open questions at any time but the hope is that it can also
        act as a quick primer for PMs and Designers who want to implement this
        process in their own squads with their own flavour.
      </p>
      <p>
        I chose a social media platform for the fake app because we&apos;re all aware
        of how they work even if we don&apos;t use social media. You may also notice
        that the map is vague in places and in some places like the &quot;**Insert
        the complicated stuff Engineers do&quot; I have left it intentionally blank.
        This map is based on the pre-development stages and Engineering is far
        too complicated and specialized for anyone but those brilliant people to
        weigh in on that stage.
      </p>
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="100%"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FedTBJUSbLoOswLNyqhP6jT%2FChunes-User-Story-Mapping%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DJJbHRSkkOAfkAFgO-1"
        allowFullScreen
      ></iframe>
      <h1>Now What?</h1>
      <p>
        This map is clearly just an intro but it&apos;s served me extremely well as
        step-by-step illustration of how strategy can built based on the themes
        and goals that users shares with us and how we can do the actual work of
        solving those problems. In practice, it&apos;s up to the org and individual
        squads to iterate on this process and find their flavour.
      </p>
      <h1>Conclusion and Disclaimer</h1>
      <p>
        This works for me with my specific communication style and expertise.
        Other than on my personal portfolio I do not publish this as it may not
        be tailored for someone else&apos;s style. That said, this map has been my
        most successful artifact when leading transformation, overcoming many of
        the early issues that come from major process change, which is very
        difficult to explain without hard examples and a good number of
        releases.
      </p>
      <p>
        When I lead a team I push very hard for individual interpretations of
        this process since, as I mentioned above, every squad is made up a
        unique combination of experiences and perspectives. I encourage the team
        members who wish to use this map to modify it with the deep knowledge
        they have of their team.
      </p>
    </PostContainer>
  );
};

export default Post;
