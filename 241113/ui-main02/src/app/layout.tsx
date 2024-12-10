import { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

const Footer = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    return <footer>제작 @Heejin</footer>;
  }

  const books: BookData[] = await response.json();
  const bookdCount = books.length;

  return (
    <footer>
      <div>제작 @Heejin</div>
      <div>{bookdCount}개의 도서가 등록되어 있습니다.</div>
    </footer>
  );
};

const RootLayout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>🍗 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
        {modal}
        <div id="modal-root"></div>
      </body>
    </html>
  );
};

export default RootLayout;
