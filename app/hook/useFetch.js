// 작동 안함. useEffect 안에서 이걸 가져다 쓰는 방법의 문제인듯
// 얘가 반환하는건 프로미스니까 그걸 처리해줄 방법을 찾아야?

export const useFetch = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
