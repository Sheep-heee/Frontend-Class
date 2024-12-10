// Indexed Access Type
// 인덱스 값을 활용해서 타입 안에 특정 속성값의 타입만 추출해내는 방법

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "David",
  },
};

const printAuthorInfo = (author: Post["author"]) => {
  console.log(`${author.id} - ${author.name}`);
};

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post01: PostList[0] = {
  title: "채식주의자",
  content: "채식을 하자!",
  author: {
    id: 1,
    name: "한강",
    age: 20,
  },
};

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; //number
type Tup1 = Tup[1]; //string
type Tup2 = Tup[2]; //boolean

type Tup3 = Tup[number];
