import dynamic from 'next/dynamic'

const DynamicLandingVideo = dynamic(
  () => import('./LandingVideo.client'),
  { ssr: false }
)

const LandingVideo = () => {
  return <DynamicLandingVideo />;
};

export default LandingVideo;
