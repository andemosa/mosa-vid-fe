import styled from "styled-components";
import useSWR from "swr";

import { Video } from "types";
import { fetcher } from "utils/config";

import Card from "./Card";

interface IRecommendationProps {
  tags: string[];
}

const Recommendation = ({ tags }: IRecommendationProps) => {
  const { data: videos, error: videosError } = useSWR(
    [`/videos/tags?tags=${tags}`],
    fetcher
  );

  if (!videos && !videosError) {
    return <span>Loading videos.....</span>;
  }

  if (videosError) {
    return <span>An error occured</span>;
  }

  return (
    <Container>
      {videos.map((video: Video) => (
        <Card type="sm" key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Recommendation;

const Container = styled.div`
  flex: 2;
`;
