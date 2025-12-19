---
layout: page
title: Week 11 — Data Management / Data Modeling and Database Characteristic
order: 7
---
{% include lecture-styles.html %}


**Authors:** Rahida Asadli, Nilufar Ismayilova, Rahman Karimov, Ismayil Shahaliyev

**Created / Updated:** Dec 1 2025 **/** Dec 8 2025

{% include reading-time.html %}


### Database Approach and Its Advantages Over the Traditional File-Based Approach

Before databases, many systems stored information in simple **text files**. For example, imagine a file called students.txt with lines like:

1201, Ali, IS, 3.5

1202, Leyla, CS, 3.9

Each line is one student. To **use** this information in a program, the programmer has to **open the file, read each line, and split it into pieces** (ID, name, major, GPA). That "splitting into pieces" is what we call **parsing**: taking one long string like  
"1201, Ali, IS, 3.5" and turning it into separate values: 1201, Ali, IS, 3.5.

If the university also has courses, grades, payments, dorms, and so on, there may be many different text files: students.txt, courses.txt, grades.txt, etc. Every application (mobile app, website, internal admin tool) must know **how each file is structured** and must write its own code to read, search, and update those files.

This creates several problems:

- If a value changes (for example, a department name), it may appear in many files. Someone has to open every file and change it everywhere. It is very easy to miss one place and end up with **inconsistent data**.  

- To find something, the program usually has to read the **whole file line by line**, which becomes slow as the file grows.  

- If two users or two programs try to edit the same file at the same time, the file can become **corrupted**, because there is nothing to coordinate their changes.  

- If the computer crashes in the middle of writing to a file, part of the data might be lost or left in a **broken** state.  

To solve these problems, we use the **database approach**.

A **database** is an organized collection of data, and a **Database Management System (DBMS)** is the **software** that manages this data for us. You can think of the DBMS as a very smart program whose only job is to store, protect, and provide access to data in a safe and efficient way.

Instead of many separate text files, the DBMS stores data in **tables** with rows and columns. You describe to the DBMS **what kind of data** you want to store (for example: a table Students with columns StudentID, Name, Major, GPA), and then the DBMS takes care of:

- **Storing** the data on disk in an efficient way.  

- **Checking rules**, such as "every student must have a unique ID".  

- **Allowing many users/programs** to read and update the data at the same time without corrupting it.  

- **Recovering** from crashes so your data is not lost.  

The big advantage is that applications no longer need to worry about reading raw files or parsing lines manually. They simply **ask the DBMS**:  
"Give me all students from the IS major with GPA above 3.5",  
and the DBMS finds and returns the result.

Because the DBMS hides all the low-level details of how data is stored on disk, we can change the physical storage (for example, move to a faster disk, change indexes) without changing the applications that use the data. Applications only see the **logical structure**-tables and columns-while the DBMS handles the rest.

So, in short:

- The **traditional file-based approach** = many text files + lots of custom code + high risk of inconsistency and corruption.  

- The **database approach** = one central DBMS (just software) that stores data in tables, enforces rules, supports many users, and provides a simple and safe way to work with data.

## Data Models and Identifying Entities

A database is never built "in the abstract". It always models something that exists in the real world: a sales process, a registration process, a booking system, a library, a hospital, a social network. These are business processes that generate and use information every day. When we say "the database models the real world", we mean that every important object and every important interaction in those processes should be representable as data in the database.

For example, in a sales process you might have Customers, Products, Orders, and Payments. In a university registration process you might have Students, Courses, Instructors, and Enrollments. Each of these becomes an **entity type** in the data model. The first step of data modeling is therefore to read the problem description and identify which "things" we need to store information about. These things will later become tables.

Once the entities are identified, we decide their attributes (what we want to store about each entity) and the relationships between them. The **data model** is the collection of all these tables, their attributes, and their relationships. It tells us where and how the data is going to "rest" inside the system. But it is more than just storage: the data model also serves as a validation model for the business logic. If the business rule says "a student cannot enroll in the same course twice in the same semester", that rule should be reflected in the structure of tables, keys, and constraints. In that sense, the data model is the backbone that both stores the information and enforces the rules of the real-world process.

This leads to an important question: what makes a **good** data model or a **bad** one? It is not enough that the system "works today". A bad data model may allow duplication of information, contradictions, and anomalies when inserting, updating, or deleting data. Ted Codd and his colleagues at IBM developed a whole theory to answer this question, known as [**normalization**](https://www.geeksforgeeks.org/dbms/introduction-of-database-normalization/). Normalization gives us formal rules for structuring tables so that each fact is stored only once, dependencies are clear, and common update problems are avoided. In practice, when you design databases in your professional career, you will rely on these normalization rules to evaluate and refine your schemas.

Once the database is built, applications need a way to ask it questions and update its data. This is where **SQL** comes in.

[SQL](https://www.w3schools.com/sql/) is a simple, English-like language used to communicate with the database.  
You can think of SQL as the "language" you speak to the DBMS.

**Example:**

If you want to **get information**, you use SQL:  
<br/>SELECT Name, GPA FROM Students;

If you want to **add a new row**, you use SQL:  
<br/>INSERT INTO Students (ID, Name, GPA) VALUES (1203, 'Aylin', 3.8);

If you want to **delete** something:  
<br/>DELETE FROM Students

WHERE ID = 1203;

Because SQL works directly with **table names** and **column names**, the structure of the data model becomes extremely important. SQL queries depend completely on how the data model is designed.

Normalization helps ensure the schema is correct _before_ SQL is written. A normalized schema:

- reduces repeated data  

- avoids confusing table designs  

- keeps SQL queries stable for many years  

- makes it easier to maintain and extend the system  

A bad data model becomes a long-term problem. It forces teams to constantly rewrite SQL queries, fix broken reports, and update multiple systems when the structure changes.

A good data model, built with normalization in mind, protects the entire system. It keeps SQL programs reliable, keeps data consistent, and makes the database easier to manage as the organization grows.

This is why investing time in designing the data model properly at the beginning is one of the most important steps in database development.

## ER Diagrams and Their Components

An [Entity-Relationship (ER) diagram](https://www.geeksforgeeks.org/dbms/introduction-of-er-model/) is a graphical representation of the data model. It shows entities as rectangles, attributes inside those rectangles, and the relationships among entities as lines connecting them. Each relationship has a cardinality that describes how many instances of one entity relate to how many instances of another.

Attributes may include simple attributes (e.g., Name), composite attributes (e.g., Address decomposed into Street, City, ZIP), and key attributes, which uniquely identify an instance. Every entity must have a [primary key](https://en.wikipedia.org/wiki/Primary_key) to enforce entity integrity.

Relationships can be one-to-one, one-to-many, or many-to-many. For instance, in a university system, a Department may have many Students (one-to-many), while a Student and Course relationship is many-to-many because a student takes multiple courses and each course has multiple students. Many-to-many relationships are not stored directly; instead, they are resolved into a separate table containing foreign keys that reference each of the participating entities.

An Entity-Relationship (ER) diagram uses a small set of visual symbols to represent the structure of data. Each symbol corresponds to a key concept: **entities**, **attributes**, and **relationships**. Understanding these shapes is important because the diagram is the blueprint from which the entire database schema is built.

In an ER diagram, an **entity** (or entity type) is drawn as a **rectangle** with its name inside. An entity is something that exists independently and can be uniquely identified. It is an abstraction that captures one distinguishable concept in the real world.The important point is that each entity must be capable of having data stored about it, and it can be uniquely distinguished from all other entities. Entities behave like **nouns** in language. Examples: _Employee_, _Computer_, _Song_, _Book_, _Department_. In relational database terms, an entity type becomes a **table**, and each entity instance becomes a **row**.

Attributes describe the properties of an entity. In ER diagrams, attributes appear as **ovals** connected to their entity.

**_Example._**

A _Student_ entity may have attributes: Name, Surname, GPA, Admission Year  
A _Car_ entity may have attributes: VIN, Color, Model, Year

Some attributes have special roles like **Primary key attributes** (drawn with _underlined text_) uniquely identify each instance. Attributes become **columns** when the diagram is converted into relational tables.

A **relationship** shows how two or more entities are connected. In an ER diagram, relationships are drawn as **diamonds** with a verb phrase describing the interaction. Relationships behave like **verbs** linking nouns.

**_Example._**

Employee **works in** Department

Artist **performs** Song

Company **owns** Computer  

Each relationship has a **cardinality** (1:1, 1:N, or M:N) that determines how the relationship will appear in the database schema.

Although not a "shape", cardinality symbols are crucial in ER diagrams. They specify how many instances of one entity can be associated with another.

Examples:

- One employee **works in** one department (1:1)  

- One department **has** many employees (1:N)  

- A student **takes** many courses and a course **has** many students (M:N)  

These constraints determine how tables will be constructed in the relational model.

<p align="center">
  <img src="{{ '/assets/images/lecture12/image.png' | relative_url }}" alt="">
</p>

_Figure 1._  Two related entities. _Adapted from Wikipedia Entity Relationship models, Wikimedia Commons,_ [_https://en.wikipedia.org/wiki/ER models._](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model) _Licensed under_ [_CC BY 2.5_](https://creativecommons.org/licenses/by/2.5)

<p align="center">
  <img src="{{ '/assets/images/lecture12/image.png' | relative_url }}" alt="">
</p>

_Figure 2._  An entity with an attribute. _Adapted from Wikipedia Entity Relationship models, Wikimedia Commons,_ [_https://en.wikipedia.org/wiki/ER models._](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model) _Licensed under_ [_CC BY 2.5_](https://creativecommons.org/licenses/by/2.5)
<p align="center">
  <img src="{{ '/assets/images/lecture12/image.png' | relative_url }}" alt="">
</p>

_Figure 3._  A relationship with an attribute. _Adapted from Wikipedia Entity Relationship models, Wikimedia Commons,_ [_https://en.wikipedia.org/wiki/ER models._](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model) _Licensed under_ [_CC BY 2.5_](https://creativecommons.org/licenses/by/2.5)

## Types of Relationships in ER Modeling

A _one-to-one relationship_ means that **one entity is connected to exactly one entity on the other side**.

**_Example._**

**Professor - Office  
**Each professor has exactly **one** assigned office, and each office belongs to **one** professor.

In an ER diagram: Professor → Office (1:1)

Think of a **passport and a person** - one passport belongs to one person only.

A _one-to-many relationship_ means that one instance of an entity can be linked to **many** instances of another entity, but the reverse is not true.This is the most common type.

**_Example._**

**Department - Employee  
**A single department can have **many employees**,  
but each employee belongs to **exactly one** department.

In an ER diagram:Department → Employee (1:N)

Think of **a mother and her children** - one mother can have multiple children, but each child has one mother.

A _many-to-many relationship_ means that **both sides can have multiple connections**.

**_Example._**

**Student - Course**

A student can take **many** courses.  
A course can have **many** students.  
In an ER diagram:Student ↔ Course (M:N)

Think of **actors and movies** - an actor can act in many movies, and a movie can have many actors.

## Relational Database Model and Comparison to Other Models

The relational database model is the most widely used way of organizing data today. In the relational model, all information is stored in **tables**, similar to spreadsheets. Each table has **rows**, where each row represents one item (for example, one student), and **columns**, where each column represents something we want to store about that item (such as the student's name or GPA). Every table must have a special column called a **primary key**, which uniquely identifies each row. This prevents duplicate data and helps the database keep everything organized. When one table needs to refer to a row in another table, it stores the primary key of that row. This stored value is called a **foreign key**, and it creates a link between tables. Because of these rules, relational databases are very structured, predictable, and easy to query using SQL.

Before relational databases existed, computers used different models to store data. One of these early models was the **hierarchical model**, which stored data in a tree-like structure. Imagine a company: at the top is the company itself, underneath are departments, and underneath each department are employees. Data could only be accessed by following this fixed path. This made the system rigid. If a programmer wanted to view employees grouped in a different way-for example, sorted by project instead of department-it became difficult. Changing the structure of the tree often broke the programs that depended on it.

Another early model was the **network model**, which allowed more connections than the hierarchical model but still required programmers to navigate the data step by step. In both the hierarchical and network models, developers had to know exactly where data was stored and how to reach it. If the physical storage changed, the programs broke. Maintaining these systems was expensive and time-consuming because a small change in structure could require rewriting entire applications.

More recently, a different family of systems often referred to as **NoSQL databases** has become popular for certain tasks. These include **document databases** and **key-value stores**. Instead of using fixed tables, they store information in flexible formats, often similar to text files or JSON objects. For example, a user profile might be stored in a single document containing name, age, and a list of interests. This flexibility makes NoSQL databases good for storing very large, rapidly changing, or unstructured data-such as social media posts or sensor readings. However, because they do not require a strict structure, they usually cannot guarantee consistency as strongly as relational databases do. They are also less suited for situations where many different parts of the system need to query data using complex conditions.

When comparing all these models, the relational model remains dominant because it provides a balanced combination of **structure**, **accuracy**, and **flexibility**. Its clear table format makes the data easy to understand. Its rules, like primary keys and foreign keys, help prevent mistakes. And because relational databases were designed to be independent of physical storage, programs do not break when the database engine changes how it stores data internally. SQL makes querying relational data straightforward and powerful. For these reasons, relational databases are used in banks, universities, hospitals, e-commerce websites, government systems, and almost every field where consistent and reliable data is essential.

## Data Manipulation Operations: Selection, Projection, Joining, Linking

Relational algebra is the mathematical foundation of how relational databases operate. Although we eventually write SQL queries and may not write algebra expressions directly, SQL is built on top of these relational algebra ideas. Understanding these operations helps us recognize _what the database is actually doing_ when a query is executed. The 3 most important operations in relational algebra are selection, projection and the idea of join.. These operations describe how we retrieve information from tables, how we combine tables.

_Selection_ is the operation that chooses certain rows from a table based on a condition. For example, if we have a Students table and want to find only the students from the School of IT, the database performs a selection. In algebra, this is written as σ School='SITE' (Students). In SQL, the same idea appears in the WHERE clause:

SELECT \* FROM Students WHERE School = 'SITE';

Selection does not change the columns of the table; it only filters out the rows that do not match the rule. This operation corresponds to everyday questions such as "Which employees work in the Finance department?" or "Which orders were created today?"

_Projection_ is the operation that chooses certain columns from a table and ignores the others. If we take the Students table and want only the Name and GPA, projection removes the unnecessary columns. In algebra, this is written as π Name, GPA (Students). In SQL, this appears in the SELECT list:

SELECT Name, GPA FROM Students;

Projection helps keep results focused and avoids returning more data than necessary. It supports questions like "Show me only the names of students," "List only the prices of products," or "Give me the course codes without any other details."

_Joining_ is one of the most important relational algebra operations because it allows us to combine information stored in different tables. Since relational databases split data into multiple simple tables, joining them back together is essential for answering real questions. For example, suppose we have a Students table and a separate Enrollments table. If we want to know which students are taking a particular course, the database joins the two tables by matching rows that share the same StudentID. In algebra, this is written as Students ⋈ Enrollments. In SQL, the equivalent is a JOIN statement:

SELECT Students.Name, Enrollments.CourseID FROM Students JOIN Enrollments USING (StudentID);

Joining allows us to answer questions that cannot be answered using a single table alone, such as "Which students are in this course?", "Which customer placed this order?", or "What flights does this passenger have reservations for?"

Together, selection, projection and join describe the core operations used in relational databases. Even though students will mostly write SQL rather than algebra expressions, every SQL query they write-whether simple or complex-is built from these building blocks. Learning them makes it much easier to understand what the database is doing, how to design efficient queries, and why the relational model is structured the way it is.

## Indexes and Their Advantages

To understand what an [**index**](https://www.geeksforgeeks.org/dbms/indexing-in-databases-set-1/) is in a database, it helps to think about something familiar: a **book**. When you want to find a topic in a large book, you don't read every page. Instead, you flip to the index at the back, find the topic alphabetically, and jump straight to the correct page. The book still contains the full information, but the index helps you get to the right place faster.

A database index works the same way. The full table might contain thousands or millions of rows, and searching it row-by-row would be slow. An index stores a much smaller, organized list of key values (for example, all surnames or all student IDs), along with information about where the matching rows are located in the actual table. When the database needs to find something, it checks the index first and goes directly to the matching row, which is far quicker than scanning the entire table.

Most database systems use a structure called a [**B+Tree**](https://www.geeksforgeeks.org/dbms/introduction-of-b-tree/) for indexes. Students do not need to know the full details yet; it is enough to understand that it keeps data sorted and balanced, so searching inside the index remains fast even as the table grows. This is similar to how a dictionary stays alphabetically ordered regardless of how many pages it has.

An index can be built on one column or several columns. When it is built on multiple columns, it is called a **composite index**. For example, you might create an index on (LastName, FirstName) so searching for a specific person becomes faster.

Indexes make searching, filtering, and joining tables much faster, but they do come with a cost. If we insert, delete, or update rows in the table, the index must be updated as well. This means that databases must find a balance: use enough indexes to make reading fast, but not so many that updating the data becomes slow or takes too much space.

Indexes are one of the most important tools for improving database performance, and they are used everywhere - including search engines, social media apps, online stores, and messaging platforms.

## Searching Algorithms in Databases

There are two general ways databases search for data: **sequential scans** and **index-based searches**.

A **sequential scan** means the database reads every row of the table from top to bottom, checking each one to see if it matches the condition. This is surprisingly effective when the table is small or when the query requires reading most of the rows anyway.

But when tables are large and we want to find only a few specific rows, sequential scanning becomes slow. That's where indexes come in.

With an **index-based search**, the database uses the index to find the data quickly - just as we use a book's index to jump to the right page. Because indexes are organized in a structure like a B+Tree, the database can follow the tree down to the right value in only a few steps, even if the table contains millions of rows.

Indexes are especially useful for **range queries**, such as finding all students with GPA between 3.0 and 3.5, because the B+Tree keeps values in sorted order. Once it finds the starting point, it simply walks through the index in order to collect all matching rows.

There is another type of index called a **hash index**, which is very fast for equality searches, such as "find the user with ID = 1002". But hash indexes do not preserve order, so they cannot be used for range-based searches.

Overall, the database chooses the most efficient method - sequential scan or index - depending on the size of the table and the type of query.

### Dijkstra's Algorithm

In many information systems, searching is not limited to looking up records or scanning tables. Some systems need to search through **networks**, such as transportation routes, communication networks, or weighted graphs that represent dependencies or costs. In such cases, the system must find an optimal path, not simply locate an item. Dijkstra's algorithm is a classic solution to this type of search problem.

Dijkstra's algorithm computes the shortest path from a starting node to all other nodes in a weighted graph where all edge weights are non-negative. The algorithm maintains a set of nodes whose minimum distance from the start is already known. At each step, it selects the node with the smallest temporary distance, finalizes its distance, and then updates (relaxes) its neighbors by checking whether passing through this node yields a shorter path.

A priority queue is often used to efficiently select the next node with the smallest distance, which allows the algorithm to scale well for large graphs. The algorithm finishes when all nodes have been processed or when the destination node is finalized. The output is both the shortest distance and the actual path taken.

Dijkstra's algorithm is widely used in navigation systems, network routing protocols, scheduling, and any information system that requires cost-optimized traversal across a network of connected components. Although it is conceptually different from B+Tree index searching or external merge sort, it represents another type of search operation in systems where data is structured as graphs rather than tables.

<video width="100%" controls style="border-radius: 8px;">
  <source src="{{ '/assets/videos/dijkstra.mp4' | relative_url }}" type="video/mp4">
</video>

_Figure 4._  Dijkstra's algorithm to find the shortest path between a and b. It picks the unvisited vertex with the lowest distance, calculates the distance through it to each unvisited neighbor, and updates the neighbor's distance if smaller. Mark visited (set to red) when done with neighbors. _Adapted from Dijkstra algorithm, Wikipedia, Wikimedia Commons,_ [_https://en.wikipedia.org/wiki/Dijkstra._](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) _Licensed under_ [_CC BY 2.5_](https://creativecommons.org/licenses/by/2.5)

## Database Transactions and ACID Properties

A **transaction** in a database is a set of operations that must happen **together** as one unit.  
Think of ordering something online: adding an item to your cart, paying, and reducing inventory must all succeed together. If one step fails, the whole action must be undone. A database transaction guarantees this behavior.

[ACID](https://en.wikipedia.org/wiki/ACID) describes the four rules a transaction must follow for the database to stay correct.

### **A - Atomicity (All or Nothing)**

A transaction must be completed fully, or not at all.

**_Example:_**

You transfer 20 AZN from your Bank Account A to Account B.

1\. Two steps occur:Subtract 20 from A  
2\. Add 20 to B

If step 2 fails (network crash), step 1 must be undone.

Atomicity ensures money does NOT "disappear."

### **C - Consistency (Valid Before and After)**

### The database must move from one **valid** state to another **valid** state  

**_Example:_**

If a rule says "GPA must be between 0 and 4", the database should never allow a transaction that sets GPA = 7.

### **I - Isolation (Transactions Don't Interfere)**

Even if many users are working at the same time, each transaction should behave as if it is running alone.

**_Example:_**

Two students should not be allowed to register for the last available seat in a class at the same time.

### **D - Durability (Stays Even After Crash)**

Once a transaction is completed, its result must stay, even if the computer crashes.

**_Example:_**

If you successfully buy a ticket and the system confirms it, the reservation should not disappear because of a power outage one second later.

## NoSQL vs Relational (SQL) Database Models (with Examples)

### **Relational Databases (SQL)**

Data stored in **tables** with rows and columns.  
Best for structured and predictable data.

**Examples of relational databases:**

- University registration system  

- Airline reservations  

- Banking systems (very strict rules needed)

**Real systems using SQL:  
**MySQL, PostgreSQL, Oracle, SQL Server.

### **NoSQL Databases**

Store data in flexible formats (documents, key-value pairs, etc.).  
Good for large, fast-changing, unstructured data.

**Examples of NoSQL usage:**

- Instagram stores user posts as documents  

- WhatsApp stores chat messages in scalable systems  

- Netflix stores movie recommendations in NoSQL

**Real systems using NoSQL:  
**MongoDB (document), Cassandra (wide-column), Redis (key-value), Neo4j (graph).

### **When to Use Which?**

**Use SQL when:**

- you have relationships (Students ↔ Courses)  

- accuracy is important (banking, finance)  

- data structure rarely changes  

**Use NoSQL when:**

- data grows extremely fast  

- structure changes often (user profiles, logs, messages)  

- app needs to handle millions of users (social media)  

### **Advantages and Disadvantages**

| **Type** | **Advantages** | **Disadvantages** |
| --- | --- | --- |
| **SQL** | Very accurate (ACID), organized tables, strong relationships | Less flexible for fast-changing data |
| --- | --- | --- |
| **NoSQL** | Flexible structure, easy to scale, handles huge data | Weaker consistency, not ideal for complex joins |
| --- | --- | --- |

## Main DBMS Activities (with Examples)

A **DBMS** is just software (like MySQL, PostgreSQL, MongoDB) that manages your data so you don't have to deal with files manually.

### **1\. Data Definition (Designing the Structure)**

**_Example:_**

Creating a Students table with ID, Name, Major.  
The DBMS stores the structure and enforces rules (e.g., ID must be unique).

### **2\. Data Manipulation (Working with Data)**

**_Example operations:_**

Inserting a new student  
Updating an employee's salary  
Searching for all flights leaving today

SQL query example:

SELECT \* FROM Flights WHERE Date = '2025-10-03';

### **3\. Concurrency Control (Multiple Users Safely Working Together)**

Example:  
Two cashiers update the same product quantity at the same time.  
DBMS ensures the quantity does NOT become incorrect.

### **4\. Crash Recovery**

**_Example:_** If the system crashes while adding a new order, the DBMS ensures the system restarts in a correct state (no half-entered data).

DBMS exists to simplify life: it handles storage, safety, speed, and multiple users without the programmer manually managing files.

## CAP Theorem (with Very Simple Real Examples)

The **CAP theorem** is about distributed systems (systems running on many servers).  
It says a system cannot guarantee all **three** of these at the same time:

### **C - Consistency: Everyone sees the same data.**

Example:  
If you "like" a photo, your friend should immediately see the updated like count.

### **A - Availability: The system always responds.**

Example:  
Even if the system is busy, Instagram must show _something_.

### **P - Partition Tolerance: System still works even when network between servers breaks.**

Example:  
If some servers cannot talk to each other (network issue), the app should not fully shut down.

### **Trade-Off Example:**

WhatsApp must always deliver messages (availability + partition tolerance).  
BUT sometimes messages appear out of order → **consistency is temporarily sacrificed**.

No system can fully satisfy **all three** in every situation.

## SQL (RDBMS) vs NoSQL (NRDBMS)

When choosing how to store data, modern systems usually rely on two major families of databases: SQL databases, also called relational database management systems (RDBMS), and NoSQL databases, also called non-relational database management systems (NRDBMS). Although both store and retrieve data, they do so in very different ways and are suited to different situations.

SQL databases organize data into structured tables made of rows and columns. Each row represents one item, and each column represents information about that item. The database enforces rules such as unique identifiers and relationships between tables. This structure makes SQL databases very reliable and consistent, which is why they are used in environments where accuracy matters: banking systems, university registration systems, airline reservations, and any application where data must always be correct and follow strict relationships. Because SQL uses a standard language for querying, it is easy to ask detailed questions such as "show all students enrolled in this course" or "find the balance of this bank account." The rigid structure also ensures that mistakes, such as storing invalid values, are less likely.

NoSQL databases take a different approach. Instead of storing data in fixed tables, they store it in more flexible formats such as documents, key-value pairs, graphs, or wide columns. For example, a user profile in a NoSQL system might be stored as a single document containing the name, age, photos, preferences, and even a list of friends, all inside one object. This flexibility allows NoSQL systems to adapt quickly to situations where the data structure changes frequently or where new types of information need to be stored without redesigning the entire database. NoSQL is commonly used in social networks, messaging platforms, recommendation systems, and applications handling huge amounts of unstructured or semi-structured data.

The main difference between SQL and NoSQL lies in their priorities. SQL focuses on structure, accuracy, and strong rules. NoSQL focuses on flexibility, scalability, and handling large volumes of fast-changing data. For example, a bank would almost always use SQL because customers' money must be tracked with perfect consistency. On the other hand, a chat application such as WhatsApp or a social media feed like Instagram might choose NoSQL because millions of messages and posts arrive every second, and the structure of the stored data changes constantly as users update profiles, upload media, or communicate in different ways.

In practice, SQL is best used when data relationships are clear and must remain accurate, whereas NoSQL is preferred when data grows extremely fast, is highly varied, or must be retrieved and written at very high speeds. Many modern companies even use both: SQL for their reliable core data and NoSQL for fast, flexible features such as logs, messages, and analytics.

Additional Material

- [**7 Database Paradigms**](https://www.youtube.com/watch?v=W2Z7fbCLSTw)
- [**Binary Search Algorithm in 100 Seconds**](https://www.youtube.com/watch?v=MFhxShGxHWc)
- [**SQL Explained in 100 Seconds**](https://www.youtube.com/watch?v=zsjvFFKOm3c&t=26s)
- [**you need to learn SQL RIGHT NOW!! (SQL Tutorial for Beginners)**](https://www.youtube.com/watch?v=xiUTqnI6xk8)
- [**ACID Properties in Databases With Examples**](https://www.youtube.com/watch?v=GAe5oB742dw)
- [**CAP Theorem Simplified**](https://www.youtube.com/watch?v=BHqjEjzAicA)
- [**Every File Format Explained in 16 Minutes**](https://www.youtube.com/watch?v=pNWL59tB7Z0)
- [**MongoDB in 100 Seconds**](https://www.youtube.com/watch?v=-bt_y4Loofg)
- [**Understanding B-Trees: The Data Structure Behind Modern Databases**](https://www.youtube.com/watch?v=K1a2Bk8NrYQ)
- [**SQL vs NoSQL or MySQL vs MongoDB**](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)
- [**PostgreSQL in 100 Seconds**](https://www.youtube.com/watch?v=n2Fluyr3lbc)
- [**How Cambridge Analytica Exploited the Facebook Data of Millions | NYT**](https://www.youtube.com/watch?v=mrnXv-g4yKU)