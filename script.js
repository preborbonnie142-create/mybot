// AI Knowledge Base
const aiKnowledgeBase = {
    "what is ai": {
        keywords: ["what", "ai", "artificial intelligence", "definition", "meaning"],
        response: `<strong>What is Artificial Intelligence?</strong><br><br>
        Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. It's a branch of computer science dedicated to creating systems capable of performing tasks that typically require human intelligence.<br><br>
        <strong>Key Characteristics:</strong><br>
        • <strong>Learning:</strong> The ability to improve performance based on data and experience<br>
        • <strong>Reasoning:</strong> Drawing conclusions and making decisions based on information<br>
        • <strong>Perception:</strong> Interpreting sensory inputs like visual and auditory data<br>
        • <strong>Language Understanding:</strong> Comprehending and generating human language<br><br>
        AI systems can range from simple rule-based programs to complex neural networks that can learn from vast amounts of data. Modern AI powers technologies like voice assistants, recommendation systems, autonomous vehicles, and advanced medical diagnostics.`
    },
    
    "machine learning": {
        keywords: ["machine learning", "ml", "what is machine learning", "how machine learning works"],
        response: `<strong>Machine Learning Explained:</strong><br><br>
        Machine Learning (ML) is a subset of AI that focuses on algorithms and statistical models that enable computers to improve their performance on a specific task through experience, without being explicitly programmed for that task.<br><br>
        <strong>Types of Machine Learning:</strong><br><br>
        <strong>1. Supervised Learning:</strong><br>
        • Algorithm learns from labeled training data<br>
        • Makes predictions on unseen data<br>
        • Examples: Image classification, spam detection, price prediction<br><br>
        <strong>2. Unsupervised Learning:</strong><br>
        • Finds patterns in unlabeled data<br>
        • Discovers hidden structures<br>
        • Examples: Customer segmentation, anomaly detection<br><br>
        <strong>3. Reinforcement Learning:</strong><br>
        • Learns through trial and error<br>
        • Receives rewards or penalties<br>
        • Examples: Game playing, robotics, autonomous vehicles<br><br>
        ML powers many everyday applications: Netflix recommendations, fraud detection, language translation, and much more!`
    },
    
    "neural networks": {
        keywords: ["neural networks", "neural network", "what are neural networks", "how neural networks work"],
        response: `<strong>Neural Networks:</strong><br><br>
        Neural Networks are computing systems inspired by the biological neural networks of animal brains. They consist of interconnected nodes (neurons) organized in layers that process information using connectionist approaches to computation.<br><br>
        <strong>Basic Structure:</strong><br><br>
        <strong>Input Layer:</strong> Receives initial data<br>
        <strong>Hidden Layers:</strong> Process and transform data<br>
        <strong>Output Layer:</strong> Produces final predictions<br><br>
        <strong>How They Work:</strong><br>
        • Each connection has a weight that adjusts during training<br>
        • Neurons apply activation functions to determine output<br>
        • Networks learn by adjusting weights to minimize errors<br>
        • Deep Learning uses networks with many hidden layers<br><br>
        <strong>Applications:</strong><br>
        • Image and speech recognition<br>
        • Natural language processing<br>
        • Game playing and strategy<br>
        • Medical diagnosis and research<br>
        • Autonomous systems<br><br>
        Modern neural networks have enabled breakthroughs in computer vision, language translation, and many other AI applications.`
    },
    
    "deep learning": {
        keywords: ["deep learning", "dl", "what is deep learning", "deep learning vs machine learning"],
        response: `<strong>Deep Learning:</strong><br><br>
        Deep Learning is a specialized subset of machine learning that uses neural networks with many layers (deep neural networks) to learn from vast amounts of data. It's particularly effective for complex pattern recognition tasks.<br><br>
        <strong>Key Differences from Traditional ML:</strong><br>
        • Automatically learns features from raw data<br>
        • Requires large datasets for training<br>
        • More computationally intensive<br>
        • Better at unstructured data (images, text, audio)<br><br>
        <strong>Popular Deep Learning Architectures:</strong><br><br>
        <strong>1. CNNs (Convolutional Neural Networks)</strong><br>
        • Excellent for image processing<br>
        • Used in facial recognition, medical imaging<br><br>
        <strong>2. RNNs (Recurrent Neural Networks)</strong><br>
        • Good for sequential data<br>
        • Used in text, speech, time series<br><br>
        <strong>3. Transformers</strong><br>
        • Revolutionized NLP<br>
        • Power GPT, BERT, and modern language models<br><br>
        Deep learning has enabled achievements like beating human champions in games, generating realistic images, and understanding natural language at near-human levels.`
    },
    
    "ai applications": {
        keywords: ["ai applications", "ai uses", "how is ai used", "real world ai", "ai in daily life"],
        response: `<strong>AI Applications in the Real World:</strong><br><br>
        Artificial Intelligence is transforming virtually every industry. Here are some prominent applications:<br><br>
        <strong>Healthcare:</strong><br>
        • Medical image analysis and diagnosis<br>
        • Drug discovery and development<br>
        • Personalized treatment plans<br>
        • Predictive health analytics<br><br>
        <strong>Finance:</strong><br>
        • Fraud detection and prevention<br>
        • Algorithmic trading<br>
        • Credit risk assessment<br>
        • Customer service chatbots<br><br>
        <strong>Transportation:</strong><br>
        • Autonomous vehicles<br>
        • Traffic prediction and optimization<br>
        • Route planning systems<br><br>
        <strong>Entertainment:</strong><br>
        • Content recommendation (Netflix, Spotify)<br>
        • Game AI and opponents<br>
        • Content generation<br><br>
        <strong>Daily Life:</strong><br>
        • Voice assistants (Siri, Alexa)<br>
        • Smart home devices<br>
        • Photo enhancement<br>
        • Language translation<br>
        • Email spam filtering<br><br>
        AI continues to expand into new domains, making our lives more convenient, efficient, and connected.`
    },
    
    "ai ethics": {
        keywords: ["ai ethics", "ethical ai", "ai bias", "ai safety", "ai concerns"],
        response: `<strong>AI Ethics and Considerations:</strong><br><br>
        As AI becomes more powerful, ethical considerations become increasingly important. Key areas include:<br><br>
        <strong>Bias and Fairness:</strong><br>
        • AI systems can inherit biases from training data<br>
        • May discriminate against certain groups<br>
        • Need for diverse and representative datasets<br><br>
        <strong>Privacy and Security:</strong><br>
        • Collection and use of personal data<br>
        • Surveillance concerns<br>
        • Data protection requirements<br><br>
        <strong>Transparency and Explainability:</strong><br>
        • "Black box" algorithms are hard to understand<br>
        • Need for interpretable AI decisions<br>
        • Right to explanation for AI-based decisions<br><br>
        <strong>Job Impact:</strong><br>
        • Automation of certain jobs<br>
• Need for reskilling and education<br>
        • Creation of new job categories<br><br>
        <strong>Safety and Control:</strong><br>
        • Ensuring AI systems behave as intended<br>
        • Preventing misuse of AI technology<br>
        • Long-term AI alignment with human values<br><br>
        Organizations and governments are developing frameworks and regulations to ensure AI is developed and used responsibly.`
    },
    
    "future of ai": {
        keywords: ["future of ai", "ai future", "ai trends", "where is ai going", "ai developments"],
        response: `<strong>The Future of AI:</strong><br><br>
        The field of AI is rapidly evolving with several exciting trends and developments on the horizon:<br><br>
        <strong>Emerging Trends:</strong><br><br>
        <strong>1. Large Language Models:</strong><br>
        • More powerful and capable language models<br>
        • Better reasoning and understanding<br>
        • Multimodal AI (text, image, video, audio)<br><br>
        <strong>2. AI for Science:</strong><br>
        • Accelerating scientific discovery<br>
        • Protein folding and drug design<br>
        • Climate modeling and solutions<br><br>
        <strong>3. Edge AI:</strong><br>
        • AI running on devices locally<br>
        • Reduced latency and privacy concerns<br>
        • Smarter IoT devices<br><br>
        <strong>4. AI + Human Collaboration:</strong><br>
        • AI as a tool for human creativity<br>
        • Enhanced productivity and decision-making<br>
        • Solving complex global challenges<br><br>
        <strong>Challenges Ahead:</strong><br>
        • Ensuring ethical development<br>
        • Addressing computational requirements<br>
        • Managing societal impact<br>
        • International cooperation and governance<br><br>
        The future of AI holds tremendous promise for solving humanity's greatest challenges while requiring careful consideration of its implications.`
    },
    
    "nlp": {
        keywords: ["nlp", "natural language processing", "language ai", "text ai", "text processing"],
        response: `<strong>Natural Language Processing (NLP):</strong><br><br>
        NLP is a branch of AI that focuses on the interaction between computers and human language. It enables machines to understand, interpret, and generate human language.<br><br>
        <strong>Key NLP Tasks:</strong><br><br>
        <strong>Text Understanding:</strong><br>
        • Sentiment analysis<br>
        • Named entity recognition<br>
        • Text classification<br>
        • Question answering<br><br>
        <strong>Text Generation:</strong><br>
        • Machine translation<br>
        • Text summarization<br>
        • Content creation<br>
        • Dialogue systems<br><br>
        <strong>Modern NLP:</strong><br>
        • Transformer architectures (BERT, GPT, T5)<br>
        • Large language models with billions of parameters<br>
        • Few-shot and zero-shot learning<br>
        • Multimodal language understanding<br><br>
        <strong>Applications:</strong><br>
        • Chatbots and virtual assistants<br>
        • Search engines<br>
        • Language translation apps<br>
        • Content moderation<br>
        • Document analysis<br><br>
        Recent advances in NLP have dramatically improved machines' ability to understand and generate human language, enabling more natural human-computer interaction.`
    },
    
    "computer vision": {
        keywords: ["computer vision", "image recognition", "image ai", "visual ai", "object detection"],
        response: `<strong>Computer Vision:</strong><br><br>
        Computer Vision is an AI field that enables computers to interpret and understand visual information from the world, such as images and videos.<br><br>
        <strong>Key Computer Vision Tasks:</strong><br><br>
        <strong>Image Classification:</strong><br>
        • Identifying what's in an image<br>
        • Categorizing objects<br>
        • Scene understanding<br><br>
        <strong>Object Detection:</strong><br>
        • Locating objects within images<br>
        • Bounding box generation<br>
        • Multiple object tracking<br><br>
        <strong>Image Segmentation:</strong><br>
        • Pixel-level classification<br>
        • Instance segmentation<br>
        • Semantic segmentation<br><br>
        <strong>Applications:</strong><br>
        • Autonomous vehicles<br>
        • Medical imaging and diagnosis<br>
        • Face recognition<br>
        • Quality control in manufacturing<br>
        • Augmented and virtual reality<br>
        • Agricultural monitoring<br><br>
        <strong>Technologies:</strong><br>
        • Convolutional Neural Networks (CNNs)<br>
        • Vision Transformers (ViT)<br>
        • Real-time processing<br>
        • Edge deployment on cameras and devices<br><br>
        Computer vision is making machines "see" and understand the visual world, enabling countless applications across industries.`
    },
    
    "generative ai": {
        keywords: ["generative ai", "generative", "ai generation", "gpt", "image generation", "content creation"],
        response: `<strong>Generative AI:</strong><br><br>
        Generative AI refers to AI systems that can create new content, including text, images, audio, video, and more, rather than just analyzing or classifying existing content.<br><br>
        <strong>Types of Generative AI:</strong><br><br>
        <strong>Text Generation:</strong><br>
        • GPT models (ChatGPT, GPT-4)<br>
        • Story and content writing<br>
        • Code generation<br>
        • Dialogue systems<br><br>
        <strong>Image Generation:</strong><br>
        • DALL-E, Midjourney, Stable Diffusion<br>
        • Art and illustration creation<br>
        • Photo editing and enhancement<br>
        • Design and marketing materials<br><br>
        <strong>Audio & Video:</strong><br>
        • Music composition<br>
        • Voice synthesis<br>
        • Video generation and editing<br>
        • Animation creation<br><br>
        <strong>How It Works:</strong><br>
        • Trained on vast datasets of existing content<br>
        • Learns patterns and structures<br>
        • Generates new, similar content<br>
        • Can be fine-tuned for specific styles<br><br>
        <strong>Applications:</strong><br>
        • Creative industries and art<br>
        • Marketing and advertising<br>
        • Education and training<br>
        • Entertainment and media<br>
        • Product design<br><br>
        Generative AI is revolutionizing creative processes and opening new possibilities for human-AI collaboration in content creation.`
    }
};

