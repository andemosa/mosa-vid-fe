import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";

import Card from "components/Card";
import { Video } from "types";
import { fetcher } from "utils/config";

const Search = () => {
  const query = useLocation().search;

  const { data: videos, error: videosError } = useSWR(
    [`/videos/search${query}`],
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
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
