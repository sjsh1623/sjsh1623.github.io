---
title: 4 Lessons After 11 Years in Silicon Valley
tags: [Project, DataBase]
style: fill
color: success
description: Work flow for EZEN03 project.
---

## Project Work Flow

### Structure Flow



#### 1. Index Structure

```
Index Structure
인기검색어
	Admin에서 인기 검색어를 제어할 수 있도록 합니다. (DB 추가)
신상품
	발매일 최근순으로 가져옵니다.
MD Pick
	사용자의 설문DB를 이용하여 가져옵니다.
	
Common (공통사항)
	모든 이미지 뒷단에는 PK와 링크를 가지고 있어야 합니다. 
	(클릭시 상품으로 넘어가는것 까지 작업을 해주시기 바랍니다.)
```



#### 2.  Join Structure

```
Join Structure
	사용자가 회원가입을 하였을떄에 users(DB)에 삽입이 되어야합니다.
```



#### 3. Login Structure

	Login Structure
		사용자가 로그인하였을떄  users(DB)를 조회하여 user의 PK를 가져옵니다.
 **Login Page가 완료되었을때 Header수정을 시작합니다.**



#### 4. Board Structure

```
Board Structure
Board 
	Admin에서 제어가 가능해야하며 Board(DB)에 추가 삭제를 합니다.
FAQ
	JSP 형식 (즉. html 방식)으로 삽입합니다.
```



#### 5. Detail Search Structure

```
Detail Search Structure
Side Bar
	GET방식으로 사용자가 버튼 FORM을 추가할 때마다 ?로 추가됩니다.
Product Container
	GET방식의 구문을 container에 index와 같이 product를 불러옵니다.
```



#### 6. Product Structure

```
Product Structure
Product
	Product(DB)를 가져와 JSP에 배치합니다.
BUY/SELL
	사용자는 /product에서 POST방식으로 값을 넘겨줍니다. 그 값으로 DB를 찾아 배치합니다. 
	사용자가 입찰 또는 판매를 진행한다면 다음페이지 즉, BUY/SELL Confirm 페이지 전에 
	데이터베이스를 삽입합니다.
BUY/SELL Confirm
	사용자가 구매 또는 판매를 했다면 그 정보를 성공적으로 데이터베이스에 삽입이 
	되었는다는것을 보여줍니다. 
```



#### 7. Mypage Structure

```
Mypage Structure
Mypage
	이메일 수정문을 추가해야합니다.
	이메일을 수정할 경우 해당 이메일로 확인 메일을 보냅니다.
	비밀번호는 동일합니다.
	계좌는 은행 선택이 가능해야하며 다른 확인 절차는 없습니다.
	추천인 코드는 아이디로 대체합니다. (현재는 임의적인 값이 들어가 있습니다 아이디로 변경해주세요)
	
Mypage_BUY/SELL
	DB에서 사용자의 BUYS/SELL의 데이터와 사용자의 정보를 가져와 배치합니다.
```



#### 8. Work Flow

##### 임석현

**Index(MD pick)** -----------------------------------------> **Product** -------------------------------------> **MyPage (Buy/Sell)**

##### 임채린

**Index(인기상품)** ----------------------------------------->**로그인** -----------------------------------------> **Detailsearch**

##### 최성준

**Index(신상품)** ----------> **회원가입** ------------------->**MyPage(myPage)** ------------------------> **Detailsearch**

##### 이경섭

**Board(UI)** -------> **Board** ------------------------------------------------------------------------------------> **TBA** (추후결정)