// Default response for unknown queries
const defaultResponse = `<strong>I understand you're asking about AI!</strong><br><br>
I can help you with questions about:<br><br>
• What is AI and how it works<br>
• Machine Learning and Deep Learning<br>
• Neural Networks<br>
• Natural Language Processing<br>
• Computer Vision<br>
• Generative AI<br>
• AI applications in various fields<br>
• AI ethics and considerations<br>
• The future of AI<br><br>
Try asking about any of these topics, or click one of the quick questions below for more information!`;

// Conversation state
let conversationHistory = [];

// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const quickQuestionButtons = document.querySelectorAll('.quick-question');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    sendButton.addEventListener('click', sendMessage);

    quickQuestionButtons.forEach(button => {
        button.addEventListener('click', () => {
            userInput.value = button.textContent;
            sendMessage();
        });
    });
});

// Send message function
function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Add user message
    addMessage(message, 'user');
    
    // Clear input
    userInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Process and respond after delay
    setTimeout(() => {
        removeTypingIndicator();
        const response = processMessage(message);
        addMessage(response, 'bot');
    }, 1000 + Math.random() * 1000);
}

// Add message to chat
function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    if (sender === 'bot') {
        messageDiv.innerHTML = `
            <div class="message-header">
                <div class="bot-avatar">🤖</div>
                AI Knowledge Bot
            </div>
            <div class="message-content">${content}</div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content">${escapeHtml(content)}</div>
        `;
    }

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Add to conversation history
    conversationHistory.push({
        role: sender,
        content: content,
        timestamp: new Date().toISOString()
    });
}

