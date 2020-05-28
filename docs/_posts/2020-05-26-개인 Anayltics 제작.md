---
title: 개인 Analytics 제작
tags: [Spring MVC, Analytics, Personal]
style: fill
color: primary
description: 필요한 기능만 쉽게 쓰기위해 제작
---
## 개인 Analytics 제작

먼저 개인 Analytics를 제작을 하게 된 이유는 기능이 너무 많고 네이버 애널리틱스는 당일 조회건 분석이 안되는것 같았다. 실시간은 있는데... 오늘 하루 전체 누가 어디서 어떻게 웹페이지에 접속을 했는지 찾아보기가 너무 궁금한데 그 다음날 알수 있는거 같았다. 네이버는 방문자 수를 기준으로 분석을 해주는데 쇼핑몰이나 중소기업 웹페이지를 기준으로 개발된거 같았다. 나처럼 누가 언제 어떻게 접속을 하였는지가 중요한 사람들 할테는 딱히 당장은 필요가 없다. 그리고 그 무엇보다 내 웹페이지를 들어오는 사람은 특정 사람 뿐인데 (면접관님들..) 나한테 관심은 있고 확인은 했나..? 라는 의문이 들어서 간단한 프로그램을 짜보려고 한다.



```
이 기록은 뭐 했는지 어떻게 제작되었는지 기록하기 위한 포스트이다.
```



#### 개발환경

Framework: Spring MVC

Server: Tomcat v9.0

Front End: https://github.com/puikinsh/concept (Template)

Editor: intelliJ, eclipse



#### 요구사항

1. 당일 방문자수
2. 당일 신규 방문자수
3. 당일 재 방문자 수
4. 총 방문자 수
5. 당일 방문자의 상세 정보
   1. 시간(시간 기준으로 나열/ 서버시간) 
   2. 위치
   3. 사용자의 접속하기 전 페이지
   4. 운영체제 
   5. 접속페이지
   6. 재방문자 인지 신규방문자인지 (Badge)
   7. 더 보기를 선택할 시 다른 페이지로 이동해서 모든 로그를 출력



#### 구현 (Javascript)

자바스크립트를 활용하여 사용자의 데이터를 가져온 후 ajax로 RestAPI 컨트롤러에 던져서 DB에 정보를 등록할 생각이다. 

먼저 Javascript. 

1. 사용자의 전 페이지를 가져온다. 

   ```javascript
   // 사용자가 링크를 탄 페이지
   let referrer = document.referrer;
   ```

2. 사용자의 ip를 가져오는것과 동시에 ip기반으로 위치를 탐색한다 (API이용)

   ```javascript
   // 사용자의 ip주소
   let ip;
   $.ajax({
       url: "https://jsonip.com",
       async: false,
       dataType: 'json',
       success: function (data) {
           ip = data.ip;
       }
   });
   
   ```

   여기서 주의 해야 할것은 원래는 jQuery의 getJSON() 코드를 더 깔끔하고 보여지기 위해서 javascript의 AJAX를 async: false(동기식)으로 작성했다. (그냥 순서 지키고 변수 정리 하고 싶어서 했다..)

   

   위치를 가져오려고 하는데 제공하는데가 많이 없다 심지어 있다고 해도 난 경기도에사는데... 내가 인천에 산다고 찍혀나온다. 그래서 좀 찾다보니 **https://ipinfodb.com/api** API가 가장 정확한것 같았다.

   아래는,

   For **city precision**, do a query with the following API (if you omit the IP parameter it will check with your own IP): (즉, 도시별로 구분할때 쓰는 링크이다. 느리다고는 하는데 그런거 같지는 않다.)

   ```javascript
   http://api.ipinfodb.com/v3/ip-city/?key=YOUR_API_KEY&ip=IP_V4_OR_IPV6_ADDRESS
   ```

   ```javascript
   //위치를 json 형식으로 받아온다
   $.ajax({
       url: "http://api.ipinfodb.com/v3/ip-city/?key=" + apiKey + "&ip=" + ip+"&format=json",
       async: false,
       dataType: 'json',
       success: function (data) {
           console.log(data);
       }
   });
   ```

   처음에 ajax로 호출했을때 json형식이 아닌 raw형식(?)으로 들어와서 당황했지만 자세히 읽어보니 json도 지원해서 **format=json**을 같이 보내니 정상적인 json이 호출되었다

3. 서버 시간을 가져온다

   서버 시간을 javascript를 사용하여 가져오려고 했지만 굳이 그럴 필요가 있나 라는 생각이든다. 벡엔드에서 서버 시간을 따는게 훨씬 쉬울것 같아 벡엔드에서 가져오기로 한다.

4. 모바일 구분 /  디바이스 혹은 운영체제 구분

   모바일 구분
   
   ```javascript
var filter = "win16|win32|win64|mac";
   var platform = navigator.platform.toLowerCase();
   if (platform) {
       if (filter.indexOf(platform.toLowerCase()) < 0) {
           isMobile = true;
       } else {
           isMobile = false;
       }
   }
   ```
   
   디바이스 혹은 운영체제 구분
   
   ```javascript
   /* 모바일이라면 안드로이드와 애플을 구분하고 일반 브라우저라면 window와 mac을 구별한다 */
   
   if (isMobile) {
       if (platform.indexOf('android')) {
           operationSystem = "Android";
       } else if (platform.indexOf('iphone')) {
           operationSystem = "iPhone"
       } else if (platform.indexOf('ipad')) {
           operationSystem = "iPad";
       } else {
           operationSystem = "Others";
       }
   } else {
       if ("win".indexOf(platform.toLowerCase()) < 0) {
           operationSystem = "Window";
       } else if ("mac".indexOf(platform.toLowerCase()) < 0) {
           operationSystem = "MAC";
       } else {
           operationSystem = "Others";
       }
   }
   ```
   
   사실 한번에 검사할 수 있기는 하다 다만 혹시 몰라 Others를 구분하기 위해 나눈것이다.
   
