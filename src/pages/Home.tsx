import styled from "styled-components";
import useSWR from "swr";

import Card from "components/Card";
import { fetcher } from "utils/fetcher";

import { Video } from "types";

interface IHomeProps {
  type: string;
}

const Home = ({ type }: IHomeProps) => {
  const { data: videos, error } = useSWR([`/videos/${type}`], fetcher);

  if (!videos && !error) {
    return <span>Loading.....</span>;
  }

  if (error) {
    return <span>An error occured</span>;
  }

  return (
    <Container>
      {videos.map((video: Video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
