---
layout: page
title: Week 08 — Telecommunications & Computer Network
order: 5
---
{% include lecture-styles.html %}

**Authors:** Rahida Asadli, Nilufar Ismayilova, Rahman Karimov, Ismayil Shahaliyev

**Created / Updated:** Nov 23 2025 **/** Dec 2 2025
{% include reading-time.html %}

<button id="toc-toggle">☰ Sections</button>

<div id="toc-panel">
  <h4>On this page</h4>
  <ul>
    <li><a href="#the-internet">The Internet</a></li>
    <li><a href="#the-osi-model-open-systems-interconnection">The OSI Model (Open Systems Interconnection)</a></li>
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

### Telecommunications

[Telecommunications](https://en.wikipedia.org/wiki/Telecommunications) at its core, is the long-distance transmission of information using **electronic or electromagnetic signals**. Whenever two devices exchange information - whether it is _a voice call, a text message, a video stream, or a bank transaction_ - some form of telecommunications is functio  ning in the background. What makes telecommunications essential is that it allows communication to happen without the sender and receiver being physically close. A phone call from one country to another, a university campus connecting its buildings, or a satellite sending weather data to Earth are all examples of telecommunications enabling interaction across space.

### The General Model of a Telecommunication System

Every telecommunication system, no matter how small or massive, follows a simple logical structure that consists of a sender, a transmission medium (also called the channel), and a receiver. The _sender_ is the device or system where information originates. For instance, when you type a message on your smartphone, your phone behaves as the sender by converting the text you entered into a format that can be transmitted, usually a digital signal.

Once the message is prepared, it moves into the channel. The **channel** is simply the path through which the signal travels. This path can be a physical **wire** - such as a copper cable or a **fiber-optic cable** - or it can be invisible electromagnetic waves, like those used in Wi-Fi or mobile networks. Each channel has its own properties: some channels carry signals extremely fast but cost more to install, while others are cheaper but slower or more sensitive to interference.

At the _receiving_ end, another device accepts the signal and converts it back into a form the user can understand. For example, when your friend receives your message, their phone turns the incoming digital signal into readable text. For communication to work smoothly, both the sender and receiver must follow common rules, known as protocols, which define how devices talk to each other and how messages are formatted, transmitted, and interpreted. Without protocols, different devices would be unable to understand each other.

### Classifications of Communication

Telecommunications can be classified by direction, timing, and distance.

When we classify communication systems based on the direction in which data travels, we focus on how information moves between the sender and the receiver. In everyday technology, data does not always travel in the same manner: sometimes it flows only in one direction, sometimes it switches direction depending on who is transmitting, and sometimes it moves simultaneously in both directions. Understanding these differences is important because each method influences how devices behave, how fast interaction feels, and what types of applications they can support. A messaging app, a walkie-talkie, a television broadcast, and a phone call all involve the transmission of information, but they operate very differently because the flow of data is different in each case. There are three main categories: **simplex**, **half-duplex**, and **full-duplex** communication. Each one is explained below in depth with real-world examples that make the idea clear.

### Simplex Communication

Simplex communication is the most basic and restrictive form of directional communication. In a simplex system, data travels in **only one direction**. The sender transmits information, and the receiver only accepts it. The receiver cannot respond over the same channel. There is no possibility of two-way interaction because the communication line is strictly one-way. This design is suitable for situations where conveying information is more important than receiving feedback, and where the user or device on the receiving end does not need to communicate back.
<div class="frame" markdown="1">

**_Example._** A classic example of simplex communication is a traditional television broadcast. When a TV station sends a signal, millions of televisions receive it, but none of the viewers' TVs send anything back to the station. The communication is entirely one-directional: the station is the sender, and your TV is the receiver. Another example is digital signage, such as electronic billboards at airports or shopping malls. These screens continuously display information - flight schedules, advertisements, emergency instructions - but the screens themselves do not send any information back to the control center. Even older classroom equipment like overhead projectors follow the simplex model: the teacher projects content, and the device itself receives no input or signals from the students. All these examples illustrate that simplex systems are ideal when interaction is unnecessary and where broadcasting or distribution of information is the primary purpose.
</div>

### Half-Duplex Communication

Half-duplex communication allows data to move in **both directions**, but not at the same time. This means that a device can either send or receive information at a given moment, but it cannot do both simultaneously. Once one side finishes sending data, the other side can begin to send its response. This alternating pattern resembles a conversation where only one person speaks at a time. Although slower than full-duplex communication, half-duplex is often used when full-duplex is unnecessary or when the technology aims to reduce complexity and cost.
<div class="frame" markdown="1">

**_Example._** The most familiar example of half-duplex communication is a walkie-talkie. When one person presses the "push-to-talk" button, their device becomes the sender while the other person's device becomes the receiver. During that time, the receiver cannot speak back because the channel is occupied. Only after the first person releases the button can the second person press theirs and send a reply. This creates a turn-taking conversation. Half-duplex systems also appear in older Ethernet networks, where computers shared a cable and took turns sending data to avoid collisions. Taxi dispatch radios, security radios, and many emergency communication devices are half-duplex as well. These systems prioritize reliability and simplicity over simultaneous interaction. They are effective in scenarios where communication does not need to be continuous in both directions.
</div>

### Full-Duplex Communication

Full-duplex communication is the most advanced form of directional communication. In a full-duplex system, data flows in **both directions at the same time**. This means the sender and receiver can transmit and receive simultaneously without interfering with each other. Such systems require more complex design because they must prevent the signals from colliding or mixing, but they create the most natural and efficient user experience. Full-duplex is essential in modern communication technologies where instant, continuous interaction is necessary.
<div class="frame" markdown="1">

**_Example._** A perfect example of full-duplex communication is a regular telephone call. When you speak into the phone, your voice travels to the other person, and at the same time, their voice travels to you. You do not need to wait for them to finish speaking before replying, and they do not have to pause while you speak. Conversation flows naturally because both channels are open continuously. The same full-duplex principle applies to mobile networks, online voice calls, video conferencing, and modern wired or wireless Internet links. For example, during a Zoom or Teams meeting, your microphone is sending audio while the speakers are receiving the other person's audio at the same time. Similarly, when browsing the web, your device sends requests to a server while simultaneously receiving responses. Full-duplex enables fast, smooth, and uninterrupted communication for both real-time and non-real-time applications.
</div>

Communication systems can also be classified based on the **time relationship** between the sender and the receiver. Timing determines whether both parties must be active at the same moment, and it influences how quickly information travels and how interactive the communication feels. When timing is strict and aligned, communication becomes immediate and real-time. When timing is flexible, systems allow delays and do not require participants to respond instantly. This distinction shapes the design of many modern technologies, from video calls to email platforms. The two major timing types are **synchronous communication** and **asynchronous communication**, each operating with different logical principles and serving different needs.

### Synchronous Communication

Synchronous communication requires the sender and receiver to participate at the **same time**. Both sides must be active and connected simultaneously, because the exchange of information happens instantly. This creates real-time interaction, similar to an in-person conversation where both people talk and listen in the moment. Synchronous systems depend on fast, stable links because even small delays can disrupt the natural flow of communication. This type of communication is essential in situations where information loses value if not delivered immediately or where instant feedback is important.
<div class="frame" markdown="1">

**_Example._** A clear example of synchronous communication is a live video call on Zoom or Microsoft Teams. When you speak, the other person hears you almost instantly, and their facial expressions or responses appear immediately. If either participant disconnects or if the network becomes unstable, the communication breaks down because the system depends on both sides being present at once. Another everyday example is a voice call on a phone. Both people are active during the call, responding instantly to each other's words. Online gaming also uses synchronous communication, where players' actions must reach the server and each other without delay. In all these cases, timing is essential because the communication cannot proceed unless both sides are there at the same moment.
</div>

### Asynchronous Communication

Asynchronous communication does **not** require the sender and receiver to be active at the same moment. The sender is free to transmit information whenever convenient, and the receiver can access it later. There is no expectation of immediate interaction. Because time is flexible, asynchronous systems allow delays, and information is typically stored somewhere until the receiver retrieves it. This flexibility makes asynchronous communication ideal for tasks that do not need instant responses or for people who are in different time zones or have different schedules.
<div class="frame" markdown="1">

**_Example._** Email is the most common and relatable example of asynchronous communication. You can compose an email at midnight, and the recipient can read it the following afternoon. The system does not require both people to be online simultaneously. Another example is messaging platforms where replies can come minutes or hours later, such as WhatsApp messages received after someone turns on their phone. Discussion forums, online learning platforms, and cloud file-sharing systems also rely heavily on asynchronous communication because users can upload or respond to content at any time. Even a YouTube video is asynchronous: the creator uploads it once, but viewers may watch it days, months, or years later. In all these situations, timing does not control the interaction - the system is designed to function without real-time presence.
</div>

Another important way to understand communication systems is by the **physical range** they cover. Distance determines how far signals must travel and what types of technologies or transmission media are required. A small-scale personal network inside a room operates very differently from massive global networks that span oceans and continents. As the distance grows, the complexity, infrastructure, cost, and technologies involved grow as well. Communication by distance is commonly described using **PAN**, **LAN**, **MAN**, and **WAN**, each covering progressively larger areas and serving different purposes.

### Personal Area Network (PAN)

A Personal Area Network covers only a very small area, usually within a few meters around a single person. PANs connect personal devices such as smartphones, smartwatches, earbuds, fitness trackers, and laptops. The purpose of a PAN is to allow an individual user's devices to communicate with each other seamlessly and wirelessly..

### Local Area Network (LAN)

A Local Area Network covers a limited geographic area such as a home, office, school building, or university campus. LANs are designed to connect multiple devices so they can share resources like printers, databases, internet access, and internal applications. LANs usually rely on Ethernet cables, Wi-Fi access points, switches, and routers to ensure reliable communication among devices within the same location.

**_Example._** A typical example of a LAN is the network inside your home. Your router distributes internet access to your phone, laptop, smart TV, and gaming console. All these devices are part of the same LAN, which allows them to communicate with each other efficiently. Another example is an office network where dozens of computers connect to a central server, shared printers, and company databases. University labs, libraries, and academic buildings also rely on LANs to allow students and staff to access educational resources. LANs are known for high speed, low cost, and strong control since everything is located in a confined area.

### Metropolitan Area Network (MAN)

A Metropolitan Area Network spans a larger area than a LAN, typically a city or a large campus consisting of multiple buildings. MANs are used when organizations need to connect several LANs together across a broader space while maintaining high-speed communication.

### Wide Area Network (WAN)

A Wide Area Network covers extremely large geographic areas, such as multiple cities, countries, or even entire continents. WANs are designed to support long-distance communication across thousands of kilometers. Because of the enormous distances involved, WANs use advanced technologies such as satellite links, undersea fiber-optic cables, high-speed backbone networks, and powerful routers capable of long-distance routing.
<div class="frame" markdown="1">

**_Example._** The most significant example of a WAN is the Internet itself, which links billions of devices across the planet. When someone in Azerbaijan visits a website hosted in the United States, the data travels through a WAN that spans multiple networks, undersea cables, and data centers. International banking networks are also WANs because they allow ATMs and bank branches around the world to access the same financial systems. Global shipping companies, airlines, and multinational corporations rely on WANs to connect their offices across continents. No matter the scale, a WAN always involves long-distance communication that joins many smaller networks into one vast global system.

</div>

### Telecommunication Channels and Media

Before comparing the three major cable types from [wired transmission media](https://www.geeksforgeeks.org/computer-science-fundamentals/wired-communication-media/), it is important to understand the technical terms used to describe their characteristics. These terms appear frequently in networking and telecommunications, and knowing them makes it easier to see why each cable behaves differently.

**Attenuation** refers to the weakening or loss of a signal as it travels through a transmission medium. All signals gradually lose strength the farther they move, but the amount of loss depends on the cable type. Electrical signals traveling through copper wires, for example, lose strength much more quickly than light signals traveling through fiber-optic cables. If attenuation becomes too high, the receiver may get a distorted or unreadable signal, which is why long cables often require repeaters or amplifiers.

**EMI (Electromagnetic Interference)** describes the effect that external electrical or magnetic sources have on a cable's signal. Nearby power lines, motors, electronic devices, and even fluorescent lights create electromagnetic fields that can disturb data transmission. Copper-based cables are especially vulnerable to EMI because they carry electrical signals. Fiber-optic cables, on the other hand, use light instead of electricity and therefore cannot be influenced by electromagnetic fields at all.

**Bandwidth** is the **maximum amount of data** that a communication medium or network can carry per second. It is similar to the width of a water pipe: the wider the pipe, the more water can flow through it at once. In the same way, a cable or wireless link with higher bandwidth can carry more bits of data every second. Bandwidth is usually measured in **Mbps** (megabits per second), **Gbps** (gigabits per second), or even **Tbps** for very advanced systems.
<div class="frame" markdown="1">

**_Example._** A simple example makes this clearer. Imagine two Internet connections: one with _10 Mbps_ and another with _100 Mbp_s. If you try to download a 100 MB video file, the 100 Mbps connection can transfer far more data per second, so the file will download much faster. The 10 Mbps connection might download the video in about a minute, while the 100 Mbps connection could finish the same file in just a few seconds. The difference arises because one connection has a much larger "data pipe" than the other. In cables, the same logic applies. A twisted-pair cable with a bandwidth of 100 Mbps per 100 meters can only carry a moderate amount of information at once. A coaxial cable can support around 500 Mbps, so it can transfer several times more data in the same timeframe. Fiber-optic cable can carry gigabits of data every second, meaning it has an extremely wide "data highway" that can support huge amounts of information without slowing down.

Another everyday way to understand bandwidth is by imagining a highway. A road with one lane can let only a few cars pass per minute, while a road with six lanes can handle many more cars at the same time. The number of lanes corresponds to bandwidth. A cable with low bandwidth is like a narrow road that becomes crowded easily, while fiber-optic cable is like a giant, multi-lane expressway that stays smooth even during heavy usage.

So, bandwidth is not about how _fast_ each bit moves - because all electrical or light signals always travel extremely fast - but about how much data can move at the same time.
</div>
**Throughput** is the **actual amount of data** that successfully travels through the network per second. While bandwidth is the theoretical maximum capacity, throughput represents what you really experience in real conditions. Many factors can reduce throughput, such as interference, cable quality, distance, network congestion or equipment limitations.

_Network congestion_ happens when more data is trying to pass through the network than the network can handle at that moment. Because the "data highway" is full, everything slows down.
<div class="frame" markdown="1">

**_Example._**Suppose your Wi-Fi connection has a bandwidth of 300 Mbps, but your laptop receives only 80 Mbps during real usage. This difference comes from obstacles like walls, other Wi-Fi networks nearby, or older hardware. Although the network **could** support 300 Mbps in ideal conditions, the **throughput** is only 80 Mbps because that is the actual rate at which data is being delivered. Throughput is always equal to or lower than bandwidth. It can never be higher because you cannot exceed the maximum capacity of the medium. When people complain that their "Internet is slow," they are not complaining about bandwidth itself - they are complaining about reduced throughput caused by delays, interference, or congestion.

</div>

**Signal type** indicates the physical form of the transmitted data. Twisted-pair and coaxial cables both carry electrical signals, meaning electrons move through a copper conductor. Fiber-optic cables carry light signals, where small, rapid flashes of light encode the data. The physical difference between electrons and light explains why fiber performs better in speed, distance, and reliability.

| Properties | Twisted pair | Co-axial cable | Fiber optic cable |
| --- | --- | --- | --- |
| Cost | Cheap | x2 or x3 more than Twisted pair | Expensive |
| --- | --- | --- | --- |
| Installation | Easy | Easy | Difficult |
| --- | --- | --- | --- |
| Attenuation | More | More | Very less |
| --- | --- | --- | --- |
| Signal type | Electrical | Electrical | Light signals |
| --- | --- | --- | --- |
| Bandwith | 1 to 100 Mbps/100m | 500 Mbps/100m | Gega bps/km |
| --- | --- | --- | --- |
| EMI effect | Maximum | Minimum | No effect |
| --- | --- | --- | --- |

### Understanding Computer Networks

**A computer network** is a collection of devices connected so they can exchange data. Devices communicate by sending small units of information across cables or wireless signals. To make this possible, each device must use specific hardware and addressing methods. The following terms describe the key building blocks of any network.

**A Network Interface Card (NIC)** is the hardware inside a computer or device that allows it to connect to a network. It creates, sends, and receives the signals used for communication. Every NIC has a built-in identifier used by switches, called a MAC address.

**A MAC address** is a permanent, unique address assigned to every NIC by the manufacturer. It identifies the device at the hardware level inside a local network. It never changes and is used by switches to deliver data to the correct device.

**An IP address** is a logical address assigned to a device so it can communicate across different networks. Unlike the MAC address, an IP address can change depending on the network you connect to. Routers use IP addresses to determine the correct path for data across wider networks such as the internet.

**A hub** is a simple device that connects multiple computers but does not analyze or direct data intelligently. When it receives data from one device, it copies that data to all connected devices. Hubs do not read addresses, which creates unnecessary traffic and makes them inefficient.

**A switch** is a more advanced version of a hub. It learns the MAC addresses of connected devices and forwards data only to the specific device that should receive it. This reduces traffic and increases network performance. Switches operate inside a local network.

**A router** connects different networks together. It reads IP addresses in the data and chooses the best route for packets to reach their destination. A home router connects your local network (your devices) to your internet service provider and then to the wider internet.

**A packet** is a small unit of data that travels across a network. Instead of sending large data all at once, networks break information into packets. Each packet contains the data being sent plus addressing information, which allows it to reach the correct destination even if packets travel different paths.

**Bandwidth** is the maximum amount of data a connection or cable can carry per second.

**Throughput** is the actual amount of data that successfully moves through the network per second.

**Latency** is the time it takes for a piece of data to travel from one point to another. Even if the bandwidth is high, high latency can make communication feel slow. Local networks have low latency; long-distance communication may have higher latency.

**A frame** is the unit of data used inside a local network when switches forward information. Frames carry MAC addresses. When data leaves the local network and moves through routers, it becomes packets that carry IP addresses.

**A port** in networking is a logical endpoint used by applications to separate different types of communication. For example, web traffic uses port 80 or 443. Ports allow multiple services to run on the same device without mixing their data.
<div class="frame" markdown="1">

**_Task 1_**

_To see your IP and MAC address_

on Windows:

Type this in Command Prompt: ipconfig /all

on macOS:  
Type this in Terminal: ifconfig

on Linux:  
Type this in Terminal: ip a
</div>

<div class="frame" markdown="1">

**_Task 2_**

To check your **bandwidth** (your maximum Internet speed):

Open any browser and go to [speedtest.net](http://speedtest.net) and click Go - the download and upload numbers shown represent your bandwidth.

To check your real **throughput** (actual data speed while transferring files):

Start a file download or upload and watch the speed shown in your browser or app - that live value represents your throughput.
</div>

### Processing Alternatives: Centralized, Decentralized, and Distributed

In centralized processing, **all major processing happens in one main computer or server**, and all other devices act like terminals that only send input and receive output. The central machine controls storage, computation, and decision-making. This design gives strong control and easy management but becomes slow if many users depend on the same machine, and the entire system stops if the central machine fails.
<div class="frame" markdown="1">

**_Example._** A bank using an old mainframe computer where every branch terminal sends transactions to one central server. The server performs all calculations, updates accounts, and returns results to the branch terminals.
</div>

In decentralized processing, **each computer works independently** and performs its own processing. There is no central machine controlling everything. Each department or location manages its own data and tasks. This reduces dependence on a single computer but makes coordination harder because information is spread across many machines.
<div class="frame" markdown="1">

**_Example._** An office in the early 2000s where every employee had a standalone computer with its own software and files. Each computer handled its own tasks, and there was no shared server.
</div>

In distributed processing, **multiple computers share tasks by working together over a network**. Each machine performs part of the work, and the results are combined. This increases speed, improves reliability, and allows very large tasks to be handled efficiently. If one computer fails, others continue processing.
<div class="frame" markdown="1">

**_Example._** Google search uses thousands of servers. When a user enters a query, many servers process different parts of the task, and the system combines the results to deliver the final answer in milliseconds.
</div>

### Network Topologies

In a _bus topology_, **all devices are connected to a single main cable**, often called the backbone. Every device sends data onto this shared cable, and all other devices listen, but only the intended device processes the data. Because all communication uses the same line, too many devices can cause collisions and slow performance. If the main cable fails, the entire network stops functioning.
<div class="frame" markdown="1">

**_Example._**  Early office networks used a single coaxial cable running along the floor or ceiling, and all computers tapped into it. If someone accidentally damaged that cable, no computer could communicate.
</div>

<p align="center">
  <img src="{{ '/assets/images/lecture08/3.png' | relative_url }}" alt="">
</p>

_Figure 1._  A conceptual diagram of a [local area network](https://en.wikipedia.org/wiki/Local_area_network) using bus topology _Adapted from Network Topologies, Wikipedia, Wikimedia Commons,_ [_https://en.wikipedia.org/wiki/Bus_network._](https://en.wikipedia.org/wiki/Network_topology) _Licensed under_ [_CC BY 2.5_](https://creativecommons.org/licenses/by/2.5)

In a _star topology_, **all devices connect to a central device**, typically a switch or hub. Each device has its own cable to the central point. The central device controls all data flow and decides where data should go. If one cable fails, only that one device is affected; the rest of the network continues working. However, if the central switch fails, the entire network stops.
<div class="frame" markdown="1">

**_Example._**  Modern home and office networks use star topology. Every computer, printer, or access point connects individually to a central switch or router.
</div>

<p align="center">
  <img src="{{ '/assets/images/lecture08/2.png' | relative_url }}" alt="">
</p>

_Figure 2. Star topology in use in a network_ _Adapted from Network Topologies, Wikipedia, Wikimedia Commons,_ [_https://en.wikipedia.org/wiki/Star_networ_](https://en.wikipedia.org/wiki/Network_topology)_k.Licensed under By Umapathy - Own work, CC BY-SA 3.0,_

In a _ring topology_, **each device connects to exactly two others**, forming a closed loop. Data travels around the ring in one direction (or sometimes both directions), passing through each device until it reaches the destination. If one connection breaks, the entire loop can be disrupted, unless the network is designed with automatic rerouting.

<div class="frame" markdown="1">

**_Example._**   Some older metro-area networks and early campus networks connected buildings in a circular loop. Data traveled from one building to the next until it reached the correct location.
</div>

In a _mesh topology_, **every device connects directly to several other devices**. There are multiple paths for data to travel. If one link fails, the network automatically uses another path. This provides very high reliability and performance but requires more cables and is more expensive to build.

<div class="frame" markdown="1">

**_Example._**    Internet backbone providers use mesh topology. Major routers in different cities and countries connect through multiple redundant links so that if one line fails, global communication continues without interruption.
</div>

In a _line topology_, devices are connected one after another in a straight chain. Each device has a direct link to the next device, forming a simple path for data to follow. Information moves along this path from one device to the next until it reaches its destination. Because the devices depend on each other to pass data forward, a failure in any device or cable segment breaks communication for all devices that come after it in the chain. This structure is easy to build and extend, but it becomes unreliable as the number of devices grows.

In a _tree topology_, devices are arranged in a branching structure similar to a family tree. A central root node connects to several intermediate nodes, and each of those nodes connects to additional devices or sub-branches. Data travels from one level to the next, moving up or down through the hierarchy until it reaches the correct device. This structure is flexible and scalable because entire branches can be added without disturbing the rest of the network. However, if a high-level node or backbone link fails, all devices connected under that branch lose communication, making the upper levels critical points in the network.


<p align="center">
  <img src="{{ '/assets/images/lecture08/1.png' | relative_url }}" alt="">
</p>

_Figure 3. Diagram of different network topologies_ _Adapted from Network Topologies, Wikipedia, Wikimedia Commons,_ [_https://en.wikipedia.org/wiki/network_topologies._](https://en.wikipedia.org/wiki/Network_topology) _Licensed under_ [_CC BY 2.5_](https://creativecommons.org/licenses/by/2.5)

| **Topology** | **Advantages** | **Disadvantages** |
| --- | --- | --- |
| **Bus** | Simple to set up; requires less cable; cheap for small networks. | Entire network stops if the main cable fails; performance drops with more devices; difficult to troubleshoot. |
| --- | --- | --- |
| **Star** | Easy to manage; failure of one device does not affect others; easy to add or remove devices; high performance. | If the central switch/hub fails, the whole network fails; requires more cable than bus or ring. |
| --- | --- | --- |
| **Ring** | Data flows in an organized, predictable sequence; no collisions; equal access for all devices. | Failure of one device or link can break the entire loop; harder to reconfigure or add new devices. |
| --- | --- | --- |
| **Mesh** | Very reliable because multiple paths exist; excellent fault tolerance; strong performance even with heavy traffic. | Expensive due to many cables; complex installation and maintenance. |
| --- | --- | --- |
| **Line (Point-to-Point Chain)** | Simple linear structure; easy to extend by adding devices at the ends. | If any middle device fails, communication beyond that point stops; limited scalability. |
| --- | --- | --- |
| **Tree (Hierarchical)** | Easy to expand; central control possible; commonly used for large networks like campuses. | Failure in the central backbone affects entire branches; more cable required; harder to configure than simple star. |
| --- | --- | --- |

### Additional Material

- [**Explain various network types and compare most common network topologies**](https://adauniversity-my.sharepoint.com/:v:/g/personal/ayusubov_ada_edu_az/EQFInc7brcFImyF9BgIEMgwB0ys-xsb-oWHr8cOY2Z29qQ?e=rslrxW)
- [**YouTubeComputer Networks: Crash Course Computer Science #28**](https://www.youtube.com/watch?v=3QhU9jd03a0)
- [**YouTubeHub, Switch, & Router Explained - What's the difference?**](https://www.youtube.com/watch?v=1z0ULvg_pW8)
- [**YouTubeNetwork Layers Model (Networking Basics) - Computerphile**](https://www.youtube.com/watch?v=eelvWAURfdI)
- [**YouTubeNetwork Topologies (Star, Bus, Ring, Mesh, Ad hoc, Infrastructure, & Wireless Mesh Topology)**](https://www.youtube.com/watch?v=zbqrNg4C98U)
- [**YouTubeWhat is Ethernet?**](https://www.youtube.com/watch?v=HLziLmaYsO0&t=342s)

{% include lecture-footer.html %}
