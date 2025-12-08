---
layout: page
title: Week 09-10 — The Internet and the World Wide Web
order: 6
---
{% include lecture-styles.html %}

**Authors:** Rahida Asadli, Nilufar Ismayilova, Rahman Karimov, Ismayil Shahaliyev

**Created / Updated:** Nov 21 2025 / Nov 21 2025
{% include reading-time.html %}

<button id="toc-toggle">☰ Sections</button>

<div id="toc-panel">
  <h4>On this page</h4>
  <ul>
    <li><a href="#the-internet">The Internet</a></li>
    <li><a href="#the-osi-model-open-systems-interconnection">The OSI Model</a></li>
    <li><a href="#internet-protocol-suite-tcpip">Internet Protocol Suite (TCP/IP)</a></li>
    <li><a href="#ip-addressing">IP Addressing</a></li>
    <li><a href="#dns-domain-name-system">DNS (Domain Name System)</a></li>
    <li><a href="#world-wide-web">World Wide Web</a></li>
    <li><a href="#markup-languages">Markup Languages</a></li>
    <li><a href="#intranet-and-extranet">Intranet & Extranet</a></li>
    <li><a href="#cloud-computing">Cloud Computing</a></li>
    <li><a href="#additional-material">Additional Material</a></li>
  </ul>
</div>

### The Internet

