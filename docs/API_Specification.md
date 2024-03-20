API 명세서

# 날씨 정보 API

(GET /api/weather)
설명: 선택된 지역의 현재 날씨 정보를 반환합니다.
요청 파라미터: 없음 (예시: 지역 정보는 서버 측에서 설정)

응답 형식:

```
{
    "temperature": "25°C",
    "weatherCondition": "Sunny",
    "humidity": "40%"
}
```

상태 코드:
200: 성공
404: 정보를 찾을 수 없음
500: 서버 에러

# 팀원 추가 API

설명: 새로운 팀원 정보를 데이터베이스에 추가합니다.
요청 바디:

```
{
    "name": "Jane Doe",
    "role": "Developer",
    "bio": "A passionate developer.",
    "photoUrl": "https://example.com/photo.jpg"
}
```

응답 형식: 없음 (성공 여부만 반환)
상태 코드:
201: 생성 성공
400: 잘못된 요청
500: 서버 에러

# 방명록 등록 API

(POST /api/guestbook)
설명: 개인 페이지의 방명록에 새로운 메시지를 추가합니다.
요청 바디:

```
{
    "memberId": "123",
    "message": "Great work on the project!",
    "postedBy": "Visitor Name",
    "postedAt": "2023-03-10T12:34:56Z"
}
```

응답 형식: 없음 (성공 여부만 반환)
상태 코드:
201: 생성 성공
400: 잘못된 요청
500: 서버 에러
