---
title: HackerRank (Personal Use Oly)
tags: [Kakao, HackerRank]
style: fill
color: danger
description: 카카오 기술 면접 시험을 위한 Problem
---

## HackerRank 문제

#### 1. Factorial Problem

첫번쨰 문제를 잃어버렸다 

다만 parameter로 받은 숫자를 factorial 하여 return 하는 문제이다.

``` java
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class first {
    static void extraLongFactorials(int n) {
        BigInteger result = BigInteger.ONE;


        for (int i = 0; i < n; i++) {
            result = result.multiply(BigInteger.valueOf(i + 1));
        }

        System.out.println(result);
    }

    public static void main(String[] args) {
        int factorial = 25;

        extraLongFactorials(factorial);

    }


}

```



첫번쨰 문제를 잃어버렸다 

다만 parameter로 받은 숫자를 factorial 하여 return 하는 문제이다.



#### 2. Encryption

https://www.hackerrank.com/challenges/encryption/problem

``` java
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class first {
    // Complete the encryption function below.
    static String encryption(String s) {
        // 기본적인 예외처리
        if (s == null || s == "") {
            return null;
        }

        // 선언 (초기화)
        double sqroot = 0.0;
        int len = s.length();
        int row, column;
        String answer = "";

        // sqroot를 사용해 값을 구함
        sqroot = Math.sqrt(len);

        // row와 column 을 찾는다.
        // 소수점이 없다면 딱 떨어지는 숫자이므로 row 와 column이 같다

        row = (int) sqroot;
        if (sqroot % 1 == 0) {
            column = row;
        } else {
            column = row + 1;
        }

        // 암호화를 시작한다.
        for (int i = 0; i < column; i++) {
            for (int j = i; j < len; j += column) {
                if (s.substring(j, j + 1) == null) {
                    break;
                } else {
                    answer += s.substring(j, j + 1);
                }
            }
            answer += " ";
        }

        return answer;
    }

    public static void main(String[] args) {
        String input = "feedthedog";
        System.out.println(encryption(input));


    }


}

```