// Process message and generate response
function processMessage(message) {
    const lowerMessage = message.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    // Search through knowledge base
    for (const [key, data] of Object.entries(aiKnowledgeBase)) {
        let score = 0;
        
        // Check keyword matches
        data.keywords.forEach(keyword => {
            if (lowerMessage.includes(keyword)) {
                score += 1;
            }
        });

        // Bonus for exact key match
        if (lowerMessage.includes(key)) {
            score += 2;
        }

        if (score > highestScore) {
            highestScore = score;
            bestMatch = data;
        }
    }

    // Return best match or default response
    if (bestMatch && highestScore > 0) {
        return bestMatch.response;
    }

    // Check for greetings
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];
    if (greetings.some(greeting => lowerMessage.includes(greeting))) {
        return `<strong>Hello! 👋</strong><br><br>
        I'm your AI Knowledge Assistant! I'm here to help you learn about Artificial Intelligence, Machine Learning, Neural Networks, and much more.<br><br>
        What would you like to know about AI? Feel free to ask me any question or click on one of the quick questions below to get started!`;
    }

    // Check for thanks
    const thanks = ['thank', 'thanks', 'appreciate'];
    if (thanks.some(thank => lowerMessage.includes(thank))) {
        return `<strong>You're welcome! 😊</strong><br><br>
        I'm glad I could help! Feel free to ask more questions about AI anytime. There's always more to learn about this fascinating field!<br><br>
        What else would you like to know?`;
    }

    return defaultResponse;
}

// Show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message-header">
            <div class="bot-avatar">🤖</div>
            AI Knowledge Bot
        </div>
        <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}