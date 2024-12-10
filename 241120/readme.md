/ -> Home
/join -> Join
/login -> Login
/search -> Search

/edit-user -> Edit User
/delete-user -> Delete User

/watch-video -> Watch Video
/edit-video -> Edit Video
/delete-video -> Delete Video

/_ RestFul API 방식을 사용한 경우 _/

/ 글로벌 라우터
/ -> Home
/join -> Join
/login -> Login
/search -> Search

/ users로 시작하는 페이지 라우팅 => 라우터
/users/logout -> Logout User
/users/edit -> Edit User
/users/remove -> Remove User
/users/:id -> Segment User

/ video로 시작하는 페이지 라우팅 => 라우터
/video/watch -> Watch Video
/video/edit -> Edit Video
/video/delete -> Delete Video
/video/comments -> Watch Video Comment
/video/comments/delete -> Delete Comment

//
Create

- video upload
- user / ID / createdAt / source etc...

Read

Update

- user / ID / createdAt / source etc...

Delete

- All
- 탈퇴 //

schema => 윤곽 // 형태
=> user로부터 어떤 데이터를 수집 => 우리가 원하는 형태로 관리, 보관, 제어
=> data model => data modeling

[
{
id: "heejin",
source: ".mp4
......
},
]
