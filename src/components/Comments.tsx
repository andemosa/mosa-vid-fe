import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import styled from "styled-components";
import useSWR from "swr";
import { Comment as CommentType } from "types";
import { fetcher } from "utils/config";
import Comment from "./Comment";

interface ICommentsProps {
  videoId: string;
}

const Comments = ({ videoId }: ICommentsProps) => {
  const { currentUser } = useSelector((state: RootState) => state.user);

  const { data: comments, error: commentsError } = useSWR(
    [`/comments/${videoId}`],
    fetcher
  );

  if (!comments && !commentsError) {
    return <span>Loading comments.....</span>;
  }

  if (commentsError) {
    return <span>An error occured</span>;
  }

  //TODO: ADD NEW COMMENT FUNCTIONALITY

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser?.img} />
        <Input placeholder="Add a comment..." />
      </NewComment>
      {comments.map((comment: CommentType) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;
