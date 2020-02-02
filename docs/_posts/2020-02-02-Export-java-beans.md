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
  CASE WHEN DATA_TYPE = "int" THEN CONCAT("private ","int ",COLUMN_NAME) 
  CASE WHEN DATA_TYPE = "blob" THEN CONCAT("private ","String ",COLUMN_NAME) 
  ELSE CONCAT("private ","String ",COLUMN_NAME) 
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
  CASE WHEN DATA_TYPE = "int" THEN CONCAT("private ","int ",COLUMN_NAME) 
  CASE WHEN DATA_TYPE = "blob" THEN CONCAT("private ","String ",COLUMN_NAME) 
  ELSE CONCAT("private ","String ",COLUMN_NAME) 
  END
FROM
  INFORMATION_SCHEMA.COLUMNS 
WHERE
  TABLE_SCHEMA = 'tieshoe'
AND
  TABLE_NAME = '{Your Table}';
```

​	int타입만 분류합니다. 현재 boolean type은 Tiny int로 대체되어 varchar로 되어나오므로 char(1)로 바꿀예정입니다.