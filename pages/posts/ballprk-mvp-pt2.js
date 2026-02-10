import Image from "next/image";
import { useRouter } from "next/router";

import PostContainer from "../../components/PostContainer";
import ImageContainer from "../../components/ImageContainer";

const Post = () => {
  const { pathname } = useRouter();
  const path = pathname.replace("/posts/", "");

  return (
    <PostContainer
      title="BALLPRK MVP pt II"
      postType="Case Study"
      postImage="/images/ballprk-mvp-pt2.png"
    >
      <h1>The MVP</h1>
      <h2>Requirements</h2>
      <p>
        We knew who our users were, what they would be expecting, and had a
        basic idea of what their behaviours would look like. There was one last
        thing we needed before deciding on a tech stack and that was our minimum
        requirements. We knew we needed user accounts with different levels
        (mentor, mentee, and super user), a calendar to allow our mentors to set
        their availability, payment processing, video chat, email deployment,
        chron job support, and an admin panel for super users.
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
          src={`/images/${path}/stacks.png`}
          layout="intrinsic"
          alt="Sails.js and Meteor logos"
          width="652"
          height="191"
        />
        <span>The ultimate battle!</span>
      </ImageContainer>
      <h2>Booking &amp; Payment</h2>
      <p>
        The most difficult design and development problem we had to solve was
        figuring out our booking and payment processing. College and high school
        students are incredibly busy and forcing our users to send emails or
        private messages back and forth to find a time is a huge pain and
        removes a huge amount of value from the platform. We needed to give one
        user the power and that user had to be the mentor. <br />
      </p>
      <p>
        This &quot;power imbalance&quot; solution took the form of time slots. We learned
        that most college athletes are on a weekly schedule for most of the
        semester. Class, practice time, and games are set for the most part.
        Mentors would select their availability in the form of two hour blocks
        from Monday to Sunday. This meant that students wouldn’t have to fill
        out a daily calendar split into short time slots each day like most
        calendar apps. It’s always important to remember that your users have a
        huge amount of other responsibilities and they’re frankly not invested
        in your new product. You have to make things as easy and low-impact as
        possible upfront or you’re just asking too much. It’s like a first date.
        Your users are trying to get to know you and see if you’re a good match.
      </p>
      <p>
        Now that we had a good base for our booking process the rest seemed to
        fall into place. Mentor sets their availability &gt; mentee chooses
        available time slots on days that work for them &gt; mentor sets the
        final half hour within that time slot. What could be simpler!? Don’t
        answer that.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/Payment.png`}
          layout="intrinsic"
          alt="Payment flow that moves from time selection to payment to post-payment summary."
          width="2165"
          height="720"
        />
        <span>Mentee payment process. A good example of the mentor calendar in action.</span>
      </ImageContainer>
      <p>
        Our next step was setting our platform up as a marketplace with mentors
        acting as vendors and injecting that into our booking process. For
        anyone who has dealt with setting up an international marketplace with
        vendors you know it’s not easy. At all. Note: One of the payment
        processors with a hefty monthly subscription model might make a
        marketplace that’s easier but that’s not an option when you’re
        bootstrapping. The marketplace/vendor model means that payments need to
        be transferred to a vendor’s bank account when they make a sale. It’s a
        great model for certain situations but there’s not an international
        standard for bank accounts and that’s where things get annoying.
      </p>
      <p>
        *I’ll give a shout out to Stripe right now because they really deserve
        it. They were the obvious choice as they’ve become the de facto payment
        processor for startups but their API is wonderful, amazing test
        environment, and their documentation couldn’t be better. I promise I’m
        not a shill for Stripe but all developers and founders need to have each
        others’ backs so we don’t waste our time with poor services, frameworks,
        whatever. After all, we’re all just trying to make the world a better
        place.
      </p>
      <p>
        No international standard meant a lot of research and manual coding to
        get the proper webservice response for required account information
        based on location. This meant that setting up a bank account required an
        initial country selection to provide the proper fields for account
        information. For example, Canadian accounts need a transit number,
        institution number, etc; European accounts need a swift code, etc. Don’t
        get me started on Japan. Validation also needs to be manually coded and
        any developer knows the pain that is form validation. As an aside, I
        would suggest every UX designer read Jessica Ender’s book
        {" "}<a href="https://www.sitepoint.com/premium/books/designing-ux-forms">
          Designing UX: Forms
        </a>
        .
      </p>
      <p>
        The mentee side was incredibly easy by comparison: choose a time slot,
        fill in your credit card information using Stripe’s built in payment
        modal, and wait for your confirmation.
      </p>
      <p>
        Now we had a complete booking flow: Mentor sets their availability &gt;
        mentee chooses available time slots on days that work for them &gt;
        mentee makes their payment &gt; mentor sets the final half hour within
        the selected time slots. If a time is canceled by either party before 24
        hours of their session the payment is refunded and the session is
        canceled. We had our process all mapped out.
      </p>
      <h1>Results</h1>
      <p>
        Of course I didn’t bore you with every aspect of the MVP build and
        design process but you don’t want to read every thought we had. Trust
        me. What’s important is that we now had a platform to test with and
        better understand our users. Watching your MVP in action and getting
        constant feedback is an incredible learning experience. Every time I’ve
        built an MVP I’ve felt super confident and in some ways that’s a good
        thing. It allows you to be bold, power through novel design challenges,
        innovate, and break rules. Afterwards, unless you’re some freak of
        nature design savant, you’ll learn you made mistakes, you didn’t account
        for about 30,000 fringe cases, and you probably thought too small
        (although the latter is all part of the MVP process). We learned some
        very important lessons about our implementations and our users.
      </p>
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
      <h2>Personal Branding</h2>
      <p>
        Personal brand is incredibly important for athletes. Athletics is an
        incredibly competitive field (who who have guessed!?) and personal brand
        helps athletes get the exposure they need to progress. We have an
        amazing roster of athletes, a great PR opportunity for mentors, and
        proof that our mentees are spending their hard-earned money to progress
        in their sport. This seemed like a missed opportunity to say the least.
      </p>
      <h2>Philanthropy and Community</h2>
      <p>
        Mentorship in nothing new in athletics. It’s seen by many high-level
        athletes as a form of community support. They were mentored and they
        want to give back; share their experiences, help the youth reach their
        potential, feel good about their contribution. This meant that some
        athletes felt uncomfortable about charging for their time or taking
        money for what they feel is their duty as a member of their community.
        Anyone who is part of a community that they’re proud of knows that
        feeling. On the other hand, too many professional athletes are forced to
        work full-time jobs to keep them in the game. We wanted to make it
        easier for them to play their game and in some cases even represent
        their country in their sport without having to worry about keeping a
        roof over their head.
      </p>
      <h2>The Many Forms of Mentorship</h2>
      <p>
        Mentorship isn’t just one-on-one. We learn through all forms of media
        and the value of these media can be incredibly powerful. The most
        important lessons we learn in life come from unexpected places. If you
        asked a sample of people what the most important advice they’ve ever
        received was it would come from a myriad of sources; a book, an obscure
        reddit post, a barfly at that pub you went to one time. Our users have
        incredible stories to tell, insightful questions to ask, slice-of-life
        moments (which I personally find incredibly underrated as a learning
        tool) to share. Why were we limiting mentorship to 30 minute one-on-one
        video sessions?
        <i>
          The especially astute readers of this post probably know where BALLPRK
          was headed. Regardless, you know that there was a a lot of work to do
          moving forward but that’s the sign of a successful MVP. You test an
          idea (that is hopefully validated already) and you’re exposed to a
          huge array of possibilities. You’re given the ability to test your
          assumptions, you learn where you went wrong, what you did right, and
          how far you can go in your innovation.
        </i>
      </p>
      <h1>An Apology</h1>
      <p>
        I realize that developers reading this post will be disappointed with
        the lack of technical analysis of the tools we used and solutions we
        found to solve difficult problems. Designers will also be disappointed
        with the lack of process, research findings, and iteration. For that I
        apologize. In some cases I wish I could go into more depth without
        making this overly long, in other cases there simply wasn’t the kind of
        depth we would have liked in our decisions. The truth is that sometimes
        best practice and deep analysis isn’t possible. We read blog posts by
        established companies still calling themselves startups who have the
        funding and breathing room to follow best practices, contribute to open
        source, host monthly hackathons, etc. and we think that we can do the
        same thing. It’s a romantic dream filled with whiteboards and foosball,
        Jakob Neilson patting you on the back, and better posts than this,
        beautifully explaining every wonderful decision your team has ever made.
        The reality is that users are fickle, competition is fierce, and
        sometimes you have to pick and choose what rules you follow, no matter
        how bad it feels. I wrote this series of posts to show designers and
        developers that bootstrapping can be ugly but it’s also fun. A truly
        unique experience. It’s a chance to show yourself what you’re capable of
        while flying by the seat of your pants and that you can achieve more
        than you thought possible, learn more than you ever have, while breaking
        rules. Just remember that if it doesn’t feel weird breaking the rules
        then you don’t know them well enough.
      </p>
    </PostContainer>
  );
};

export default Post;
