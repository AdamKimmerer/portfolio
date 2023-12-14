import Image from "next/image";
import { useRouter } from "next/router";

import PostContainer from "../../components/PostContainer";
import ImageContainer from "../../components/ImageContainer";
import Link from "next/link";

const Post = () => {
  const { pathname } = useRouter();
  const path = pathname.replace("/posts/", "");

  return (
    <PostContainer
      title="Know Your Vote T.O."
      postType="Showcase"
      postImage="/images/know-your-vote.png"
    >
      <p>
        In 2022 the Toronto Public Library came to us with a problem: Toronto
        voters didn&apos;t have the resources to make education voting
        decisions. Our goal was to learn as much as we could about voters and
        candidates to build a platform that helped both parties.
      </p>
      <h1>
        Prototype
      </h1>
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="100%"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqGjeO3dSQo9AZt4w3I333H%2FUntitled%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-6125%26viewport%3D-684%252C-1801%252C0.07%26t%3D1nKsOh54013f4TRI-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D1%253A6125%26mode%3Ddesign"
        allowfullscreen
      ></iframe>
      <h1>User Research</h1>
      <p>
        <i>
          Note: I won&apos;t go into too much detail on the research front as
          this is a showcase. To see an example of my research and discovery
          process check out{" "}
          <Link href="/posts/modernizing-health-data">
            Modernizing Health Data
          </Link>
          .
        </i>
        <br />
      </p>
      <h2>Methodology</h2>
      <p>
        <ol>
          <li>
            Surveys: We knew that confidence in the democratic system has been
            waning as can be seen in this{" "}
            <a
              href="https://www150.statcan.gc.ca/n1/pub/42-28-0001/2021001/article/00006-eng.htm"
              target="_blank"
              rel="noreferrer"
            >
              report from Stats Canada
            </a>
            . From our surveys we were able to find a proto-target group of what
            we&apos;ll call &quot;community leaders&quot; that are engaged and
            engaging.
          </li>
          <li>
            User Interviews: Candidates are already a perfect target group and,
            thanks to our survey responses we were able to recruit our
            &quot;community leader&quot; interviewees. We ran 12 interviews
            with each group.
          </li>
          <li>
            Usability Testing: During prototyping we performed usability testing
            of the public-facing platform and the CMS for voters and candidates,
            respectively. Each test included 5-6 testers.
          </li>
        </ol>
      </p>
      <h1>Branding</h1>
      <p>
        As this was a Toronto Public Library product, it was necessary to align
        with TPL&apos;s branding guidelines. However, as youth civic engagement
        was low, we wanted to give the site a youthful feel. This was easy with
        TPL&apos;s branding. Shout out to{" "}
        <a
          href="https://trajectoryco.com/work/toronto-public-library/"
          target="_blank"
          rel="noreferrer"
        >
          trajectory for their work with TPL
        </a>
        ! 👊🏻
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/trajectory-gif.gif`}
          layout="intrinsic"
          alt="GIF describing TPL branding"
          width="1280"
          height="544"
        />
      </ImageContainer>
      <h1>
        Screens
      </h1>
      <ImageContainer>
        <Image
          src={`/images/${path}/Design A - Home.png`}
          layout="intrinsic"
          alt="Screenshot of the Home Screen"
          width="1440"
          height="4183"
        />
      </ImageContainer>
      <ImageContainer>
        <Image
          src={`/images/${path}/Design A - Candidate.png`}
          layout="intrinsic"
          alt="Screenshot of the Candidate Page"
          width="1440"
          height="2924"
        />
      </ImageContainer>
      <ImageContainer>
        <Image
          src={`/images/${path}/Design A - Munic.png`}
          layout="intrinsic"
          alt="Screenshot of the Municipality Screen"
          width="1440"
          height="2512"
        />
      </ImageContainer>
      <ImageContainer>
        <Image
          src={`/images/${path}/Design A - Voter Profile.png`}
          layout="intrinsic"
          alt="Screenshot of the Voter Profile Screen"
          width="1440"
          height="2367"
        />
      </ImageContainer>
      <h1>
        Future Iterations
      </h1>
      <h2>
        General Voter Education
      </h2>
      <p>
        While this first iteration is based on helping voters learn about candidates and get links to voter information for election day, it wasn&apos;t within scope to create a more broad education space. This can be useful for voters who want to know more about the process and their role but we were also aware of TPL&apos;s student education initiatives, which we would love to support.
      </p>
      <h2>
        White label Platform
      </h2>
      <p>
        A platform like this can be useful across cities, provinces, municipalities, etc. but it can also be useful in non-government contexts. We purposefully designed and developed the platform to be brand-agnostic, based on reusable components, and accessible to make white labelling easier.
      </p>
      <h2>
        Candidate and Community Leader Analytics
      </h2>
      <p>
        We built basic analytics into the platform for candidates. This is currently used to show candidates how many people are reading their answers and sharing their page. Of course, if a candidate has not submitted their answers they can see the missed opportunity.
        <br/>
        The next milestone would include more robust analytics to help candidates and community leaders measure their impact and determine the appropriate effort to put into the platform.
      </p>
    </PostContainer>
  );
};

export default Post;
