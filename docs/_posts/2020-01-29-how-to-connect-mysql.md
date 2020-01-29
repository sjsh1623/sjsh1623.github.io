---
title: How to connect MySQL server from outside (Korean)
tags: [MySQL, WorkBrench]
style: fill
color: primary
description: MySQL does not allow to access from the outside and this is how to access from the outside
---

## 1 문제상황

- MySQL을 설치하면 기본적으로 로컬(localhost)에서만 접속이 가능하고 외부에서는 접속이 불가능하게 되어 있다.



```
Host '135.79.246.80' is not allowed to connect to this MySQL server
```

- [Toad for MySQL](https://zetawiki.com/wiki/Toad_for_MySQL)과 같은 DB 관리 도구를 사용하여 DB에 원격으로 접속하려면 허용해주는 로컬 작업이 필요하다.
- 여기서는 root를 원격에서 접속할 수 있도록 설정한다. 이것을 응용하면 다른 계정에도 적용할 수 있다..

## 2 확인

- 로컬에서 접속하여 아래 쿼리를 날려보면 localhost가 나온다.

```mysql
mysql> SELECT Host,User,plugin,authentication_string FROM mysql.user;
+-----------+------+-----------------------+-------------------------------------------+
| Host      | User | plugin                | authentication_string                     |
+-----------+------+-----------------------+-------------------------------------------+
| localhost | root | mysql_native_password | *8024A6913C57E024BDFC6E813A57DFB924E6803A |
| %         | root |                       |                                           |
+-----------+------+-----------------------+-------------------------------------------+
2 rows in set (0.000 sec)
```



## 3 변경

- 아래에서 '아이디'는 root로 해도 되지만, root가 아닌 별도의 아이디를 사용하는 것이 보안상 유리하다.

### 3.1 모든 IP 허용

- 참고로 %은 모든 아이피를 포함하지만, localhost는 포함되지 않는다.

**방법1. GRANT**

```
GRANT ALL PRIVILEGES ON *.* TO '아이디'@'%' IDENTIFIED BY '패스워드';
```

**방법2. INSERT+GRANT+FLUSH**

```mysql
INSERT INTO mysql.user (host,user,authentication_string,ssl_cipher, x509_issuer, x509_subject) VALUES ('%','아이디',password('패스워드'),'','','');
GRANT ALL PRIVILEGES ON *.* TO '아이디'@'%';
FLUSH PRIVILEGES;
```

### 3.2 IP 대역 허용

- 예: 111.222.xxx.xxx

**방법1. GRANT**

```mysql
GRANT ALL PRIVILEGES ON *.* TO '아이디'@'111.222.%' IDENTIFIED BY '패스워드';
```

**방법2. INSERT+GRANT+FLUSH**

```mysql
INSERT INTO mysql.user (host,user,authentication_string,ssl_cipher, x509_issuer, x509_subject) VALUES ('111.222.%','아이디',password('패스워드'),'','','');
GRANT ALL PRIVILEGES ON *.* TO '아이디'@'111.222.%';
FLUSH PRIVILEGES;
```



### 3.3 특정 IP 1개 허용

- 예: 111.222.33.44

**방법1. GRANT**

```mysql
GRANT ALL PRIVILEGES ON *.* TO '아이디'@'111.222.33.44' IDENTIFIED BY '패스워드';
```

**방법2. INSERT+GRANT+FLUSH**

```mysql
INSERT INTO mysql.user (host,user,authentication_string,ssl_cipher, x509_issuer, x509_subject) VALUES ('111.222.33.44','아이디',password('패스워드'),'','','');
GRANT ALL PRIVILEGES ON *.* TO '아이디'@'111.222.33.44';
FLUSH PRIVILEGES;
```

## 4 원래 상태로 복구

- 모든 IP를 허용한 경우 다음과 같이 원래 상태로 복구할 수 있다.

```mysql
DELETE FROM mysql.user WHERE Host='%' AND User='아이디';
FLUSH PRIVILEGES;
```

## 5 LISTEN IP대역 변경



```mysql
root@zetawiki:~# netstat -ntlp | grep mysqld
tcp        0      0 127.0.0.1:3306          0.0.0.0:*               LISTEN      7931/mysqld
```

```mysql
root@zetawiki:~# vi /etc/mysql/my.cnf
```

```mysql
#bind-address            = 127.0.0.1
[mysqld]
bind-address            = 0.0.0.0
```

```mysql
root@zetawiki:~# service mysql restart
mysql stop/waiting
mysql start/running, process 8190
```

```mysql
root@zetawiki:~# netstat -ntlp | grep mysqld
tcp        0      0 0.0.0.0:3306            0.0.0.0:*               LISTEN      8190/mysqld
```