The [Internet](https://en.wikipedia.org/wiki/Internet) is a global network of interconnected computer networks that allows devices around the world to communicate using shared protocols such as TCP/IP, HTTP, and DNS. It is not controlled by any single organization; instead, many independent networks, such as home networks, university networks, company networks, and government networks, connect to each other voluntarily. This creates a large, decentralized system where information can travel quickly and reliably between distant points.

The Internet follows a **hierarchical structure:** local networks connect to Internet Service Providers, which then connect to larger regional networks and finally to high-speed backbone networks that move data across continents. When you open a website or send a message, your data passes through this chain of networks until it reaches its destination, making global communication feel instant and seamless.

### The OSI Model (Open Systems Interconnection)

The _OSI model_ explains how networking systems communicate across seven layers. Each layer performs a specific role and interacts only with the layers above and below it.

| **Layer** | **Name** | **Function** | **Example** |
| --- | --- | --- | --- |
| 7   | Application Layer | Provides services directly to user applications; defines how browsers, email clients, and apps request network services; uses protocols like HTTP, DNS, FTP, and SMTP. | When you type [_www.ada.edu.az_](http://www.ada.edu.az/) into your browser, the Application Layer uses HTTP to request the webpage and DNS to resolve the domain name. |
| --- | --- | --- | --- |
| 6   | Presentation Layer | Translates data formats between applications and the network; handles text encoding (ASCII/Unicode), compresses files, and performs encryption/decryption such as TLS/SSL. | When the website uses HTTPS, this layer encrypts your data (TLS) so attackers cannot read login information or credit card details. |
| --- | --- | --- | --- |
| 5   | Session Layer | Establishes, manages, and terminates communication sessions between computers; keeps track of ongoing dialogs so data streams don't mix. | When watching a Zoom lecture, the Session Layer maintains a stable session so your audio/video stream stays connected even if packets arrive out of order. |
| --- | --- | --- | --- |
| 4   | Transport Layer | Ensures end-to-end communication; provides reliable delivery (TCP), flow control, retransmission of lost packets, or fast low-overhead delivery (UDP). | When loading a website, TCP guarantees every piece of the webpage arrives in order. For online gaming, UDP sends rapid updates without waiting for lost packets. |
| --- | --- | --- | --- |
| 3   | Network Layer | Handles routing of packets between networks; assigns logical IP addresses and finds the best path through routers; uses the Internet Protocol (IP). | Routers along the Internet path use the destination IP address to forward your webpage request toward the ADA University server. |
| --- | --- | --- | --- |
| 2   | Data Link Layer | Creates frames for local network communication; uses MAC addresses; handles error detection on the link (Ethernet, Wi-Fi frames). | Your laptop sends the request to your Wi-Fi router using the router's MAC address, and the router sends frames to your ISP. |
| --- | --- | --- | --- |
| 1   | Physical Layer | Transmits raw bits (0s and 1s) through cables, fiber optics, or wireless signals; defines voltages, frequencies, modulation. | Wi-Fi converts frames into radio waves, or Ethernet converts them into electrical pulses that travel through a cable. |
| --- | --- | --- | --- |

<div class="frame" markdown="1">

**_Example._** When you open _<www.ada.edu.az>_, the process begins at the Application Layer, where the browser prepares an HTTP request. The Presentation Layer applies encryption if the connection uses HTTPS. The Session Layer sets up and maintains the communication session. The Transport Layer (TCP) breaks the request into small segments and ensures they are delivered reliably. The Network Layer (IP) attaches source and destination IP addresses so routers can forward the data across different networks. The Data Link Layer formats the data into frames addressed to your local router's MAC address. Finally, the Physical Layer converts the frames into radio signals or electrical pulses that travel across Wi-Fi or Ethernet. On the server's side, the same layers work in reverse, eventually allowing your browser to receive the website's content and display it on your screen.

</div>

### Internet Protocol Suite (TCP/IP)

The _Internet Protocol Suite,_ commonly known as _TCP/IP_, is the foundational set of communication rules that defines how data is prepared, addressed, transmitted, and received across the Internet. It organizes network communication into layers, where each layer performs a specific part of the process. At the core of the suite is the Internet Protocol (IP), which assigns unique addresses to devices and routes data packets from the sender to the correct destination, even if they pass through many different networks. Above IP, the suite includes transport protocols that manage how data is broken into smaller pieces, how those pieces travel, and how they are reassembled when they reach the receiver. Together, these layers ensure that data moves smoothly across any combination of networks, making global communication possible.

TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are the two main transport protocols used in the Internet Protocol Suite, and both serve different purposes in network communication. **TCP** provides reliable, ordered, and error-checked delivery of data. It establishes a connection between the sender and receiver before any data is transferred and ensures that every packet arrives correctly. If a packet is lost, TCP automatically resends it. This makes TCP suitable for activities where accuracy matters, such as loading websites, sending emails, or downloading files.

**UDP**, on the other hand, is a faster but less reliable protocol. It sends packets without establishing a connection and does not check whether the receiver actually gets them. Lost packets are simply skipped, not retransmitted. Because it avoids extra overhead, UDP is used for real-time applications where speed is more important than perfect accuracy, such as video calls, online gaming, and live streaming.

<div class="frame" markdown="1">

**_Example._** When you visit a website such as _<www.ada.edu.az>_, your computer creates data packets that contain your request, labels them with the destination server's IP address, and sends them across the Internet. Each router along the way reads the IP address and forwards the packet toward its destination. When the packets arrive, the transport layer reassembles them and delivers the complete message to the web server, which then responds in the same structured manner. This layered, organized approach is what allows the Internet to function reliably and at massive scale.

</div>

### IP Addressing

_IP addressing_ is one of the core functions of the Internet Protocol Suite because it allows every device on a network to be uniquely identified. Without IP addresses, routers would have no way of knowing where data packets should go. An IP address functions much like a home address: it tells the network exactly where to deliver information and where it came from. The most common version, IPv4, uses a 32-bit structure divided into four decimal numbers separated by dots, such as 192.168.1.4. Each number represents eight bits, and the full address identifies a single device within a network. Due to the rapid growth of the Internet, IPv6 was introduced. It uses 128 bits and is written in hexadecimal form, allowing an enormous number of unique addresses for future devices. Both versions follow the same principle: every connected device must have a unique identifier so that communication can occur reliably.

| **Feature** | **IPv4** | **IPv6** |
| --- | --- | --- |
| **Address Size** | 32 bits | 128 bits |
| --- | --- | --- |
| **Format** | Decimal numbers with dots (e.g., 192.168.1.1) | Hexadecimal numbers with colons (e.g., 2001:db8::1) |
| --- | --- | --- |
| **Number of Addresses** | ~4.3 billion | Almost unlimited |
| --- | --- | --- |
| **Reason for Replacement** | Running out of addresses | Provides enough addresses for all future devices |
| --- | --- | --- |

In IPv4, addresses are also grouped into classes that originally helped organizations allocate large or small ranges of addresses. Class A networks were intended for very large organizations, Class B for medium-sized institutions, and Class C for smaller networks such as offices or local businesses. Although modern systems mostly use CIDR (Classless Inter-Domain Routing) instead of strict classes, understanding the classes still helps beginners distinguish how IPv4 address ranges were originally designed.

<div class="frame" markdown="1">

**_Example._** When you open _<www.ada.edu.az>_ in your browser, your computer first needs to know the server's IP address. After DNS returns the address, your device creates a data packet that includes your own IP address as the source and the website's IP address as the destination. Every router along the Internet path reads the destination IP and forwards the packet closer to the ADA University server. When the server receives it, it uses the source IP to send the webpage back to your device. This process works only because each device in the chain has a unique IP address, allowing routers to move packets accurately from point to point.
</div>

### DNS (Domain Name System)

The _Domain Name System (DNS)_ is a global directory service that translates human-readable website names (like [_www.ada.edu.az_](http://www.ada.edu.az)) into numerical IP addresses that computers use to identify servers on the Internet. Without DNS, users would have to memorize long strings of numbers instead of simple domain names. It works automatically in the background, making it possible for browsers to locate and connect to the correct server whenever a user types a website name.

DNS has a hierarchical structure made of several levels that help organize domain names from the highest level down to specific services.

- **Root Domain:** The highest level of the DNS hierarchy, represented by a single dot (.) which is usually hidden.
- **Top-Level Domains (TLD):** These are the endings of websites such as .com, .az, .edu, .org.
- **Second-Level Domains:** The main name chosen by the organization or owner, such as ada.az.
- **Subdomains**: Sections under the main domain used for specific services or departments, such as admissions.ada.edu.az or library.ada.edu.az.
<div class="frame" markdown="1">

**_Example._** Imagine you want to visit **<www.ada.edu.az>**. Your computer does not know the IP address of this website, so it cannot contact the server directly. Instead, it asks DNS to look it up.

1) You type: _<www.ada.edu.az>_

2) Your computer asks a DNS server: _"What is the IP address for this website?"_

3) DNS checks its records or asks other DNS servers if needed.

4) DNS replies with an IP address, for example: _104.21.45.120_

