import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Badge } from "react-bootstrap";

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  width: 100%;
  position: absolute;
  top: 22px;
  left: 10px;
  font-size: 20px;
`;

const Genre = styled.div`
  display: flex;
  gap: 5px;
`;

const Infogroup = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Vote = styled.span``;

const Adult = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ adult }) =>
    adult ? "rgba(220, 20, 60, 0.8)" : "rgba(82, 238, 108, 0.8)"};
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  line-height: 26px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  return (
    <Wrapper>
      <Img
        src={`https://media.themoviedb.org/t/p/original/${item.backdrop_path}`}
        alt="thumnail"
      />
      <Title>{item.title}</Title>
      <Adult adult={item.adult}>{item.adult ? "성인" : "전체"}</Adult>
      <Infogroup>
        <Genre>
          {item.genre_ids.map((id, idx) => (
            <Badge key={idx}>
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </Genre>
        <Vote>{item.vote_average}</Vote>
      </Infogroup>
    </Wrapper>
  );
};

export default MovieCard;
