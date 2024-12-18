import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atoms";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;

const Header = styled.header`
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const CoinList = styled.ul`
  width: 760px;
`;

const Coin = styled.li`
  width: 100%;
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    gap: 6px;
    color: inherit;
    transition: color 0.3s;
    margin: 0 14px;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

const Img = styled.img`
  width: 25px;
  height: auto;
  margin: 0 10px;
`;

const Button = styled.button`
  background: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });
  const setterFn = useSetRecoilState(isDarkAtom);
  return (
    <Container>
      <Helmet>
        <title>Coin List</title>
      </Helmet>
      <Header>
        <Title>Coin List</Title>
        <Button onClick={() => setterFn((prev) => !prev)}>Mode</Button>
      </Header>
      {isLoading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                🏆Now Rank: {coin.rank}
                <Img
                  src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} ({coin.symbol}) &rarr; {coin.name} Information
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