5. 현재 페이지 

   ```javascript
   let currPage = window.location.href; // 페이지 현 위치
   ```

   

#### MyBatis를 사용해 DB에 저장

1. 먼저 빈즈를 설정하도록하자. (geter/setter)

   먼저 나는 intellij를 사용하기 떄문에 plugin을 다운 받아 설치하면 자동으로 lombok이 깔린다. ecliplse의 경우 lombok 플러그인 페이지에 들어가서 다운받아 실행해서 eclipse를 찾아 덮어주면 된다.

   ```java
   import lombok.Data;
   
   @Data
   public class analyticsBeans {
       private int key; // Primary Key
       private String referrer;
       private String country;
       private String region;
       private String city;
       private boolean isMobile;    
       private String operationSystem;
       private String currPage;
   }
   
   ```

2. 컨트롤러 설정

   빈즈에 set을 해서 해당 인터페이스로 전송후에 myBatis를 사용하여 DB에 저장한다.

   API service

   ```java
   /**
        * 방문자가 접속시 확인한다.
        * dfaultValue는 정보가 없을수 있고 없을경우 Error이기 때문에 Error로 설정했다.
        */
       @RequestMapping(value = "/checkAnalytics.do", method = {RequestMethod.GET, RequestMethod.POST})
       public int analytics(@RequestParam(defaultValue = "Direct") String referrer,
                            @RequestParam(defaultValue = "Error") String ip,
                            @RequestParam(defaultValue = "Error") String country,
                            @RequestParam(defaultValue = "Error") String region,
                            @RequestParam(defaultValue = "Error") String city,
                            @RequestParam(defaultValue = "Error") Boolean isMobile,
                            @RequestParam(defaultValue = "Error") String operationSystem,
                            @RequestParam(defaultValue = "Error") String currPage) {
   
           Date time = new Date();
           SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
           String currTime = format.format(time);
   
           analyticsBeans input = new analyticsBeans();
           input.setReferrer(referrer);
           input.setIp(ip);
           input.setCountry(country);
           input.setRegion(region);
           input.setCity(city);
           input.setMobile(isMobile);
           input.setOperationSystem(operationSystem);
           input.setCurrPage(currPage);
           input.setCurrTime(currTime);
   
           int insert = 0; // DB에 저장되었는지 여부를 저장
   
           try {
               insert = adminService.insertUserInfo(input); //DB저장을 위해 서비스에게 데이터를 넘긴다
           } catch (Exception e) {
               e.printStackTrace();
           }
           return insert;
       }
   ```

   Interface

   ```java
       /**
        * 사용자 정보 저장
        */
       public int insertUserInfo(analyticsBeans input) throws Exception;
   ```

   implement

   ```java
      @Override
       public int insertUserInfo(analyticsBeans input) throws Exception {
           int result = 0;
           try {
               result = sqlSession.insert("analyticsMapper.insertUserInfo", input);
               if (result == 0) {
                   throw new NullPointerException("result = 0");
               }
           } catch (NullPointerException e) {
               log.error(e.getLocalizedMessage());
               throw new Exception("저장된 데이터가 없습니다.");
           } catch (Exception e) {
               log.error(e.getLocalizedMessage());
               throw new Exception("데이터 저장에 실패했습니다.");
           }
           return result;
       }
   ```

   Mapper xml

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!-- Mapper sample file 입니다. -->
   <!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
           "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
   <mapper namespace="analyticsMapper">
       <resultMap id="analyticsMap" type="com.andrew.root.model.analyticsBeans">
           <!-- Beans 클래스의 객체이름(id)과 클래스이름(type)을 명시한다. -->
           <result property=" city" column=" city "/>
           <result property=" country" column=" country "/>
           <result property=" currPage" column=" currPage "/>
           <result property=" ip" column=" ip "/>
           <result property=" isMobile" column=" isMobile "/>
           <result property=" key" column=" keyNum "/>
           <result property=" operationSystem" column=" operationSystem "/>
           <result property=" referrer" column=" referrer "/>
           <result property=" region" column=" region "/>
           <result property=" currTime" column=" currTime "/>
       </resultMap>
   
       <insert id="insertUserInfo"
               parameterType="com.andrew.root.model.analyticsBeans"
               useGeneratedKeys="true" keyProperty="keyNum" keyColumn="keyNum">
               INSERT INTO analytics (city, country, currPage, ip, isMobile, operationSystem, referrer, region, currTime)
               VALUES (#{city}, #{country}, #{currPage}, #{ip}, #{isMobile}, #{operationSystem}, #{referrer}, #{region}, #{currTime});
       </insert>
   
   </mapper>
   
   ```

   지금은 사용자가 페이지 들르기만하면 사용자가 DB에 저장이된다. 나중에 같은 사용자가 들어왔을떄에는 DB에 넘기지 않도록 할것이다. 다만 방금 **카카오에서** 코딩테스트 메일을 받았다 지금 하고 있는것을 빠르게 정리하고 코딩테스트 준비 하루정도라도 제대로 하고 보기 위해... 빠르게 진행한다!



​		DB설정한 후 handlebar.js를 사용하여 마무리 하였다. 

​		handlebar.js는 나중에 다시 정리해야겠다