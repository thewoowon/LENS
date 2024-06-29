export function isValidJson(jsonString: string): any | null {
  try {
    const parsed = JSON.parse(jsonString);
    // JSON이 유효하면 파싱된 객체를 반환
    return parsed;
  } catch (error) {
    // JSON이 유효하지 않으면 null을 반환
    return null;
  }
}
