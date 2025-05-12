import { useState } from 'react';

function App() {
  const name = "공지사항";

  const posts = [
    {
      id: 1,
      title: "<필독> 문중문고 FAQ",
      content: "이것은 FAQ 내용입니다.",
      date: "2025-05-01",
      isPinned: true
    },
    {
      id: 2,
      title: "문중문고 5월 이용 관련 공지",
      content: "5월 이용 관련 공지 내용입니다.",
      date: "2025-05-03"
    },
    {
      id: 3,
      title: "문중문고 신설",
      content: "문중문고 신설 관련 내용입니다.",
      date: "2025-04-25"
    },
  ];

  // 각 공지의 펼침/숨김 상태 관리
  const [openPostId, setOpenPostId] = useState(null);

  const toggleContent = (id) => {
    setOpenPostId(openPostId === id ? null : id); // 클릭한 공지가 이미 열려있으면 닫고, 아니면 열기
  };

  return (
    <div className="App" style={{ fontSize: "18px", padding: "30px" }}> {/* 기본 글씨 크기 수정 */}
      <h1
        style={{
          backgroundColor: "white",
          borderBottom: "2px solid black",
          textAlign: "left",
          paddingBottom: "20px",
          marginBottom: "30px",
          fontSize: "32px"  /* 제목 글씨 크기 수정 */
        }}
      >
        {name}
      </h1>

      {/* 게시글 리스트 */}
      <div style={{ padding: "0 10px" }}>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={post.id} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  cursor: "pointer",
                  padding: "12px",  /* 클릭 가능한 제목의 크기 조정 */
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ccc",
                  fontWeight: "bold",
                  fontSize: "20px"  /* 제목 글씨 크기 수정 */
                }}
                onClick={() => toggleContent(post.id)}
              >
                {post.title}
              </div>
              {openPostId === post.id && (
                <div style={{ padding: "12px", borderTop: "1px solid #ccc", fontSize: "18px" }}>
                  <p>{post.content}</p>
                  <p><strong>작성일:</strong> {post.date}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center", padding: "20px" }}>
            게시글이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;