5) Your browser uses this IP to contact the ADA University server and load the webpage.

So, DNS allows you to use easy names like _<www.ada.edu.az>_ instead of memorizing long IP numbers. It works automatically in the background every time you visit any website.
</div>

### World Wide Web

The [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web) is a global information system that allows users to access and interact with digital content through web browsers. It consists of millions of interconnected web pages stored on web servers and accessible through the Internet. Unlike the Internet, which is the physical network of computers and cables, the Web is a _service_ that uses that network to deliver information. Web pages are linked using hyperlinks, which allow users to jump from one page to another, creating a web-like structure of information. Each web page is written using HTML and can include text, images, videos, animations, or interactive elements. Browsers such as Chrome, Firefox, and Safari request pages from servers and render them into a visual format the user can understand.

<div class="frame" markdown="1">

**_Example._** Imagine you want to check your course grades on the ADA University website. You open your browser and type **_<www.ada.edu.az>._** Your browser contacts the ADA web server and requests the HTML file that contains the homepage. The server sends back this page along with images, styles, and scripts. Your browser then renders the information into a visually formatted website. All of this interaction, requesting pages, receiving files, navigating through hyperlinks, is what makes up the World Wide Web.

</div>

**Hypertext Transfer Protocol (HTTP)** is the foundational communication protocol used by the Web. It defines how web browsers send requests and how web servers respond. When you visit a website, your browser sends an HTTP request asking the server for specific resources such as HTML pages, images, or scripts. The server then sends an HTTP response containing the requested content, along with a status code (like 200 OK or 404 Not Found) that explains whether the request was successful.

Modern websites usually use **HTTPS** instead of HTTP. HTTPS adds an encryption layer through TLS (Transport Layer Security), which protects the data being sent between the browser and the server. This prevents attackers from reading or modifying information, making HTTPS essential for activities like logging into accounts, entering credit card information, or sending personal data.
<div class="frame" markdown="1">

**_Example._** Suppose you log into your ADA student account. When you type your username and password and click "Sign In," your browser sends an HTTPS request to the ADA authentication server. The server processes your credentials and sends back an HTTPS response that either grants access or shows an error. Because the connection uses HTTPS, your login information is encrypted, preventing anyone on the network, such as someone on the same Wi-Fi, from reading your password. Without HTTPS, the login request could be intercepted and viewed in plain text.

