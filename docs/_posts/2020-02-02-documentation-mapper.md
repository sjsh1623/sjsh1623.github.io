---
title: MAPPER documentation
tags: [MyBatis, MySQL, JAVA]
style: fill
color: primary
description: EZEN 03 Mapper 정규화
---
## EZEN03 Documentation (MAPPER)

### MAPPER

#### Mapper의 경로

> resources
>
> > mappers
> >
> > > ---Mapper.xml



#### Mapper 정규화

Mapper의 이름은

{DB table 이름}Mapper.xml 로 통일합니다.

resultMap id는

{DBtable 이름}Map로 통일합니다.



#### Mapper resultMap

```mysql
<?xml version="1.0" encoding="UTF-8"?>
<!-- Mapper sample file 입니다. -->
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="productMapper">
    <resultMap id="{dbName}Map" type="com.ezen03.tieshoe.model.UserInfo">
        <!-- Beans 클래스의 객체이름(id)과 클래스이름(type)을 명시한다. -->

		<!-- resultMap을 삽입합니다. -->

    </resultMap>

</mapper>
```



##### Example (product)

```mysql
<?xml version="1.0" encoding="UTF-8"?>
<!-- Mapper sample file 입니다. -->
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="productMapper">
    <resultMap id="productMap" type="com.ezen03.tieshoe.model.UserInfo">
        <!-- Beans 클래스의 객체이름(id)과 클래스이름(type)을 명시한다. -->
        <result property=" productNum" column=" productNum "/>
        <result property=" productCode" column=" productCode "/>
        <result property=" productNameEN" column=" productNameEN "/>
        <result property=" productNameKR" column=" productNameKR "/>
        <result property=" productColor" column=" productColor "/>
        <result property=" productReleaseDate" column=" productReleaseDate "/>
        <result property=" productReleasePrice" column=" productReleasePrice "/>
        <result property=" productBrandKR" column=" productBrandKR "/>
        <result property=" productBrandEN" column=" productBrandEN "/>
        <result property=" productImgPath" column=" productImgPath "/>
        <result property=" productAdminPick" column=" productAdminPick "/>
        <result property=" productAdminRank" column=" productAdminRank "/>
    </resultMap>

</mapper>
```

