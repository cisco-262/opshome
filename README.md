<div align="center">

<img src="assets/images/brand-logo.png" alt="OpsHome NOC Logo" width="120">

# OpsHome NOC

**Mobile + Web NOC for self-hosted infrastructure**  
**面向自托管基础设施的移动端 + Web NOC**  
**面向自架基礎設施的行動端 + Web NOC**

Monitor public services, private networks, Proxmox, VMware, Synology, Linux, Docker, websites, SSL, domains, incidents, and infrastructure health from one operational view.

<br>

[![App Store](https://img.shields.io/badge/App_Store-Download-0D96F6?logo=apple&logoColor=white)](https://apps.apple.com/us/app/opshome-noc/id6763890679)
[![Website](https://img.shields.io/badge/Website-app.opshome.run-1769AA)](https://app.opshome.run)
[![Console](https://img.shields.io/badge/Console-console.opshome.run-16803A)](https://console.opshome.run)
[![Documentation](https://img.shields.io/badge/Docs-docs.opshome.run-254E70)](https://docs.opshome.run)
[![Platform](https://img.shields.io/badge/Platform-iOS_%2B_Web-lightgrey?logo=apple)](https://app.opshome.run)

<br>

<a href="https://apps.apple.com/us/app/opshome-noc/id6763890679">
  <img src="assets/images/app-store-badge.svg" alt="Download OpsHome NOC on the App Store" height="56">
</a>

<br><br>

<img src="assets/images/homelab-noc-overview-iphone.png" alt="OpsHome NOC infrastructure overview on iPhone" width="300">

<br>

[Website](https://app.opshome.run) · [Console](https://console.opshome.run) · [Documentation](https://docs.opshome.run) · [App Store](https://apps.apple.com/us/app/opshome-noc/id6763890679) · [Security](https://app.opshome.run/security.html) · [Support](https://app.opshome.run/support.html)

</div>

---

## Overview

**OpsHome NOC** is a lightweight operations platform for homelabs, self-hosted services, NAS environments, and small always-on infrastructure.

It combines an **iPhone-first NOC app** with a **read-only Web Console**, so the same environment can be reviewed from a phone, desktop browser, tablet, or wall display.

OpsHome brings together:

- Public service monitoring from OpsHome Cloud
- Private network monitoring through Docker Probe
- Infrastructure visibility for Proxmox VE, VMware vSphere, Synology NAS, Linux, and Docker
- Current health, availability, utilization, storage, workload, and event context
- Incident workspace and recovery history
- Public status pages
- Push notifications and supported alert integrations
- Sign in with Apple

OpsHome is designed for people who want a clear operational view without turning their monitoring system into another infrastructure project to maintain.

## Current Architecture

| Layer | Purpose | Examples |
| --- | --- | --- |
| **OpsHome Cloud** | Public monitoring and account services | HTTP, HTTPS, TCP, UDP, SSL, DNS, ICMP, domain expiry, alerts, status pages |
| **Docker Probe** | Private monitoring from inside your network | Internal HTTP/HTTPS/TCP targets, private services, infrastructure access behind NAT |
| **Infrastructure Connections** | Asset and workload visibility | Proxmox VE, VMware vSphere, Synology NAS, Linux, Docker |
| **OpsHome NOC for iOS** | Mobile monitoring and alerts | Health, monitors, assets, incidents, notifications, status pages |
| **OpsHome Console** | Read-only browser operations view | Monitor Matrix, Assets Topology, Incident Workspace, Wall Display Mode |

## Key Capabilities

### Public Monitoring

Monitor internet-facing services and infrastructure from OpsHome Cloud:

- HTTP / HTTPS
- TCP / UDP
- ICMP
- SSL certificates
- DNS
- Domain expiry
- Websites and APIs

### Private Monitoring

Docker Probe runs inside an authorized private network and connects outbound to OpsHome Cloud.

This allows you to monitor private services without exposing internal management interfaces to the public internet.

- Private HTTP / HTTPS / TCP monitoring
- No inbound port forwarding required
- No public management interface required
- Works behind NAT and home routers
- Supports private infrastructure connections reachable by the Probe

### Infrastructure Visibility

OpsHome can bring heterogeneous infrastructure into the same operational view:

- **Proxmox VE** — nodes, VMs, LXC guests, storage, resource usage, health, and workload context
- **VMware vSphere** — hosts, virtual machines, datastores, performance, and health context
- **Synology NAS** — system status, storage, disks, utilization, temperature, network, and supported container data
- **Linux** — host health and resource visibility
- **Docker** — hosts, containers, state, and supported container events

### Incidents and Events

OpsHome keeps more than the current green/red state visible.

Supported views can include:

- Active and recovered incidents
- Severity and duration
- Affected monitors or assets
- Evidence and event timelines
- Container restarts and recoveries
- Abnormal container states
- Container exits, recreations, and OOM kills
- Historical monitoring context

## OpsHome Console

**OpsHome Console** is the browser-based, read-only operations view for your existing OpsHome environment.

Open it at: **https://console.opshome.run**

Current Console capabilities include:

- Overview of environment health and active risk
- Monitor Matrix for public and private monitoring
- Assets Topology for infrastructure health and workloads
- Incident Workspace with evidence and history
- Light and dark themes
- Responsive layouts for desktop, iPad, and mobile browsers
- Wall Display Mode for long-running operational visibility
- Sign in with Apple
- Read-only access by design

The Console is intended for observation and investigation. It does not turn the browser into a remote infrastructure administration panel.

<div align="center">

<img src="assets/images/console/overview-dark.png" alt="OpsHome Console overview in dark mode" width="820">

</div>

## Docker Probe Security Model

Docker Probe is designed to preserve the private-network boundary.

- The Probe runs inside the network it is authorized to observe.
- It initiates outbound HTTPS connections to OpsHome Cloud.
- OpsHome Cloud does not directly initiate connections into your LAN.
- No inbound firewall rule or public port forwarding is required for normal Probe operation.
- Private infrastructure can remain behind the local firewall or router.
- Use dedicated or least-privilege credentials where supported.

OpsHome processes operational monitoring data required to provide health, event, asset, and alerting functionality. It is not designed to upload personal NAS files, documents, or unrelated private content.

For the current public security controls, see the [Security page](https://app.opshome.run/security.html).

## Security Controls

The public security documentation currently describes controls including:

- HTTPS with TLS 1.2 or higher at the public edge
- HSTS with subdomain coverage
- Cloudflare Full (strict) origin protection
- AES-256-GCM protection for supported sensitive server-side credentials at rest
- Apple Keychain Services for supported iOS authentication tokens
- Outbound-only private monitoring through Docker Probe
- Least-privilege guidance for infrastructure connections
- Immutable OCI image digests for Probe release pinning

Security details can evolve with the service. Refer to the live [Security page](https://app.opshome.run/security.html) for the current documented controls.

## Plans

OpsHome currently provides **Free** and **Pro** plans, with additional permanent Founder benefits for eligible accounts registered during the Founder campaign.

### Free

- 30 public monitor targets
- HTTP / HTTPS / TCP / SSL / ICMP
- 1 Docker Probe
- 1 Infrastructure Connection
- 1 Private Monitor
- 1 public status page
- Push alerts and SSL expiry reminders
- Visual monitoring dashboard

### Pro

- 100 public monitor targets
- All supported public monitor types, including UDP, DNS, and Domain
- 12 Docker Probes
- 12 Infrastructure Connections
- 50 Private Monitors
- Expanded private infrastructure capabilities
- Higher-frequency private monitoring
- Push + Telegram alerts

### Founder Access

Eligible accounts registered before **May 1, 2027** receive permanent Founder access for:

- 3 Docker Probes
- 3 Infrastructure Connections
- 3 Private Monitors

Plan limits and commercial terms may change. The live website and App Store purchase screen are the source of truth for current pricing and entitlements.

See: [Pricing](https://app.opshome.run/#pricing)

## Public Status Pages

OpsHome can publish selected service information to a lightweight public status page.

Status pages can show:

- Current service state
- Latest check information
- 24-hour, 7-day, and 30-day uptime summaries
- Response-time information
- Recent incidents and recovery context
- Shareable links and QR codes

Public status pages are designed to expose selected service status without exposing internal operational details such as private IP addresses, hostnames, internal URLs, API keys, Probe identifiers, or sensitive paths.

Learn more: [Status Pages](https://app.opshome.run/status-pages/)

## Quick Start

1. Install OpsHome NOC from the App Store.
2. Sign in with Apple.
3. Add a public monitor for a website, API, certificate, port, or domain-related target.
4. Deploy Docker Probe for private or internal services.
5. Add supported infrastructure connections such as Proxmox, VMware, Synology, Linux, or Docker.
6. Enable notifications.
7. Review monitors, assets, incidents, history, and availability from the iPhone app.
8. Open OpsHome Console when you need a larger read-only operational view.

A useful first setup is one public HTTPS monitor plus one private Docker Probe target. This helps distinguish external availability from internal service health.

## Product Screens

<div align="center">

<img src="assets/images/homelab-noc-overview-iphone.png" alt="OpsHome NOC homelab overview on iPhone" width="220">
&nbsp;&nbsp;
<img src="assets/images/docker-probe-private-monitoring-iphone.png" alt="OpsHome Docker Probe private monitoring on iPhone" width="220">
&nbsp;&nbsp;
<img src="assets/images/docker-container-event-timeline-iphone.png" alt="OpsHome Docker container event timeline on iPhone" width="220">

</div>

## Documentation

- [Documentation Home](https://docs.opshome.run)
- [Quick Start](https://docs.opshome.run/quick-start.html)
- [Cloud Monitoring](https://docs.opshome.run/cloud-monitoring.html)
- [Docker Probe](https://app.opshome.run/docker-probe/)
- [Private Monitoring](https://app.opshome.run/private-monitoring/)
- [Homelab / Infrastructure](https://app.opshome.run/homelab-noc/)
- [Proxmox Monitoring](https://app.opshome.run/proxmox-monitoring/)
- [Synology Monitoring](https://app.opshome.run/synology-monitoring/)
- [Linux Server Monitoring](https://app.opshome.run/linux-server-monitoring/)
- [Docker Container Monitoring](https://app.opshome.run/docker-container-monitoring/)
- [Status Pages](https://app.opshome.run/status-pages/)
- [Console](https://app.opshome.run/console/)
- [Security](https://app.opshome.run/security.html)
- [Support](https://app.opshome.run/support.html)

## Languages

The OpsHome website currently provides:

- English
- 简体中文
- 繁體中文
- Deutsch

The product interface and documentation may have different language coverage depending on version and platform.

---

## 简体中文

### 产品简介

**OpsHome NOC** 是面向 Homelab、自托管服务、NAS 和小型长期运行基础设施的轻量 NOC 平台。

现在的 OpsHome 不再局限于 iPhone 单一界面，而是由 **iOS App + 只读 Web Console + OpsHome Cloud + Docker Probe** 组成统一的监控体验。

它可以把以下内容放到同一个运维视图中：

- 公网网站、API、SSL、DNS、域名和网络端点监控
- 通过 Docker Probe 进行的私有网络监控
- Proxmox VE、VMware vSphere、Synology NAS、Linux 和 Docker 基础设施
- 当前健康状态、可用率、资源使用、存储与工作负载信息
- 活跃和已恢复的 Incidents
- 事件和证据时间线
- 推送通知与支持的告警集成
- 公共状态页
- Sign in with Apple

### Web Console

**OpsHome Console** 提供与 iOS App 同一账号下的只读 Web 运维视图：

- Overview
- Monitor Matrix
- Assets Topology
- Incident Workspace
- Light / Dark Theme
- Wall Display Mode
- Desktop / iPad / Mobile 响应式布局

Console 地址：**https://console.opshome.run**

Console 主要用于观察、排查和大屏展示，不用于远程修改或控制基础设施。

### 私有网络监控

Docker Probe 部署在你授权的私有网络中，并主动通过 HTTPS 连接 OpsHome Cloud。

正常使用不需要：

- 开放入站端口
- 暴露家庭公网 IP
- 为内部管理界面配置公网反向代理

这样可以在保留私有网络边界的同时，查看内部 HTTP / HTTPS / TCP 服务以及受支持的基础设施状态。

### 当前支持的基础设施

- **Proxmox VE**：节点、VM、LXC、存储、资源使用和健康信息
- **VMware vSphere**：主机、虚拟机、数据存储、性能和健康信息
- **Synology NAS**：系统、存储、磁盘、资源、温度、网络和支持的容器信息
- **Linux**：主机资源和健康信息
- **Docker**：主机、容器、状态和支持的容器事件

### 方案

当前公开方案为 **Free / Pro**，符合 Founder 活动条件的账号可获得永久 Founder 权益。

当前网站展示的核心额度：

| 能力 | Free | Pro |
| --- | ---: | ---: |
| 公网监控目标 | 30 | 100 |
| Docker Probe | 1 | 12 |
| Infrastructure Connection | 1 | 12 |
| Private Monitor | 1 | 50 |
| 公共状态页 | 1 | 扩展 |

在 **2027 年 5 月 1 日前**符合条件完成注册的 Founder 账号，可获得永久 **3 Docker Probes + 3 Infrastructure Connections + 3 Private Monitors** 权益。

价格、额度和权益可能随着产品调整，请以 [官网 Pricing](https://app.opshome.run/#pricing) 和 App Store 购买页面为准。

### 快速开始

1. 从 App Store 安装 OpsHome NOC。
2. 使用 Sign in with Apple 登录。
3. 创建公网 Monitor。
4. 如需监控私有网络，部署 Docker Probe。
5. 添加 Proxmox、VMware、Synology、Linux 或 Docker 等支持的基础设施连接。
6. 开启通知。
7. 在 iPhone 上查看健康、事件和 Incidents。
8. 需要更大屏幕时打开 OpsHome Console。

---

## 繁體中文

### 產品簡介

**OpsHome NOC** 是面向 Homelab、自架服務、NAS 與小型長時間運行基礎設施的輕量 NOC 平台。

目前 OpsHome 由 **iOS App + 唯讀 Web Console + OpsHome Cloud + Docker Probe** 組成統一的監控體驗。

它可以把以下內容整合到同一個運維視圖：

- 公網網站、API、SSL、DNS、網域與網路端點監控
- 透過 Docker Probe 進行的私有網路監控
- Proxmox VE、VMware vSphere、Synology NAS、Linux 與 Docker 基礎設施
- 目前健康狀態、可用率、資源使用、儲存與工作負載資訊
- 活躍與已恢復的 Incidents
- 事件與證據時間軸
- 推播通知與支援的告警整合
- 公開狀態頁
- Sign in with Apple

### Web Console

**OpsHome Console** 提供與 iOS App 相同帳號下的唯讀 Web 運維視圖：

- Overview
- Monitor Matrix
- Assets Topology
- Incident Workspace
- Light / Dark Theme
- Wall Display Mode
- Desktop / iPad / Mobile 響應式版面

Console：**https://console.opshome.run**

Console 主要用於觀察、調查與大螢幕顯示，不用於遠端修改或控制基礎設施。

### 私有網路監控

Docker Probe 部署在你授權的私有網路內，並主動透過 HTTPS 連線 OpsHome Cloud。

正常使用不需要：

- 開放入站連接埠
- 暴露家庭公網 IP
- 將內部管理介面放到公開反向代理後方

這樣可以保留私有網路邊界，同時查看內部 HTTP / HTTPS / TCP 服務與支援的基礎設施狀態。

### 目前支援的基礎設施

- **Proxmox VE**：節點、VM、LXC、儲存、資源使用與健康資訊
- **VMware vSphere**：主機、虛擬機、資料存放區、效能與健康資訊
- **Synology NAS**：系統、儲存、硬碟、資源、溫度、網路與支援的容器資訊
- **Linux**：主機資源與健康資訊
- **Docker**：主機、容器、狀態與支援的容器事件

### 方案

目前公開方案為 **Free / Pro**，符合 Founder 活動條件的帳號可獲得永久 Founder 權益。

在 **2027 年 5 月 1 日前**符合條件完成註冊的 Founder 帳號，可獲得永久 **3 Docker Probes + 3 Infrastructure Connections + 3 Private Monitors** 權益。

價格、額度與權益可能隨產品調整，請以 [官網 Pricing](https://app.opshome.run/#pricing) 與 App Store 購買頁面為準。

### 快速開始

1. 從 App Store 安裝 OpsHome NOC。
2. 使用 Sign in with Apple 登入。
3. 建立公網 Monitor。
4. 如需監控私有網路，部署 Docker Probe。
5. 新增 Proxmox、VMware、Synology、Linux 或 Docker 等支援的基礎設施連線。
6. 開啟通知。
7. 在 iPhone 上查看健康、事件與 Incidents。
8. 需要更大的畫面時開啟 OpsHome Console。

---

## Deutsch

### Kurzüberblick

**OpsHome NOC** ist eine leichte NOC-Plattform für Homelabs, Self-Hosting, NAS-Systeme und kleine dauerhaft betriebene Infrastrukturen.

Die aktuelle Plattform verbindet:

- iOS-App für mobile Überwachung und Benachrichtigungen
- Read-only Web Console für Desktop, Tablet und Wall Display
- Öffentliches Monitoring über OpsHome Cloud
- Privates Monitoring über Docker Probe
- Infrastrukturansichten für Proxmox VE, VMware vSphere, Synology NAS, Linux und Docker
- Incidents, Ereignisse, Wiederherstellungen und Verlauf
- Öffentliche Statusseiten
- Sign in with Apple

Console: **https://console.opshome.run**

Website: **https://app.opshome.run**

Dokumentation: **https://docs.opshome.run**

---

## Privacy

OpsHome is designed to process the information required to provide monitoring, health, incident, asset, and alerting functionality.

- No advertising profile
- No sale of personal data
- No unnecessary access to contacts
- Supported iOS authentication tokens are protected with Apple Keychain Services
- Docker Probe uses an outbound-initiated connection model
- Public status pages are designed to mask private infrastructure details

For current details:

- [Privacy Policy](https://app.opshome.run/privacy.html)
- [Terms of Service](https://app.opshome.run/terms.html)
- [Security](https://app.opshome.run/security.html)

## Support

For product support, account questions, or security-related contact:

**support@opshome.run**

- [Support Center](https://app.opshome.run/support.html)
- [Documentation](https://docs.opshome.run)

---

<div align="center">

© 2026 OpsHome NOC™. All rights reserved.

</div>
