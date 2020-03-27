# NOTE FOR SPRING

### Controller (Spring)

```java
 @RequestMapping(value = "/product", method = {RequestMethod.GET, RequestMethod.POST})

 @RequestMapping(value = "/sellPopupCurrent.do", method {RequestMethod.GET,RequestMethod.POST})
```

- 한 페이지에 두개의 방식(GET, POST)이 있다면 requestMapping의 method를 GET, POST 모두 넣어줍니다.