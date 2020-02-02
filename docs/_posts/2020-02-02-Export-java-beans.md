---
title: Export JAVABEANS using MySQL
tags: [MySQL, JAVA]
style: fill
color: light
description: MySQL 코드를 이용하여 JAVABEANS를 추출합니다.
---

## MY SQL GET JAVA BEANS


### MYSQL로 자바 빈즈를 추출하는 코드 입니다.



```mysql
 SELECT
  COLUMN_NAME, DATA_TYPE,
  CASE WHEN DATA_TYPE = "int" THEN CONCAT("private ","int ",COLUMN_NAME,";  //",COLUMN_COMMENT) 
  WHEN DATA_TYPE = "blob" THEN CONCAT("private ","String ",COLUMN_NAME,";  //",COLUMN_COMMENT) 
  ELSE CONCAT("private ","String ",COLUMN_NAME,";  //",COLUMN_COMMENT) 
  END
FROM
  INFORMATION_SCHEMA.COLUMNS 
WHERE
  TABLE_SCHEMA = '{Your DB}'
AND
  TABLE_NAME = '{Your Table}';
```

### For EZEN 03
```mysql
 SELECT
  COLUMN_NAME, DATA_TYPE,
  CASE WHEN DATA_TYPE = "int" THEN CONCAT("private ","int ",COLUMN_NAME,";  //",COLUMN_COMMENT) 
  WHEN DATA_TYPE = "blob" THEN CONCAT("private ","String ",COLUMN_NAME,";  //",COLUMN_COMMENT) 
  ELSE CONCAT("private ","String ",COLUMN_NAME,";  //",COLUMN_COMMENT) 
  END
FROM
  INFORMATION_SCHEMA.COLUMNS 
WHERE
  TABLE_SCHEMA = 'tieshoe'
AND
  TABLE_NAME = 'Your Table';
```

```
int만 걸러내며 옆에 코멘트를 달아놓게 만들었습니다.
```