</div>

**A Uniform Resource Locator (URL)** is the full address that identifies exactly where a resource is located on the Web. It tells the browser _how_ to access the resource (the protocol), _where_ to find it (the domain name), and _which specific file or page_ to retrieve (the path).

A typical URL looks like this:

[_https://www.example.com/news/article?id=53_](https://www.example.com/news/article?id=53)

This can be broken down into clear parts:

- **https** - the protocol indicating secure communication
- [**www.example.com**](http://www.example.com) - the domain name of the server
- **/news/article** - the path to the specific folder and file on the website
- **?id=53** - a query parameter used to request a specific item or version of a page

URLs allow browsers to locate content accurately even on complex websites with many sections and pages.

### Markup Languages

Markup languages are systems for annotating text so that computers can understand how the information should be structured, displayed, or processed. They do not describe the _meaning_ of the content but rather its _organization_ or _formatting_. The most widely used markup language is **HTML (HyperText Markup Language)**, which forms the structure of web pages on the World Wide Web. HTML uses tags such as &lt;h1&gt;, &lt;p&gt;, and &lt;img&gt; to define headings, paragraphs, and images. Browsers read these tags and convert them into the visual layouts that users see.

Another important markup language is **XML (Extensible Markup Language)**. Unlike HTML, XML is not about displaying information but about storing and transporting data in a structured, readable way. XML allows users to create custom tags that describe data, such as &lt;student&gt; or &lt;course&gt;, making it useful for data exchange between systems, configuration files, and web services.

Modern web applications often use **JSON (JavaScript Object Notation)** alongside or instead of XML. JSON is a lightweight data format structured as key-value pairs, making it easy for computers to parse and for humans to read. It is widely used in APIs, web applications, and cloud services because it is simpler and faster than XML.
<div class="frame" markdown="1">

**_Example._** A university website uses **HTML** to structure all its pages. For instance, the homepage might use &lt;h1&gt;Welcome to ADA University&lt;/h1&gt; for the main title, &lt;p&gt; for text paragraphs, and &lt;img&gt; tags to insert images. Everything the browser displays visually is built from HTML tags.
</div>

At the same time, the website's backend might use **JSON** to exchange data with the server. For example, when a student checks their grades, the system might send back data like:  
{"student":"Nihad","course":"SITE1101","grade":"A"}.  
This data is not meant to be shown directly to the user but allows applications to process and update information quickly.

A library database may store book information in **XML**, such as:

&lt;book&gt;

&lt;title&gt;Computer Networks&lt;/title&gt;

&lt;author&gt;Andrew Tanenbaum&lt;/author&gt;

&lt;year&gt;2020&lt;/year&gt;

&lt;/book&gt;

### Intranet and Extranet

An **intranet** is a private network used within an organization. It provides internal services such as employee portals, shared files, calendars, and communication tools. Because an intranet is restricted to internal users, it offers better security and control. Only employees or authorized personnel can access it, usually through login credentials or the company's internal Wi-Fi.

An **extranet** extends the intranet by allowing limited access to external users such as business partners, suppliers, contractors, or students. Organizations use extranets to collaborate with outsiders while still protecting sensitive internal information. Access to an extranet is controlled through accounts, permissions, or VPN connections.

| **Feature** | **Intranet** | **Extranet** |
| --- | --- | --- |
| **Access** | Only internal members of the organization | External partners + selected internal access |
| --- | --- | --- |
| **Purpose** | Internal communication, resources, tools | Collaboration with outside institutions or clients |
| --- | --- | --- |
| **Security Level** | Very high; restricted to insiders | High, but access is extended to authorized outsiders |
| --- | --- | --- |
| **Example** | ADA faculty internal portal | ADA sharing program info with partner universities |
| --- | --- | --- |

<div class="frame" markdown="1">

**_Example._** An intranet example is ADA University's internal faculty portal. Only staff members connected to the university network, or logged in through their staff accounts, can access class lists, grade submission platforms, internal announcements, and documents. Students or outside users cannot see these resources because the intranet is strictly internal and protected.

An extranet example is when ADA University allows partner universities or exchange coordinators to access certain restricted documents, such as course descriptions, program agreements, or mobility reports, through a secure login. These external users do not have full access to the internal intranet, but they can view specific information that the university chooses to share with them.
</div>

### Cloud Computing

Cloud computing is a model of delivering computing resources, such as storage, servers, networks, databases, and software, over the Internet instead of relying on local hardware. Instead of buying and maintaining physical equipment, users access shared resources from cloud providers on demand. This makes computing more flexible, scalable, and cost-efficient. Organizations can increase or decrease their computing power instantly, paying only for what they use, which is especially useful for businesses with changing workloads or seasonal demand.

Cloud services are often categorized into three main layers. **Infrastructure as a Service (IaaS)** provides virtual machines, storage, and networking. It is the closest to owning physical hardware but without the responsibility of maintaining it. Developers or IT teams use IaaS when they need control over operating systems and applications. **Platform as a Service (PaaS)** offers a complete environment for building and deploying applications. It hides server and system management so developers can focus solely on writing code. **Software as a Service (SaaS)** delivers ready-to-use applications that run entirely online. Users do not install anything; they simply log in through a browser.

Cloud computing can be deployed in three ways. A **public cloud** is owned and operated by providers like Amazon, Microsoft, or Google, and resources are shared across many customers. A **private cloud** is dedicated to a single organization and offers the highest security and customization. A **hybrid cloud** combines both models, allowing organizations to store sensitive data in a private cloud while using the public cloud for less critical tasks.
<div class="frame" markdown="1">

**_Example._** Imagine ADA University hosting its learning platform. Instead of buying physical servers, ADA could use **Amazon Web Services (AWS)**. The university might run its website on **IaaS**, using AWS virtual machines to host pages and store data. Developers working on ADA's student mobile app could use **PaaS**, such as Google App Engine, to build and test new features without setting up their own servers. Students and staff would use **SaaS** tools like Microsoft 365 or Google Workspace to access email, documents, and files. If ADA wants higher security for sensitive student information, it might store that data in a **private cloud** while using the **public cloud** for the main website. This combination is a real example of hybrid cloud computing.
</div>

# Additional Material

- [The Internet: Crash Course Computer Science #29](https://www.youtube.com/watch?v=AEaKrq3SpW8)
- [What is the Internet?](https://www.youtube.com/watch?v=Dxcc6ycZ73M)
- [Public vs Private IP Address](https://www.youtube.com/watch?v=po8ZFG0Xc4Q)
- [MAC Address Explained](https://www.youtube.com/watch?v=TIiQiw7fpsU)
- [VPN (Virtual Private Network) Explained](https://www.youtube.com/watch?v=R-JUOpCgTZc)
- [How a DNS Server (Domain Name System) works.](https://www.youtube.com/watch?v=mpQZVYPuDGU)
- [TCP vs UDP Comparison](https://www.youtube.com/watch?v=uwoD5YsGACg)
- [The World Wide Web: Crash Course Computer Science #30](https://www.youtube.com/watch?v=guvsH5OFizE)
- [What is the world wide web? - Twila Camp](https://www.youtube.com/watch?v=J8hzJxb0rpc)
- <http://www.rleonardi.com/interactive-resume/>
- <https://codepen.io/janschreiber/pen/xZbEvM>
- [How trees secretly talk to each other - BBC World Service](https://www.youtube.com/embed/DUqEB_tGHtw)
- [SSL, TLS, HTTP, HTTPS Explained](https://www.youtube.com/embed/hExRDVZHhig)
- [HTTP Crash Course & Exploration](https://www.youtube.com/embed/iYM2zFP3Zn0)
- [HTTP 1 Vs HTTP 2 Vs HTTP 3!](https://www.youtube.com/embed/UMwQjFzTQXw)
- [Network Ports Explained](https://www.youtube.com/embed/g2fT-g9PX9o)
- [DHCP Explained - Dynamic Host Configuration Protocol](https://www.youtube.com/embed/e6-TaH5bkjo)
- [Cloud Computing Explained](https://www.youtube.com/embed/_a6us8kaq0g)
- [How to Setup VS Code for Web Development (2025) | HTML, CSS, JavaScript + Live Server](https://www.youtube.com/embed/xkMfMJn5Smg)
- [HTML Tutorial for Beginners: HTML Crash Course](https://www.youtube.com/embed/qz0aGYrrlhU)

{% include lecture-footer.html %}
