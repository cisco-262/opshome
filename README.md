<div align="center">

<img src="/docs/assets/images/brand-logo.png" alt="OpsHome NOC Logo" width="120">

# OpsHome NOC

**Your Personal Infrastructure NOC on iPhone**  
**在 iPhone 上管理你的個人基礎設施 NOC**  
**在 iPhone 上管理你的个人基础设施 NOC**

Monitor public services, private networks, Docker, Proxmox, Synology NAS, Linux hosts, websites, certificates, and homelab infrastructure from one NOC-style app.

透過一款 NOC 式 App，集中監控公網服務、私有網路、Docker、Proxmox、Synology NAS、Linux 主機、網站、憑證與 Homelab 基礎設施。

通过一款 NOC 风格 App，集中监控公网服务、私有网络、Docker、Proxmox、Synology NAS、Linux 主机、网站、证书和 Homelab 基础设施。

<br>

[![App Store](https://img.shields.io/badge/App_Store-Download-0D96F6?logo=apple&logoColor=white)](https://apps.apple.com/us/app/opshome-noc/id6763890679)
[![Website](https://img.shields.io/badge/Website-opshome.run-1769AA)](https://opshome.run)
[![Documentation](https://img.shields.io/badge/Docs-docs.opshome.run-254E70)](https://docs.opshome.run)
[![Platform](https://img.shields.io/badge/Platform-iPhone-lightgrey?logo=apple)](https://apps.apple.com/us/app/opshome-noc/id6763890679)
[![Monitoring](https://img.shields.io/badge/Monitoring-Cloud_%2B_Private-success)](https://docs.opshome.run)

<br>

<a href="https://apps.apple.com/us/app/opshome-noc/id6763890679">
  <img src="/docs/assets/images/app-store-badge.svg" alt="Download OpsHome NOC on the App Store" height="56">
</a>

<br><br>

<img src="/docs/assets/images/new-home.jpg" alt="OpsHome NOC iPhone dashboard showing infrastructure health" width="300">

<br>

[English](#english) · [繁體中文](#繁體中文) · [简体中文](#简体中文) · [Documentation](https://docs.opshome.run) · [Website](https://opshome.run) · [App Store](https://apps.apple.com/us/app/opshome-noc/id6763890679)

</div>
---

## English

### Overview

**OpsHome NOC** gives personal infrastructure a compact Network Operations Center view on iPhone.

It combines:

- Public checks performed by OpsHome Cloud
- Private monitoring through Docker Probe
- Infrastructure asset views for Synology NAS, Proxmox VE, Linux hosts, and Docker
- Push alerts, incident history, uptime, health summaries, and analysis reports
- Location-aware topology and Map grouping
- Shareable public status pages
- Home Screen and Lock Screen widgets

OpsHome NOC is designed for homelab users, NAS owners, Docker operators, self-hosted service maintainers, and people who manage personal websites or small always-on services.

### Monitoring Sources

| Source | Best for | Supported examples |
| --- | --- | --- |
| **OpsHome Cloud** | Services reachable from the public internet | Websites, APIs, HTTP/HTTPS endpoints, public TCP ports, SSL certificates, DNS records, ICMP reachability, and domain expiry |
| **Docker Probe** | Services inside a LAN, NAS, Docker network, or private homelab | Internal HTTP/HTTPS services, private TCP services, NAS panels, Proxmox dashboards, Docker services, and targets behind NAT |
| **Asset Sources** | Infrastructure visibility beyond simple uptime checks | Synology NAS, Proxmox VE nodes, VMs and LXC guests, Linux hosts, Docker hosts and containers, storage, CPU, memory, temperature, network, and health history |

### Key Capabilities

- **Cloud monitoring** for public websites, APIs, ports, certificates, DNS, ICMP, and domain-related resources
- **Private HTTP, HTTPS, and TCP monitoring** through Docker Probe
- **Local Service Discovery** for authorized private HTTP, HTTPS, and TCP services
- **Synology NAS visibility** for supported DSM, uptime, CPU, memory, temperature, storage, disks, network, and container data
- **Proxmox VE visibility** for supported nodes, VMs, LXC guests, storage, memory, network, and health context
- **Linux host organization** for Docker servers, mini PCs, home servers, storage, automation, and private workloads
- **Docker container event timelines** for restarts, recoveries, abnormal states, exits, recreations, and OOM kills
- **Location-based Map grouping** for Docker Probes, assets, and private monitors
- **Push notifications** for supported incidents and recoveries
- **Event history and analysis reports** for troubleshooting
- **Public status pages** with optional access codes, share duration, QR verification, and private-target masking
- **Sign in with Apple** and a privacy-focused product design

### Docker Probe Security Model

Docker Probe is designed to monitor private homelab services without exposing them to the public internet.

- Docker Probe runs inside your authorized private network.
- It initiates outbound HTTPS connections to OpsHome Cloud.
- OpsHome Cloud does not directly connect into your LAN.
- No inbound firewall rule is required.
- No public IP, port forwarding, or public reverse proxy is required.
- A bootstrap token is used for initial registration.
- Registered probes preserve their identity through the probe state volume.
- Use least-privilege credentials for supported Asset Sources.

Docker Probe reports supported monitoring results, heartbeat information, private service status, and configured Asset Source health. It is not intended to upload personal files, NAS documents, payment information, or unrelated private content.

### Plan Overview

OpsHome NOC distinguishes between **Regular Free**, **Founder Free**, and **Active Pro** accounts.

- **Regular Free** is the standard free tier.
- **Founder Free** is an early-registration benefit for eligible accounts created during the Founder registration campaign. The campaign ends on **May 1, 2027**. After the campaign closes, newly registered accounts receive Regular Free rather than Founder Free.
- Founder Free benefits remain attached to eligible Founder accounts after the campaign ends. Founder Free is not a separate paid subscription.
- **Active Pro** is the paid subscription tier.

| Capability | Regular Free | Founder Free | Active Pro |
| --- | ---: | ---: | ---: |
| Cloud monitor targets | 30 | 30 | 100 |
| Core public types | HTTP / HTTPS / TCP / SSL / ICMP | HTTP / HTTPS / TCP / SSL / ICMP | Included |
| UDP / DNS / Domain Expiry | — | — | Included |
| Minimum public check interval | 10 min | 10 min | 5 min |
| Docker Probe devices | 1 | 3 | 12 |
| Private assets | 1 | 3 | 50 |
| Private service protocols | HTTP / HTTPS / TCP | HTTP / HTTPS / TCP | HTTP / HTTPS / TCP |
| Public status pages | 1 | 1 | 3 |
| Monitors per status page | 10 | 10 | 20 |
| Custom status-page title | — | — | Included |
| Telegram alerts | — | — | Included |
| Push notifications | Included | Included | Included |
| Dashboard and analysis | Basic | Basic + Founder private visibility | Full |

The Founder registration campaign closes on May 1, 2027. Registration after the campaign closes does not grant Founder Free status.

Plan limits and entitlement behavior may change. See the live [Free vs Pro guide](https://docs.opshome.run/free-vs-pro.html) for the current rules.

Pro is available as a monthly or yearly subscription through Apple In-App Purchase. Final pricing and local currency are displayed by the App Store before purchase.

### Quick Start

1. Install OpsHome NOC from the App Store.
2. Sign in with Apple.
3. Add one Cloud monitor for a public website, API, certificate, port, or domain-related target.
4. Deploy Docker Probe for services that are private, internal, or reachable only from your home network.
5. Add supported Synology, Proxmox, Linux, or Docker Asset Sources.
6. Enable push notifications.
7. Review health, alerts, uptime, events, and analysis reports.

A useful first setup is one public HTTPS monitor plus one private Docker Probe monitor. This provides both outside-in and inside-LAN visibility.

### Status Pages

Publish selected monitor results using a shareable public link or QR code.

Status pages can include:

- Selected monitor names and current status
- Optional access-code protection
- Configurable share duration
- QR verification through the OpsHome app
- Custom titles for supported Pro accounts

Public status pages do not expose private IP addresses, internal targets, container names, or sensitive paths.

### Documentation

- [OpsHome NOC Documentation](https://docs.opshome.run)
- [Quick Start](https://docs.opshome.run/quick-start.html)
- [Cloud Monitoring](https://docs.opshome.run/cloud-monitoring.html)
- [Install Docker Probe](https://docs.opshome.run/docs/docker-probe/install/)
- [Docker Probe Security Model](https://docs.opshome.run/docs/docker-probe/security-model/)
- [Local Service Discovery](https://docs.opshome.run/docs/docker-probe/local-service-discovery/)
- [Synology NAS](https://docs.opshome.run/docs/synology/add-synology/)
- [Proxmox VE](https://docs.opshome.run/docs/proxmox/add-proxmox/)
- [Linux Hosts](https://docs.opshome.run/docs/linux/add-linux-host/)
- [Docker Container Event Timeline](https://docs.opshome.run/docs/docker/container-event-timeline/)
- [Status Pages](https://docs.opshome.run/status-pages.html)
- [Free vs Pro](https://docs.opshome.run/free-vs-pro.html)
- [Release Notes](https://docs.opshome.run/release-notes.html)

---

## 繁體中文

### 產品介紹

**OpsHome NOC** 將個人基礎設施整理成一個可在 iPhone 上查看的小型 Network Operations Center 視圖。

它整合：

- 由 OpsHome Cloud 執行的公網檢測
- 透過 Docker Probe 進行的私有網路監控
- Synology NAS、Proxmox VE、Linux 主機與 Docker 的基礎設施資產視圖
- 推播告警、事件歷史、可用率、健康摘要與分析報告
- 依位置整理的拓撲與 Map 分組
- 可分享的公開狀態頁
- 主畫面與鎖定畫面 Widget

OpsHome NOC 適合 Homelab 使用者、NAS 擁有者、Docker 使用者、自架服務維護者，以及管理個人網站或小型長時間運行服務的人員。

### 監控來源

| 來源 | 適合場景 | 支援範例 |
| --- | --- | --- |
| **OpsHome Cloud** | 可從公網存取的服務 | 網站、API、HTTP/HTTPS、公網 TCP 連接埠、SSL 憑證、DNS、ICMP 與網域到期 |
| **Docker Probe** | LAN、NAS、Docker 網路或私有 Homelab 內的服務 | 內部 HTTP/HTTPS、私有 TCP、NAS 面板、Proxmox 儀表板、Docker 服務與 NAT 後方目標 |
| **Asset Sources** | 不只需要可用率，還需要基礎設施狀態 | Synology NAS、Proxmox 節點、VM、LXC、Linux 主機、Docker 主機與容器、儲存、CPU、記憶體、溫度、網路與健康歷史 |

### 核心能力

- 公開網站、API、連接埠、憑證、DNS、ICMP 與網域資源的雲端監控
- 透過 Docker Probe 進行私有 HTTP、HTTPS 與 TCP 監控
- 在授權的私有網路內探索 HTTP、HTTPS 與 TCP 服務
- Synology DSM、運行時間、CPU、記憶體、溫度、儲存、硬碟、網路與容器資訊
- Proxmox VE 節點、VM、LXC、儲存、記憶體、網路與健康狀態
- Linux Docker 主機、Mini PC、家庭伺服器與私有工作負載整理
- Docker 容器重新啟動、恢復、異常、退出、重建與 OOM Kill 事件時間軸
- 依位置整理 Docker Probe、資產與私有監控點
- 支援事件與恢復推播通知
- 事件歷史與分析報告
- 支援存取碼、分享期限、QR 驗證與私有目標遮罩的公開狀態頁
- Sign in with Apple 與隱私優先設計

### Docker Probe 安全模型

Docker Probe 用於監控私有 Homelab 服務，不需要把內部服務暴露到公網。

- Docker Probe 在你授權的私有網路內運行。
- 它主動透過 HTTPS 連線到 OpsHome Cloud。
- OpsHome Cloud 不會直接連入你的 LAN。
- 不需要新增入站防火牆規則。
- 不需要公網 IP、連接埠轉發或公開反向代理。
- 初次註冊時使用 bootstrap token。
- 註冊完成後，Probe 狀態 Volume 會保留其身分。
- Asset Source 應使用最小權限憑證。

Docker Probe 只回報支援的監控結果、心跳、私有服務狀態與 Asset Source 健康資料，不用於上傳個人檔案、NAS 文件、付款資訊或其他無關私有內容。

### 方案概覽

OpsHome NOC 明確區分 **普通 Free、初創 Free 與 Active Pro** 帳號。

- **普通 Free**：標準免費方案。
- **初創 Free**：提供給在初創用戶註冊活動期間完成註冊且符合條件的早期帳號。活動將於 **2027 年 5 月 1 日結束**。活動結束後新註冊的帳號只會獲得普通 Free，不再取得初創 Free 身分。
- 已符合資格的初創帳號，在活動結束後仍保留其初創 Free 權益。初創 Free 不是獨立的付費訂閱方案。
- **Active Pro**：付費訂閱方案。

| 功能 | 普通 Free | 初創 Free | Active Pro |
| --- | ---: | ---: | ---: |
| 雲端監控目標 | 30 | 30 | 100 |
| 公網核心類型 | HTTP / HTTPS / TCP / SSL / ICMP | HTTP / HTTPS / TCP / SSL / ICMP | 支援 |
| UDP / DNS / Domain Expiry | — | — | 支援 |
| 公網最短檢測間隔 | 10 分鐘 | 10 分鐘 | 5 分鐘 |
| Docker Probe 數量 | 1 | 3 | 12 |
| 私有資產 | 1 | 3 | 50 |
| 私有服務協議 | HTTP / HTTPS / TCP | HTTP / HTTPS / TCP | HTTP / HTTPS / TCP |
| 公開狀態頁 | 1 | 1 | 3 |
| 每個狀態頁監控數 | 10 | 10 | 20 |
| 自訂狀態頁標題 | — | — | 支援 |
| Telegram 告警 | — | — | 支援 |
| 推播通知 | 支援 | 支援 | 支援 |
| 儀表板與分析 | 基礎 | 基礎 + 初創私有可見性 | 完整 |

初創用戶註冊活動於 2027 年 5 月 1 日結束。活動結束後完成註冊的新帳號不會取得初創 Free 身分。

方案限制與權益規則可能調整，請以最新的 [Free vs Pro 說明](https://docs.opshome.run/free-vs-pro.html) 為準。

Pro 可透過 Apple App 內購買訂閱月費或年費方案。最終價格與本地貨幣以 App Store 購買確認頁為準。

### 快速開始

1. 從 App Store 安裝 OpsHome NOC。
2. 使用 Sign in with Apple 登入。
3. 為公開網站、API、憑證、連接埠或網域資源建立一個 Cloud Monitor。
4. 為私有、內部或只能從家庭網路存取的服務部署 Docker Probe。
5. 新增支援的 Synology、Proxmox、Linux 或 Docker Asset Source。
6. 開啟推播通知。
7. 查看健康狀態、告警、可用率、事件與分析報告。

建議先建立一個公開 HTTPS Monitor，再建立一個私有 Docker Probe Monitor，以同時取得外部與 LAN 內部視角。

### 狀態頁

透過公開連結或 QR Code 分享選定監控點的狀態。

狀態頁支援：

- 選定監控點名稱與目前狀態
- 可選的存取碼保護
- 可設定的分享期限
- 使用 OpsHome App 掃描 QR Code 驗證
- 符合條件之 Pro 帳號可自訂標題

公開狀態頁不會顯示私有 IP、內部目標、容器名稱或敏感路徑。

### 文件

- [OpsHome NOC 文件中心](https://docs.opshome.run)
- [快速開始](https://docs.opshome.run/quick-start.html)
- [Docker Probe 安裝](https://docs.opshome.run/docs/docker-probe/install/)
- [Docker Probe 安全模型](https://docs.opshome.run/docs/docker-probe/security-model/)
- [方案比較](https://docs.opshome.run/free-vs-pro.html)
- [版本記錄](https://docs.opshome.run/release-notes.html)

---

## 简体中文

### 产品介绍

**OpsHome NOC** 将个人基础设施整理为一个可在 iPhone 上查看的小型 Network Operations Center 视图。

它整合：

- 由 OpsHome Cloud 执行的公网检测
- 通过 Docker Probe 进行的私有网络监控
- Synology NAS、Proxmox VE、Linux 主机和 Docker 基础设施资产视图
- 推送告警、事件历史、可用率、健康摘要和分析报告
- 按位置整理的拓扑和 Map 分组
- 可分享的公开状态页
- 主屏幕和锁定屏幕小组件

OpsHome NOC 适合 Homelab 用户、NAS 用户、Docker 运维者、自托管服务维护者，以及管理个人网站或小型长期运行服务的人员。

### 监控来源

| 来源 | 适合场景 | 支持示例 |
| --- | --- | --- |
| **OpsHome Cloud** | 可从公网访问的服务 | 网站、API、HTTP/HTTPS、公网 TCP 端口、SSL 证书、DNS、ICMP 和域名到期 |
| **Docker Probe** | LAN、NAS、Docker 网络或私有 Homelab 中的服务 | 内部 HTTP/HTTPS、私有 TCP、NAS 面板、Proxmox 控制台、Docker 服务和 NAT 后方目标 |
| **Asset Sources** | 不仅需要可用性，还需要基础设施状态 | Synology NAS、Proxmox 节点、VM、LXC、Linux 主机、Docker 主机和容器、存储、CPU、内存、温度、网络和健康历史 |

### 核心能力

- 公共网站、API、端口、证书、DNS、ICMP 和域名资源的云端监控
- 通过 Docker Probe 进行私有 HTTP、HTTPS 和 TCP 监控
- 在授权的私有网络内发现 HTTP、HTTPS 和 TCP 服务
- Synology DSM、运行时间、CPU、内存、温度、存储、磁盘、网络和容器信息
- Proxmox VE 节点、VM、LXC、存储、内存、网络和健康状态
- Linux Docker 主机、迷你电脑、家庭服务器和私有工作负载整理
- Docker 容器重启、恢复、异常、退出、重建和 OOM Kill 事件时间线
- 按位置组织 Docker Probe、资产和私有监控点
- 支持事件和恢复推送通知
- 事件历史与分析报告
- 支持访问码、分享期限、QR 验证和私有目标隐藏的公开状态页
- Sign in with Apple 和隐私优先设计

### Docker Probe 安全模型

Docker Probe 用于监控私有 Homelab 服务，无需将内部服务暴露到公网。

- Docker Probe 在你授权的私有网络内运行。
- 它主动通过 HTTPS 连接 OpsHome Cloud。
- OpsHome Cloud 不会直接连接到你的 LAN。
- 不需要新增入站防火墙规则。
- 不需要公网 IP、端口转发或公开反向代理。
- 首次注册时使用 bootstrap token。
- 注册完成后，Probe 状态 Volume 会保留其身份。
- Asset Source 应使用最小权限凭据。

Docker Probe 仅上报支持的监控结果、心跳、私有服务状态和 Asset Source 健康数据，不用于上传个人文件、NAS 文档、付款信息或其他无关私有内容。

### 方案概览

OpsHome NOC 明确区分 **普通 Free、初创 Free 和 Active Pro** 账号。

- **普通 Free**：标准免费方案。
- **初创 Free**：提供给在初创用户注册活动期间完成注册且符合条件的早期账号。活动将于 **2027 年 5 月 1 日结束**。活动结束后新注册的账号只会获得普通 Free，不再取得初创 Free 身份。
- 已符合资格的初创账号，在活动结束后仍保留其初创 Free 权益。初创 Free 不是独立的付费订阅方案。
- **Active Pro**：付费订阅方案。

| 功能 | 普通 Free | 初创 Free | Active Pro |
| --- | ---: | ---: | ---: |
| 云端监控目标 | 30 | 30 | 100 |
| 公网核心类型 | HTTP / HTTPS / TCP / SSL / ICMP | HTTP / HTTPS / TCP / SSL / ICMP | 支持 |
| UDP / DNS / Domain Expiry | — | — | 支持 |
| 公网最短检测间隔 | 10 分钟 | 10 分钟 | 5 分钟 |
| Docker Probe 数量 | 1 | 3 | 12 |
| 私有资产 | 1 | 3 | 50 |
| 私有服务协议 | HTTP / HTTPS / TCP | HTTP / HTTPS / TCP | HTTP / HTTPS / TCP |
| 公开状态页 | 1 | 1 | 3 |
| 每个状态页监控数量 | 10 | 10 | 20 |
| 自定义状态页标题 | — | — | 支持 |
| Telegram 告警 | — | — | 支持 |
| 推送通知 | 支持 | 支持 | 支持 |
| 仪表盘和分析 | 基础 | 基础 + 初创私有可见性 | 完整 |

初创用户注册活动于 2027 年 5 月 1 日结束。活动结束后完成注册的新账号不会取得初创 Free 身份。

方案限制和权益规则可能调整，请以最新的 [Free vs Pro 说明](https://docs.opshome.run/free-vs-pro.html) 为准。

Pro 可通过 Apple App 内购买订阅月费或年费方案。最终价格和本地货币以 App Store 购买确认页为准。

### 快速开始

1. 从 App Store 安装 OpsHome NOC。
2. 使用 Sign in with Apple 登录。
3. 为公开网站、API、证书、端口或域名资源创建一个 Cloud Monitor。
4. 为私有、内部或只能从家庭网络访问的服务部署 Docker Probe。
5. 添加支持的 Synology、Proxmox、Linux 或 Docker Asset Source。
6. 开启推送通知。
7. 查看健康状态、告警、可用率、事件和分析报告。

建议先创建一个公开 HTTPS Monitor，再创建一个私有 Docker Probe Monitor，以同时获得外部和 LAN 内部视角。

### 状态页

通过公开链接或二维码分享选定监控点的状态。

状态页支持：

- 选定监控点名称与当前状态
- 可选的访问码保护
- 可配置的分享期限
- 使用 OpsHome App 扫描二维码验证
- 符合条件的 Pro 账号可自定义标题

公开状态页不会显示私有 IP、内部目标、容器名称或敏感路径。

### 文档

- [OpsHome NOC 文档中心](https://docs.opshome.run)
- [快速开始](https://docs.opshome.run/quick-start.html)
- [Docker Probe 安装](https://docs.opshome.run/docs/docker-probe/install/)
- [Docker Probe 安全模型](https://docs.opshome.run/docs/docker-probe/security-model/)
- [方案比较](https://docs.opshome.run/free-vs-pro.html)
- [版本记录](https://docs.opshome.run/release-notes.html)

---


## App Store

OpsHome NOC is available on the App Store:

https://apps.apple.com/us/app/opshome-noc/id6763890679

<a href="https://apps.apple.com/us/app/opshome-noc/id6763890679">
  <img src="/docs/assets/images/app-store-badge.svg" alt="Download on the App Store" height="48">
</a>

## Privacy / 隱私 / 隐私

OpsHome NOC is designed to collect only the data required to provide monitoring and alerting functionality.

- No advertising profile
- No sale of personal data
- No unnecessary location or contact access
- API keys and tokens are stored securely in iOS Keychain
- Public status pages mask internal targets and sensitive private-network details
- Docker Probe uses an outbound-only connection model

For details:

- [Privacy Policy](docs/privacy.html)
- [Terms of Service](docs/terms.html)

## Contact / 聯絡方式 / 联系方式

For support or questions:

**opshome@outlook.com**

---

<div align="center">

© 2026 OpsHome NOC. All rights reserved.

</div>
