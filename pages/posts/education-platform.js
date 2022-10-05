import Image from "next/image";
import { useRouter } from "next/router";

import PostContainer from "../../components/PostContainer";
import ImageContainer from "../../components/ImageContainer";

const Post = () => {
  const { pathname } = useRouter();
  const path = pathname.replace("/posts/", "");

  return (
    <PostContainer
      title="Teacher Recruitment App"
      postType="Showcase"
      postImage="/images/education-platform.png"
    >
      <h1>Landing Page</h1>
      <p>
          As with pretty much all pre-MVP landing pages, we’re looking to do
          four things: validate the idea with beta signups, build trust, explore
          branding, and get potential investors pumped.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/landing-page.png`}
          layout="intrinsic"
          alt="Landing page"
          width="1440"
          height="6003"
        />
        <span></span>
      </ImageContainer>
      <h1>Explore</h1>
      <p>
          The founders came to me with the idea that a Tinder-like app could
          work for both students looking to teach in China and Chinese schools
          looking for English teachers. The most interesting challenge with this
          app was to create a single set of interactions that could be used by
          two fairly different user groups.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/OnboardingVert.png`}
          layout="intrinsic"
          alt="The School and Teacher onboarding experiences with basic info and profile photos"
          width="2500"
          height="1433"
        />
        <span></span>
      </ImageContainer>
      <h1>Onboarding</h1>
      <p>
          We made sure to keep the friction low when signing up. Since using
          swiping in this was is novel for this application we wanted to make
          sure our users were able to easily jump in and see what the deal was.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/SettingsVert.png`}
          layout="intrinsic"
          alt="Settings including subscription plan, invite, account info, etc."
          width="2500"
          height="726"
        />
        <span></span>
      </ImageContainer>
      <h1>Settings</h1>
      <p>
          This is where we allow users to complete the more advanced setup
          involved as well as do the regular old settings type stuff.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/SettingsVert.png`}
          layout="intrinsic"
          alt="Settings including subscription plan, invite, account info, etc."
          width="2500"
          height="726"
        />
        <span></span>
      </ImageContainer>
      <h1>Dashboard</h1>
      <p>
          We decided to emulate Tinder in their post-match communication as
          well. This meant creating conversations with a few
          teacher-school-specific functionalities, realizing this would be
          getting more and more complex as we add recruitment features.
      </p>
      <ImageContainer>
        <Image
          src={`/images/${path}/comms.png`}
          layout="intrinsic"
          alt="Messages dashboard with matches"
          width="2117"
          height="750"
        />
        <span></span>
      </ImageContainer>
    </PostContainer>
  );
};

export default Post;
