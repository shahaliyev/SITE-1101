---
layout: page
title: Week 12 — Artificial Intelligence and Machine Learning
order: 7
---
{% include lecture-styles.html %}

**Week 12**

**Authors:** Rahida Asadli, Nilufar Ismayilova, Rahman Karimov, Ismayil Shahaliyev

**Created / Updated:** Nov 29 2025 **/** Nov 29 2025

{% include reading-time.html %}

<button id="toc-toggle">☰ Sections</button>


### Purpose of AI, Machine Learning and Deep Learning

[_Artificial Intelligence_](https://en.wikipedia.org/wiki/Artificial_intelligence) (AI) refers to computer systems designed to perform tasks that normally require human intelligence, such as decision making, pattern recognition, object detection, translation, or playing games. The core idea is to enable machines to learn from data or experience so that they improve over time without being explicitly programmed for every scenario.

[_Machine Learning_](https://en.wikipedia.org/wiki/Machine_learning) (ML) is a subset of AI that focuses on training models using data. Instead of writing rules manually, we give the system examples, and it learns patterns on its own. For instance, instead of coding "what a cat looks like," we show the system many cat images and let it learn the shared patterns.

[_Deep Learning_](https://en.wikipedia.org/wiki/Deep_learning) (DL) is a specialized ML approach that uses multi-layered neural networks. These networks automatically extract features from raw data, making them especially powerful for image recognition, language understanding, and large-scale decision-making tasks.


<p align="center">
  <img src="{{ '/assets/images/lecture12/image.png' | relative_url }}" alt="">
</p>

_Diagram of the relationship between Artificial Intelligence, Machine Learning, and Deep Learning. Adapted from AI hierarchy, Wikipedia, Wikimedia Commons,_ [_https://commons.wikimedia.org/wiki/File:AI_hierarchy.svg._](https://commons.wikimedia.org/wiki/File:AI_hierarchy.svg) _Licensed under CC BY-SA 4.0._

<div class="frame" markdown="1">

**_Example._** Imagine an online clothing store that wants to show each customer personalized outfit suggestions. Instead of manually programming rules such as "if user clicks blue shirts → recommend jeans," the system collects thousands of users' behaviors: items they viewed, purchased, returned, or saved to wishlist.  
Machine Learning models then discover patterns, for example, customers who prefer minimalistic styles often buy neutral-colored items. Deep Learning models can even analyze product images and understand patterns like "striped," "oversized," or "casual."  
As a result, the AI system learns to automatically recommend items that match each person's style, even if no human explicitly defined the rules.
</div>

### Linear Regression Algorithm

Linear Regression is one of the simplest ML algorithms. It tries to model the relationship between two variables by finding a straight line that best fits the data. The goal is to predict an output y based on an input x using the function:

Where _m_ is the slope and _b_ is the intercept.

The algorithm adjusts _m_ and _b_ to minimize the difference between predicted and actual outputs. This difference is measured using "loss," commonly mean squared error.

<div class="frame" markdown="1">

**_Example._** Suppose a company wants to predict a student's final exam score based on the number of hours they studied. It collects real data from previous students:

| Study Hours (x) | Final Score (y) |
|------------------|------------------|
| 2                | 55               |
| 5                | 72               |
| 7                | 82               |
| 10               | 94               |


Linear Regression takes all these points and finds the single straight line that best fits the trend.  
If the model returns:

y = 4.3x + 48

Then a student who studies 8 hours is predicted to score:

4.3(8) + 48 = 82.4

This is useful in forecasting, budgeting, predicting energy consumption, and many other real-world applications.

</div>

### Artificial Neural Networks

Artificial Neural Networks (ANNs) are computing systems inspired by how biological neurons in the human brain process information. Just like real neurons send electrical signals to each other, artificial neurons pass numerical values forward through the network. The goal is to learn patterns inside data, such as images, sound, or text, and make accurate predictions.

An ANN is made up of layers:

- **Input Layer:**  
    This is where the raw data enters the model. For image recognition, this layer receives pixel values; for language tasks, it might receive numerical representations of words.
- **Hidden Layers:**  
    These layers perform most of the computation. Each neuron applies a mathematical function to its inputs, producing an output that is passed to the next layer.  
    Hidden layers allow the network to learn increasingly complex patterns.  
    For example, an early hidden layer in an image model may detect simple edges, while deeper layers detect shapes, objects, or faces.
- **Output Layer:**  
    This layer produces the final result of the network, such as classifying an image as "cat" or "dog," predicting a number, or generating a sentence.

Each connection between neurons has a **weight**, which acts like a strength value.

- A large weight means the input strongly influences the next neuron.
- A small weight means it has little effect.

The network starts with random weights; during training, it repeatedly adjusts them to reduce errors. ANNs learn using an algorithm called **gradient descent**, which measures how far the model's prediction is from the correct answer and slightly changes the weights to improve accuracy. After many iterations, the network learns the correct patterns.

This learning process is called **training**, and the correction of errors is done using a method called **backpropagation**, where the network works backward from the output to determine which weights need adjusting.

After each neuron computes its weighted sum, it applies an **activation function**.  
Activation functions introduce non-linearity, allowing the network to learn complex features rather than just straight-line relationships.

Common activation functions include:

- **ReLU (Rectified Linear Unit)** - outputs 0 for negative values and the value itself for positive ones. Very common in deep learning.
- **Sigmoid** - outputs values between 0 and 1, often used in binary classification.
- **Softmax** - converts outputs into probabilities for multiclass classification.

Without activation functions, ANNs would behave like simple linear models and could not solve real-world problems.
<div class="frame" markdown="1">

**_Example:_** Suppose we want to identify handwritten numbers (0-9) from images-like how ATMs read digits on checks.

**1)Input Layer**  
Each image is converted into a grid of pixels (for example, 28×28 = 784 pixels).  
These 784 values form the input layer.

**2)Hidden Layers**

• The first hidden layer detects low-level features like curves, dots, or strokes.

• The second hidden layer might detect combinations of these features such as loops or corners.

• Deeper layers start detecting digit-specific patterns (for example, the circular shape of "0" or the straight vertical line of "1").

**3)Output Layer**  

The network has 10 output neurons, one for each digit.  
The neuron with the highest probability is the network's prediction.

Example Output for an input image:

| Digit | Probability |
|-------|-------------|
| 0     | 0.01        |
| 1     | 0.02        |
| 2     | 0.01        |
| 3     | 0.00        |
| 4     | 0.01        |
| 5     | 0.10        |
| 6     | 0.82        |
| 7     | 0.01        |
| 8     | 0.01        |
| 9     | 0.01        |


</div>

### Large Language Models (LLMs)

Large Language Models (LLMs), such as GPT-based systems, are advanced deep learning models trained on extremely large collections of text. Through this training, they learn statistical patterns in how words, sentences, and ideas relate to each other. Because of this, they can generate coherent text, answer questions, summarize long documents, translate between languages, and even write computer code. These abilities come from recognizing patterns across billions of examples, rather than being explicitly programmed with rules.

LLMs are built using a special neural network architecture called the Transformer. The key component of this architecture is the attention mechanism, which allows the model to focus on the most important parts of the input while processing it. Instead of reading text strictly from left to right, Transformers can look at all parts of a sentence at once and determine which words influence each other the most. This ability to capture long-distance relationships makes LLMs highly effective at understanding context, generating meaningful responses, and producing human-like language.
<div class="frame" markdown="1">

**_Example._** Consider a customer service chatbot for an internet provider. Customers commonly ask: "My Wi-Fi is slow.", "Why is my internet disconnecting?", "How do I change my password?"

The company trains an LLM on:

• thousands of past customer chat logs

• network troubleshooting guides

• modem/router manuals

• internal support responses

When a customer types:

**"My internet randomly disconnects every hour."**

The LLM analyzes the sentence, identifies key patterns, and generates a tailored response such as:

_"Frequent disconnections often happen due to outdated router firmware or signal interference. Let's first check if your router needs an update…"_

The model understands intent, context, and writes grammatically correct answers.  
This is possible because LLMs learn relationships between billions of words during training.

</div>

### Matrix Multiplication

[_Matrix multiplication_](https://en.wikipedia.org/wiki/Matrix_multiplication) is one of the most important mathematical operations in machine learning because it is the basic way neural networks process and transform information. A matrix is simply a rectangular grid of numbers, and multiplying two matrices means combining the rows of the first matrix with the columns of the second to produce new values. In a neural network, every layer uses matrices to store the weights that connect one layer of neurons to the next. When data flows through the network, the input values are represented as a vector, and this vector is multiplied by the weight matrix of the layer. The result of this multiplication is a new vector that represents the layer's output.

This operation is not symbolic, it directly represents how strongly each input influences each neuron in the next layer. Each row of the weight matrix corresponds to a single neuron in the output layer, and each column corresponds to a single input. During multiplication, the network takes a weighted sum of all inputs for each neuron. This weighted combination is what allows the network to detect patterns. For example, one neuron might respond more strongly to curved shapes in an image, another to vertical edges, and another to color differences. These responses come directly from the values stored in the weight matrix and the multiplication that combines them with the input data.

To see this more concretely, imagine a layer that receives three input values and produces two output values. The weights of this layer can be represented as a 2×3 matrix, and the input is a 3×1 vector. When we multiply the weight matrix by the input vector, we get a 2×1 vector. Each of the two resulting numbers represents how much one output neuron "fires" after combining and weighting the three inputs. This is how neural networks perform their forward pass: data enters, gets multiplied by weight matrices, transformed by activation functions, and passed layer by layer until the final prediction is produced.

All of these transformations, often millions of them in a single deep network, depend on matrix multiplication. Because neural networks require so many large matrix operations, hardware that can perform parallel computation is extremely valuable. This is why GPUs (graphics processing units) are widely used in AI. Unlike CPUs, which process information sequentially, GPUs can perform thousands of small multiplications at the same time, making them ideal for the heavy matrix workloads found in modern AI systems.
<div class="frame" markdown="1">

**_Example_.** Suppose an image classifier needs to determine whether an image contains a cat or a dog. Each image is converted into a vector (list of numbers).

If the input image has **3 features** (simplified for explanation):

⎡ 0.2 ⎤

X =⎢ 0.9 ⎥

⎣ 0.4 ⎦

And the neural network layer has 3 neurons with weights:

⎡ 0.5 0.2 0.1 ⎤

W=⎢ 0.9 0.3 0.5 ⎥

⎣ 0.1 0.8 0.6 ⎦

Then the output is simply:

W×X =⎡0.5(0.2) + 0.2(0.9) + 0.1(0.4)⎤

⎢0.9(0.2) + 0.3(0.9) + 0.5(0.4)⎥

⎣0.1(0.2) + 0.8(0.9) + 0.6(0.4)⎦

Now calculate each row:

1) First neuron output:

2) Second neuron output:

3) Third neuron output:

So the final output vector is:

⎡ 0.32 ⎤

WX =⎢ 0.65 ⎥

⎣ 0.98 ⎦

These resulting numbers feed into activation functions and ultimately decide:

• Probability it is a cat

• Probability it is a dog

This multiplication happens **millions of times per second**, which is why GPUs are essential.
</div>

### CSP Backtracking Algorithm

Constraint Satisfaction Problems (CSPs) require assigning values to a set of variables in a way that satisfies all given rules. Each variable has a domain of possible values, and constraints specify which combinations of assignments are allowed. Backtracking is a systematic method for exploring all possible assignments. It works by choosing a variable, assigning it a value, and immediately checking whether this partial assignment violates any constraints. If the assignment is still valid, the algorithm moves to the next variable. If a violation appears at any point, the algorithm reverses its last step, removes the invalid value, and tries a different one.

This process continues until either a complete valid assignment is found or all options have been exhausted. Backtracking is efficient because it avoids exploring entire branches of the search space as soon as a conflict is detected, instead of waiting until the end. In Sudoku, for example, the algorithm fills a cell with a possible number and checks whether the number appears in the same row, column, or 3×3 block. If it does, the number is rejected and another one is tried. If all numbers fail for that cell, the algorithm backtracks to the previous cell and chooses a new value there. The same logic applies to other CSPs like scheduling, where time slots act as domains and conflicts occur when two tasks overlap or violate ordering rules.
<div class="frame" markdown="1">

**_Example_.** Sudoku Solver:

Consider the classic Sudoku puzzle. Each empty cell must contain a number from 1-9 such that:

• No duplicate in the same row

• No duplicate in the same column

• No duplicate in the 3×3 grid

Backtracking works like this:

1) Start at the first empty cell.

2) Try placing "1" → check rules.

3) If no rule is violated → move to next empty cell.

4) If a violation occurs → remove the number (backtrack) and try "2", "3", ..., "9".

5) If all numbers fail → backtrack to previous cell.

This continues until the puzzle is complete. This same method is used in timetabling at universities, resource allocation, map coloring, and validating exam seating plans.
</div>

### Minimax Algorithm

Minimax is an algorithm used in two-player, turn-based games where players take actions one after another, such as tic-tac-toe, chess, or checkers. The main idea is that one player is trying to choose moves that **maximize** their chance of winning, while the opponent is assumed to choose moves that **minimize** that chance. To decide the best move, the algorithm looks ahead at all possible future game states by simulating every move the player could make, every response the opponent could make, and so on. Each final outcome (win, loss, draw) is given a numerical score. Wins receive positive scores, losses receive negative scores, and draws get a neutral score.

Once all these possible future outcomes are evaluated, the algorithm works backward through the game tree. At layers where it is our turn, Minimax selects the move that leads to the **highest** possible score. At layers where the opponent moves, the algorithm assumes the opponent will choose the option that gives **us** the **lowest** score. Following this alternating pattern of maximizing and minimizing ensures that the chosen move is the one that guarantees the best possible outcome even if the opponent plays perfectly.

This is why Minimax is so powerful in simple games: it prevents mistakes caused by only considering the next move. Instead of thinking "what is good right now?", the algorithm considers the full consequences of every action. In tic-tac-toe, for example, Minimax ensures the AI never loses because it checks all possible responses and avoids any move that could lead to a future losing position.
<div class="frame" markdown="1">

**_Example_.** **Tic-Tac-Toe with Full Search  
**Assume it is the AI's turn and the board is:

| X | O | X |
|---|---|---|
| O | X |   |
|   |   | O |


The AI (playing "X") considers every possible move:

• If it plays in the bottom-left corner, what are all the opponent's replies?

• If it plays in the middle-right cell, does it allow the opponent to win?

• If it plays incorrectly, does it allow a future fork?

Minimax will:

• Assign **+1** if the move leads to a guaranteed win

• Assign **0** if it leads to a draw

• Assign **-1** if it leads to a forced loss

The AI compares the scores of all possible futures. If the opponent can force a win, Minimax will avoid that move. This ensures the AI never loses, even against a perfect human player.

Chess engines, Othello, Connect-4, and even some negotiation bots in economics use this principle.
</div>

### Reinforcement Learning (RL)

Reinforcement Learning is a branch of AI in which a system, called an agent, learns how to behave by interacting with an environment rather than by being shown the correct answers. The agent chooses an action, observes what happens as a result, and receives feedback in the form of a numerical reward or penalty. Good actions lead to positive rewards, while harmful or ineffective actions lead to negative ones. Over time, by repeatedly trying different actions and observing their consequences, the agent gradually learns which behaviors produce the highest long-term benefit. This learning process does not rely on explicit instructions. Instead, the agent discovers the best strategy on its own by balancing exploration of new actions with exploitation of actions that have worked well in the past.

Key Concepts:

- **Agent** - the learner (a robot, a program, a game player)
- **Environment** - the world the agent interacts with
- **Action** - something the agent chooses to do
- **Reward** - numerical feedback (positive or negative)
- **Policy** - the strategy the agent learns

<div class="frame" markdown="1">

**_Example_.** Imagine training a robot to walk. At first, the robot moves randomly because it does not know what actions are helpful. It might take a step and fall, which produces a penalty, or it might shift its weight successfully and stay upright, which produces a reward. As these interactions continue, the robot begins to understand which sequences of movements keep it balanced and which cause it to fall. Eventually, after enough trial and error, the robot develops a stable walking pattern simply because that pattern consistently leads to higher rewards than others. In this way, Reinforcement Learning enables systems to learn complex behaviors directly from experience rather than from predefined rules.Additional Material
</div>

###  Additional Materials

- [Linear Regression](https://mlu-explain.github.io/linear-regression/)
- [TensorFlow Playground](https://playground.tensorflow.org/)
- [TensorSpace Playground](https://tensorspace.org/html/playground/index.html)
- [Tiktokenizer](https://tiktokenizer.vercel.app/)
- [Machine Learning Explained in 100 Seconds](https://www.youtube.com/watch?v=PeMlggyqz0Y)
- [But what is a neural network?  Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk)
- [Linear Regression in 3 Minutes](https://www.youtube.com/watch?v=3dhcmeOTZ_Q)
- [AI vs ML vs DL vs Data Science - Difference Explained Simplilearn](https://www.youtube.com/watch?v=vNc2z2u_nh0)
- [N-Queens - Backtracking - Leetcode 51 - Python](https://www.youtube.com/watch?v=Ph95IHmRp5M)
- [Minimax: How Computers Play Games](https://www.youtube.com/watch?v=SLgZhpDsrfc)
- [Matrix multiplication as composition  Chapter 4, Essence of linear algebra](https://www.youtube.com/watch?v=XkY2DOUCWMU)  
- [Multiplying a matrix by a matrix Matrices Precalculus Khan Academy](https://www.youtube.com/watch?v=OMA2Mwo0aZg)
- [Reinforcement Learning: Essential Concepts](https://www.youtube.com/watch?v=Z-T0iJEXiwM)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs)
- [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw)
- [Deep Dive into LLMs like ChatGPT](https://www.youtube.com/watch?v=7xTGNNLPyMI)
- [Machine Learning Fundamentals: Bias and Variance](https://www.youtube.com/watch?v=EuBBz3bI-aA)

{% include lecture-footer.html %}
