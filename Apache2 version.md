# apache version check

http://stackoverflow.com/questions/289586/how-can-i-check-which-version-of-apache-is-installed-on-a-debian-machine/40461707#40461707

```sh
$ apache2 -v or apache2 -V
$ apachectl -v or apachectl -V
``` 
    
## apachectl

apachectl (Apache control interface)

> apachectl - Apache HTTP Server Control Interface

https://httpd.apache.org/docs/current/programs/apachectl.html


> httpd - Apache Hypertext Transfer Protocol Server

https://httpd.apache.org/docs/current/programs/httpd.html

https://ide.c9.io/xgqfrms/docker

## CURL


## Linux kernel version


## docker

## NVM & NPM


https://zerossl.com/free-ssl/

HTTPS touch & mkdir 实现windows下的隐藏文件夹的创建

##  Certificate Transparency 

https://www.google.com/transparencyreport/https/ct/?hl=zh-CN

https://crt.sh/?q=xgqfrms.xyz

https://www.google.com/transparencyreport/https/ct/?hl=zh-CN#domain=xgqfrms.xyz&incl_exp=true&incl_sub=true

https://www.certificate-transparency.org/


要向用户提供经过加密的流量，网站必须先向可信的证书授权中心 (CA) 申请证书。然后，当用户尝试访问相应网站时，此证书将提供给浏览器以验证网站。

近年来，由于 HTTPS 证书系统存在结构性缺陷，导致证书以及签发证书的 CA 容易遭到入侵和操纵。Google 的 Certificate Transparency 项目旨在通过提供一个用于监测和审核 HTTPS 证书的开放式框架，以保障证书签发流程的安全。

Google 鼓励所有 CA 将其签发的证书记录到可公开验证、只能附加内容且不可篡改的日志中。将来，Chrome 和其他浏览器可能不再接受未记录到此类日志的证书。

截止到 Nov 8, 2016, 11:05:46 AM，Google 监测的一系列 Certificate Transparency 日志中已记录 128,991,123 个条目。

详细了解 Certificate Transparency 项目： https://www.certificate-transparency.org/

****************************************************************************