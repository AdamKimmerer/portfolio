import Image from "next/image";
import { useRouter } from "next/router";

import PostContainer from "../../components/PostContainer";
import ImageContainer from "../../components/ImageContainer";

const Post = () => {
  const { pathname } = useRouter();
  const path = pathname.replace("/posts/", "");

  return (
    <PostContainer
      title="BALLPRK MVP pt I"
      postType="Case Study"
      postImage="/images/ballprk-mvp-pt1.png"
    >
      <h1>Origins</h1>
      <p>
        The original idea for BALLPRK seemed simple. BALLPRK will be the
        platform for athlete mentorship. In full confidence I’m terrible at
        sports, have never willingly watched a sport, and, before BALLPRK,
        didn’t understand the culture at all. Any designer worth their Sketch
        license learns fast and doesn’t let something minor like total ignorance
        stop them.
      </p>
      <p>
        Mentorship for young athletes is a big part of the culture and, unless
        you go to a private school with a great alumni network, you’re going to
        have a terrible time finding guidance. You’ll have questions about your
        training, choosing a school, balancing athletics and academics,
        university culture, dealing with mental and physical health.
      </p>
      <p>
        A ton of pro athletes, it turns out, work full-time jobs while also
        participating in the Olympics. The athletes that represent your country
        on the international stage have trouble making ends meet. This is
        completely insane to us and so we wanted to give pro athletes (as well
        as varsity athletes) a way to help out the youth while also making some
        money (if they wanted to charge) through paid one-on-one video
        mentorship sessions.
      </p>
      <h2>Technology Stack</h2>
      <p>
        The idea behind this MVP was a quick implementation that would take a
        couple weeks to build and last us a few months so that our users could
        play around and we could learn how this platform was going to be used.
        As a developer and tech enthusiast this let me have a lot of fun with
        the tech stack we used. I had experience with Node and Express and found
        it fun and easy to use but a couple new full-stack frameworks were
        making noise and I was super excited to check them out. The two most
        popular were
        {" "}<a href="https://sailsjs.com/">Sails.js</a> and
        {" "}<a href="https://www.meteor.com/">Meteor.js</a>. They both sounded
        exciting, easy to learn, and incredibly helpful for quick prototyping.
        After reading some articles and spending a couple all-nighters building
        simple to-do lists Meteor won me over. Its use of DDP, proprietary
        package manager filled with great contributions, built-in Cordova
        support, and lovely use of application structure had me way too excited
        to build something non-trivial to test it out.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/logo.png`}
          layout="intrinsic"
          alt="BALLPRK Logo"
          width="652"
          height="271"
        />
        <span>Hey, at least we had a logo!</span>
      </ImageContainer>
      <h1>Validation</h1>
      <p>
        To validate the idea we reached out to varsity and pro athletes asking
        if they were interested in making some extra money mentoring youth
        athletes or if they even wanted to to do it for free. It turned out that
        they were already trying to do exactly this but there simply wasn’t a
        good means. We got an amazing response, built an impressive roster of
        pros to market to youth athletes, and nobody wanted to wait.
      </p>
      <p>
        Young athletes were just as enthusiastic. They worshipped some of the
        athletes we had on board, they were going through the hell that is high
        school, they worried about getting into or even paying for university,
        they had to choose a school and a major, plus they had to balance
        academic decisions with finding a school with the right team and
        integrating into that team. The stress is more than I can imagine and we
        were felt blessed that we could help in some way. The only problem was
        that it was hard for youth athletes to believe that we were legitimate.
        To me, that’s a design problem and a huge validation success!
      </p>
      <p>
        We did convince some youth athletes that we were legit and set up some
        Hangouts calls for our mentorship sessions. The response was amazing but
        it got our mentors too pumped and we needed to act fast. This is where
        our 2 month sleepless journey began.
      </p>
      <h1>Personas</h1>
      <p>
        We risked losing our mentors if we didn’t act fast to provide the
        platform we had promised. In tech, strong enthusiasm doesn’t lead to
        patient contentment, it degrades into resentment and significant lack of
        trust. On a subconscious level your users are always comparing you to
        platforms with a huge amount resources, crazy talent, and solid
        processes. If you don’t deliver as well and as consistent as those
        platforms you won’t be taken seriously. This meant we needed to deliver
        much faster than we expected.
      </p>
      <p>
        Our first step was interviewing our athletes to create personas. We
        split our athletes into three groups: pro, varsity, and high
        school/elementary school. This turned out to be a good system as
        similarities were surprisingly evident in each group and behaviours
        aligned for the most part.
      </p>
      <p>
        We quickly had to adjust our interviewing technique for pro and varsity
        athletes as each conversation degraded into something like a job
        interview since they seemed to view themselves as freelancers or
        employees. We even had some changing their LinkedIn to say they were
        “BALLPRK Mentors.” While this was flattering it was a major issue for
        user research. We couldn’t get a genuine idea of who these people were
        and what their behaviours were since they were trying to impress us or
        answering every question in the context of “why would you be a good
        BALLPRK mentor?” <br />
      </p>
      <p>
        Luckily, there was an easy solution to this problem. The longer we
        dragged out the introduction period of our interviews the more natural
        the conversations felt. The interviews took more time than we really had
        using this method but the results spoke for themselves. We also got some
        great feedback on our conversation from users. They felt really heard
        and like they were founders in their own right. It made all of us feel
        all warm and fuzzy.
      </p>
      <p>
        After ~10 interviews for each user group we had a decent set of personas
        and we were ready for our next step.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Personas.png`}
          layout="intrinsic"
          alt="Screenshots of professional and student athlete personas"
          width="652"
          height="369"
        />
      </ImageContainer>
      <h2>Choice</h2>
      <p>
        Our MVP had a small user base of around 2000 users. That meant that we
        knew each and every user. We used this to our advantage to personally
        match mentors with mentees. Our limited scope meant we didn’t implement
        a programmatic matching algorithm and so we limited the mentee’s choice
        in mentors to around 5 mentor each mentee. This was a problem for two
        reasons: mentees didn’t feel they had autonomy in the platform and
        therefore lacked investment (shoutout Nir Eyal); and mentors didn’t feel
        like they were being represented openly. This brings us to our next
        point.
      </p>
      <h1>Competitive Analysis and Academic Research</h1>
      <p>
        Rarely is a problem in design truly novel. While many features and
        projects we create seem completely new and revolutionary human behaviour
        is surprisingly static. All we’re doing is solving a problem that
        already exists and hopefully only has a worse solution than we can
        provide. If you’re solving a problem that doesn’t exist you’ve already
        failed. That sounds self-evident but it happens all the time.
      </p>
      <p>
        This might seem limiting but it makes our job as designers much easier.
        We now have a baseline to improve on. We can see what works, what
        doesn’t, and what behaviours we need to augment to solve our chosen
        problem the right way (it’s important to pretend there’s one “right way”
        for confidence sake). The best way that I’ve found to learn what works,
        what doesn’t, and how to best augment our users’ behaviours in our
        chosen context is to turn to research, competitive analysis, and testing
        and iteration. My method (which is clearly the right way) is as follows:
        learn how other platforms solve a problem similar to your &gt; turn to
        academic publications &gt; revisit those other platforms, praising them
        for following your findings while taking inspiration yourself or
        chastising them for ignoring HCI research &gt; design your initial
        solution &gt; test a prototype and iterate.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Process.png`}
          layout="intrinsic"
          alt="Summary of process mentioned above"
          width="545"
          height="125"
        />
        <span>Foolproof!</span>
      </ImageContainer>
      <p>
        I’ll use video chat as an example of this process. We started by looking
        at popular video chat applications like Skype, Twitch, Hangouts, and
        FaceTime. Skype, Hangouts, and FaceTime are focused more on one-to-one
        or small group chat so we took initially from them. The main focus was
        for these platforms is, of course, on the video itself and so the only
        actions on the screen are related to the video’s controls or buttons to
        open secondary functions.{" "}
      </p>
      <p>
        We now had some context for our academic research. While still young,
        the HCI field has produced a ton of insightful and pragmatic research
        that no designer should ignore. Our major insights came from How and Why
        Teenagers Use Video Chat by Buhler et al., 2013 and Effects of Quality
        of Service on Video-Chat Users by Kebede, 2013. Our major takeaway was
        that video chat has become an important and intimate part of young
        users’ lives but call quality simply can not suffer if it can be helped.
        As we know, call quality will suffer. As long as there is a good
        fallback then we don’t risk as much frustration. The only realistic
        fallback to poor call quality is text within the call.
      </p>
      <p>
        Going back to Skype we had noticed that during team calls the text
        conversations were attempted when someone had a bad connection but was
        always ignored. Hangouts had a very similar interface and so we tested
        Hangouts with users while they did mentorship sessions. In this case,
        the lack of text conversation was an even bigger issue than with our
        team calls. Users who weren’t used to video chat had a huge amount of
        trouble simply connecting with their call partner and if User A
        discovered the text chat and wrote a message saying they were
        reconnecting user B wouldn’t know to look at it, leading to user B
        disconnecting before user A got back. It was a mess. We were chastising
        Skype and Hangouts, as per my method.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Video.png`}
          layout="intrinsic"
          alt="Skype and Hangouts screenshots"
          width="673"
          height="424"
        />
      </ImageContainer>
      <p>
        This left us with a difficult decision. We could either build our own
        video chat to fix the text conversation issue and risk performance
        issues from poor optimization due to lack of webRTC experience or use
        something like the Hangouts API (which Google was also dropping support
        for in the near future). Since, according to our research, we simply
        couldn’t risk poor performance, integration inside the platform was
        relatively simple (which was actually a huge plus), and we saw user
        testing potential we went with Hangouts. The lesser of two evils.
      </p>
      <p>
        We were now ready to build. Or at least as ready as we could be with the
        time we had. To see part two of the MVP saga check out the link
        {" "}<a href="https://adamkimmerer.com/story/6">here.</a>
      </p>
    </PostContainer>
  );
};

export default Post;
