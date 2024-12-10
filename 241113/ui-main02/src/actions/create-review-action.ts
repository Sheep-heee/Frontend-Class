/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

import delay from "@/util/delay";
import { revalidatePath } from "next/cache";

export const createReviewAction = async (_: any, formData: FormData) => {
  const bookId = formData.get("bookId")?.toString();
  const content: FormDataEntryValue | null | undefined = formData
    .get("content")
    ?.toString();
  const author: FormDataEntryValue | null | undefined = formData
    .get("author")
    ?.toString();

  if (!content || !author || !bookId) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해주세요!",
    };
  }

  try {
    await delay(2000);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      }
    );
    if (response.ok) {
      throw new Error(response.statusText);
    }
    revalidatePath(`review-${bookId}`);
    return {
      status: true,
      error: "",
    };
  } catch (err) {
    console.error(err);
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다 : ${err}`,
    };
  }
};
